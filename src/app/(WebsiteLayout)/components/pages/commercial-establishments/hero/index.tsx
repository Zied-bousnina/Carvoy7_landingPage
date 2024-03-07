import { Stack, Typography } from "@mui/material";
import React from "react";

const CommercialEstablishmentsHero = () => {
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
        Commercial applications​
      </Typography>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography
          variant="h5"
          fontWeight={500}
          textAlign="center"
          mx={{ lg: 46, xs: 8 }}
        >
          Whether it’s a shopping mall, convention center, airport or office
          complex, waste management solutions will save customers millions of
          dollars by reducing the cost of their waste management operations.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CommercialEstablishmentsHero;
