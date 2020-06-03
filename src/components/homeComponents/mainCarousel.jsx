import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";

import banner1 from "../../assets/img/banners/banner01.jpg";
import banner2 from "../../assets/img/banners/banner02.jpg";
import banner3 from "../../assets/img/banners/banner03.jpg";

class MainCarousel extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption>
              {/*<h3></h3>
              <p></p>*/}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Third slide" />

            <Carousel.Caption>
              {/*<h3></h3>
              <p></p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner3} alt="Third slide" />

            <Carousel.Caption>
              {/*<h3></h3>
              <p></p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default MainCarousel;
