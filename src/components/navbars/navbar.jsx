import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/brand/NaijaVegasLogoSquaExSmall.png";
import "../../assets/css/navbar.css";
import { IoIosPersonAdd, IoIosLogIn } from "react-icons/io";
import {
  FaVoteYea,
  FaRegFutbol,
  FaAward,
  FaMedal,
  FaFutbol,
} from "react-icons/fa";
import IconPolitics from "../../assets/img/icons/001-politics.svg";
import IconSport from "../../assets/img/icons/002-stadium.svg";
import IconAwards from "../../assets/img/icons/003-trophy.svg";
import IconSpecial from "../../assets/img/icons/004-medal.svg";

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
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <div className="container">
            <div
              className="d-flex justify-content-between w-100"
              id="navbar_global"
            >
              <ul className="navbar-nav navbar-nav-hover align-items-lg-center justify-content-center">
                <li className="nav-item">
                  <Link to="/login" className="nav-link" role="button">
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
              <ul className="navbar-nav navbar-nav-hover align-items-lg-center justify-content-center">
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="nav-link"
                    data-toggle="dropdown"
                    role="button"
                  >
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
          className="navbar navbar-sub navbar-expand-lg navbar-light headroom"
          style={{
            backgroundColor: "#2c8a45",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <div className="container">
            <div
              className="d-flex justify-content-between w-100"
              id="navbar_global"
            >
              <ul className="navbar-nav navbar-nav-hover align-items-lg-center flex-row w-100">
                <li className="nav-item">
                  <a href="#" className="nav-link px-2" role="button">
                    <i className="text-white">
                      <Link to="/politics" className="text-white">
                        <FaVoteYea />
                      </Link>
                    </i>
                    <span className="nav-link-inner--text ml-0 text-white">
                      <Link to="/politics" className="text-white">
                        Politics
                      </Link>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2" role="button">
                    <i className="text-white">
                      <Link to="/sports" className="text-white">
                        <FaRegFutbol />
                      </Link>
                    </i>
                    <span className="nav-link-inner--text ml-0 text-white">
                      <Link to="/sports" className="text-white">
                        Sports
                      </Link>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link  px-2" role="button">
                    <i className="text-white">
                      <FaAward />
                    </i>
                    <span className="nav-link-inner--text ml-0 text-white">
                      Awards
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2" role="button">
                    <i className="text-white">
                      <FaMedal />
                    </i>
                    <span className="nav-link-inner--text ml-0 text-white">
                      <Link to="/specialbets" className="text-white">
                        Special Bets
                      </Link>
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
