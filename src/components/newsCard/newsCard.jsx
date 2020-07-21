import React from "react";
const NewsCard = (props) => {
    var {news} = props
  return (
    <div className="card mb-4" style={{ width: "18rem" }}>
      <img src={news.image} className="card-img-top" alt="..." />
      <article class="card-body brief_bg">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{news.brief}</p>
      </article>
    </div>
  );
};

export {NewsCard};
