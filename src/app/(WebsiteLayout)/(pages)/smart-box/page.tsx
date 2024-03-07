"use client";
import React from "react";
import PageLayout from "../../layout/layout";

import SmartBoxHero from "../../components/pages/smart-box/hero";
import SmartBoxCharacteristics from "../../components/pages/smart-box/characteristics";
import SmartBoxBrochure from "../../components/pages/quote-request/brochure";
import { SmartBoxChipsData1, SmartBoxChipsData2 } from "../../constant/data";
import Chips from "../../components/ui/chips";
const SmartBox = () => {
  return (
    <PageLayout>
      <SmartBoxHero />
      <Chips chipsData={SmartBoxChipsData1} />
      <SmartBoxCharacteristics />
      <Chips chipsData={SmartBoxChipsData2} />
      <SmartBoxBrochure />
    </PageLayout>
  );
};


export default SmartBox;
