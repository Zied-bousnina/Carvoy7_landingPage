import { Stack, Typography } from "@mui/material";
import React from "react";

const SmartCitiesHero = () => {
  return (
    <Stack justifyContent="center" spacing={1} gap={2} py={12}>
      <Typography
        variant="h1"
        fontWeight={800}
        textAlign="center"
        sx={{
          fontSize: {
            md: "52px",
          },
          lineHeight: {
            md: "62px",
          },
        }}
      >
        Become a smart city
      </Typography>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography variant="h5" fontWeight={500} textAlign="center" mx={{lg:46,xs:8}}>
          Cities today are beginning their transformation into smart cities,
          many are already well on their way! Along with smart traffic, smart
          lighting and smart energy, smart waste is an integral part of any
          smart city. Our offerings are fully stacked and vertically integrated
          so everyone sees and feels the direct benefits of using our solution,
          from bin-using citizens, to waste collectors, to policy makers.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SmartCitiesHero;
