import { Icon } from "@iconify/react";
import { Avatar } from "@mui/material";
import React from "react";

const Chips = ({ chipsData, }) => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className={`grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-2 xl:gap-16`}>
          {chipsData.map((chipData, index) => (
            <div key={index} className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg  text-white md:h-14 md:w-14 md:rounded-xl">
                <Avatar
                  sx={{
                    bgcolor: "primary.light",
                    color: "primary.main",
                    width: 50,
                    height: 50,
                    borderRadius: "18px",
                  }}
                >
                  {" "}
                  <Icon icon={chipData.icon} />
                </Avatar>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  {chipData.title}
                </h3>
                <p className="mb-2 text-gray-500">
                  {chipData.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chips;
