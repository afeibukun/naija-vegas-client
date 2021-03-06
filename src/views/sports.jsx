import React from "react";
import { SportsBetDropDown } from "../components/exports";
import Footer from "../components/footers/mainFooter";

const Sports = () => {
  return (
    <div className="politics-bg ">
      <div className="container">
        <section className="section">
          <h1 className="pageHeader py-4 pl-4">Sport</h1>
          <div>
            <SportsBetDropDown id={1} betName={"Today"} />
            <SportsBetDropDown id={2} betName={"Champions League"} />
            <SportsBetDropDown id={3} betName={"Premier League"} />
            <SportsBetDropDown id={4} betName={"La Liga"} />
          </div>
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export { Sports };
