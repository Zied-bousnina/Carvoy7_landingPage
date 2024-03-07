"use client";

import CustomTable from "@/app/component/ui/customTable";
import { useEffect, useState } from "react";
import PageContainer from "@/app/(AdminDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(AdminDashboardLayout)/components/shared/DashboardCard";
import { ContactRequestsService } from "@services/contactRequests.service";

const headers: string[] = [
  "User",
  "Email",
  "Phone",
  "City",
  "Country",
  "Status",
];

const ContactRequestsAdminDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getAllContactRequests = () => {
    setIsLoading(true);
    ContactRequestsService.getAll()
      .then((res) =>{
        setData(res.Contacts);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllContactRequests();
  }, []);
  const rowsData = data.map((item: any) => ({
    user: item?.name,
    email: item?.email,
    phone: item?.tel,
    city: item?.city,
    country: item?.country,
    Status: item?.status,
  }));

  return (
    <>
      <PageContainer>
        <DashboardCard title="List Of Quote Requests">
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

export default ContactRequestsAdminDashboardPage;
