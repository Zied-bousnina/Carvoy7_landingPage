import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CustomTextField from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomFormLabel";
import { registerType } from "@/app/(WebsiteLayout)/types/auth/auth";
import AuthSocialButtons from "./AuthSocialButtons";
import CustomSelect from "../theme-elements/CustomSelect";
import { CircularProgress, Grid, MenuItem } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { useToast } from "@/app/hooks/useToast";
import { useRouter } from "next/navigation";
import { AuthService } from "../../../../../../_services/auth.service";
import { EnterpriseService } from "../../../../../../_services/enterprise.service";

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
    .required("Last name is Required"),
  phone: yup.string().required("Phone is Required"),
  companyName: yup.string().required("Company Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const AuthRegisterEnterprise = ({ title, subtitle, subtext }: registerType) => {
  const [accountTypeSelectValue, setAccountTypeSelectValue] = useState(
    "organization or association"
  );
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const handleAccountTypeSelectChange = (e: any): void => {
    setAccountTypeSelectValue(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      companyName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      AuthService.registerEnterprise({
        ...values,
        role: "ENTREPRISE",
      })
        .then((res) => {
          if (res.success) {
            EnterpriseService.store({
              userId: res?.user?._id,
              firstName: values.firstName,
              lastName: values.lastName,
              typeCompany: accountTypeSelectValue,
              companyName: values.companyName,
              phone: values.phone,
            })
              .then(() => {
                toast("success", "you have successfully created an account.");
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
            phone: "",
            companyName: "",
            email: "",
            password: "",
          });
          setAccountTypeSelectValue("organization or association");
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
          <Grid container spacing={3} mb={3}>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormLabel htmlFor="lastName">Last Name</CustomFormLabel>
              <CustomTextField
                id="lastName"
                variant="outlined"
                fullWidth
                placeholder="Enter last name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormLabel htmlFor="accountType">
                Account Type
              </CustomFormLabel>
              <CustomSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                defaultValue={accountTypeSelectValue}
                onChange={handleAccountTypeSelectChange}
              >
                <MenuItem value="organization or association">
                  Organization or association
                </MenuItem>
                <MenuItem value="company">Company</MenuItem>
                <MenuItem value="municipality">Municipality</MenuItem>
                <MenuItem value="event organizer">Event organizer</MenuItem>
                <MenuItem value="advertizing agency">
                  Advertizing agency
                </MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </CustomSelect>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormLabel htmlFor="phone">Company name</CustomFormLabel>
              <CustomTextField
                id="companyName"
                variant="outlined"
                fullWidth
                placeholder="Enter company name"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                error={
                  formik.touched.companyName &&
                  Boolean(formik.errors.companyName)
                }
                helperText={
                  formik.touched.companyName && formik.errors.companyName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomFormLabel htmlFor="phone">Phone</CustomFormLabel>
              <CustomTextField
                id="phone"
                variant="outlined"
                fullWidth
                placeholder="Enter phone number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12}>
              <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
              <CustomTextField
                type="password"
                id="password"
                variant="outlined"
                fullWidth
                placeholder="Enter password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>
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

export default AuthRegisterEnterprise;
