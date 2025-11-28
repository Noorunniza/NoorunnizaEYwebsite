import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <h1 className="experience-title">Experience</h1>

      <div className="exp-card">
        <h2>Software Developer Intern</h2>
        <h3>Connecting Dots Tech Ventures Pvt Ltd (05/2025 - 08/2025)</h3>
        <ul>
          <li>Contributed to MERN-based Supermarket Instant Delivery System.</li>
          <li>Worked on front-end & back-end features using React.js, Node.js, Express.js, MongoDB.</li>
          <li>Implemented clean, efficient, and scalable code.</li>
          <li>Participated in Agile sprint planning, daily standups, and code reviews.</li>
          <li>Handled API integration & database operations for accuracy and performance.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
