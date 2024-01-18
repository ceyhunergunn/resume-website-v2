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
        <div className="filters"></div>
        <div className="filters-content">
          <div className="row grid d-flex">
            <div
              className="single-portfolio col-sm-4 all mockup"
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "https://allarmia.com/")}
            >
              <div className="relative">
                <div className="thumb" style={{ padding: "20px 0" }}>
                  <div className="overlay overlay-bg" />
                  <img
                    style={{ height: "210px", width: "250px" }}
                    className="image img-fluid image-focus mx-auto"
                    src="cdn/images/allarmia.png"
                    alt="Allarmia"
                  />
                </div>
              </div>
              <div className="p-inner">
                <h4>Allarmia</h4>
              </div>
            </div>
            <div
              className="single-portfolio col-sm-4 all mockup"
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "https://guardmon.com/")}
            >
              <div className="relative">
                <div className="thumb">
                  <div className="overlay overlay-bg" />
                  <img
                    style={{ height: "250px", width: "250px" }}
                    className="image img-fluid image-focus mx-auto"
                    src="cdn/images/guardmon.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="p-inner">
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
