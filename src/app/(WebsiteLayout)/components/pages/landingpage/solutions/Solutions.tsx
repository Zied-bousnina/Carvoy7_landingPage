import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import AnimateFadeIn from "../../../shared/animation/Animation";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";

export default function Solutions() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });

  interface solution {
    title: string;
    icon: string;
    description: string;
  }

  const SOLUTIONS: solution[] = [
    {
      title: "Smart cities",
      description:
        "In smart cities, smart traffic, smart lighting, and smart energy are all part of the picture, and smart waste management is an integral part of any smart city. Our offerings are fully stacked and vertically integrated so that everyone can see and feel the direct benefits of using our solution.",
      icon: "heroicons:building-office-2",
    },
    {
      title: "Commercial establishments",
      description:
        "Whether it’s a shopping center, convention center, airport, or office complex, XGENBOX’s waste management solutions have helped customers save millions of dollars by reducing the cost of their waste management operations.",
      icon: "heroicons:shopping-cart",
    },
    {
      title: "Private organizations",
      description:
        "Whether it is a university campus, a theme park, a hospital, or a zoo, XGENBOX has provided customized deployments to clients with a myriad of different needs. The cost benefits and environmental benefits observed in large-scale municipal or commercial deployments are just as well replicated on a smaller scale.",
      icon: "heroicons:building-library",
    },
    {
      title: "Waste collectors",
      description:
        "Whether it’s a family-owned hauler, a municipality, or a large waste management company responsible for multiple counties, our solutions have provided insights into operations, identified areas for efficiency improvement, and improved performance in several key areas of fleet management.",
      icon: "heroicons:truck",
    },
  ];
  return (
    <Box
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
            fontSize="18px"
            fontWeight={500}
            textAlign="center"
            mb={1}
          >
            Exploring Diverse Features and Capabilities
          </Typography>

          <Typography
            variant="h2"
            fontWeight={700}
            textAlign="center"
            mb={10}
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
            Who benefits from our solution ?
          </Typography>
        </>
      </AnimateFadeIn>
      <Box mx={{ lg: 40, sm: 8 }}>
        <Timeline
          position="alternate"
          sx={
            isSmallScreen
              ? {
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }
              : undefined
          }
        >
          {SOLUTIONS.map((item, index) => {
            return (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot
                    sx={{
                      bgcolor: "primary.light",
                      color: "primary.main",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon icon={item.icon} className="text-2xl" />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <div className="bg-[#f3f4f6] text-[#27272a] px-4 py-6 border-t-4 border-t-gray-400 ">
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "18px",
                        textAlign: "left",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      mt={1}
                      sx={{
                        fontSize: "15px",
                        textAlign: "left",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Box>
    </Box>
  );
}
