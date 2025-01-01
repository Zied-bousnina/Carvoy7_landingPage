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
      question: "Qu'est-ce que Carvoy7 et comment ça fonctionne ?",
      answers: [
        "Carvoy7 est une plateforme de convoyage numérique qui connecte les clients avec des convoyeurs professionnels pour le transport de véhicules.",
        "Grâce à notre plateforme, vous pouvez planifier, suivre et gérer le transfert de véhicules de manière efficace et sécurisée.",
      ],
    },
    {
      question: "Qui peut bénéficier des services de Carvoy7 ?",
      answers: [
        "Les particuliers souhaitant transférer leurs véhicules.",
        "Les entreprises de location de voitures gérant les livraisons de flotte.",
        "Les concessionnaires automobiles organisant les livraisons aux clients.",
        "Les entreprises ayant besoin de transferts de véhicules inter-villes ou internationaux.",
      ],
    },
    {
      question: "Comment réserver un service de convoyage ?",
      answers: [
        "Inscrivez-vous simplement sur la plateforme Carvoy7, entrez les informations de votre véhicule, précisez les lieux de prise en charge et de livraison, et sélectionnez un convoyeur professionnel parmi notre réseau.",
      ],
    },
    {
      question: "Comment est calculé le coût d’un convoyage ?",
      answers: [
        "Le coût dépend de plusieurs facteurs tels que la distance, le type de véhicule et l'urgence de la livraison. Notre plateforme offre des prix transparents basés sur vos besoins.",
      ],
    },
    {
      question: "Quelles sont les mesures de sécurité offertes par Carvoy7 ?",
      answers: [
        "Tous les convoyeurs sont soigneusement vérifiés et certifiés.",
        "Un suivi en temps réel permet de surveiller votre véhicule pendant le transport.",
        "Des options d'assurance sont disponibles pour une protection supplémentaire.",
      ],
    },
    {
      question: "Puis-je suivre mon véhicule pendant le convoyage ?",
      answers: [
        "Oui, Carvoy7 offre un suivi en temps réel via la plateforme, vous permettant de connaître la localisation de votre véhicule et l'heure estimée d'arrivée.",
      ],
    },
    {
      question: "Que se passe-t-il en cas de retard ou de problème pendant le convoyage ?",
      answers: [
        "L'équipe d'assistance Carvoy7 est disponible 24h/24 et 7j/7 pour résoudre tout problème ou retard. Nos convoyeurs sont formés pour gérer les imprévus de manière professionnelle.",
      ],
    },
    {
      question: "Proposez-vous des options de convoyage international ?",
      answers: [
        "Oui, Carvoy7 prend en charge les transferts internationaux de véhicules, en assurant la conformité avec les réglementations douanières et transfrontalières.",
      ],
    },
    {
      question: "Comment devenir convoyeur pour Carvoy7 ?",
      answers: [
        "Pour rejoindre notre réseau de convoyeurs professionnels, inscrivez-vous sur la plateforme, complétez le processus de vérification et fournissez vos justificatifs de conduite.",
      ],
    },
    {
      question: "Quelle est la politique d'annulation de Carvoy7 ?",
      answers: [
        "Vous pouvez annuler une réservation dans les délais impartis pour un remboursement complet. Consultez notre politique d'annulation sur la plateforme pour plus de détails.",
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
              Questions fréquentes sur Carvoy7
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
