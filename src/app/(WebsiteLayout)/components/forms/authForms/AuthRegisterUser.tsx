import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CustomTextField from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomFormLabel";
import { Stack } from "@mui/system";
import { registerType } from "@/app/(WebsiteLayout)/types/auth/auth";
import AuthSocialButtons from "./AuthSocialButtons";
import { useFormik } from "formik";
import * as yup from "yup";
import { AuthService } from "../../../../../../_services/auth.service";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { useToast } from "@/app/hooks/useToast";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is Required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const AuthRegisterUser = ({ title, subtitle, subtext }: registerType) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      AuthService.registerUser({ ...values, role: "USER" })
        .then(() => {
          toast("success", "you have successfully created an account.");

          router.push("/login");
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
            name: "",
            email: "",
            password: "",
          });
        });
    },
  });

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <AuthSocialButtons title="Sign up with" />

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
            or sign up with
          </Typography>
        </Divider>
      </Box>

      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Stack mb={3}>
            <CustomFormLabel htmlFor="name">Name</CustomFormLabel>
            <CustomTextField
              id="name"
              variant="outlined"
              fullWidth
              name="name"
              placeholder="Enter name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
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
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <CustomTextField
              type="password"
              id="password"
              variant="outlined"
              fullWidth
              name="password"
              placeholder="Enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Stack>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress /> : "Sign Up"}
          </Button>
        </form>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthRegisterUser;
