"use client";
import React from "react";
import PageLayout from "../../layout/layout";

import { PrivateOrganizationsCards } from "../../constant/data";
import Cards from "../../components/ui/cards";
import PrivateOrganizationsHero from "../../components/pages/private-organizations/hero";

const PrivateOrganizations = () => {
  return (
    <PageLayout>
      <PrivateOrganizationsHero />
      <Cards
        cards={PrivateOrganizationsCards}
        title="Where to Install"
        pt={12}
      />
    </PageLayout>
  );
};

export default PrivateOrganizations;
