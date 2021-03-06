import React from "react";
import { BetDropDown } from "../components/exports";
import Footer from "../components/footers/mainFooter";
import "./views.css";
const Politics = () => {
  return (
    <main class="politics-bg ">
      <div className="container">
        <section className="section">
          <h1 className="pageHeader py-4 pl-4">Politics</h1>
          <div>
            <BetDropDown id={1} betName="USA Presidential Election" />
            <BetDropDown id={2} betName="NIG Presidential Election " />
            <BetDropDown id={3} betName="GHA Presidential Election " />
            <BetDropDown id={4} betName="GER Presidential Election " />
          </div>
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export { Politics };
