import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import Competitor from "./Competitor";
import Feed from "./Feed";
import Insight from "./Insight";
import Report from "./Report";


import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const navigate = useNavigate();
  const options = [
    { label: "Categories", value: "categories" },

    { label: "Brands", value: "brands" },

    { label: "Products", value: "products" },
  ];

  const competitors_option = [
    { label: "Products", value: "products" },
    { label: "Prices", value: "prices" },
  ];

  const insights_options = [
    { label: "Keywords", value: "keywords" },
    { label: "Sentiments", value: "sentiments" },
  ];

  const [feed, setFeed] = useState("categories");
  const [report, setReport] = useState("categories");
  const [competitor, setCompetitor] = useState("products");
  const [insight, setInsight] = useState("keywords");

  const handleFeedChange = (e) => {
    setFeed(e.target.value);
  };
  const handleReportChange = (e) => {
    setReport(e.target.value);
  };
  const handleCompetitorChange = (e) => {
    setCompetitor(e.target.value);
  };
  const handleInsightChange = (e) => {
    setInsight(e.target.value);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const Dropdown = ({ label, value, options, onChange, icon }) => {
    return (
      <label className="flex flex-col flex-grow items-center gap-2">
        {label}
        <select
          className="w-full border-2 text-black rounded-lg text-center hover:border-[#40e0d0] outline-none"
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      <div className="mx-4 lg:max-w-7xl lg:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4 md:my-8 p-2 md:p-6 bg-black rounded-lg text-white">
          <Dropdown
            label="Feedback"
            options={options}
            value={feed}
            onChange={handleFeedChange}
          />
          <Dropdown
            label="Reports"
            options={options}
            value={report}
            onChange={handleReportChange}
          />
          <Dropdown
            label="Competitors"
            options={competitors_option}
            value={competitor}
            onChange={handleCompetitorChange}
          />
          <Dropdown
            label="Insights"
            options={insights_options}
            value={insight}
            onChange={handleInsightChange}
          />
        </div>
        <div className="custom-container">
          <h1 className="text-slate-500 text-lg font-semibold">
            Choose Date Interval
          </h1>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
          <div className="flex text-sm text-slate-500 font-light mt-2">
            <p>{JSON.stringify(startDate.toLocaleDateString())} - </p>
            {endDate ? (
              <p> {JSON.stringify(endDate.toLocaleDateString())}</p>
            ) : (
              <p> Select end Date</p>
            )}
          </div>
        </div>
        <main>
            <section>
                <Feed/>
            </section>
            <section>
                <Report/>
            </section>
            <section>
                <Competitor/>
            </section>
            <section>
                <Insight insight={insight}/>
            </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
