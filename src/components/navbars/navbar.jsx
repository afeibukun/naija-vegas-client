import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/brand/NaijaVegasLogoSquaExSmall.png";
import { IoIosPersonAdd, IoIosLogIn } from "react-icons/io";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav
          id="navbar-main"
          className="navbar navbar-main navbar-expand-lg navbar-light headroom"
          style={{
            backgroundColor: "#000900",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          <div className="container">
            <div
              className="d-flex justify-content-between w-100"
              id="navbar_global"
            >
              <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                <li className="nav-item">
                  <Link to="/login" className="nav-link" role="button">
                    <i className="ni ni-ui-04 d-lg-none"></i>
                    <span style={{ color: "#3bb85d" }}>
                      <IoIosLogIn />
                    </span>
                    <span className="nav-link-inner--text text-white">
                      Login
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="">
                <div className="row">
                  <div className="">
                    <Link to="/" className="d-inline-block">
                      <img
                        style={{ height: "50px", marginTop: "7px" }}
                        src={logo}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="nav-link"
                    data-toggle="dropdown"
                    role="button"
                  >
                    <i className="ni ni-ui-04 d-lg-none"></i>
                    <span style={{ color: "#3bb85d" }}>
                      <IoIosPersonAdd />
                    </span>
                    <span className="nav-link-inner--text text-white">
                      Register
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav
          id="navbar-sub"
          className="navbar navbar-main navbar-expand-lg navbar-light headroom"
          style={{
            backgroundColor: "#2c8a45",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          <div className="container">
            <div
              className="d-flex justify-content-between w-100"
              id="navbar_global"
            >
              <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                <li className="nav-item">
                  <a href="#" className="nav-link" role="button">
                    <i className="ni ni-ui-04 d-lg-none"></i>
                    <span className="nav-link-inner--text text-white">
                      Politics
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" role="button">
                    <i className="ni ni-ui-04 d-lg-none"></i>
                    <span className="nav-link-inner--text text-white">
                      Sports
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" role="button">
                    <i className="ni ni-ui-04 d-lg-none"></i>
                    <span className="nav-link-inner--text text-white">
                      Awards
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" role="button">
                    <i className="ni ni-ui-04 d-lg-none"></i>
                    <span className="nav-link-inner--text text-white">
                      Special Bets
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
