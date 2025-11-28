import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <h1 className="education-title">Education</h1>


      <div className="edu-card">
        <h2>M.Voc in Software Application Development</h2>
        <p>Cochin University (2024 - Present)</p>
      </div>

      <div className="edu-card">
        <h2>Bachelor of Computer Applications</h2>
        <p>MES College Marampally (2021 - 2024)</p>
      </div>

      <div className="edu-card">
        <h2>Higher Secondary</h2>
        <p>St. Thomas HSS Keezhillam (2019 - 2021)</p>
      </div>
    </section>
  );
}

export default Education;
