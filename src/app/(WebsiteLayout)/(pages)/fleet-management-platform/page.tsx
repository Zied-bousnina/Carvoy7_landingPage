"use client";
import React from "react";
import PageLayout from "../../layout/layout";
import FleetManagementPlatformHero from "../../components/pages/fleet-management-platform/hero";
import Chips from "../../components/ui/chips";
import { FleetManagementPlatformChipsData1,FleetManagementPlatformChipsData2 } from "../../constant/data";
import FleetManagementPlatformQuestions from "../../components/pages/fleet-management-platform/questions";
import FleetManagementPlatformDownloads from "../../components/pages/fleet-management-platform/downloads";
const FleetManagementPlatform = () => {
  return (
    <PageLayout>
      <FleetManagementPlatformHero />
      <Chips chipsData={FleetManagementPlatformChipsData1} />
      <FleetManagementPlatformQuestions />
      <Chips chipsData={FleetManagementPlatformChipsData2} />
      <FleetManagementPlatformDownloads />
    </PageLayout>
  );
};

export default FleetManagementPlatform;
