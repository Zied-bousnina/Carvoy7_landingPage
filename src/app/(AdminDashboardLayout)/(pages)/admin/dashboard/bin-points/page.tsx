"use client";

import CustomTable from "@/app/component/ui/customTable";
import { useEffect, useState } from "react";
import PageContainer from "@/app/(AdminDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(AdminDashboardLayout)/components/shared/DashboardCard";
import DeleteBinsDialog from "@/app/(AdminDashboardLayout)/components/ui/dialogs/pages/bins/delete";
import UpdateBinsDialog from "@/app/(AdminDashboardLayout)/components/ui/dialogs/pages/bins/update";
import { BinPointService } from "@services/binPoint.service";

const headers: string[] = [
  "Name/ Company Name",
  "Address",
  "Phone",
  "Access code",
  "type of bins",
];

const BinPointsAdminDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<
    {
      name: string;
      address: string;
      phone: string;
      AccessCode: string;
      type: string;
    }[]
  >([]);

  const getAllBinPoints = () => {
    setIsLoading(true);
    BinPointService.getAllBinPoints()
      .then((res) => {
        setData(res.pointBins);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllBinPoints();
  }, []);
  const rowsData = data.map((item: any) => ({
    name: item?.quoteDemande?.name,
    address: item?.address,
    phone: item?.quoteDemande.tel,
    AccessCode: item?.code,
    type: item?.bins[0]?.type || "N/A",
  }));

  return (
    <>
      <PageContainer>
        <DashboardCard title="List Of All Bin Points">
          <CustomTable
            data={data}
            rows={rowsData}
            isLoading={isLoading}
            headers={headers}
            isCSV={true}
            actionMenuItems={[
              (closeMenu, singleItemData, key) => {
                return (
                  <UpdateBinsDialog
                    key={key}
                    refresh={getAllBinPoints}
                    closeMenu={closeMenu}
                    singleItemData={singleItemData}
                  />
                );
              },
              (closeMenu, singleItemData, key) => {
                return (
                  <DeleteBinsDialog
                    key={key}
                    refresh={getAllBinPoints}
                    closeMenu={closeMenu}
                    singleItemData={singleItemData}
                  />
                );
              },
            ]}
          />
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default BinPointsAdminDashboardPage;
