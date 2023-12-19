import React from "react";

function Resume() {
  return (
    <section className="site-section" id="section-resume">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <div className="section-heading text-center">
              <h2>
                <strong>Resume</strong>
              </h2>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="mb-5">Experience</h2>
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> February 2023 - Present
              </span>
              <h3>Frontend Developer</h3>
              <div className="text-white">
                Web development was done with HTML, CSS, Bootstrap, Javascript
                and React. Working on a real-time project
                <br />
                <br />
                <strong style={{ fontWeight: "bold" }}>Allarmia</strong> is a
                comprehensive alarm management platform that enables centralized
                control of system alerts, domain processes, and SSL certificates
                through a single application, developed using HTML, CSS,
                Bootstrap, and React.js.
                <br />
                <br />
                <strong style={{ fontWeight: "bold" }}>Guardmon</strong> is an
                intelligent sensor and safety system designed for workplaces,
                providing real-time remote power monitoring, environmental
                monitoring, and seamless integration with data center
                infrastructure for ease of use and efficiency. The system is
                developed using HTML, CSS, Bootstrap, and React.js
                <br />
                <br />
              </div>
              <span className="school">Uzel Bilişim, Istanbul</span>
            </div>{" "}
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> December 2022 - January 2023
              </span>
              <h3>Frontend Developer Intern</h3>
              <div className="text-white">
                Web development was done with HTML, CSS, Bootstrap, Javascript
                and React. Web development stages were learned. Worked on a
                real-time project
                <br />
                <br />
              </div>
              <span className="school">Uzel Bilişim, Istanbul</span>
            </div>
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> August 2022 - September 2022
              </span>
              <h3>Mobile Application Developer Intern</h3>
              <div className="text-white">
                Mobile application development was done with React native.
                Mobile application development stages were learned. An
                entry-level application has been developed.
                <br />
                <br />
              </div>
              <span className="school">Clockwork Agency, Istanbul</span>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="mb-5">Course</h2>
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> September 2022 - January 2023
              </span>
              <h3>The Web Development Bootcamp</h3>

              <div className="text-white">
                The course includes HTML, CSS, Javascript, Node, React, MongoDB,
                Web3 and DApps by Angela Yu.
                <br />
                <br />
              </div>

              <span className="school">Udemy</span>
            </div>
            <h2 className="mb-5 mt-5">Education</h2>
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> September 2018 - June 2023
              </span>
              <h3>B.S. in Electronic And Telecommunications</h3>
              <span className="school">Kocaeli University, Kocaeli</span>
            </div>
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> September 2013 - June 2017
              </span>
              <h3>Science</h3>
              <span className="school">
                Tevfik Serdar Anatolian High School, Trabzon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
