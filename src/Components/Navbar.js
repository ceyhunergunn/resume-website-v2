import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg site-navbar navbar-dark bg-light"
      id="pb-navbar"
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div>
          <img
            src="favicon.png"
            style={{ width: "90px", height: "90px" }}
            alt="logo"
          />
        </div>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample09"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#section-home">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="https://portfolio.hicci.com.tr/">
                Portfolio
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#section-resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section-about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section-contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          className="d-none d-xl-block"
          style={{ width: "90px", height: "90px" }}
        >
          {" "}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
