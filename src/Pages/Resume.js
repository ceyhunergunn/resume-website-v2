import React from "react";

function Resume() {
  return (
    <section className="site-section" data-aos="zoom-in" id="section-resume">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <div className="section-heading text-center">
              <h2>
                <strong>Resume</strong>
              </h2>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-in">
            <h2 className="mb-5">Experience</h2>
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> February 2023 - February 2024
              </span>
              <h3>Frontend Developer</h3>
              <ul className="text-white">
                <li> Design web pages using HTML and CSS. </li>
                <li>
                  Use Bootstrap for dynamic and responsive design. Achieved a
                  pixel-perfect implementation of the design.
                </li>
                <li>
                  Develop functionality and dynamism with JavaScript and
                  React.js.
                </li>
                <li>
                  Implement state and lifecycle management with React Hooks.
                </li>
                <li>
                  Manipulate the components with DOM for function and dynamic
                  responses.
                </li>
                <li>
                  Integrate the Context API to create a shared context and then
                  wrapped all relevant child components within a container
                  component to make that context accessible to them.
                </li>
                <li>
                  Implement Websocket to accelerate the communication between
                  client and server
                </li>
                <li>
                  Integrate React Router into the application’s architecture,
                  empowering it with dynamic routing capabilities. Define URL
                  extensions for components and made redirects to make the
                  system more organized.
                </li>
                <li> Use Git and GitHub for version control. </li>
              </ul>
              <span className="school">Uzel Bilişim, Istanbul</span>
            </div>
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> December 2022 - January 2023
              </span>
              <h3>Software Engineering Intern</h3>
              <ul className="text-white">
                <li> Developed web pages using HTML and CSS. </li>
                <li> Design made with CSS, updated using Bootstrap </li>
                <li> Used Git and GitHub for version control. </li>
              </ul>
              <span className="school">Uzel Bilişim, Istanbul</span>
            </div>
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> August 2022 - September 2022
              </span>
              <h3>Software Engineering Intern</h3>
              <ul className="text-white">
                <li>
                  Transferred information data of movies from APIs to mobile
                  application.
                </li>
                <li>Developed Simple mobile applications with React-Native.</li>
              </ul>
              <span className="school">Clockwork Agency, Istanbul</span>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-in">
            <h2 className="mb-5">Course</h2>
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> March 2024 - April 2024
              </span>
              <h3>The Modern TypeScript Bootcamp</h3>

              <div className="text-white">The course includes TypeScript.</div>

              <span className="school mt-2">Udemy</span>
            </div>
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> February 2024 - March 2024
              </span>
              <h3>The Modern JavaScript Bootcamp</h3>

              <div className="text-white">
                The course includes OOP and Modern JavaScript.
              </div>

              <span className="school mt-2">Udemy</span>
            </div>
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> September 2022 - January 2023
              </span>
              <h3>The Web Development Bootcamp</h3>

              <div className="text-white">
                The course includes HTML, CSS, Javascript, Node and React
              </div>
              <span className="school mt-2">Udemy</span>
            </div>
            <h2 className="mb-5 mt-5">Education</h2>
            <div className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" /> September 2018 - April 2023
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
