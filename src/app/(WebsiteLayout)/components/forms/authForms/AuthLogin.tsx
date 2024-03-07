import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { loginType } from "@/app/(WebsiteLayout)/types/auth/auth";
import CustomCheckbox from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomCheckbox";
import CustomTextField from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomFormLabel";
import AuthSocialButtons from "./AuthSocialButtons";
import * as yup from "yup";
import { useFormik } from "formik";
import { AuthService } from "@services/auth.service";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "@/store/hooks";
import { authActions } from "@/store/auth/authSlice";
import { useToast } from "@/app/hooks/useToast";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is Required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  //* auth global state
  const dispatch = useDispatch();
  //* component state and methods
  const [isLoading, setIsLoading] = useState(false);
//*toast hook
const toast=useToast()
//*router
const router=useRouter()

//*form handling
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      AuthService.login(values)
        .then((res) => {
          if (res.status) {
            dispatch(authActions.login({token:res.token,router:router}));
            toast("success","logged in successfully")
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
          formik.resetForm();
          formik.setSubmitting(false);
          formik.setErrors({});
          formik.setTouched({});
          formik.setValues({
            email: "",
            password: "",
          });
        });
    },
  });
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <AuthSocialButtons title="Sign in with" />
      <Box mt={3}>
        <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            or sign in with
          </Typography>
        </Divider>
      </Box>

      <form onSubmit={formik.handleSubmit}>
        <Stack>
          <Box>
            <CustomFormLabel htmlFor="email">email</CustomFormLabel>
            <CustomTextField
              id="email"
              variant="outlined"
              fullWidth
              name="email"
              placeholder="Enter email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box>
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <CustomTextField
              id="password"
              type="password"
              variant="outlined"
              fullWidth
              name="password"
              placeholder="Enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
          <Stack
            justifyContent="space-between"
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            my={2}
          >
            <FormGroup>
              <FormControlLabel
                control={<CustomCheckbox defaultChecked />}
                label="Remeber this Device"
              />
            </FormGroup>
            <Typography
              component={Link}
              href="/auth/auth1/forgot-password"
              fontWeight="500"
              sx={{
                textDecoration: "none",
                color: "primary.main",
              }}
            >
              Forgot Password ?
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress /> : "Sign In"}
          </Button>
        </Box>
      </form>
      {subtitle}
    </>
  );
};

export default AuthLogin;
