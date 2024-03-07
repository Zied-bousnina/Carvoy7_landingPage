import React from "react";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';




const BannerContent = () => {
  

  return (
    <>
      <Stack justifyContent="center" spacing={1} gap={2}>
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
Stop wasting money on inefficient waste collection
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography variant="h5" fontWeight={500} textAlign="center">
          Optimize Your Resources: Smarter Solutions for Waste Management
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2} mt={6}
        alignItems="center"
        justifyContent="center"
      >
      </Stack>

      
    </>
  );
};

export default BannerContent;
