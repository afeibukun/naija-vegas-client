import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ReactCountryFlag from "react-country-flag";

const TrendingBets = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="transform-perspective-left">
            <Carousel
              style={{ borderRadius: "10px", overflow: "hidden" }}
              activeIndex={index}
              onSelect={handleSelect}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://static01.nyt.com/images/2020/03/22/us/politics/22trump-wartime-03/22trump-wartime-03-mediumSquareAt3X-v3.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  {/*<h3></h3>
                  <p></p>*/}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://psmag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODk2MjI5MjUzMDMxMjQx/gettyimages-1020986360.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  {/*<h3></h3>
                  <p></p>*/}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/400"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  {/*<h3></h3>
                  <p></p>*/}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <h2 className="display-3">Trending Bets</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div>
              <div>
                <div
                  className={`bet-description mb-2 px-2 py-2 pr-5 d-inline-block text-white ${
                    index === 0 ? "active" : ""
                  }`}
                >
                  <p className="head m-0">
                    <span className="text-uppercase mr-2">
                      Trump Re-election
                    </span>
                    <span>20:00</span>
                  </p>
                  <p className="foot m-0">
                    <span className="mr-2">
                      <ReactCountryFlag countryCode="US" svg />
                    </span>
                    <span>US Election</span>
                  </p>
                </div>

                <div
                  className={`bet-description mb-2 px-2 py-2 pr-5 d-inline-block text-white ${
                    index === 1 ? "active" : ""
                  }`}
                >
                  <p className="head m-0">
                    <span className="text-uppercase mr-2">
                      Trump Re-election
                    </span>
                    <span>20:00</span>
                  </p>
                  <p className="foot m-0">
                    <span className="mr-2">
                      <ReactCountryFlag countryCode="US" svg />
                    </span>
                    <span>US Election</span>
                  </p>
                </div>

                <div
                  className={`bet-description mb-2 px-2 py-2 pr-5 d-inline-block text-white ${
                    index === 2 ? "active" : ""
                  }`}
                >
                  <p className="head m-0">
                    <span className="text-uppercase mr-2">
                      Trump Re-election
                    </span>
                    <span>20:00</span>
                  </p>
                  <p className="foot m-0">
                    <span className="mr-2">
                      <ReactCountryFlag countryCode="US" svg />
                    </span>
                    <span>US Election</span>
                  </p>
                </div>
              </div>
              <a
                href="https://www.example.com"
                className="mt-2 mb-3 mb-sm-0 btn btn-default btn-lg px-5 py-2 text-uppercase btn-round"
              >
                <span className="btn-inner--text">BET NOW</span>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TrendingBets;
