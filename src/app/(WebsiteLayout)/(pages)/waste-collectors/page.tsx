"use client"
import React from "react";
import PageLayout from "../../layout/layout";
import Chips from "../../components/ui/chips";
import { WasteCollectorsChipData  } from "../../constant/data";
import WasteCollectorsHero from "../../components/pages/waste-collectors/hero";
const WasteCollectors = () => {
  return (
    <PageLayout>
        <WasteCollectorsHero/>
      <Chips chipsData={WasteCollectorsChipData}/>
    </PageLayout>
  );
};

export default WasteCollectors;