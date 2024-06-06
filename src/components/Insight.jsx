import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useMediaQuery } from "@mui/material";
import sentimentData from "../data/sentimentData";
import wordData from "../data/wordData";
import ReactWordcloud from "react-wordcloud";
import cardData from "../data/cardData.js";
import Card from './Card';

const Insight = ({ insight }) => {
  const options = {
    rotations: 1,
    rotationAngles: [0],
  };

    console.log(cardData);
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const size = [isLargeScreen ? 700 : 300, 350];

  const chartSetting = {
    width: isLargeScreen ? 700 : 380,
    height: isLargeScreen ? 500 : 350,
  };

  return (
    <div className="custom-container">
      <h1 className="text-xl font-semibold text-slate-500 lg:text-4xl">
        Insights
      </h1>
      {insight === "keywords" && (
        <div>
          <div className="mt-6">
            <BarChart
              dataset={sentimentData}
              xAxis={[
                {
                  scaleType: "band",
                  dataKey: "attribute",
                  min: -1,
                  max: 1,
                },
              ]}
              series={[
                { dataKey: "value", label: "Sentiment for My products" },
              ]}
              {...chartSetting}
              bottomAxis={{
                labelStyle: {
                  fontSize: 10,
                },
                tickLabelStyle: {
                  angle: 25,
                  textAnchor: "start",
                  fontSize: 10,
                },
              }}
            />
          </div>
          <div className="flex items-center rounded-lg mt-6">
            <ReactWordcloud className="border-8 m-6 rounded-3xl"options={options} size={size} words={wordData} />
          </div>
        </div>
      )}
      {insight === "sentiments" && 
      <div className="mt-6 lg:gap-16 gap-4 grid grid-cols-1 md:grid-cols-2">
        {cardData.map((item)=>(
            <Card headingtext={item.heading} basetext={item.base}/>
        ))}
        </div>}
    </div>
  );
};

export default Insight;
