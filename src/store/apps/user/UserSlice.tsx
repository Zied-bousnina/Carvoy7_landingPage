import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  // Define your user type here
}

interface StateType {
  users: User[];
  userDetails: User | null;
  currentAccessList: string[];
  someAccessListUsers: User[];
  isLoading: boolean;
  isSuccess: boolean;
  errors: string[];
}

const initialState: StateType = {
  users: [],
  userDetails: null,
  currentAccessList: [],
  someAccessListUsers: [],
  isLoading: false,
  isSuccess: false,
  errors: [],
};

// Async thunk to get all users
export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  const response = await axios.get<User[]>(`${process.env.REACT_APP_API_URL}/api/users/getUsers`);
  return response.data;
});

// Async thunk to get user details
export const getUserDetails = createAsyncThunk("user/getUserDetails", async (id: string) => {
  const response = await axios.get<User>(`${process.env.REACT_APP_API_URL}/api/users/${id}`);
  return response.data;
});

// Async thunk to block a user
export const blockUser = createAsyncThunk("user/blockUser", async (id: string) => {
  const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/users/block/${id}`);
  return response.data;
});

// Async thunk to unblock a user
export const unblockUser = createAsyncThunk("user/unblockUser", async (id: string) => {
  const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/users/deblock/${id}`);
  return response.data;
});

// Async thunk to get current access list
export const getCurrentAccessList = createAsyncThunk("user/getCurrentAccessList", async () => {
  const response = await axios.get<{ accessList: string[] }>(
    `${process.env.REACT_APP_API_URL}/api/users/access/getCurrentAccessList`
  );
  return response.data.accessList;
});

// Async thunk to get users with the same access code
export const getSomeAccessListUsers = createAsyncThunk("user/getSomeAccessListUsers", async () => {
  const response = await axios.get<User[]>(
    `${process.env.REACT_APP_API_URL}/api/users/access/getAllUserWhoHasASameAccessBin`
  );
  return response.data;
});

// Create user slice
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload;
      })
      .addCase(blockUser.fulfilled, (state) => {
        state.isSuccess = true;
      })
      .addCase(unblockUser.fulfilled, (state) => {
        state.isSuccess = true;
      })
      .addCase(getCurrentAccessList.fulfilled, (state, action) => {
        state.currentAccessList = action.payload;
        state.isSuccess = true;
      })
      .addCase(getSomeAccessListUsers.fulfilled, (state, action) => {
        state.someAccessListUsers = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.errors = action.error.message ? [action.error.message] : action.error;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.isSuccess = false;
          state.errors = [];
        }
      );
  },
});

export default UserSlice.reducer;
