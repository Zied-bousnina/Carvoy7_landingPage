import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { IconChevronDown } from "@tabler/icons-react";
const PartnershipOpportunitiesQuestions = () => {
  interface faq {
    question: string;
    answers: string[];
  }
  const FAQ: faq[] = [
    {
      question: "What types of partnerships do you offer ?",
      answers: [
        "We offer two main types of partnership: Distributor and Agent. Distributors will stock our products and resell them in their territories, provide services to customers, and maintain consistent branding and marketing efforts in their territories. Agents will connect us with sales opportunities and develop offers on a commission basis.",
      ],
    },
    {
      question: "How to become a distributor ?",
      answers: [
        "Do you have a registered business in good standing?",
        "Is our solution adapted to your current business model?",
        "Do you have a realistic and achievable sales strategy and projection?",
        "Do you have experience in participating in government tenders or do you have experience in providing related solutions to the public sector?",
        "Do you have a good understanding of the waste management industry in your territory?",
      ],
    },
    {
      question:
        "What are the conditions for becoming an exclusive distributor ?",
      answers: [
        "Exclusivity is generally reserved for partners who have developed a good working relationship with us for several years or who have performed at a high level in their territory in a short period of time. If you are interested in exclusivity, we are open to discussing it as long as you have a solid business case to present.",
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
            mb={1}
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
            Are you interested in becoming our business partner?
          </Typography>
          <Typography
            textAlign="center"
            mb={8}
            sx={{
              fontSize: {
                lg: "15px",
                xs: "13px",
              },
            }}
          >
            We are always open to discussing potential partnerships in all
            regions. Write to us and we would be happy to discuss a possible
            partnership!
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
    </Box>
  );
};

export default PartnershipOpportunitiesQuestions;
