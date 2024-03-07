import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CustomTextField from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomFormLabel";
import { Stack } from "@mui/system";
import { registerType } from "@/app/(WebsiteLayout)/types/auth/auth";
import AuthSocialButtons from "./AuthSocialButtons";
import CustomSelect from "../theme-elements/CustomSelect";
import { CircularProgress, MenuItem } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { AuthService } from "../../../../../../_services/auth.service";
import { CollectorService } from "../../../../../../_services/collector.service";
import { useToast } from "@/app/hooks/useToast";
import { useRouter } from "next/navigation";


const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last Name is Required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const AuthRegisterCollector = ({ title, subtitle, subtext }: registerType) => {
  const [accountTypeSelectValue, setAccountTypeSelectValue] =
    useState("individual");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
const router=useRouter()

  const handleAccountTypeSelectChange = (e: any): void => {
    setAccountTypeSelectValue(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      setIsLoading(true);
      AuthService.registerCollector({
        ...values,
        role: "COLLECTOR",
      })
        .then((res) => {
          if (res.success) {
            CollectorService.store({
              userId: res?.user?._id,
              firstName: values.firstName,
              lastName: values.lastName,
              entityType: accountTypeSelectValue,
            })
              .then(() => {
                toast("success","you have successfully created an account.")
                router.push("/login");

              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
          formik.resetForm();
          formik.setSubmitting(false);
          formik.setErrors({});
          formik.setTouched({});
          formik.setValues({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          });
          setAccountTypeSelectValue("individual");
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
            <CustomFormLabel htmlFor="firstName">First Name</CustomFormLabel>
            <CustomTextField
              id="firstName"
              variant="outlined"
              fullWidth
              placeholder="Enter first name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <CustomFormLabel htmlFor="lastName">Last Name</CustomFormLabel>
            <CustomTextField
              id="lastName"
              variant="outlined"
              fullWidth
              placeholder="Enter last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <CustomFormLabel htmlFor="lastName">Account Type</CustomFormLabel>
            <CustomSelect
              fullWidth
              defaultValue={accountTypeSelectValue}
              onChange={handleAccountTypeSelectChange}
            >
              <MenuItem value="individual">Individual</MenuItem>
              <MenuItem value="company">Company</MenuItem>
            </CustomSelect>
            <CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
            <CustomTextField
              id="email"
              variant="outlined"
              fullWidth
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

export default AuthRegisterCollector;
