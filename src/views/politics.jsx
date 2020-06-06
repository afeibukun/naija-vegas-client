import React from "react";
import { BetDropDown } from "../components/exports";
import "./views.css";
const Politics = () => {
  return (
    <main class="politics-bg">
      <h1>Politics</h1>
      <section>
        <BetDropDown id={1} betName="USA Presidential Election" />
        <BetDropDown id={2} betName="NIG Presidential Election " />
        <BetDropDown id={3} betName="GHA Presidential Election " />
        <BetDropDown id={4} betName="GER Presidential Election " />
      </section>
    </main>
  );
};

export { Politics };
