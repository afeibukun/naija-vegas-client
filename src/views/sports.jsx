import React from "react";
import { SportsBetDropDown } from "../components/exports";
const Sports = () => {
  return (
    <div className="politics-bg">
      <h1 className="pageHeader py-4 pl-4">Sport</h1>
      <section>
        <SportsBetDropDown id={1} betName={"Today"} />
        <SportsBetDropDown id={2} betName={"Champions League"} />
        <SportsBetDropDown id={3} betName={"Premier League"} />
        <SportsBetDropDown id={4} betName={"La Liga"} />
      </section>
    </div>
  );
};

export { Sports };
