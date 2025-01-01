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
      title: "Plateforme de Convoyage Numérique",
      description:
        "Carvoy7 offre une solution innovante de convoyage numérique pour connecter les utilisateurs à des services de transport de manière rapide, efficace et transparente. Notre technologie permet de simplifier le processus de convoyage et d'améliorer l'expérience utilisateur.",
      icon: "heroicons:device-phone",
    },
    {
      title: "Optimisation des Ressources",
      description:
        "Grâce à Carvoy7, optimisez l'utilisation de vos ressources de transport. Notre solution vous aide à gérer vos itinéraires de manière plus intelligente, réduisant les coûts et le temps de trajet.",
      icon: "heroicons:refresh",
    },
    {
      title: "Connectivité et Accessibilité",
      description:
        "Carvoy7 permet une connectivité sans faille entre les utilisateurs et les prestataires de services. L'accès à la plateforme est simple et sécurisé, garantissant une expérience utilisateur fluide.",
      icon: "heroicons:link",
    },
    {
      title: "Support en Temps Réel",
      description:
        "Notre plateforme propose un support client en temps réel, garantissant une assistance immédiate pour toutes vos demandes de convoyage et vous offrant une tranquillité d'esprit tout au long du processus.",
      icon: "heroicons:support",
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
          <Typography fontSize="18px" fontWeight={500} textAlign="center" mb={1}>
            Découvrez les Fonctionnalités de Carvoy7
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
            Qui bénéficie de Carvoy7 ?
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
