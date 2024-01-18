import React from "react";

function Portfolio() {
  return (
    <section className="site-section" data-aos="zoom-in" id="section-portfolio">
      <div className="container">
        <div className="row">
          <div className="section-heading text-center col-md-12">
            <h2>
              <strong>Portfolio</strong>
            </h2>
          </div>
        </div>
        <div className="filters-content">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-sm-12 my-3"
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "https://allarmia.com/")}
            >
              <div className="relative">
                <div className="thumb" style={{ padding: "26px 0" }}>
                  <div className="overlay overlay-bg" />
                  <img
                    style={{ width: "40%" }}
                    className="image img-fluid image-focus mx-auto"
                    src="cdn/images/allarmia.png"
                    alt="Allarmia"
                  />
                </div>
              </div>
              <div className="text-center">
                <h4>Allarmia</h4>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 my-3"
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "https://guardmon.com/")}
            >
              <div className="relative">
                <div className="thumb">
                  <div className="overlay overlay-bg" />
                  <img
                    style={{ width: "40%" }}
                    className="image img-fluid image-focus mx-auto"
                    src="cdn/images/guardmon.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="text-center">
                <h4>Guardmon</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
