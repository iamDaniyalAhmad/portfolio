import React from "react";
import daniyal from '../assets/Daniyal.pdf'
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-2 navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand py-2" href="https://library.livecanvas.com/sections/">
          {/* <img
            src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
            width="48"
            height="40"
            className="align-middle me-1 "
            alt="My Website"
          /> */}
          DANIYAL AHMED
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar2"
          aria-controls="myNavbar2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="lc-block collapse navbar-collapse" id="myNavbar2">
          <div lc-helper="shortcode" className="live-shortcode ms-auto">
            {" "}
            <ul id="menu-menu-1" className="navbar-nav">
              <li className="menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-32739">
                <a
                  href="/"
                  className="nav-link "
                >
                  Home
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738">
                <a
                  href="/"
                  className="nav-link "
                >
                  About
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738">
                <a
                  href="/"
                  className="nav-link"
                >
                  Contact
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738">
                <a
                  href="/"
                  className="nav-link "
                >
                  Services
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738">
                <a
                  href="/"
                  className="nav-link "
                >
                  Portfolio
                </a>
              </li>
            </ul>{" "}
          </div>

          <form
            role="search"
            method="get"
            id="searchform"
            action="/"
            className="d-flex ms-auto justify-content-center"
          >
            <div className="input-group">
                <a href={daniyal} download="Daniyal" className="btn btn-primary">Download CV</a>
                <a href='tel:+92 325 923 92 82' className="btn btn-primary mx-2">+92 325 923 92 82</a>
              {/* <button className="btn btn-primary "></button> */}
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
