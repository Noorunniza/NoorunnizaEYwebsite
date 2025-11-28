import React from "react";
import "./About.css";
import myPic from "../assets/pic.jpeg";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="about-title">About Me</h1>

      <div className="about-container">
        
        <div className="about-left">
          <div className="img-card">
            <img src={myPic} alt="Noorunniza" />
          </div>
        </div>

        <div className="about-right">
          <p>
            I’m an enthusiastic software developer pursuing an M.Voc in Software Application 
            Development at Cochin University. I specialize in web development using HTML, CSS, 
            JavaScript, and the MERN stack, and I build mobile applications for both Android (Kotlin) 
            and iOS (SwiftUI, Storyboard). I’m passionate about creating innovative, efficient, and 
            user-centered software solutions that make a real impact.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
