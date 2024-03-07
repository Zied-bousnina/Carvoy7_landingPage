"use client";

import PageContainer from "@/app/(EnterpriseDashboardLayout)/components/container/PageContainer";
import CustomFormLabel from "@/app/(EnterpriseDashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/(EnterpriseDashboardLayout)/components/forms/theme-elements/CustomTextField";
import DashboardCard from "@/app/(EnterpriseDashboardLayout)/components/shared/DashboardCard";
import ParentCard from "@/app/(EnterpriseDashboardLayout)/components/shared/ParentCard";
import { Button, Grid } from "@mui/material";

const AppointmentRequestEnterpriseDashboardPage = () => {
  return (
    <>
      <PageContainer>
        <DashboardCard>
          <PageContainer>
            <ParentCard title="Appointment Request">
              <>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="name">First Name</CustomFormLabel>
                    <CustomTextField
                      id="firstName"
                      placeholder="Enter first name"
                      variant="outlined"
                      fullWidth
                    />
                    <CustomFormLabel htmlFor="name">Email</CustomFormLabel>
                    <CustomTextField
                      id="name"
                      placeholder="Enter email"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  {/* ----------------------------------- */}
                  {/* column 2 */}
                  {/* ----------------------------------- */}
                  <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="name">Last name</CustomFormLabel>
                    <CustomTextField
                      id="lastName"
                      placeholder="Enter last name"
                      variant="outlined"
                      fullWidth
                    />

                    <CustomFormLabel htmlFor="demo-simple-select">
                      Phone number
                    </CustomFormLabel>
                    <CustomTextField
                      id="phone"
                      placeholder="Enter phone number"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="date">
                      Preferred Date
                    </CustomFormLabel>
                    <CustomTextField
                      id="date"
                      placeholder="Enter preferred date"
                      type="date"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="reason">
                      Reason for Appointment
                    </CustomFormLabel>
                    <CustomTextField
                      id="reason"
                      placeholder="Enter Reason for Appointment"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>

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
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default AppointmentRequestEnterpriseDashboardPage;
