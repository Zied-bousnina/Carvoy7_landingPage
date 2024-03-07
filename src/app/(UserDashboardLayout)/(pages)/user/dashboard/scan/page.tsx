"use client";
import PageContainer from "@/app/(UserDashboardLayout)/components/container/PageContainer";
import UserDashboardQrCodeScanner from "@/app/(UserDashboardLayout)/components/pages/scan/QRcode";
import DashboardCard from "@/app/(UserDashboardLayout)/components/shared/DashboardCard";

const ScanQrCodeUserDashboardPage = () => {


  return (
    <>
      <PageContainer>
        <DashboardCard
          title="Scan QR Code"
          subtitle="Scan the QR Code displayed on the SmartBin to claim the Rewards"
        >
          <UserDashboardQrCodeScanner />
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default ScanQrCodeUserDashboardPage;
