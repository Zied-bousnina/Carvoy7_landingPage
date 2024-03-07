import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { IconChevronDown } from "@tabler/icons-react";
import AppLinks from "@/app/(WebsiteLayout)/layout/vertical/header/AppLinks";

import { ProductsAppsLink,MarketsAppsLink,CompanyAppsLink,ContactAppsLink } from "@/app/(WebsiteLayout)/constant/data";
const Navigations = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: "15px",
    color: theme.palette.text.secondary,
    fontWeight: 500,
  }));

  // pages

    //*products hover card and links state management and functions 
    const [openProducts, setOpenProducts] = useState(false);

  const handleOpenProducts = () => {
    setOpenProducts(true);
  };

  const handleCloseProducts = () => {
    setOpenProducts(false);
  };

    //*Markets hover card and links state management and functions 
  const [openMarkets, setOpenMarkets] = useState(false);

  const handleOpenMarkets = () => {
    setOpenMarkets(true);
  };

  const handleCloseMarkets = () => {
    setOpenMarkets(false);
  };
  
    //*company hover card and links state management and functions 
  const [openCompany, setOpenCompany] = useState(false);

  const handleOpenCompany = () => {
    setOpenCompany(true);
  };

  const handleCloseCompany = () => {
    setOpenCompany(false);
  };
    //*contact hover card and links state management and functions 
  const [openContact, setOpenContact] = useState(false);

  const handleOpenContact = () => {
    setOpenContact(true);
  };

  const handleCloseContact = () => {
    setOpenContact(false);
  };

  return (
    <>
      <Box>
        <StyledButton
          color="inherit"
          variant="text"
          onMouseEnter={handleOpenProducts}
          onMouseLeave={handleCloseProducts}
          sx={{
            color: openProducts
              ? "primary.main"
              : (theme) => theme.palette.text.secondary,
          }}
          endIcon={
            <IconChevronDown
              size="16"
              style={{ marginLeft: "-5px", marginTop: "2px" }}
            />
          }
        >
          Products
        </StyledButton>
        {openProducts && (
          <Paper
            onMouseEnter={handleOpenProducts}
            onMouseLeave={handleCloseProducts}
            sx={{
              position: "absolute",
              left: "0",
              right: "350px",
              top: "55px",
              width: ProductsAppsLink.length < 4 ? "350px" : "850px",
              margin: "0 auto",
            }}
          >
            <Grid container>
              <Grid item sm={11} display="flex">
                <Box p={4} pr={0} pb={0}>
                  <AppLinks dropDownLinks={ProductsAppsLink} />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Box>
      <Box>
        <StyledButton
          color="inherit"
          variant="text"
          onMouseEnter={handleOpenMarkets}
          onMouseLeave={handleCloseMarkets}
          sx={{
            color: openMarkets
              ? "primary.main"
              : (theme) => theme.palette.text.secondary,
          }}
          endIcon={
            <IconChevronDown
              size="16"
              style={{ marginLeft: "-5px", marginTop: "2px" }}
            />
          }
        >
          Markets
        </StyledButton>
        {openMarkets && (
          <Paper
            onMouseEnter={handleOpenMarkets}
            onMouseLeave={handleCloseMarkets}
            sx={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "55px",
              width: MarketsAppsLink.length < 4 ? "350px" : "650px",
              margin: "0 auto",
            }}
          >
            <Grid container>
              <Grid item sm={11} display="flex">
                <Box p={4} pr={0} pb={0}>
                  <AppLinks dropDownLinks={MarketsAppsLink} />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Box>
      <Box>
        <StyledButton
          color="inherit"
          variant="text"
          onMouseEnter={handleOpenCompany}
          onMouseLeave={handleCloseCompany}
          sx={{
            color: openCompany
              ? "primary.main"
              : (theme) => theme.palette.text.secondary,
          }}
          endIcon={
            <IconChevronDown
              size="16"
              style={{ marginLeft: "-5px", marginTop: "2px" }}
            />
          }
        >
          Company
        </StyledButton>
        {openCompany && (
          <Paper
            onMouseEnter={handleOpenCompany}
            onMouseLeave={handleCloseCompany}
            sx={{
              position: "absolute",
              left: "100px",
              right: "0",
              top: "55px",
              width: CompanyAppsLink.length < 4 ? "350px" : "650px",
              margin: "0 auto",
            }}
          >
            <Grid container>
              <Grid item sm={11} display="flex">
                <Box p={4} pr={0} pb={0}>
                  <AppLinks dropDownLinks={CompanyAppsLink} />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Box>
      <Box>
        <StyledButton
          color="inherit"
          variant="text"
          onMouseEnter={handleOpenContact}
          onMouseLeave={handleCloseContact}
          sx={{
            color: openContact
              ? "primary.main"
              : (theme) => theme.palette.text.secondary,
          }}
          endIcon={
            <IconChevronDown
              size="16"
              style={{ marginLeft: "-5px", marginTop: "2px" }}
            />
          }
        >
          Contact
        </StyledButton>
        {openContact && (
          <Paper
            onMouseEnter={handleOpenContact}
            onMouseLeave={handleCloseContact}
            sx={{
              position: "absolute",
              left: "400px",
              right: "0",
              top: "55px",
              width: ContactAppsLink.length < 4 ? "350px" : "650px",
              margin: "0 auto",
            }}
          >
            <Grid container>
              <Grid item sm={11} display="flex">
                <Box p={4} pr={0} pb={0}>
                  <AppLinks dropDownLinks={ContactAppsLink} />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Box>

    </>
  );
};

export default Navigations;


