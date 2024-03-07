"use client"
import React from "react";
import PageLayout from "../../layout/layout";
import Chips from "../../components/ui/chips";
import CommercialEstablishmentsHero from "../../components/pages/commercial-establishments/hero";
import { CommercialEstablishmentsCards, CommercialEstablishmentsChipData } from "../../constant/data";
import Cards from "../../components/ui/cards";

const CommercialEstablishments = () => {
  return (
    <PageLayout>
<CommercialEstablishmentsHero/>
      <Chips chipsData={CommercialEstablishmentsChipData}/>
      <Cards cards={CommercialEstablishmentsCards} title="Where to Install" />
    </PageLayout>
  );
};

export default CommercialEstablishments;
