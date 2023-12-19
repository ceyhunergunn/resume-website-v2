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
            <p className="mb-5"></p> I work on HTML, CSS, Bootstrap, JavaScript
            and React.js. I gained experience in projects such as Allarmia and
            Guardmon, where I contributed to the development of comprehensive
            alarm management and smart sensor systems. I gained experience as a
            Frontend Developer Intern at Uzel Bilişim, working on real-time
            projects using HTML, CSS, Bootstrap, JavaScript, and React.js.
            Additionally, I worked as a Mobile Application Developer Intern at
            Clockwork Agency, where I developed entry-level applications using
            React Native. I bring strengths such as being a team player,
            creative thinker, responsible, and maintaining a positive attitude.
            My skills include UI/UX design and web/mobile application
            development. I completed "The Web Development Bootcamp," a
            comprehensive course covering HTML, CSS, JavaScript, Node.js, React,
            MongoDB, Web3, and DApps.
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
