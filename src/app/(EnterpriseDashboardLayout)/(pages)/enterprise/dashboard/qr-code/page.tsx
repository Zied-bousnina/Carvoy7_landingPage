"use client";
import EnterpriseDashboardQrCodeScanner from "@/app/(EnterpriseDashboardLayout)/components/pages/scan/QRcode";
import PageContainer from "@/app/(UserDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(UserDashboardLayout)/components/shared/DashboardCard";

const ScanQrCodeEnterpriseDashboardPage = () => {


  return (
    <>
      <PageContainer>
        <DashboardCard
          title="Scan QR Code"
          subtitle="Scan the QR Code displayed on the SmartBin to claim the Rewards"
        >
          <EnterpriseDashboardQrCodeScanner />
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default ScanQrCodeEnterpriseDashboardPage;
