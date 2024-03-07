"use client";

import StatsCard from "@/app/component/ui/cards/statsCard";

// import { useSelector } from "@/store/hooks";
// import { ScoreService } from "@services/score.service";
// import { useEffect } from "react";

export default async function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  // const getScoreStats = () => {
  //   ScoreService.getScore()
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getScoreStats()
  // }, []);



  return (
    <>
   <div className="flex gap-8 flex-col sm:flex-row mt-4 mb-8">
        <StatsCard
          icon="solar:arrow-right-up-outline"
          title="USER SCORE"
          value={8}
          isPercentage={true}
        />
        <StatsCard icon="solar:gift-bold" title="ALL GIFT COUNT" value={0} />
      </div>
      {children}
    </>
  );
}
