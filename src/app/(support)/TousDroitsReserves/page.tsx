"use client";
import React from "react";

import { Box, Container, Typography,Grid,Link } from "@mui/material";
import Logo from "@/app/(WebsiteLayout)/layout/shared/logo/Logo"

const TousDroitsReserves = () => {
  return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "background.default",

      }}
    >
        <Box
        sx={{
          py: 2,
          px: 3,
          backgroundColor: "grey.100",
          boxShadow: 1,

        }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Link href="/">
              <Logo />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Tous droits réservés
        </Typography>
        <Typography variant="body1" paragraph>
          Ce site web et tout son contenu, y compris mais sans s'y limiter, les
          textes, graphiques, logos, icônes, images, clips audio et vidéo, ainsi
          que leur compilation et leur organisation, sont la propriété de
          CarVoy7 ou de ses concédants de licence.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Droits d'auteur
        </Typography>
        <Typography variant="body2" paragraph>
          Tous les contenus publiés sur cette plateforme sont protégés par les
          lois relatives aux droits d'auteur et ne peuvent être utilisés, copiés
          ou distribués sans l'autorisation écrite préalable de CarVoy7.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Usage Personnel
        </Typography>
        <Typography variant="body2" paragraph>
          Vous êtes autorisé à consulter ce site web pour votre usage personnel
          uniquement. Toute reproduction, modification, distribution ou
          réutilisation à des fins commerciales est strictement interdite sans
          notre autorisation expresse.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Responsabilité
        </Typography>
        <Typography variant="body2" paragraph>
          CarVoy7 ne saurait être tenu responsable des dommages indirects,
          accidentels ou consécutifs découlant de l'utilisation ou de
          l'incapacité d'utiliser ce site web.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body2">
          Si vous avez des questions concernant cette politique, veuillez
          contacter :
        </Typography>
        <Typography variant="body2" mt={2}>
          <a href="mailto:contact@carvoy7.com" style={{ textDecoration: "none" }}>
            contact@carvoy7.com
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default TousDroitsReserves;
