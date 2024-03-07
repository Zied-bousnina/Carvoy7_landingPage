import { Stack, Typography } from "@mui/material";
import React from "react";

const PrivateOrganizationsHero = () => {
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
        Private Applications
      </Typography>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography
          variant="h5"
          fontWeight={500}
          textAlign="center"
          mx={{ lg: 46, xs: 8 }}
        >
          Whether it’s a college campus, theme park, hospital, or zoo, we
          provide custom deployments to customers who had a myriad of different
          needs. The cost benefits and environmental benefits seen in
          large-scale municipal or commercial deployments are replicated equally
          well on a smaller scale.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PrivateOrganizationsHero;
