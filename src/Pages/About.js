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
    <section className="site-section" id="section-about">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div
            className="col-lg-6 pr-lg-5 mb-5 mb-lg-0 text-center"
            data-aos="fade-up"
          >
            <img
              src="cdn/images/avatar.png"
              alt="placeholder"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 pl-lg-6" data-aos="fade-up">
            <div className="section-heading">
              <h2>About Me</h2>
            </div>
            <p className="lead">
              Hi I'm a junior web developer based in Istanbul, Turkey.
            </p>
            <p className="mb-4"></p> A highly motivated and results-oriented
            frontend developer with experience in building dynamic and
            responsive web applications using modern technologies like React.js,
            React Hooks, Context API, and WebSocket. Skilled in UI/UX
            development with HTML, CSS, CSS Preprocessors (Sass, Less),
            Bootstrap and Tailwind, and possessing strong web development
            fundamentals with JavaScript and TypeScript. Passionate about
            building intuitive and user-friendly interfaces and contributing to
            high-performing teams.
            <br />
            <br />
            <a
              href="#"
              style={{ borderRadius: "8px !important" }}
              className="btn btn-primary px-4 py-2 btn-sm text-dark"
              onClick={handleDownload}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
