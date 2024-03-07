"use client";

import PageContainer from "@/app/(EnterpriseDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(EnterpriseDashboardLayout)/components/shared/DashboardCard";
import QuoteRequestForm from "@/app/(WebsiteLayout)/components/pages/quote-request/form";

const SpecificRequestEnterpriseDashboardPage = () => {
  return (
    <>
      <PageContainer>
        <DashboardCard title="Specific Request">
          <QuoteRequestForm dashboard={true}/>
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default SpecificRequestEnterpriseDashboardPage;
