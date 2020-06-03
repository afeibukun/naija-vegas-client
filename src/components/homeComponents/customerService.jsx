import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomerServiceBanner from "../../assets/img/banners/customer-service-banner.jpg";
import { IoIosInformation } from "react-icons/io";

const CustomerService = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex h-100 align-items-center">
            <div>
              <h2 className="mb-5">
                <span>Customer Support</span>
              </h2>

              <div className="">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="mt-3">
                  <button className="btn btn-success text-uppercase font-weight-bold">
                    Help <IoIosInformation />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="">
            <div className="">
              <img
                className="img-fluid rounded-circle shadow-lg"
                src={CustomerServiceBanner}
                alt="customer support Img"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerService;
