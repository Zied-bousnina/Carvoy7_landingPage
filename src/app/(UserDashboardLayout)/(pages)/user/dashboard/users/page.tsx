"use client";
import PageContainer from "@/app/(UserDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(UserDashboardLayout)/components/shared/DashboardCard";
import CustomTable from "@/app/component/ui/customTable";
import { useEffect, useState } from "react";
import { UserService } from "@services/user.service";

const headers: string[] = ["Email", "Name", "Score"];

const UsersUserDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<
    { email: string; name: string; score: any }[]
  >([]);

  const geUsersWithSameBinAccessCode = () => {
    setIsLoading(true);
    UserService.getAllUsersWithSameBinAccessCode()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    geUsersWithSameBinAccessCode();
  }, []);

  const rowsData = data.map((item) => ({
    email: item.email,
    name: item.name,
    score: item.score.score,
  }));

  return (
    <>
      <PageContainer>
        <DashboardCard title="Users Who Have The Same Access Bin">
          <CustomTable
            data={data}
            rows={rowsData}
            isLoading={isLoading}
            headers={headers}
            isCSV={true}
          />
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default UsersUserDashboardPage;
