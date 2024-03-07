import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { IconChevronDown } from "@tabler/icons-react";
const FleetManagementPlatformQuestions = () => {
  interface faq {
    question: string;
    answers: string[];
  }
  const FAQ: faq[] = [
    {
      question: "Fournissez vous un accès API ?",
      answers: [
        "Bien que nous recommandions à nos clients d'utiliser notre logiciel car il est optimisé pour afficher les données, il nous est possible de vous fournir une API.",
      ],
    },
    {
      question: "Comment puis-je accéder au logiciel ?",
      answers: [
        "La plate-forme d'optimisation de la collecte des déchets est accessible à tout moment et peut être téléchargée gratuitement sur votre appareil intelligent via App Store ou Google Play.",
      ],
    },
  ];
  return (
    <Box
      overflow="hidden"
      borderRadius="0"
      mt={-4}
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Typography
            variant="h2"
            fontWeight={700}
            textAlign="center"
            mb={8}
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
            Frequently asked questions
          </Typography>
          {FAQ.map((item, index) => (
            <Accordion key={index} elevation={9}>
              <AccordionSummary
                expandIcon={<IconChevronDown />}
                aria-controls={`panel${index + 1}a-content`}
                id={`panel${index + 1}a-header`}
              >
                <Typography variant="h6" px={2} py={1}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <ul className="list-disc">
                  {item.answers.map((answer, index) => (
                    <li className="ml-10" key={index}>
                      <Typography
                        variant="subtitle1"
                        pt={1}
                        px={2}
                        color="textSecondary"
                      >
                        {answer}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FleetManagementPlatformQuestions;
