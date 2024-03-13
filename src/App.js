import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Main from "./Pages/Main";
// import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Skills from "./Pages/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="App">
      <div className="overlay"></div>
      <Navbar />
      <Main />
      {/* <Portfolio /> */}
      <Resume />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <div className="portfolio-area">
        <div
          className="portfolio-btn text-center text-dark d-flex align-items-center justify-content-between"
          onClick={() => window.open("https://hicci.com.tr/portfolio")}
        >
          <span className="">Portfolio</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
            />
            <path
              fill-rule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
