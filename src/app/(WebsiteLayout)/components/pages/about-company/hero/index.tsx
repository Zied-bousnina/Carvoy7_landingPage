import { Box } from "@mui/material";
import React from "react";

const ABoutCompanyHero = () => {
  return (
    <Box
    overflow="hidden"
    borderRadius="0"
    sx={{
      backgroundColor: (theme) => theme.palette.background.paper,

    }}

  >
    <section className="flex flex-col justify-center  sm:gap-32 lg:flex-row lg:pl-40 lg:pr-12  px-8 mt-12 items-center">
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p className="mb-4 font-semibold text-[#0085db] md:mb-6 md:text-lg xl:text-xl">
          Very proud to introduce
        </p>
        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
          XGENBOX positions itself as an innovative company in the field of
          green technology, offering environmentally friendly waste management
          solutions for the smart and sustainable cities of the future. Its
          current range of products includes an integrated IoT-based solution,
          which significantly improves waste collection efficiency while
          promoting a greener environment and cleaner communities.
        </p>
        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
          The company aims to help cities and waste collection organizations
          reduce their operational costs by eliminating unnecessary collections,
          providing dynamic collection routes and schedules for full
          optimization of collection operations. By reducing the costs and labor
          associated with these services, XGENBOX ensures transparency and
          increases operational efficiency in the waste collection chain.
        </p>
        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
          Furthermore, XGENBOX’s eco-friendly waste management solutions improve
          public cleanliness by reducing the impact of overflowing trash bins.{" "}
        </p>


      </div>

      <div className="sm:h-auto h-48 w-full overflow-hidden  lg:h-auto xl:w-5/12 rounded-xl shadow-lg">
        <img
          src="/images/pages/about-company/office-wall.png"
          loading="lazy"
          alt="img"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section></Box>
  );
};

export default ABoutCompanyHero;
