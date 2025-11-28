import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      name: "Supermarket Instant Delivery System",
      tech: "MERN Stack",
      desc: "Built customer, admin, employee, and delivery agent panels with real-time tracking and order management."
    },
    {
      name: "Online Job Portal",
      tech: "PHP, MySQL, JS",
      desc: "Role-based recruitment system with portals for Admin, Employer, and Jobseeker."
    },
    {
      name: "Fishing Management System",
      tech: "React, Node, Express, MySQL",
      desc: "Full-stack system to manage fishing operations, sales, trips, workers, and agents."
    }
  ];

  return (
    <section className="projects" id="projects">
    <h1 className="projects-title">Projects</h1>


      <div className="project-grid">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <h2>{p.name}</h2>
            <h4>{p.tech}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
