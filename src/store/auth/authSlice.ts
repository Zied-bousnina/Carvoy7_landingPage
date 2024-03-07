import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
interface StateType {
  name: string;
  email: string;
  role: string;
  isLoggedIn: boolean;
  token: string;
}

interface decodedTokenType {
  name: string;
  email: string;
  exp: number;
  iat: number;
  id: string;
  isBlocked: boolean;
  role: string;
  verified: boolean;
}

const initialState: StateType = {
  name: "",
  email: "",
  role: "",
  isLoggedIn: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const decodedToken: decodedTokenType = jwtDecode(action.payload.token);
      if (decodedToken.verified && !decodedToken.isBlocked) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: action.payload.token,
          })
        );
        state.name = decodedToken.name;
        state.email = decodedToken.email;
        state.role = decodedToken.role;
        state.token = action.payload.token;
        state.isLoggedIn = true;

        switch (decodedToken.role) {
          case "ADMIN":
            action.payload.router.push("/admin/dashboard");
            break;
          case "USER":
            action.payload.router.push("/user/dashboard");
            break;
          case "COLLECTOR":
            action.payload.router.push("/collector/dashboard");
            break;
          case "ENTREPRISE":
            action.payload.router.push("/enterprise/dashboard");
            break;
          default:
            action.payload.router.push("/login");
            break;
        }
      }
    },
    logout(state,action) {
      localStorage.removeItem("user");
      state.name = "";
      state.email = "";
      state.role = "";
      state.token = "";
      state.isLoggedIn = false;
      action.payload.router.push("/login");

    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
