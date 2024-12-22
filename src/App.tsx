import { About } from "./components/Aboutpage/About";
import { Experience } from "./components/Experience/Experience";
import Navbar from "./components/navbar/nav";
import Project from "./components/Projects/Project";
import { Skill } from "./components/skills/skill";
import ContactForm from "./components/form/ContactForm";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Resume } from "./components/CV/Resume";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react"; // React hook for side effects

const App = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 400, // Animation duration in milliseconds
  //     easing: "ease-out", // Easing function
  //     once: true, // Animation triggers only once
  //   });
  // }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <About />
                <Skill />
                <Experience />
                <Project />
                <ContactForm />
                <Footer />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
