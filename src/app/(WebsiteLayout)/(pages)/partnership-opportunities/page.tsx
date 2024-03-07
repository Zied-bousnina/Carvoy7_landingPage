"use client";
import React from "react";
import PageLayout from "../../layout/layout";
import PartnershipOpportunitiesForm from "../../components/pages/partnership-opportunities/form";
import PartnershipOpportunitiesQuestions from "../../components/pages/partnership-opportunities/questions";
import { Box } from "@mui/material";

const PartnershipOpportunities = () => {
  return (
    <PageLayout>
      <Box
        overflow="hidden"
        borderRadius="0"
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
        pt={12}
      >
        <PartnershipOpportunitiesQuestions />
      </Box>
      <PartnershipOpportunitiesForm />
    </PageLayout>
  );
};

export default PartnershipOpportunities;
