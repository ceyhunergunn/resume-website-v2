import React from "react";

function Footer() {
  return (
    <footer className="site-footer" data-aos="zoom-in">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-12 text-center">
            <p>
              {/* <div
                onClick={() =>
                  (window.location.href =
                    "https://www.facebook.com/ceyhun.ergn")
                }
                className="social-item"
              >
                <span className="icon-facebook2" />
              </div>
              <div
                className="social-item"
                onClick={() =>
                  (window.location.href = "https://twitter.com/CeyhnErgn")
                }
              >
                <span className="icon-twitter" />
              </div>
              <div
                className="social-item"
                onClick={() =>
                  (window.location.href =
                    "https://www.instagram.com/ceyhunergunn/")
                }
              >
                <span className="icon-instagram2" />
              </div> */}
              {/* eslint-disable-next-line  */}
              <div
                className="social-item"
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/ergunceyhun/")
                }
              >
                <span className="icon-linkedin2" />
              </div>
              {/* eslint-disable-next-line  */}
              <div
                className="social-item"
                onClick={() =>
                  (window.location.href = "https://github.com/ceyhunergunn")
                }
              >
                <span className="icon-github" />
              </div>
            </p>
          </div>
        </div>
        <div className="row">
          <p className="col-12 text-center">Copyright © All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
