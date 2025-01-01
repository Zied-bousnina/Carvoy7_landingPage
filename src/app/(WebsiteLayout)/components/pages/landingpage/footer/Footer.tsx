import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import Logo from "@/app/(WebsiteLayout)/layout/shared/logo/Logo";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#e5e7eb",
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
            <div>
              <Logo />
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              À Propos de Nous
            </Typography>
            <div className="flex items-center gap-2 text-xl mt-2">
              <Icon icon="heroicons:map-pin" />
              <Typography variant="body2">
                140bis Rue de Rennes, Paris, France 75006
              </Typography>
            </div>
            <div className="flex items-center gap-2 text-xl mt-2">
              <Icon icon="heroicons:phone" />
              <Typography variant="body2">+33 56 981 500</Typography>
            </div>
            <div className="flex items-center gap-2 text-xl mt-2">
              <Icon icon="heroicons:envelope" />
              <Typography variant="body2">direction@Carvoy7.com</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Support
            </Typography>
            <Link href="#">
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={13}
                mt={1}
              >
                Centre d'Aide
              </Typography>
            </Link>
            <Link href="#">
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={13}
                mt={1}
              >
                Conditions d'Utilisation
              </Typography>
            </Link>
            <Link href="#">
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={13}
                mt={1}
              >
                Mentions Légales
              </Typography>
            </Link>
            <Link href="#">
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={13}
                mt={1}
              >
                Politique de Confidentialité
              </Typography>
            </Link>
            <Link href="#">
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={13}
                mt={1}
              >
                Statut
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Suivez-Nous
            </Typography>
            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/carvoy7/" color="inherit">
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </div>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            {new Date().getFullYear()}
            <span className="font-bold text-[#3c976e]">{" CarVoy7 "}</span>
            <Link color="inherit" href="#">
              Tous droits réservés
            </Link>
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
