"use client";

import CustomTable from "@/app/component/ui/customTable";
import { useEffect, useState } from "react";
import PageContainer from "@/app/(AdminDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(AdminDashboardLayout)/components/shared/DashboardCard";
import { MunicipalRequestsService } from "@services/municipalRequests.service";

const headers: string[] = [
  "Municipal",
  "Governorate",
  "Description",
  "Status",
];

const MunicipalRequestsAdminDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<
    {
      municipal: string;
      governorate: string;
      description: string;
      Status: string;
    }[]
  >([]);

  const getAllMunicipalRequests = () => {
    setIsLoading(true);
    MunicipalRequestsService.getAll()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllMunicipalRequests();
  }, []);
  const rowsData = data.map((item: any) => ({
    municipal: item?.municipal,
    governorate: item?.governorate,
    description: item?.description,
    Status: item?.status,
  }));

  return (
    <>
      <PageContainer>
        <DashboardCard title="List Of Municipal Requests">
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
