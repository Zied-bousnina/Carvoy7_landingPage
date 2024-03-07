"use client";

import CustomTable from "@/app/component/ui/customTable";
import { useEffect, useState } from "react";
import PageContainer from "@/app/(AdminDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(AdminDashboardLayout)/components/shared/DashboardCard";
import { BinService } from "@services/bin.service";
import AddBinsDialog from "@/app/(AdminDashboardLayout)/components/ui/dialogs/pages/bins/add";
import DeleteBinsDialog from "@/app/(AdminDashboardLayout)/components/ui/dialogs/pages/bins/delete";
import UpdateBinsDialog from "@/app/(AdminDashboardLayout)/components/ui/dialogs/pages/bins/update";

const headers: string[] = [
  "Name",
  "Address",
  "Gaz",
  "Level",
];

const BinsAdminDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<
    {
      name: string;
      address:string;
      Gaz: string;
      level: string;
    }[]
  >([]);

  const getAllBins = () => {
    setIsLoading(true);
    BinService.getAllBins()
      .then((res) => {
        setData(res.bins);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllBins();
  }, []);

  const rowsData = data.map((item: any) => ({
    name: item?.name,
    address: item?.address,
    Gaz: item?.topicGaz,
    level: item?.niv,

  }));

  return (
    <>
      <PageContainer>
        <DashboardCard title="List Of All Bins">
          <CustomTable
            data={data}
            rows={rowsData}
            isLoading={isLoading}
            headers={headers}
            isCSV={true}
            actionButtons={[
                (key)=><AddBinsDialog key={key} refresh={getAllBins}/>
            ]}
            actionMenuItems={[
                (closeMenu, singleItemData,key) => {
                  return (
                    <UpdateBinsDialog
                      key={key}
                      refresh={getAllBins}
                      closeMenu={closeMenu}
                      singleItemData={singleItemData}
                    />
                  );
                },
                (closeMenu, singleItemData,key) => {
                  return (
                    <DeleteBinsDialog
                      key={key}
                      refresh={getAllBins}
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

export default BinsAdminDashboardPage;
