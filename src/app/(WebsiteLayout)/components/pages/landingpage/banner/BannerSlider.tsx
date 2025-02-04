import React from "react";
import Box from '@mui/material/Box';
import bannerbgImg1 from "public/images/svgs/logo_carvoy.svg";

import Image from "next/image";

const BannerSlider = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        paddingTop: 2,
        paddingBottom: 10,

      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "110%",
          position: "relative",
          left:40,
        }}
      >
        <Box
          width="100%"
          sx={{
            animation: "45s linear 0s infinite normal none running slide",
          }}
        >
          <Image src={bannerbgImg1} alt="bg-img" />
        </Box>
        <Box
          width="100%"
          sx={{
            animation: "45s linear 0s infinite normal none running slide",
          }}
        >
          <Image src={bannerbgImg1} alt="bg-img" />
        </Box>
        <Box
          width="100%"
          sx={{
            animation: "45s linear 0s infinite normal none running slide",
          }}
        >
          <Image src={bannerbgImg1} alt="bg-img" />
        </Box>
        <Box
          width="100%"
          sx={{
            animation: "45s linear 0s infinite normal none running slide",
          }}
        >
          <Image src={bannerbgImg1} alt="bg-img" />
        </Box>
        <Box
          width="100%"
          sx={{
            animation: "45s linear 0s infinite normal none running slide",
          }}
        >
          <Image src={bannerbgImg1} alt="bg-img" />
        </Box>
      </Box>
    </Box>
  );
};

export default BannerSlider;
