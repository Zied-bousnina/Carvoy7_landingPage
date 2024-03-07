"use client";
import PageContainer from "@/app/(UserDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(UserDashboardLayout)/components/shared/DashboardCard";
import { BinPointService } from "@services/binPoint.service";
import { useEffect, useState } from "react";
import CustomTabs from "@/app/component/ui/tabs";
import CustomTable from "@/app/component/ui/customTable";
import dynamic from 'next/dynamic';

const UserDashboardMap = dynamic(
    () => import('@/app/(UserDashboardLayout)/components/pages/dashboard/map'),
    { ssr: false }
);

//tabs headers
const tabHeaders: string[] = ["Map", "Bins list"];

//bins list tab table headers
const binsListTableHeaders: string[] = [
  "Id",
  "Name",
  "Address",
  "Gaz",
  "Level",
];

const HomeUserDashboard = () => {
  const [binsPointsData, setBinsPointsData] = useState<any[]>([]);
  const [isBinsLoading, setIsBinsLoading] = useState(false);

  //get all bins points data
  const getAllBinPoints = () => {
    setIsBinsLoading(true);
    BinPointService.getAll()
      .then((res) => {
        setBinsPointsData(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsBinsLoading(false);
      });
  };
  useEffect(() => {
    getAllBinPoints();
  }, []);

  const binsListRowsData = binsPointsData
    .map((binPoint) => binPoint.bins)
    .flat()
    .map((bin) => ({
      id: bin._id,
      name: bin.name,
      address: bin.address,
      topicGaz: bin.topicGaz,
      niv: bin.niv + "%",
    }));

  const binsListData = binsPointsData.map((binPoint) => binPoint.bins).flat();

  return (
    <PageContainer>
      <DashboardCard title="Nearby smart bins">
        <>
          <CustomTabs
            headers={tabHeaders}
            content={[
              (key) => (
                <UserDashboardMap
                  key={key}
                  binsPointsData={binsPointsData}
                  isBinsLoading={isBinsLoading}
                />
              ),
              (key) => (
                <CustomTable
                  key={key}
                  data={binsListData}
                  rows={binsListRowsData}
                  isLoading={isBinsLoading}
                  headers={binsListTableHeaders}
                  isCSV={true}
                />
              ),
            ]}
          />
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default HomeUserDashboard;
