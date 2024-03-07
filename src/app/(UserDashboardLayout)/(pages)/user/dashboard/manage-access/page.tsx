"use client";
import PageContainer from "@/app/(UserDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(UserDashboardLayout)/components/shared/DashboardCard";
import CustomTable from "@/app/component/ui/customTable";
import { useEffect, useState } from "react";
import { UserService } from "@services/user.service";
import AddManageAccessCodeDialog from "@/app/(UserDashboardLayout)/components/ui/dialogs/pages/manage-access/add";

const headers: string[] = ["Code", "Address"];

const ManageAccessUserDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<{ code: number; address: string }[]>([]);

  const getCurrentAccessList = () => {
    setIsLoading(true);
    UserService.getCurrentAccessList()
      .then((res) => {
        setData(res.accessList.accessListBins);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCurrentAccessList();
  }, []);

  const rowsData = data.map((item) => ({
    code: item.code,
    address: item.address,
  }));

  return (
    <>
      <PageContainer>
        <DashboardCard title="List Of All Access Point Bins">
          <CustomTable
            data={data}
            rows={rowsData}
            isLoading={isLoading}
            headers={headers}
            actionButtons={[
              (key)=><AddManageAccessCodeDialog key={key} refresh={getCurrentAccessList} />,
            ]}
            isCSV={true}
          />
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default ManageAccessUserDashboardPage;
