"use client";

import React, { useState } from "react";
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
import { FormControl, Typography } from "@mui/material";
import CustomRadio from "@/app/(WebsiteLayout)/components/forms/theme-elements/CustomRadio";
import CustomFileInput from "../../../forms/theme-elements/CustomFileInput";

export default function QuoteRequestForm({ dashboard = false }) {
  const [age, setAge] = React.useState("1");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  const [formState, setFormState] = useState({
    powerSupplyRadioBtn: null,
    connectivityRadioBtn: null,
  });

  const inputChangeHandler = (name: string, value: any) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box
      overflow="hidden"
      borderRadius="0"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
      pt={dashboard ? 0 : 12}
      pb={dashboard ?  12: 0}
      px={{ lg: 8, xs: 0 }}
    >
      {!dashboard && (
        <>
          <Typography
            variant="h2"
            fontWeight={700}
            textAlign="center"
            mb={1}
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
            Quote request
          </Typography>
          <Typography
            textAlign="center"
            mb={1}
            sx={{
              fontSize: {
                lg: "16px",
                xs: "13px",
              },
            }}
          >
            This form allows our customers to request a personalized quote for
            the products and services offered by XGENBOX. Please provide as much
            information as possible, including your specific requirements,
            quantities needed and your company details, so that our sales team
            can provide you with an accurate quote.
          </Typography>
          <Typography
            textAlign="center"
            mb={8}
            sx={{
              fontSize: {
                lg: "16px",
                xs: "13px",
              },
            }}
          >
            Once you have completed the form, click submit to send your request.
            We will answer you as soon as possible with a proposal adapted to
            your needs.
          </Typography>
        </>
      )}
      <PageContainer>
        <ParentCard title={dashboard ? "" : "Quote request"}>
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
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="demo-simple-select">
                      Size
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
                      Quantity
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
              {/* column 6 */}
              {/* ----------------------------------- */}
              <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h3" fontSize={25}>
                  Functional features
                </Typography>
                <Grid container>
                  <Grid lg={3} xs={12}>
                    <RadioGroup
                      aria-label="gender"
                      defaultValue="radio1"
                      name="radio-buttons-group"
                    >
                      <CustomFormLabel>Power supply</CustomFormLabel>
                      <Grid container>
                        <Grid item xs={12} sm={4} lg={4}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              value="radio1"
                              control={
                                <CustomRadio
                                  checked={
                                    formState.powerSupplyRadioBtn === "radio1"
                                  }
                                  onChange={(e) =>
                                    inputChangeHandler(
                                      "powerSupplyRadioBtn",
                                      e.target.value
                                    )
                                  }
                                />
                              }
                              label="Solar"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={12}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              value="radio2"
                              control={
                                <CustomRadio
                                  checked={
                                    formState.powerSupplyRadioBtn === "radio2"
                                  }
                                  onChange={(e) =>
                                    inputChangeHandler(
                                      "powerSupplyRadioBtn",
                                      e.target.value
                                    )
                                  }
                                />
                              }
                              label="Electric"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              value="radio3"
                              control={
                                <CustomRadio
                                  checked={
                                    formState.powerSupplyRadioBtn === "radio3"
                                  }
                                  onChange={(e) =>
                                    inputChangeHandler(
                                      "powerSupplyRadioBtn",
                                      e.target.value
                                    )
                                  }
                                />
                              }
                              label="Hybrid"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </Grid>
                  <Grid lg={3} xs={12}>
                    <RadioGroup
                      aria-label="gender"
                      defaultValue="radio1"
                      name="radio-buttons-group"
                    >
                      <CustomFormLabel>Connectivity</CustomFormLabel>
                      <Grid container>
                        <Grid item xs={12} sm={4} lg={4}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              value="radio1"
                              control={
                                <CustomRadio
                                  checked={
                                    formState.connectivityRadioBtn === "radio1"
                                  }
                                  onChange={(e) =>
                                    inputChangeHandler(
                                      "connectivityRadioBtn",
                                      e.target.value
                                    )
                                  }
                                />
                              }
                              label="4G"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={12}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              value="radio2"
                              control={
                                <CustomRadio
                                  checked={
                                    formState.connectivityRadioBtn === "radio2"
                                  }
                                  onChange={(e) =>
                                    inputChangeHandler(
                                      "connectivityRadioBtn",
                                      e.target.value
                                    )
                                  }
                                />
                              }
                              label="WI-FI"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              value="radio3"
                              control={
                                <CustomRadio
                                  checked={
                                    formState.connectivityRadioBtn === "radio3"
                                  }
                                  onChange={(e) =>
                                    inputChangeHandler(
                                      "connectivityRadioBtn",
                                      e.target.value
                                    )
                                  }
                                />
                              }
                              label="Bluetooth"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </Grid>
                  <Grid lg={3} xs={12}>
                    <RadioGroup
                      aria-label="gender"
                      defaultValue="radio1"
                      name="radio-buttons-group"
                    >
                      <CustomFormLabel>Disinfection</CustomFormLabel>
                      <Grid container>
                        <Grid item xs={12} sm={4} lg={4}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              control={<CustomCheckbox />}
                              label="Automatic spray"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={12}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              control={<CustomCheckbox />}
                              label="UV sterilization"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </Grid>
                  <Grid lg={3} xs={12}>
                    <RadioGroup
                      aria-label="gender"
                      defaultValue="radio1"
                      name="radio-buttons-group"
                    >
                      <CustomFormLabel>Sensors</CustomFormLabel>
                      <Grid container>
                        <Grid item xs={12} sm={4} lg={4}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              control={<CustomCheckbox />}
                              label="Shock"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={12}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              control={<CustomCheckbox />}
                              label="Position"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={12}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              control={<CustomCheckbox />}
                              label="Level"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={12}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              control={<CustomCheckbox />}
                              label="Smoke"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={12}>
                          <FormControl component="fieldset">
                            <FormControlLabel
                              control={<CustomCheckbox />}
                              label="Humidity"
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Grid>
              {/* ----------------------------------- */}
              {/* column 7 */}
              {/* ----------------------------------- */}
              <Grid item xs={12} sm={12} lg={12}>
                <Typography variant="h3" fontSize={25}>
                  Optional features
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="demo-simple-select">
                      Graphic wraps
                    </CustomFormLabel>
                    <CustomFileInput />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="demo-simple-select">
                      Advertisement signage
                    </CustomFormLabel>
                    <CustomFileInput />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={4}>
                    <Grid container>
                      <Grid item xs={12} sm={4} lg={4}>
                        <FormControl component="fieldset">
                          <FormControlLabel
                            control={<CustomCheckbox />}
                            label="WI-FI router"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={4} lg={12}>
                        <FormControl component="fieldset">
                          <FormControlLabel
                            control={<CustomCheckbox />}
                            label="Mounting bracket"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={4} lg={12}>
                        <FormControl component="fieldset">
                          <FormControlLabel
                            control={<CustomCheckbox />}
                            label="Ashtray"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* ----------------------------------- */}
              {/* column 8 */}
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
                      control={<CustomCheckbox />}
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
            <Button
              sx={{
                borderRadius: "8px",
                marginTop: "10px",
                padding: "8px 30px",
              }}
              color="primary"
            >
              Submit Request
            </Button>
          </>
        </ParentCard>
      </PageContainer>
    </Box>
  );
}
