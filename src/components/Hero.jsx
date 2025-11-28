import React from "react";
import "./Hero.css";
import myPic from "../assets/pic.jpeg";

function Hero() {
  const handleResume = () => {
    window.open("/NoorunnizaEYResume.pdf", "_blank");
  };

  const handleHireMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      
      {/* LEFT SIDE */}
      <div className="hero-left">
        <h1>
          Hi, I'm <span className="highlight">Noorunniza E Y</span>
        </h1>

        <h2 className="role">Software Developer</h2>

        <p className="hero-summary">
       Passionate Software Developer creating modern, seamless, and user-centric applications. Let’s build something great together!
        </p>

        <div className="hero-buttons">
          <button className="btn hire" onClick={handleHireMe}>
            🚀 Hire Me
          </button>
          <button className="btn resume" onClick={handleResume}>
            📄 Resume
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <div className="image-card">
          <img src={myPic} alt="profile" />
        </div>
        <div className="bg-circle"></div>
      </div>

    </section>
  );
}

export default Hero;
