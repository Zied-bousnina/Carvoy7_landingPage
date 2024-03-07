import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BannerContent from "./BannerContent";
import BannerSlider from "./BannerSlider";
import { motion } from "framer-motion";

const Banner = () => {

  return (
    <Box  py={6} sx={{ overflow: "hidden",backgroundColor:"#e5e7eb" }} >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={11} sm={10}>
            <BannerContent />
          </Grid>
        </Grid>
      </Container>
      <BannerSlider />
  
      <div className=" w-full flex justify-center items-end ">

        <a className=" " href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-300 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-300 mb-1"
            />
          </div>
        </a>
      </div>
    </Box>
  );
};

export default Banner;

//* original template component
/*const Banner = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  return (
    <Box my={10} sx={{ overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={11} sm={10}>
            <BannerContent />
          </Grid>
        </Grid>
      </Container>
      <BannerSlider />
    </Box>
  );
}; */
