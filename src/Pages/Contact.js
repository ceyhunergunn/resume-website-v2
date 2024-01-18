import React from "react";

function Contact() {
  return (
    <section className="site-section" data-aos="zoom-in" id="section-contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading text-center">
              <h2>
                <strong>Get In Touch</strong>
              </h2>
            </div>
          </div>
          {/* <div className="col-md-7 mb-5 mb-md-0">
            <h3 className="mb-5">Get In Touch</h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control px-3 py-4"
                placeholder="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control px-3 py-4"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control px-3 py-4"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control px-3 py-4"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
              />
            </div>
            <div className="form-group mb-5">
              <textarea
                className="form-control px-3 py-4"
                cols={30}
                rows={10}
                placeholder="Write a Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary px-4 py-3"
                defaultValue="Send Message"
              />
            </div>
          </div> */}
          <div className="col-md-12 pl-md-12">
            {/* <h3 className="mb-5">My Contact Details</h3> */}
            <ul className="site-contact-details row">
              <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="text-uppercase" style={{ color: "#60e5ab" }}>
                  Email
                </div>
                <div
                  className="d-flex align-items-center justify-content-center flex-column"
                  style={{ height: "75px" }}
                >
                  <div className="text-white">
                    <a
                      className="contact-tag"
                      href="mailto:ceyhunergun61@gmail.com"
                    >
                      ceyhunergun61@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="text-uppercase" style={{ color: "#60e5ab" }}>
                  Phone
                </div>
                <div
                  className="d-flex align-items-center justify-content-center flex-column"
                  style={{ height: "75px" }}
                >
                  <a className="contact-tag" href="tel:+905383115789">
                    +90 538 311 5789
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="text-uppercase" style={{ color: "#60e5ab" }}>
                  Address
                </div>
                <div
                  className="d-flex align-items-center justify-content-center flex-column"
                  style={{ height: "75px" }}
                >
                  Istanbul, Turkey
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
