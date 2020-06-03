import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { IoIosArrowForward } from "react-icons/io";

const LatestTips = () => {
  return (
    <Container>
      <h3 className="h4 text-success font-weight-bold mb-4">Latest Tips</h3>
      <div className="mb-3">
        <small className="text-uppercase font-weight-bold">
          News and Updates
        </small>
      </div>
      <Row>
        <Col>
          <div className="news-container card">
            <div className="news-image">
              <img
                className="img-fluid"
                src="https://picsum.photos/400/300"
                alt="news-Img"
              />
            </div>
            <div className="news-content p-2">
              <p className="lead mb-0 mt-0 font-weight-bold">Betting 101</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="news-container card">
            <div className="news-image">
              <img
                className="img-fluid"
                src="https://picsum.photos/400/300"
                alt="news-Img"
              />
            </div>
            <div className="news-content p-2">
              <p className="lead mb-0 mt-0 font-weight-bold">Betting 101</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="news-container card">
            <div className="news-image">
              <img
                className="img-fluid"
                src="https://picsum.photos/400/300"
                alt="news-Img"
              />
            </div>
            <div className="news-content p-2">
              <p className="lead mb-0 mt-0 font-weight-bold">Betting 101</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="mt-3">
        <button className="btn btn-transparent text-uppercase font-weight-bold">
          See More <IoIosArrowForward />
        </button>
      </div>
    </Container>
  );
};

export default LatestTips;
