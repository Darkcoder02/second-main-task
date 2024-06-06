import React from "react";
import Carousel from "react-elastic-carousel";
import competitorData from "../data/competitorData";

const Competitor = () => {
  const breakPoint = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="custom-container">
      <h1 className="text-xl font-semibold text-slate-500 lg:text-4xl">
        Competitors
      </h1>
      <Carousel
        className="p-2 lg:p-8"
        breakPoints={breakPoint}
        enableAutoPlay
        autoPlaySpeed={5500}
        infinite
      >
        {competitorData.map((item) => (
          <item>
            <div
              className="min-h-full flex items-center flex-col justify-center gap-4"
              key={item.image}
            >
              <img
                className="h-44 w-60 object-fill rounded-xl"
                src={item.image}
                alt=''
              />
              <p className="right-50 text-center text-slate-400 font-bold">
                {item.name}
              </p>
            </div>
          </item>
        ))}
      </Carousel>
    </div>
  );
};

export default Competitor;
