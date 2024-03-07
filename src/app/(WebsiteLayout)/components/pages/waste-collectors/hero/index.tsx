import { Stack, Typography } from "@mui/material";
import React from "react";

const WasteCollectorsHero = () => {
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
        Waste collectors
      </Typography>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography
          variant="h5"
          fontWeight={500}
          textAlign="center"
          mx={{ lg: 46, xs: 8 }}
        >
          Whether it’s a family hauler, a municipality or a large waste
          management company responsible for multiple counties, our solutions
          will provide insight into their operations, identified areas for
          efficiency improvement and improved performance in several key areas
          of fleet management.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default WasteCollectorsHero;
