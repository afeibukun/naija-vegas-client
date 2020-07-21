import React from "react";
import specialImg from "../assets/img/banners/special_bet.png";
import { SportsBetDropDown, NewsList } from "../components/exports";
import newsImage from "../assets/img/banners/newImage.png";


const Specials = () => {

  
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
    <div>
      <div className="row mx-0 ">
        <div className="col-12">
          <h2>Special Bets</h2>
          <header className="bar_header mb-4 ">All</header>

          <section className="row mx-0">
            <div className="col-md-2">
              <div>
                <img src={specialImg} />
              </div>
            </div>
            <div className="col-md-10">
              <div className="card card-body"></div>
            </div>
          </section>
        </div>
      </div>
      <NewsList data={data} />
    </div>
  );
};

export { Specials };
