import React from "react";
import { FaStar } from "react-icons/fa";
import GaugeChart from "react-gauge-chart";

const Card = ({ headingtext, basetext, value }) => {
  return (
    <div className="bg-slate-300 flex flex-col lg:flex-row justify-center border-2 p-2 rounded-lg">
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="text-xl text-slate-600">{headingtext}</p>
        <p>{basetext}</p>
        <div className="flex items-center bg-white p-1 gap-1 rounded-md mb-2">
          <FaStar />
          <p>reviews</p>
        </div>
      </div>
      <div>
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={5}
          colors={["red", "orange", "green"]}
          arcWidth={0.2}
          percent={value}
          textColor={"black"}
          hideText={false} 
          animate={true}
        />
      </div>
    </div>
  );
};

export default Card;
