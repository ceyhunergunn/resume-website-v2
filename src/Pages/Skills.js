/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Skills() {
  return (
    <section className="site-section pb-0" data-aos="zoom-in">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="section-heading text-center">
              <h2>
                <strong>Skills</strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 text-center mb-5">
            <div
              className="site-service-item site-animate"
              data-animate-effect="fadeIn"
            >
              <span className="icon d-flex align-items-center justify-content-center">
                <img
                  className="icon-browser2"
                  src="cdn/images/html.png"
                  style={{ width: "70px", height: "70px" }}
                />
              </span>
              <h3 className="mb-4">HTML</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center mb-5">
            <div
              className="site-service-item site-animate"
              data-animate-effect="fadeIn"
            >
              <span className="icon d-flex align-items-center justify-content-center">
                <img
                  className="icon-browser2"
                  src="cdn/images/css.png"
                  style={{ width: "90px", height: "90px" }}
                />
              </span>
              <h3 className="mb-4">CSS</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center mb-5">
            <div
              className="site-service-item site-animate"
              data-animate-effect="fadeIn"
            >
              <span className="icon d-flex align-items-center justify-content-center">
                <img
                  className="icon-browser2"
                  src="cdn/images/bootstrap.png"
                  style={{ width: "80px", height: "80px" }}
                />
              </span>
              <h3 className="mb-4">Bootstrap</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center mb-5">
            <div
              className="site-service-item site-animate"
              data-animate-effect="fadeIn"
            >
              <span className="icon d-flex align-items-center justify-content-center">
                <img
                  className="icon-browser2"
                  src="cdn/images/js.png"
                  style={{ width: "60px", height: "70px" }}
                />
              </span>
              <h3 className="mb-4">Javascript</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center mb-5">
            <div
              className="site-service-item site-animate"
              data-animate-effect="fadeIn"
            >
              <span className="icon d-flex align-items-center justify-content-center">
                <img
                  className="icon-browser2"
                  src="cdn/images/react.png"
                  style={{ width: "60px", height: "60px" }}
                />
              </span>
              <h3 className="mb-4">React</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
