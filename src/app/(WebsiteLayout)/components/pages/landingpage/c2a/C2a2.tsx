import React from "react";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import c2aImg from "public/images/pages/landingpage/background/c2a.png";
import Image from "next/image";
import { AppState } from "@/store/store";
import { useSelector } from "@/store/hooks";

const StyledButton = styled(Button)(() => ({
  padding: "10px 35px",
  fontSize: "16px",
  borderRadius: "30px",
}));

const C2a2 = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        borderRadius: 0,
        backgroundColor: (theme) => theme.palette.background.paper,
        paddingTop: { lg: "80px" },
      }}
      pt={4}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor:
              customizer.activeMode == "dark"
                ? "background.default"
                : (theme) => theme.palette.text.primary,
          }}
          p={4}
          position="relative"
        >
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} sm={12} lg={6}>
              <Typography
                variant="h2"
                color="background.paper"
                fontWeight={600}
                sx={{
                  color:
                    customizer.activeMode == "dark"
                      ? (theme) => theme.palette.text.primary
                      : (theme) => theme.palette.background.paper,
                  fontSize: {
                    xs: "30px",
                    lg: "36px",
                  },
                  lineHeight: {
                    xs: "40px",
                    lg: "56px",
                  },
                }}
              >
                Vous avez des questions sur Carvoy7 ?
              </Typography>

              <Typography
                variant="subtitle1"
                mt={1}
                mb="35px"
                fontSize="16px"
                display="flex"
                gap={1}
                alignItems="center"
                sx={{
                  color:
                    customizer.activeMode == "dark"
                      ? (theme) => theme.palette.text.primary
                      : (theme) => theme.palette.background.paper,
                }}
              >
                <Avatar src="/images/landingpage/icon-certificate.svg" />
                Contactez-nous dès aujourd'hui pour découvrir comment notre solution simplifie vos besoins de convoyage automobile.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={3} mt={3}>
                <StyledButton
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Nous Contacter
                </StyledButton>
              </Stack>
            </Grid>
            {lgUp ? (
              <Grid item xs={12} lg={5}>
                <Box
                  sx={{
                    position: {
                      lg: "absolute",
                    },
                    top: "-70px",
                    right: "-20px",
                  }}
                >
                  <Image src={c2aImg} alt="Carvo7" />
                </Box>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default C2a2;
