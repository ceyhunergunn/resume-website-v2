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
    </div>
  );
}

export default App;
