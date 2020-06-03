import React, { Component } from "react";
import MainFooter from "../components/footers/mainFooter";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="section section-shaped section-lg">
          <div
            className="shape shape-style-1"
            style={{ background: "#f4f5f7" }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="pt-lg-7 container">
            <div className="justify-content-center row">
              <div className="col-lg-5">
                <div className="bg-secondary shadow border-0 card">
                  <div className="bg-white  card-header">
                    <div className="text-muted text-center mb-3">
                      <h4 className="display-4 mb-0 text-center">
                        Welcome Back
                      </h4>
                      <small>Sign in to get started</small>
                    </div>
                  </div>
                  <div className="px-lg-5 py-lg-5 card-body">
                    <form role="form" className="">
                      <div className="mb-3 form-group">
                        <div className="input-group-alternative input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-email-83"></i>
                            </span>
                          </div>
                          <input
                            placeholder="Email"
                            type="email"
                            className="form-control"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group-alternative input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-lock-circle-open"></i>
                            </span>
                          </div>
                          <input
                            placeholder="Password"
                            autocomplete="off"
                            type="password"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          for=" customCheckLogin"
                        >
                          <span>Remember me</span>
                        </label>
                      </div>
                      <div className="text-center">
                        <button type="button" className="my-4 btn btn-success">
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="mt-3 row">
                  <div className="col-6">
                    <a className="text-dark" href="#pablo">
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="text-right col-6">
                    <Link className="text-dark" to="/register">
                      <small>Create new account</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MainFooter />
      </React.Fragment>
    );
  }
}

export default LoginPage;
