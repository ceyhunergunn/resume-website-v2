import React, { useEffect, useState } from "react";

const TypeWriter = ({ words, wait = 3000 }) => {
  const [txt, setTxt] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 / 2 : 200;
    const current = wordIndex % words.length;
    const fullTxt = words[current];

    const typeTimer = setTimeout(() => {
      if (isDeleting) {
        setTxt((prevTxt) => prevTxt.substring(0, prevTxt.length - 1));
      } else {
        setTxt((prevTxt) => fullTxt.substring(0, prevTxt.length + 1));
      }

      if (!isDeleting && txt === fullTxt) {
        setIsDeleting(true);
        setWordIndex((prevIndex) => prevIndex + 1);
      } else if (isDeleting && txt === "") {
        setIsDeleting(false);
      }
    }, typeSpeed);

    return () => clearTimeout(typeTimer);
  }, [txt, isDeleting, wordIndex, words]);

  useEffect(() => {
    const waitTimer = setTimeout(() => {
      setIsDeleting(false);
      setWordIndex((prevIndex) => prevIndex + 1);
    }, wait);

    return () => clearTimeout(waitTimer);
  }, [wait, wordIndex]);

  return (
    <span className="txt" style={{ color: "white", fontWeight: "bold" }}>
      {txt}
    </span>
  );
};

function Main() {
  const words = ["Ceyhun", "Developer", "Engineer"];
  const wait = 3000;
  return (
    <section
      className="site-hero"
      //   style={{ backgroundImage: "url(cdn/images/image_1.jpg)" }}
      id="section-home"
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row intro-text align-items-center justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12 p-5">
            <h1 className="site-heading site-animate text-center">
              Hello, I'm
              <br />
              <TypeWriter words={words} wait={wait} />
            </h1>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-5 d-flex justify-content-center align-items-center">
            <img
              src="cdn/images/avatar.png"
              alt="placeholder"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
