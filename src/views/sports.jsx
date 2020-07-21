import React from "react";
import { SportsBetDropDown, NewsList } from "../components/exports";
import newsImage from "../assets/img/banners/newImage.png";
const Sports = () => {

  const data = [
    {
      image: newsImage,
      brief:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      image: newsImage,
      brief:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      image: newsImage,
      brief:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  
  ];
  return (
    <div className="politics-bg">
      <h1 className="pageHeader py-4 pl-4">Sport</h1>
      <section>
        <SportsBetDropDown id={1} betName={"Today"} />
        <SportsBetDropDown id={2} betName={"Champions League"} />
        <SportsBetDropDown id={3} betName={"Premier League"} />
        <SportsBetDropDown id={4} betName={"La Liga"} />
      </section>

      <NewsList data={data}/>
    </div>
  );
};

export { Sports };
