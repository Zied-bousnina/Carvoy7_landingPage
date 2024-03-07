"use client";

import CustomTable from "@/app/component/ui/customTable";
import { useEffect, useState } from "react";
import { UserService } from "@services/user.service";
import PageContainer from "@/app/(AdminDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(AdminDashboardLayout)/components/shared/DashboardCard";

const headers: string[] = [
  "Name",
  "Email",
  "Address",
  "Phone",
  "City",
  "Country",
];

const UsersAdminDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<
    {
      name: any;
      email: any;
      address: string;
      phone: string;
      city: string;
      country: string;
    }[]
  >([]);

  const geAllUsers = () => {
    setIsLoading(true);
    UserService.getAllUsers()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    geAllUsers();
  }, []);

  const rowsData = data.map((item: any) => ({
    name: item?.user?.name,
    email: item?.user?.email,
    address: item?.address,
    phone: item?.tel,
    city: item?.city,
    country: item?.country,
  }));

  return (
    <>
      <PageContainer>
        <DashboardCard title="List Of All Users">
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

export default UsersAdminDashboardPage;
