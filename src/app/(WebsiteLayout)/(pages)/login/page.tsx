"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// components
import PageContainer from "@/app/(WebsiteLayout)/components/container/PageContainer";
import AuthLogin from "../../components/forms/authForms/AuthLogin";
import Logo from "@/app/(WebsiteLayout)/layout/shared/logo/Logo";
import RegisterTypeDialog from "../../components/ui/dialog/auth/registerType";

export default function LoginPage() {
  return (
    <PageContainer title="Login Page" description="this is Sample page">
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={5}
            xl={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                position: "relative",
                "&:before": {
                  content: "''",
                  position: "absolute",
                  left: "-125px",
                  bottom: "-100px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "100%",
                  backgroundColor: "error.main",
                },
                "&:after": {
                  content: "''",
                  position: "absolute",
                  top: "-65px",
                  right: "-104px",
                  width: "200px",
                  height: "207px",
                  backgroundRepeat: "no-repeat",
                  background: "url('/images/backgrounds/shap-login.png')",
                  backgroundSize: "contain",
                },
              }}
            >
              <Card
                elevation={9}
                sx={{
                  p: 4,
                  zIndex: 9,
                  position: "relative",
                  width: { lg: "550px", xs: "100%" },
                  maxWidth: "450px",
                }}
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Logo />
                </Box>
                <AuthLogin
                  subtitle={
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      mt={3}
                    >
                      <Typography
                        color="textSecondary"
                        variant="h6"
                        fontWeight="500"
                      >
                        New to XGENBOX?
                      </Typography>
               

                     <RegisterTypeDialog isText={true}/>
           
                    </Stack>
                  }
                />
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

LoginPage.layout = "Blank";