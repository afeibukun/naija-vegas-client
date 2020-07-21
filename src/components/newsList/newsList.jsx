import React from "react";
import { NewsCard } from "../../components/exports";
import "./newsList.css";

const NewsList = (props) => {
  return (
    <div>
      <section className="news_list px-4 pb-4 pt-2">
        <h2>Sports News</h2>
        <div className="row mx-0">
          {props.data.length > 0 &&
            props.data.map((news, i) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <NewsCard news={news} />
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export { NewsList };
