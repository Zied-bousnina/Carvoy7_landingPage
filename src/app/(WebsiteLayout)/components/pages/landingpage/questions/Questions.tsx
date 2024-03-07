import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { IconChevronDown } from "@tabler/icons-react";
import AnimateFadeIn from "../../../shared/animation/Animation";
const Questions = () => {
  interface faq {
    question: string;
    answers: string[];
  }
  const FAQ: faq[] = [
    {
      question: "What are the benefits of using XGENBOX's waste bin ?",
      answers: [
        "Data on waste volume and collection history",
        "Elimination of arbitrary waste collections",
        "Ability to identify high waste production areas for optimal bin placement",
        "Savings on waste management expenses",
        "Clean and hygienic public spaces with less waste overflow, pests, and odors",
        "Electricity savings through the use of solar energy",
        "Reduction of waste truck collections resulting in a reduction in fuel emissions, traffic congestion, and noise",
        "Revenue generated from advertising.",
      ],
    },
    {
      question: "How does it communicate ?",
      answers: [
        "3G telecommunication is used to send and receive signals from the bin. All data is collected and organized so that end users can optimize operations. A hosted server allows our units to have access anywhere in the world.",
      ],
    },
    {
      question: "What are the ideal places for installation ?",
      answers: [
        "Connected trash cans are ideal for highly trafficked areas where overflowing waste is common, such as a city's business districts, university campuses, shopping centers, tourist attractions, sports stadiums, etc.",
      ],
    },
    {
      question: "What about indoor locations ?",
      answers: [
        "In addition to the solar-powered model, we also offer a hybrid model that uses both solar and AC energy. Once plugged in, there is no limit to its energy consumption. Installation sites include airports, shopping centers, transit stations, etc.",
      ],
    },
    {
      question: "How long does it take to fully charge ?",
      answers: [
        "On average, 2 to 3 days of 4 hours of sunlight are needed to fully recharge the device.",
      ],
    },
    {
      question: "What happens if it's cloudy for several days ?",
      answers: [
        "When fully charged, the trash can operate for up to 4 weeks on battery. Results may vary depending on the frequency of compaction and strength of the telecommunications signal, and the use of optional features (i.e. a Wi-Fi router, etc.).",
      ],
    },
    {
      question:
        "Quelle est la durée de vie de la poubelle connectées et des pièces de rechange ?",
      answers: [
        "En général, la durée de vie varie de 7 à 8 ans et la batterie dure généralement 3 à 4 ans. Les résultats peuvent varier en fonction de l'utilisation, des conditions environnementales et de l'entretien.",
      ],
    },
    {
      question:
        "Y a-t-il des risques de vandalisme, de vol et de dégradation en général ?",
      answers: [
        "Lors de l'installation, le châssis est généralement boulonné au sol dans les espaces publics. Il est également installé avec un GPS afin que les utilisateurs puissent surveiller son emplacement. Pour les pièces sensibles au vandalisme, à la corrosion ou aux pannes, nous utilisons des vis antivol et des matériaux résistants à la trempe tels que des couvercles en acier inoxydable et en polycarbonate.​",
      ],
    },
    {
      question: "Which parts need to be serviced and how often ?",
      answers: [
        "We recommend replacing the battery every 3-4 years and wiping down the polycarbonate solar panel cover whenever it looks dirty.",
      ],
    },
    {
      question: "How much does the bin cost ?",
      answers: [
        "We offer various configurations to meet the different needs of our customers.",
      ],
    },
  ];
  return (
    <Box
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
                          key={index}
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
      </AnimateFadeIn>
    </Box>
  );
};

export default Questions;
