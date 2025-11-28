
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
    <div>
            <Navbar />
            < Hero/>
            < About/>
            < Skills/>
            <Experience />
           <Education />
           <Projects />
           <Contact />
               <ToastContainer position="bottom-right" autoClose={3000} />

    </div>
  );
}

export default App;
