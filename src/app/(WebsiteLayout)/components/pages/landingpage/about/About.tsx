import { Avatar, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Icon } from "@iconify/react";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";
import Card from "@mui/material/Card";
import AnimateFadeIn from "../../../shared/animation/Animation";
const About = () => {
  return (
    <Box
      pb="140px"
      overflow="hidden"
      borderRadius="0"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,

        pt: {
          xs: "60px",
          lg: "140px",
        },
      }}
    >
      <AnimateFadeIn>
        <>
          <Typography
            variant="h2"
            fontWeight={700}
            textAlign="center"
            sx={{
              fontSize: {
                lg: "36px",
                xs: "25px",
              },
              lineHeight: {
                lg: "43px",
                xs: "30px",
              },
            }}
          >
            Do you have a waste problem ?
          </Typography>
          <Typography
            fontSize="18px"
            fontWeight={500}
            textAlign="center"
            mt={1}
            maxWidth={800}
            align="center"
            mx="auto"
            px={4}
          >
            Are you wasting money on inefficient waste collection? Do you not
            know when your bins are being collected? Do your bins regularly
            overflow with waste? If this sounds familiar, you could benefit from
            XGENBOX’s solution.{" "}
          </Typography>
        </>
      </AnimateFadeIn>
      <Grid
        container
        spacing={2}
        px={{ lg: 16, xs: 4 }}
        justifyContent="center"
        alignItems="stretch"
        mt={12}
      >
        <section className="-mb-8 bg-blueGray-200 -mt-4 text-[15px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-2xl">
                  <div className="px-4 py-5 flex-auto">
                    <div className="inline-block mx-auto mb-2">
                      <Avatar
                        sx={{
                          bgcolor: "primary.light",
                          color: "primary.main",
                          width: 50,
                          height: 50,
                          borderRadius: "18px",
                        }}
                      >
                        {" "}
                        <Icon icon="heroicons:truck" className="text-2xl" />
                      </Avatar>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Inefficient collection
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Inefficient Collection identifies and addresses waste
                      collection inefficiencies, optimizing routes and schedules
                      for reduced costs and environmental impact.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-2xl">
                  <div className="px-4 py-5 flex-auto">
                    <div className="inline-block mx-auto mb-2">
                      <Avatar
                        sx={{
                          bgcolor: "warning.light",
                          color: "warning.main",
                          width: 50,
                          height: 50,
                          borderRadius: "18px",
                        }}
                      >
                        {" "}
                        <Icon icon="heroicons:trash" className="text-2xl" />
                      </Avatar>
                    </div>
                    <h6 className="text-xl font-semibold">Overflowing bins</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      alerts to prevent excess waste buildup, ensuring timely
                      clearance and maintaining cleanliness and hygiene in
                      public spaces.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-2xl">
                  <div className="px-4 py-5 flex-auto">
                    <div className="inline-block mx-auto mb-2">
                      <Avatar
                        sx={{
                          bgcolor: "success.light",
                          color: "success.main",
                          width: 50,
                          height: 50,
                          borderRadius: "18px",
                        }}
                      >
                        {" "}
                        <Icon
                          icon="heroicons:arrow-path-rounded-square"
                          className="text-2xl"
                        />
                      </Avatar>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Low diversion rates
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      tracks and improves recycling and composting efforts,
                      aiming to reduce landfill waste and enhance environmental
                      sustainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-2xl">
                  <div className="px-4 py-5 flex-auto">
                    <div className="inline-block mx-auto mb-2">
                      <Avatar
                        sx={{
                          bgcolor: "secondary.light",
                          color: "secondary.main",
                          width: 50,
                          height: 50,
                          borderRadius: "18px",
                        }}
                      >
                        {" "}
                        <Icon icon="heroicons:question-mark-circle" />
                      </Avatar>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Lack of information{" "}
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      provides real-time waste management insights, enhancing
                      decision-making and public awareness for efficient waste
                      handling.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-2xl">
                  <div className="px-4 py-5 flex-auto">
                    <div className="inline-block mx-auto mb-2">
                      <Avatar
                        sx={{
                          bgcolor: "error.light",
                          color: "error.main",
                          width: 50,
                          height: 50,
                          borderRadius: "18px",
                        }}
                      >
                        {" "}
                        <Icon icon="heroicons:cloud" className="text-2xl" />
                      </Avatar>
                    </div>
                    <h6 className="text-xl font-semibold">High emissions </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      identifies waste collection practices contributing to
                      carbon output, promoting greener methods to reduce
                      environmental impact.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-2xl">
                  <div className="px-4 py-5 flex-auto">
                    <div className="inline-block mx-auto mb-2">
                    <Avatar
                        sx={{
                          bgcolor: "primary.light",
                          color: "primary.main",
                          width: 50,
                          height: 50,
                          borderRadius: "18px",
                        }}
                      >                        <Icon icon="heroicons:bug-ant" />
                      </Avatar>
                    </div>
                    <h6 className="text-xl font-semibold">
                    Insects and vermin
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    monitors waste sites to prevent pest infestations, ensuring sanitary conditions and public health safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          gap: "20px",
        }}
        px={{ lg: 46, xs: 4 }}
        mt={{ lg: 10, xs: 4 }}
      >
        <div className="flex-1 flex flex-col justify-between items-start">
          <div>
            <Typography fontSize="25px" fontWeight={500} textAlign="left">
              Presentation of XGENBOX&ldquo;s Solution
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight={300}
              textAlign="left"
              mt={1}
            >
              XGENBOX offers a comprehensive and intelligent waste management
              solution using an application connected to a smart bin sensor. Our
              integrated range of products includes:
            </Typography>
          </div>
          <div>
            <div className="flex items-center gap-2 mt-4">
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <Icon icon="heroicons:square-3-stack-3d" />
              </Avatar>
              <p>Solar-powered waste compactor</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <Icon icon="heroicons:truck" />
              </Avatar>
              <p>Fleet management application</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ReactPlayer
            height={300}
            width="100%"
            url="https://youtu.be/Xu4Uy0f_XY0"
          />
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          gap: "20px",
        }}
        px={{ lg: 16, xs: 4 }}
        mt={{ lg: 10, xs: 4 }}
      >
        <Card
          elevation={0}
          sx={{
            py: 0,
            overflow: "hidden",
            position: "relative",
            boxShadow: 4,
          }}
        >
          <Image
            src="/images/backgrounds/top-info-shape.png"
            alt="img"
            className="top-img"
            width={59}
            height={81}
          />
          <CardContent sx={{ p: "30px" }}>
            <Grid container spacing={3} justifyContent="space-between">
              <Grid item sm={6} display="flex" alignItems="center">
                <Box
                  sx={{
                    textAlign: {
                      xs: "center",
                      sm: "left",
                    },
                  }}
                >
                  <Typography variant="h5">Smart box</Typography>
                  <Typography variant="subtitle1" color="textSecondary" my={2}>
                    Compatible with standard 140L and 360L wheeled bins for easy
                    and safe waste removal, and it also communicates the
                    information it collects in real-time via wireless
                    transmission.
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={4}>
                <Box mb="-150px">
                  <Image
                    className="hidden sm:block"
                    src={"/images/landingpage/about/bin.png"}
                    alt={"img"}
                    height={195}
                    width={168}
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card
          elevation={0}
          sx={{
            py: 0,
            overflow: "hidden",
            position: "relative",
            boxShadow: 4,
          }}
        >
          <Image
            src="/images/backgrounds/top-warning-shape.png"
            alt="img"
            className="top-img"
            width={59}
            height={81}
          />
          <CardContent sx={{ p: "30px" }}>
            <Grid container spacing={3} justifyContent="space-between">
              <Grid item sm={6} display="flex" alignItems="center">
                <Box
                  sx={{
                    textAlign: {
                      xs: "center",
                      sm: "left",
                    },
                  }}
                >
                  <Typography variant="h5">
                    Fleet management application
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" my={2}>
                    Capable of leveraging data from your current waste
                    management operations and transforming your manually
                    scheduled routes into fully optimized routes using machine
                    learning algorithms.
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={4}>
                <Box mb="-150px">
                  <Image
                    className="hidden sm:block"
                    src={"/images/landingpage/about/phone-application.png"}
                    alt={"img"}
                    height={195}
                    width={168}
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default About;
