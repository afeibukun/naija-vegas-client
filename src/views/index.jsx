import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Sliders from "../components/sliders";

import MainCarousel from "../components/homeComponents/mainCarousel";
import TrendingBets from "../components/homeComponents/trendingBets";
import LatestTips from "../components/homeComponents/latestTips";
import CustomerService from "../components/homeComponents/customerService";

import MainFooter from "../components/footers/mainFooter";

const HomePage = () => {
  return (
    <div>
      <section className="carousel-section">
        <MainCarousel />
      </section>
      <section className="trending-bet-section section section-lg">
        <TrendingBets />
      </section>
      <section className="section p-0 section-components">
        <div className="py-5 bg-secondary">
          <LatestTips />
        </div>
      </section>
      <section className="customer-service-section section section-lg">
        <CustomerService />
      </section>
      <MainFooter />
    </div>
  );
};

export default HomePage;
