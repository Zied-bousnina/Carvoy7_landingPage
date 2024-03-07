"use client";
import { useTheme } from "@mui/material/styles";
import React from "react";

const SkeletonTable = ({
  items,
  rowCount = 3,
  columnsCount = 5,
}: {
  items?: any;
  rowCount: number;
  columnsCount: number;
}) => {
  items = items || Array.from({ length: rowCount });
  const theme = useTheme();
  return (
    <div
      className={`w-full ${
        theme.palette.mode === "dark" ? "bg-slate-700" : "bg-white"
      } shadow-base p-6 rounded-md`}
    >
      <table className="animate-pulse w-full border-separate border-spacing-4 table-fixed">
        <thead>
          <tr>
            {Array.from({ length: columnsCount }).map((_, i) => (
              <th key={"Col1" + i} scope="col">
                <div
                  className={`h-4 ${
                    theme.palette.mode === "dark"
                      ? "bg-slate-500"
                      : "bg-[#C4C4C4]"
                  } `}
                ></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {items.map((_, i) => (
            <tr key={"Rows" + i}>
              {Array.from({ length: columnsCount }).map((_, i) => (
                <th key={"Col2" + i}>
                  <div
                    className={`h-2 ${
                      theme.palette.mode === "dark"
                        ? "bg-slate-500"
                        : "bg-[#C4C4C4]"
                    } `}
                  ></div>
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonTable;
