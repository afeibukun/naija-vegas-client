import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/img/brand/NaijaVegasLogoRectSmall.png";
import { IoIosMail, IoIosPhonePortrait } from "react-icons/io";
const MainFooter = () => {
  return (
    <footer className="footer text-white" style={{ backgroundColor: "#000" }}>
      <Container>
        <Row className="row-grid my-md row">
          <Col className="">
            <small className="text-uppercase text-muted font-weight-bold">
              Help Desk
            </small>
            <ul>
              <li>
                <small>How To Play</small>
              </li>
              <li>
                <small>FAQs</small>
              </li>
              <li>
                <small>Customer Support</small>
              </li>
              <li>
                <small>Self Service</small>
              </li>
            </ul>
          </Col>
          <Col className="">
            <small className="text-uppercase text-muted font-weight-bold">
              Legal
            </small>
            <ul>
              <li>
                <small>Terms and Conditions</small>
              </li>
              <li>
                <small>Privacy Policy</small>
              </li>
            </ul>
          </Col>
          <Col className="">
            <small className="text-uppercase text-muted font-weight-bold">
              Contact
            </small>
            <ul>
              <li>
                <small>Get In Touch</small>
              </li>
              <li>
                <small>
                  <IoIosMail />
                  support@naijavegas.com
                </small>
              </li>
              <li>
                <small>
                  <IoIosPhonePortrait />
                  +23480naijavegas.com
                </small>
              </li>
            </ul>
          </Col>
          <Col className="">
            <small className="text-uppercase text-muted font-weight-bold">
              Categories
            </small>
            <ul>
              <li>
                <small>Politics</small>
              </li>
              <li>
                <small>Sports</small>
              </li>
              <li>
                <small>Awards</small>
              </li>
              <li>
                <small>Special Bets</small>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className="w-100 text-center mb-3">
            <img src={Logo} alt="logo" style={{ height: "40px" }} />
          </div>
          <div className="w-100 text-center">
            <a
              href="https://twitter.com/naijavegas"
              id="tooltip475038074"
              target="_blank"
              className="btn-icon-only rounded-circle btn btn-twitter"
            >
              <span className="btn-inner--icon">
                <i className="fa fa-twitter"></i>
              </span>
            </a>
            <a
              href="https://www.facebook.com/naiajavegas"
              id="tooltip837440414"
              target="_blank"
              className="btn-icon-only rounded-circle ml-1 btn btn-facebook"
            >
              <span className="btn-inner--icon">
                <i className="fa fa-facebook-square"></i>
              </span>
            </a>
            <a
              href="https://www.instagram.com/naiajavegas"
              id="tooltip837440414"
              target="_blank"
              className="btn-icon-only rounded-circle ml-1 btn btn-instagram"
            >
              <span className="btn-inner--icon">
                <i className="fa fa-instagram"></i>
              </span>
            </a>
          </div>
        </Row>
        <hr />
        <Row className="align-items-center justify-content-md-between">
          <Col md={6} className="">
            <div className="copyright">
              © 2020{" "}
              <a
                href="https://www.naijavegas.com?ref=adsr-footer"
                target="_blank"
              >
                Naija Vegas
              </a>
              .
            </div>
          </Col>
          <Col md={6} className="">
            <ul className="nav-footer justify-content-end nav">
              <li className="nav-item">
                <a
                  href="https://www.naijavegas.com?ref=adsr-footer"
                  target="_blank"
                  className="nav-link"
                >
                  Create Account
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="http://news.naijavegas.com?ref=adsr-footer"
                  target="_blank"
                  className="nav-link"
                >
                  Latest Tips
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="http://news.naijavegas.com?ref=adsr-footer"
                  target="_blank"
                  className="nav-link"
                >
                  Trending Bets
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MainFooter;
