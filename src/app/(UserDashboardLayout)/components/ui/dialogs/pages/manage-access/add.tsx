import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import PageLoader from "@/app/component/ui/loaders/pageLoader";
import { useToast } from "@/app/hooks/useToast";
import CustomFormLabel from "@/app/(UserDashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/(UserDashboardLayout)/components/forms/theme-elements/CustomTextField";
import * as yup from "yup";
import { useFormik } from "formik";
import { UserService } from "@services/user.service";

const validationSchema = yup.object({
  code: yup
    .number()
    .test(
      "len",
      "Code must be exactly 5 digits",
      (val) => val != null && val.toString().length === 5
    )
    .required("Code Is Required"),
});

const AddManageAccessCodeDialog = ({refresh}) => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const toast = useToast();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      code: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      UserService.addAccessCode({ code: values.code })
        .then(() => {
          toast("success", "you have successfully added an access code");
          handleClose()
          refresh()
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
          formik.resetForm();
        });
    },
  });

  return (
    <>
      {isLoading && <PageLoader />}
      <Button
        color="primary"
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add access code
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={formik.handleSubmit}>
          <Image
            src="/images/backgrounds/top-info-shape.png"
            alt="img"
            className="top-img"
            width={59}
            height={81}
          />
          <div className="pt-4 pb-2">
            <DialogTitle id="alert-dialog-title">Access Code</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div className="w-[450px]">
                  <CustomFormLabel>Access code ( 5 digit )</CustomFormLabel>
                  <CustomTextField
                    name="code"
                    placeholder="Enter access code"
                    type="number"
                    sx={{ width: "100%" }}
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    error={formik.touched.code && Boolean(formik.errors.code)}
                    helperText={formik.touched.code && formik.errors.code}
                  />
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" type="submit">
                Add access code
              </Button>
            </DialogActions>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default AddManageAccessCodeDialog;
