"use client";

import CustomTable from "@/app/component/ui/customTable";
import { useEffect, useState } from "react";
import PageContainer from "@/app/(AdminDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(AdminDashboardLayout)/components/shared/DashboardCard";
import { QuoteRequestsService } from "@services/quoteResquests.service";

const headers: string[] = [
  "User",
  "Email",
  "Phone",
  "City",
  "Country",
  "Status",
];

const MunicipalRequestsAdminDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getAllQuoteRequests = () => {
    setIsLoading(true);
    QuoteRequestsService.getAll()
      .then((res) => {
        setData(res.quotes);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllQuoteRequests();
  }, []);
  const rowsData = data.map((item: any) => ({
    user: item?.name,
    email: item?.email,
    city: item?.city,
    phone: item?.tel,
    country: item?.country,
    Status: item?.status,
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
     
          />
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default MunicipalRequestsAdminDashboardPage;
