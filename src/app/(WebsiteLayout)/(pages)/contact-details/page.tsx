"use client";
import React from "react";
import PageLayout from "../../layout/layout";

import { Box } from "@mui/material";

import ContactDetailsMap from "../../components/pages/contact-details/map";
import ContactDetailsForm from "../../components/pages/contact-details/form";

const ContactDetails = () => {
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
        <ContactDetailsMap />
      </Box>
      <ContactDetailsForm />
    </PageLayout>
  );
};

export default ContactDetails;
