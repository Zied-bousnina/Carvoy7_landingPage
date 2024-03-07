import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AnimationFadeIn from "../../../shared/animation/Animation";

const TopCards = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = useTheme();
  const borderColor = theme.palette.divider;
  interface stats {
    title: string;
    href: string;
    color: string;
    icon: string;
    iconsm: any;
  }

  const STATS: stats[] = [
    {
      title: "Solutions",
      href: "#",
      color: "warning",
      icon: "/images/backgrounds/top-warning-shape.png",
      iconsm: <Icon icon="heroicons:check-circle" width="30" height="30" />,
    },
    {
      title: "Features",
      href: "#",
      color: "error",
      icon: "/images/backgrounds/top-error-shape.png",
      iconsm: <Icon icon="heroicons:queue-list" width="30" height="30" />,
    },
    {
      title: "Frequently Asked Questions",
      href: "#",
      color: "info",
      icon: "/images/backgrounds/top-info-shape.png",
      iconsm: (
        <Icon icon="heroicons:question-mark-circle" width="30" height="30" />
      ),
    },
  ];

  return (
    <Box
      px={{ lg: "150px", xs: "50px" }}
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
      <AnimationFadeIn>
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
            Overview{" "}
          </Typography>
          <Grid container spacing={3}>
            {STATS.map((stat, i) => (
              <Grid item lg={4} sm={4} xs={12} key={i}>
                <Card
                  sx={{
                    padding: 0,
                    border: !customizer.isCardShadow
                      ? `1px solid ${borderColor}`
                      : "none",
                    backgroundColor: "primary.main",
                    color: "white",
                    position: "relative",
                  }}
                  elevation={customizer.isCardShadow ? 9 : 0}
                  variant={!customizer.isCardShadow ? "outlined" : undefined}
                >
                  <Image
                    src={stat.icon}
                    alt="img"
                    className="top-img"
                    width={59}
                    height={81}
                  />
                  <CardContent>
                    <Box mb={4}>{stat.iconsm}</Box>
                    <Typography variant="h4">{stat.title}</Typography>
                    <Button
                      color={
                        (stat.color ? stat.color : "primary") as
                          | "primary"
                          | "secondary"
                          | "warning"
                          | "error"
                          | "info"
                          | "success"
                          | "inherit"
                      }
                      variant="contained"
                      href={stat.href}
                      sx={{
                        marginTop: 2,
                        borderRadius: "10px",
                      }}
                      endIcon={<KeyboardArrowRightIcon />}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      </AnimationFadeIn>
    </Box>
  );
};

export default TopCards;
