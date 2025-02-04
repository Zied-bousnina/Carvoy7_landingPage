"use client";

import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import Logo from "@/app/(WebsiteLayout)/layout/shared/logo/Logo"
const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      {/* Header */}
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

      {/* Main Content */}
      <Container
        component="main"
        maxWidth="md"
        sx={{ py: 8, flexGrow: 1 }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Politique de Confidentialité
        </Typography>
        <Typography variant="body1" paragraph>
          Bienvenue sur la politique de confidentialité de CarVoy7. Cette page
          décrit comment nous collectons, utilisons et protégeons vos
          informations personnelles. En utilisant notre plateforme, vous
          acceptez les pratiques décrites dans cette politique.
        </Typography>

        {/* Introduction */}
        <Box mb={6}>
          <Typography variant="h5" gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body2">
            CarVoy7 s'engage à protéger votre vie privée. Cette politique
            explique les types d'informations que nous collectons, comment
            elles sont utilisées et les mesures prises pour les protéger.
          </Typography>
        </Box>

        {/* Information Collected */}
        <Box mb={6}>
          <Typography variant="h5" gutterBottom>
            Informations que nous collectons
          </Typography>
          <ul>
            {["Nom et prénom", "Adresse e-mail", "Données de connexion et d'utilisation", "Informations liées à vos interactions avec nos services"].map((item, index) => (
              <Typography component="li" variant="body2" key={index}>
                {item}
              </Typography>
            ))}
          </ul>
        </Box>

        {/* How We Use Information */}
        <Box mb={6}>
          <Typography variant="h5" gutterBottom>
            Comment nous utilisons vos informations
          </Typography>
          <Typography variant="body2">
            Nous utilisons vos données pour :
          </Typography>
          <ul>
            {["Fournir et améliorer nos services", "Personnaliser votre expérience", "Respecter les obligations légales", "Communiquer avec vous au sujet de nos services"].map((item, index) => (
              <Typography component="li" variant="body2" key={index}>
                {item}
              </Typography>
            ))}
          </ul>
        </Box>

        {/* Data Security */}
        <Box mb={6}>
          <Typography variant="h5" gutterBottom>
            Sécurité de vos données
          </Typography>
          <Typography variant="body2">
            Nous prenons des mesures techniques et organisationnelles pour
            protéger vos données contre tout accès non autorisé, perte ou
            altération. Cependant, aucun système n'est entièrement sécurisé.
          </Typography>
        </Box>

        {/* Your Rights */}
        <Box mb={6}>
          <Typography variant="h5" gutterBottom>
            Vos droits
          </Typography>
          <Typography variant="body2">
            Conformément aux lois applicables, vous avez le droit de :
          </Typography>
          <ul>
            {["Accéder à vos données personnelles", "Corriger ou mettre à jour vos informations", "Demander la suppression de vos données", "Refuser certains types de traitement"].map((item, index) => (
              <Typography component="li" variant="body2" key={index}>
                {item}
              </Typography>
            ))}
          </ul>
        </Box>

        {/* Contact */}
        <Box mb={6}>
          <Typography variant="h5" gutterBottom>
            Contactez-nous
          </Typography>
          <Typography variant="body2">
            Si vous avez des questions ou des préoccupations concernant cette
            politique, vous pouvez nous contacter à :
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <Link href="mailto:contact@carvoy7.com" underline="hover">
              contact@carvoy7.com
            </Link>
          </Typography>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 2,
          textAlign: "center",
          backgroundColor: "grey.100",
        }}
      >
        <Typography variant="body2">
          Copyright {new Date().getFullYear()} © CarVoy7. Tous droits réservés.
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
