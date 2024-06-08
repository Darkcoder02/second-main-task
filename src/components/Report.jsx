import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { useMediaQuery } from "@mui/material";
import reportData from "../data/reportData";

const Report = () => {
  const isLargeScreen = useMediaQuery('(min-width:900px)');
  const chartSetting = {
    width: isLargeScreen ? 700 : 380,
    height: isLargeScreen ? 500 : 250,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };

  return (
    <div className="custom-container">
      <h1 className="text-xl font-semibold text-slate-500 lg:text-4xl">Report</h1>
      <BarChart
        dataset={reportData}
        xAxis={[{ scaleType: "band", dataKey: "month",label:"categories"}]}
        series={[
          { dataKey: "Grocery", label: "Grocery" },
          { dataKey: "Electronics", label: "Electronics" },
          { dataKey: "Fashion", label: "Fashion" },
        ]}
        yAxis={[{ scaleType:"continues",label:"Avg Sales" }]}
        margin={{left: 59}}
        {...chartSetting}
      />
    </div>
  );
};

export default Report;
