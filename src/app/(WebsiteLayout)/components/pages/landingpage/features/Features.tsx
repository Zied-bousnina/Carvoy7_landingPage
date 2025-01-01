import React from "react";
import FeaturesTitle from "./FeaturesTitle";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  IconArrowsShuffle,
  IconRibbonHealth,
  IconRefresh,
  IconPigMoney,
} from "@tabler/icons-react";
import AnimationFadeIn from "../../../shared/animation/Animation";
import BlankCard from "../../../shared/BlankCard";

interface FeaturesType {
  icon: React.ReactElement;
  title: string;
  subtext: string;
  color: any;
}

const featuresData: FeaturesType[] = [
  {
    icon: <IconPigMoney width={30} height={30} strokeWidth={1.5} />,
    color: "primary",
    title: "Optimisation des Coûts",
    subtext: "Réduisez les coûts de transport et maximisez la rentabilité.",
  },
  {
    icon: <IconArrowsShuffle width={30} height={30} strokeWidth={1.5} />,
    color: "warning",
    title: "Itinéraires Efficaces",
    subtext: "Des itinéraires adaptatifs pour le trafic et la demande en temps réel.",
  },
  {
    icon: <IconRibbonHealth width={30} height={30} strokeWidth={1.5} />,
    color: "success",
    title: "Durabilité",
    subtext: "Réduire les émissions grâce à la technologie de routage intelligente.",
  },
  {
    icon: <IconRefresh width={30} height={30} strokeWidth={1.5} />,
    color: "error",
    title: "Gestion Améliorée de la Flotte",
    subtext: "Suivi optimisé des véhicules pour une meilleure efficacité.",
  },
];

const Features = () => {
  return (
    <Box py={12} id="features" sx={{ backgroundColor: "#e5e7eb" }}>
      <Container maxWidth="lg">
        <FeaturesTitle />
        <AnimationFadeIn>
          <Box mt={10}>
            <Grid container spacing={3}>
              {featuresData.map((feature, index) => (
                <Grid item xs={12} sm={4} lg={3} key={index}>
                  <BlankCard>
                    <CardContent>
                      <Avatar
                        sx={{
                          bgcolor: `${feature.color}` + ".light",
                          color: `${feature.color}` + ".main",
                          width: 50,
                          height: 50,
                          borderRadius: "18px",
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Typography variant="h5" mt={3}>
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        mt={1}
                      >
                        {feature.subtext}
                      </Typography>
                    </CardContent>
                  </BlankCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </AnimationFadeIn>
        <div className="relative top-12 mb-12">
          <Typography
            fontSize="18px"
            fontWeight={500}
            textAlign="center"
            mb={1}
          >
            Carvoy7 optimise les itinéraires de convois, vous permettant de
            réduire les coûts de carburant, de main-d'œuvre et de maintenance de
            flotte, tout en améliorant l'efficacité opérationnelle. Nos
            solutions peuvent réduire vos coûts opérationnels jusqu'à 80%,
            rendant le transport plus intelligent et durable.
          </Typography>
        </div>
      </Container>
    </Box>
  );
};

export default Features;
