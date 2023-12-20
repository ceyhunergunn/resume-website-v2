import React, { useState } from "react";

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  return (
    <section className="site-section" id="section-contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <div className="section-heading text-center">
              <h2>
                <strong>Get In Touch</strong>
              </h2>
            </div>
          </div>
          <div className="col-md-7 mb-5 mb-md-0">
            <form
              className="site-form"
              action={`mailto:ceyhunergun61@hgmail.com?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(message)}`}
              method="post"
              encType="text/plain"
            >
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
            </form>
          </div>
          <div className="col-md-5 pl-md-5">
            <h3 className="mb-5">My Contact Details</h3>
            <ul className="site-contact-details">
              <li>
                <span className="text-uppercase" style={{ color: "#60e5ab" }}>
                  Email
                </span>
                info@ceyhunergun.com.tr
                <br />
                ceyhunergun61@gmail.com
              </li>
              <li>
                <span className="text-uppercase" style={{ color: "#60e5ab" }}>
                  Phone
                </span>
                +90 538 311 5789
              </li>
              <li>
                <span className="text-uppercase" style={{ color: "#60e5ab" }}>
                  Address
                </span>
                Istanbul, Turkey
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
