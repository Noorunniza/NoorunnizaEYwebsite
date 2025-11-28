import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      {/* Navbar stays on ALL pages */}
      <Navbar />

      <Routes>
        {/* Home page contains all your sections */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Education />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* You can add separate pages later */}
        {/* Example: <Route path="/projects" element={<Projects />} /> */}
      </Routes>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </Router>
  );
}

export default App;
