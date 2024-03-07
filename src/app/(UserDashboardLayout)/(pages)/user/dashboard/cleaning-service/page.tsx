"use client";
import PageContainer from "@/app/(UserDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(UserDashboardLayout)/components/shared/DashboardCard";
import CustomTable from "@/app/component/ui/customTable";
import { useEffect, useState } from "react";
import { CleaningServiceService } from "@services/cleaningService.service";
import moment from "moment";
import AddCleaningServiceDialog from "@/app/(UserDashboardLayout)/components/ui/dialogs/pages/cleaning-service/add";
import DeleteCleaningServiceDialog from "@/app/(UserDashboardLayout)/components/ui/dialogs/pages/cleaning-service/delete";

const headers: string[] = ["Status", "Description", "Created At"];

const CleaningServiceUserDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<
    { AdminAccept: string; description: string; createdAt: string }[]
  >([]);

  const getCleaningService = () => {
    setIsLoading(true);
    CleaningServiceService.getCleaningService()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCleaningService();
  }, []);

  const rowsData = data.map((item) => ({
    AdminAccept: item.AdminAccept,
    description: item.description,
    createdAt: moment(item.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
  }));

  return (
    <>
      <PageContainer>
        <DashboardCard title="List Of Cleaning Service Request Created By You">
          <CustomTable
            data={data}
            rows={rowsData}
            isLoading={isLoading}
            headers={headers}
            actionButtons={[
              (key)=><AddCleaningServiceDialog key={key} refresh={getCleaningService} />,
            ]}
            actionMenuItems={[
              (closeMenu, singleItemData,key) => {
                return (
                  <DeleteCleaningServiceDialog
                    key={key}
                    refresh={getCleaningService}
                    closeMenu={closeMenu}
                    singleItemData={singleItemData}
                  />
                );
              },
            ]}
            isCSV={true}
          />
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default CleaningServiceUserDashboardPage;
