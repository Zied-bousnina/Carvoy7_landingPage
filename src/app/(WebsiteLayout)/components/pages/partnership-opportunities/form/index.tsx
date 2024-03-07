"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import RadioGroup from "@mui/material/RadioGroup";

import PageContainer from "@/app/(WebsiteLayout)/components/container/PageContainer";

import CustomTextField from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomTextField";
import CustomSelect from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomSelect";

import CustomFormLabel from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomFormLabel";
import CustomCheckbox from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomCheckbox";
import ParentCard from "@/app/(WebsiteLayout)/components/shared/ParentCard";
import { Typography } from "@mui/material";



export default function PartnershipOpportunitiesForm() {
  const [age, setAge] = React.useState("1");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Box
      overflow="hidden"
      borderRadius="0"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
      pt={12}
      px={{ lg: 8, xs: 0 }}
    >
                 <Typography
            variant="h2"
            fontWeight={700}
            textAlign="center"
            mb={8}
            sx={{
              fontSize: {
                lg: "36px",
                xs: "25px",
              },
              lineHeight: {
                lg: "43px",
                xs: "30px",
              },
            }}
          >
            Submit your partnership request
          </Typography>
      <PageContainer>
        <ParentCard title="Submit your partnership request" >
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel htmlFor="name">Name</CustomFormLabel>
                <CustomTextField
                  id="name"
                  placeholder="Enter name"
                  variant="outlined"
                  fullWidth
                />
                <CustomFormLabel htmlFor="name">Company name</CustomFormLabel>
                <CustomTextField
                  id="name"
                  placeholder="Enter company name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              {/* ----------------------------------- */}
              {/* column 2 */}
              {/* ----------------------------------- */}
              <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel htmlFor="name">Email</CustomFormLabel>
                <CustomTextField
                  id="name"
                  placeholder="Enter email"
                  variant="outlined"
                  fullWidth
                  required
                />
                <CustomFormLabel htmlFor="demo-simple-select">
                  Company website
                </CustomFormLabel>
                <CustomTextField
                  id="name"
                  placeholder="Enter company website"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              {/* ----------------------------------- */}
              {/* column 3 */}
              {/* ----------------------------------- */}
              <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel htmlFor="name">Phone number</CustomFormLabel>
                <CustomTextField
                  id="name"
                  placeholder="Enter phone number"
                  variant="outlined"
                  fullWidth
                  required
                />
                <CustomFormLabel htmlFor="demo-simple-select">
                  Job title
                </CustomFormLabel>
                <CustomTextField
                  id="name"
                  placeholder="Enter job title"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              {/* ----------------------------------- */}
              {/* column 4 */}
              {/* ----------------------------------- */}
              <Grid item xs={12} sm={12} lg={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="demo-simple-select">
                      Country
                    </CustomFormLabel>
                    <CustomSelect
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                      fullWidth
                    >
                      <MenuItem value={1}>One</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                    </CustomSelect>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="demo-simple-select">
                      City
                    </CustomFormLabel>
                    <CustomTextField
                      id="name"
                      placeholder="Enter job title"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              {/* ----------------------------------- */}
              {/* column 5 */}
              {/* ----------------------------------- */}
              <Grid item xs={12} sm={12} lg={12}>
                <CustomFormLabel>Company presentation</CustomFormLabel>
                <CustomTextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              {/* ----------------------------------- */}
              {/* column 6 */}
              {/* ----------------------------------- */}
              <Grid item xs={12} sm={12} lg={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="demo-simple-select">
                      Type of partnership
                    </CustomFormLabel>
                    <CustomSelect
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                      fullWidth
                    >
                      <MenuItem value={1}>One</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                    </CustomSelect>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="demo-simple-select">
                      Target markets
                    </CustomFormLabel>
                    <CustomTextField
                      id="name"
                      placeholder="Enter job title"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* ----------------------------------- */}
              {/* column 7 */}
              {/* ----------------------------------- */}
              <Grid item xs={12} sm={12} lg={12}>
                <CustomFormLabel>Distribution strategy</CustomFormLabel>
                <CustomTextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              {/* ----------------------------------- */}
              {/* column 8 */}
              {/* ----------------------------------- */}
              <Grid item xs={12} sm={12} lg={12}>
                <CustomFormLabel>
                  Projects for which you plan to use the solution
                </CustomFormLabel>
                <CustomTextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              {/* ----------------------------------- */}
              {/* column 9 */}
              {/* ----------------------------------- */}
              <Grid item xs={12} sm={12} lg={12}>
                <CustomFormLabel>GDPR Agreement</CustomFormLabel>
                <RadioGroup
                  aria-label="gender"
                  defaultValue="radio1"
                  name="radio-buttons-group"
                >
                  <Grid item xs={12} sm={4} lg={4}>
                    <FormControlLabel
                      control={<CustomCheckbox defaultChecked />}
                      label="I consent to XGENBOX storing my submitted information so they can respond to my inquiry."
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} lg={4}>
                    <FormControlLabel
                      control={<CustomCheckbox />}
                      label="Enter textSubscribe to our newsletter ?"
                    />
                  </Grid>
                </RadioGroup>
              </Grid>
            </Grid>
            <Typography fontSize={15} mt={1}>
              By submitting your email address, you authorize XGENBOX to store
              your information to contact you about our solution.
            </Typography>
            <Button sx={{
                borderRadius: "8px",
                marginTop:"10px",
                padding: "8px 30px",
            }}
             color="primary">
              Submit Request
            </Button>
          </>
        </ParentCard>
      </PageContainer>
    </Box>
  );
}
