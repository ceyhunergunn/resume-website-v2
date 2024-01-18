/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function About() {
  const handleDownload = () => {
    const fileUrl = "cdn/Ceyhun_Ergun_CV.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Ceyhun_Ergun_CV.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <section data-aos="zoom-in" className="site-section" id="section-about">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6 pr-lg-5 mb-5 mb-lg-0 text-center">
            <img
              src="cdn/images/avatar.png"
              alt="placeholder"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 pl-lg-6">
            <div className="section-heading">
              <h2>About Me</h2>
            </div>
            <p className="lead">
              Hi I'm a junior web developer based in Istanbul,Turkey. Currently
              working at Uzel Bilişim as a Frontend Developer.
            </p>
            <p className="mb-5"></p> A highly motivated and results-oriented
            frontend developer with experience in building dynamic and
            responsive web applications using modern technologies like React.js,
            React Hooks, Context API, and WebSocket. Skilled in UI/UX
            development with HTML, CSS, and Bootstrap, and possessing strong web
            development fundamentals with JavaScript. Passionate about building
            intuitive and user-friendly interfaces and contributing to
            high-performing teams.
            <br />
            <br />
            <p>
              <a
                href="#section-contact"
                className="btn btn-primary px-4 py-2 btn-sm smoothscroll mr-3"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="btn btn-secondary px-4 py-2 btn-sm"
                onClick={handleDownload}
              >
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
