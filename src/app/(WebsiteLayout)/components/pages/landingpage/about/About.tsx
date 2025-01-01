import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Icon } from "@iconify/react";

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
            Carvoy7 - Plateforme de Convoyage Numérique
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
            Carvoy7 révolutionne le convoyage automobile en offrant une plateforme numérique innovante qui connecte les clients et les chauffeurs pour des trajets plus efficaces, sûrs et abordables.
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
                        <Icon icon="heroicons:truck" className="text-2xl" />
                      </Avatar>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Convoyage automobile simplifié
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Carvoy7 facilite le convoyage automobile en optimisant les trajets, réduisant ainsi les coûts et le temps de transport pour les utilisateurs.
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
                        <Icon icon="heroicons:user-group" className="text-2xl" />
                      </Avatar>
                    </div>
                    <h6 className="text-xl font-semibold">Réseau de chauffeurs qualifiés</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Carvoy7 met à disposition un réseau de chauffeurs professionnels, garantissant des trajets sûrs et fiables.
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
                        <Icon icon="heroicons:clock" className="text-2xl" />
                      </Avatar>
                    </div>
                    <h6 className="text-xl font-semibold">Optimisation du temps</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Grâce à l'algorithme intelligent de Carvoy7, les trajets sont optimisés pour offrir un service rapide et ponctuel à chaque utilisateur.
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
                        <Icon icon="heroicons:map" className="text-2xl" />
                      </Avatar>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Suivi en temps réel
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Carvoy7 offre un suivi en temps réel des trajets, permettant aux clients de savoir exactement où se trouvent leurs chauffeurs.
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
                        <Icon icon="heroicons:shield-check" className="text-2xl" />
                      </Avatar>
                    </div>
                    <h6 className="text-xl font-semibold">Sécurité renforcée</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Carvoy7 met l'accent sur la sécurité en fournissant un système de vérification des chauffeurs et des véhicules, assurant ainsi un transport sécurisé pour tous.
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
                      >
                        <Icon icon="heroicons:chat-alt" />
                      </Avatar>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Support 24/7
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Carvoy7 propose un support client disponible 24/7, répondant à toutes les demandes et préoccupations des utilisateurs à tout moment.
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
              Découvrez Carvoy7
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight={300}
              textAlign="left"
              mt={1}
            >
              Carvoy7 est la solution moderne pour la gestion du convoyage automobile, optimisant les trajets, garantissant la sécurité et améliorant l'efficacité pour tous les utilisateurs, qu'il s'agisse de clients ou de chauffeurs.
            </Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default About;
