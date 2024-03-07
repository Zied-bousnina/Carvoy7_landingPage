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
    title: "Cost Reduction",
    subtext: "Maximizing Savings, Minimizing Expenses.",
  },
  {
    icon: <IconArrowsShuffle width={30} height={30} strokeWidth={1.5} />,
    color: "warning",
    title: "Dynamic Routing",
    subtext: "Streamlining Paths: The Power of Adaptive Navigation.",
  },
  {
    icon: <IconRibbonHealth width={30} height={30} strokeWidth={1.5} />,
    color: "success",
    title: "CO2 Reduction",
    subtext: "Towards a Greener Future: Cutting Carbon Emissions.",
  },
  {
    icon: <IconRefresh width={30} height={30} strokeWidth={1.5} />,
    color: "error",
    title: "Improved Cleanlines",
    subtext: "Enhancing Hygiene and Neatness.",
  },
];

const Features = () => {
  return (
    <Box py={12} id="features"  sx={{backgroundColor:"#e5e7eb"}}>
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
            Our solution significantly reduces the frequency of waste
            collection, which allows you to save on fuel, labor, and fleet
            maintenance costs. Together, our products can reduce your operating
            costs by up to 80%.
          </Typography>
        </div>
      </Container>
    </Box>
  );
};

export default Features;
