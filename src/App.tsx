import { About } from "./components/Aboutpage/About";
import { Experience } from "./components/Experience/Experience";
import Navbar from "./components/navbar/nav";
import Project from "./components/Projects/Project";
import { Skill } from "./components/skills/skill";
import ContactForm from "./components/form/ContactForm";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Resume } from "./components/CV/Resume";
const App = () => {
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
          ></Route>
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
