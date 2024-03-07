"use client";
import React, { useEffect, useState, useMemo } from "react";
import StatsCard from "@/app/component/ui/cards/statsCard";
import { BinPointService } from "@services/binPoint.service";
import { UserService } from "@services/user.service";

export default function EnterpriseDashboardLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [binsData, setBinsData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  // Adjusted to immediately return the promise from the service call
  const getAllBinPoints = () => {
    return BinPointService.getAllBinPoints()
      .then((res) => {
        setBinsData(res.pointBins);
      })
      .catch((err) => console.log(err));
  };

  // Adjusted to immediately return the promise from the service call
  const getAllUsers = () => {
    return UserService.getAllUsers()
      .then((res) => {
        setUsersData(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getAllBinPoints(), getAllUsers()])
      .then(() => {
        // Data fetching is complete, so we can set isLoading to false
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  // Memoization examples remain unchanged
  const processedBinsData = useMemo(
    () => binsData.map((bin: any) => ({ ...bin, processed: true })),
    [binsData]
  );
  const processedUsersData = useMemo(
    () => usersData.map((user: any) => ({ ...user, processed: true })),
    [usersData]
  );

  return (
    <>
      <div className="flex gap-8 flex-col sm:flex-row mt-4 mb-8">
        <StatsCard
          icon="solar:trash-bin-2-line-duotone"
          title="Bins count"
          value={isLoading ? null : processedBinsData.length} // Displays counts or loading
          isLoading={isLoading}
        />
        <StatsCard
          icon="solar:users-group-two-rounded-broken"
          title="Users count"
          value={isLoading ? null : processedUsersData.length} // Displays counts or loading
          isLoading={isLoading}
        />
        <StatsCard
          icon="heroicons:truck"
          title="Urban count"
          value={4} // Example, possibly update similarly based on actual data
        />
      </div>
      {children}
    </>
  );
}
