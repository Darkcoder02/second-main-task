import React from "react";
import feedsData from "../data/feedsData";
import { BarChart } from "@mui/x-charts/BarChart";
import { useMediaQuery } from "@mui/material";

const Feed = () => {
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const chartSetting = {
    width: isLargeScreen ? 700 : 380,
    height: isLargeScreen ? 500 : 250,
  };

  return (
    <div className="custom-container">
      <h1 className="text-xl font-semibold text-slate-500 lg:text-4xl">Feeds</h1>
      <div className="flex flex-col items-center justify-center">
        <BarChart
          dataset={feedsData["feeds_categories"]}
          yAxis={[
            {
              scaleType: "band",
              dataKey: "image",
            },
          ]}
          series={[{ dataKey: "count" }]}
          layout="horizontal"
          {...chartSetting}
          bottomAxis={null}
        />
        <p className="text-center text-slate-600 font-semibold">
          {feedsData["percent-feeds"]}%
        </p>
        <p className="text-center text-slate-600 font-light">
          Total feeds: {feedsData["total-feeds"]}
        </p>
      </div>
    </div>
  );
};

export default Feed;
