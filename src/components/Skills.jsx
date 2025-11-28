import React from "react";
import "./Skills.css";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";

function Skills() {
  const categories = [
    {
      icon: <FaCode size={35} className="skill-icon" />,
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "SwiftUI",
        "Android XML"
      ],
    },
    {
      icon: <FaServer size={35} className="skill-icon" />,
      title: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Express.js",
        "Node.js",

        "Kotlin",
       
      ],
    },
    {
      icon: <FaDatabase size={35} className="skill-icon" />,
      title: "Database",
      skills: [
        "MySQL",
        "MongoDB",
        "Firebase"
        
      ],
    }
  ];

  return (
    <section className="skills" id="skills">
      <h1 className="skills-title">My Skills</h1>
      <p className="skills-subtext">
        I work across frontend, backend, mobile development, and databases using modern tools and technologies.
      </p>

      <div className="skills-wrapper">
        {categories.map((cat, index) => (
          <div className="skills-card" key={index}>
            <div className="icon-wrapper">{cat.icon}</div>
            <h2>{cat.title}</h2>

            <div className="skill-tags">
              {cat.skills.map((skill, i) => (
                <span key={i} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
