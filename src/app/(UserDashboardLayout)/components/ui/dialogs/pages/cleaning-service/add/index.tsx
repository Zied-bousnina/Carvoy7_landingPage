//react
import React, { useEffect, useState } from "react";
//mui
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {
  Box,
  CircularProgress,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";

//packages
import * as yup from "yup";
import { useFormik } from "formik";

//components
import AddIcon from "@mui/icons-material/Add";
import CustomFormLabel from "@/app/(UserDashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/(UserDashboardLayout)/components/forms/theme-elements/CustomTextField";
import CustomSelect from "@/app/(UserDashboardLayout)/components/forms/theme-elements/CustomSelect";
//services
import { GovernoratesService } from "@services/governorates.service";
import CustomFileInput from "@/app/(UserDashboardLayout)/components/forms/theme-elements/CustomFileInput";
import Image from "next/image";
import { CleaningServiceService } from "@services/cleaningService.service";
import PageLoader from "@/app/component/ui/loaders/pageLoader";
import { useToast } from "@/app/hooks/useToast";

//*types
interface singleGovernorateType {
  name: string;
  municipalities: string[];
}
interface governorateDataType {
  governorates: singleGovernorateType[];
  municipalities: any[];
}
//*yup validation schema
const validationSchema = yup.object({
  phone: yup.string().required("Phone is Required"),
  description: yup.string().required("description is required"),
});

const AddCleaningServiceDialog = ({refresh}) => {
  //*component states
  const [open, setOpen] = useState(false);
  const [governoratesData, setGovernoratesData] =
    useState<governorateDataType | null>(null);
  const [selectedGovernorateIndex, setSelectedGovernorateIndex] =
    useState<number>(-1);
  const [selectedMunicipalIndex, setSelectedMunicipalIndex] =
    useState<number>(-1);
  const [selectedFile, setSelectedFile] = useState(null);

  const [governoratesIsLoading, setGovernoratesIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //*toast custom hook
  const toast = useToast();
  //* dialog open and clos functions
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //*fetch governorates data for select elements
  const getGovernorates = () => {
    setGovernoratesIsLoading(true);
    GovernoratesService.getGovernorates()
      .then((res) => {
        setGovernoratesData(res[0]);
        setSelectedGovernorateIndex(0);
        setSelectedMunicipalIndex(0);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setGovernoratesIsLoading(false);
      });
  };

  useEffect(() => {
    getGovernorates();
  }, []);
  //*handle select onChange states
  const handleSelectGovernorateChange = (e) => {
    setSelectedGovernorateIndex(e.target.value);
  };
  const handleSelectMunicipalChange = (e) => {
    setSelectedMunicipalIndex(e.target.value);
  };
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  //*formik
  const formik = useFormik({
    initialValues: {
      phone: "",
      description: "",
      file: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      CleaningServiceService.store({
        tel: values.phone,
        description: values.description,
        governorat:
          governoratesData?.governorates[selectedGovernorateIndex].name,
        municipal:
          governoratesData?.governorates[selectedGovernorateIndex]
            ?.municipalities[selectedMunicipalIndex],
        ...(selectedFile !== null && { image: selectedFile }),
      })
        .then((_) => {
          refresh()
          toast(
            "success",
            "you have successfully created a new cleaning service"
          );
          handleClose();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
          formik.resetForm();
          setSelectedFile(null);
          setSelectedGovernorateIndex(0);
          setSelectedMunicipalIndex(0);
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
        Create cleaning service
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Image
          src="/images/backgrounds/top-info-shape.png"
          alt="img"
          className="top-img"
          width={59}
          height={81}
        />
        <DialogContent>
          <div className="mx-2 mt-6">
            <Typography variant="h3" textAlign="center" mb={1}>
              Create Cleaning service
            </Typography>
            <Typography fontSize={{ lg: 16, xs: 13 }} textAlign="center" mb={4}>
              If you have cleaned your garden, Home, etc. And you don&ldquo;t have a
              place to dispose of the waste, call us and we can assist you.
            </Typography>

            <Box>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3} mb={3}>
                  <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="accountType">
                      Governorates
                    </CustomFormLabel>
                    <CustomSelect
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      fullWidth
                      defaultValue={governoratesIsLoading ? -1 : 0}
                      onChange={handleSelectGovernorateChange}
                    >
                      {governoratesIsLoading ? (
                        <MenuItem value={-1}>
                          <CircularProgress size={20} />
                        </MenuItem>
                      ) : (
                        governoratesData?.governorates.map(
                          (item: singleGovernorateType, index: number) => {
                            return (
                              <MenuItem value={index} key={index}>{item.name}</MenuItem>
                            );
                          }
                        )
                      )}
                    </CustomSelect>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="accountType">
                      Municipal
                    </CustomFormLabel>
                    <CustomSelect
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      fullWidth
                      defaultValue={governoratesIsLoading ? -1 : 0}
                      onChange={handleSelectMunicipalChange}
                    >
                      {governoratesIsLoading && !governoratesData ? (
                        <MenuItem value={-1}>
                          <CircularProgress size={20} />
                        </MenuItem>
                      ) : (
                        governoratesData?.governorates[
                          selectedGovernorateIndex
                        ]?.municipalities.map((item: string, index: number) => {
                          return <MenuItem value={index} key={index}>{item}</MenuItem>;
                        })
                      )}
                    </CustomSelect>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="phone">Phone</CustomFormLabel>
                    <CustomTextField
                      id="phone"
                      variant="outlined"
                      fullWidth
                      placeholder="Enter phone"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="email">
                      Description
                    </CustomFormLabel>
                    <CustomTextField
                      id="description"
                      variant="outlined"
                      fullWidth
                      placeholder="Enter description"
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.description &&
                        Boolean(formik.errors.description)
                      }
                      helperText={
                        formik.touched.description && formik.errors.description
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomFormLabel htmlFor="file">
                      Upload photo
                    </CustomFormLabel>
                    <CustomFileInput
                      accept="image/*"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                    />
                  </Grid>
                </Grid>
                <div className="mb-6">
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                  >
                    Create Cleaning service
                  </Button>
                </div>
              </form>
            </Box>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddCleaningServiceDialog;
