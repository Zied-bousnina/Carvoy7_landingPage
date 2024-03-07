"use client"
import React from "react";
import SmartCitiesHero from "../../components/pages/smart-cities/hero";
import PageLayout from "../../layout/layout";
import Chips from "../../components/ui/chips";
import { SmartCitiesChipData,SmartCitiesCards  } from "../../constant/data";
import Cards from "../../components/ui/cards";
const SmartCities = () => {
  return (
    <PageLayout>
      <SmartCitiesHero />
      <Chips chipsData={SmartCitiesChipData}/>
      <Cards cards={SmartCitiesCards}/>
    </PageLayout>
  );
};

export default SmartCities;
