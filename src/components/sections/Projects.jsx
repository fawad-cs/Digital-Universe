import { ArrowUpRight } from "lucide-react";
import projects from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";
import "./Projects.css";
import "../projects/ProjectCard.css";
import Reveal from "../common/Reveal";

function Projects() {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">

        <Reveal direction="up">
          <div className="projects-heading">
            <div>
              <span className="section-eyebrow">SELECTED WORK</span>

              <h2>
                PROJECTS THAT <span>SPEAK.</span>
              </h2>

              <p>
                A collection of projects, ideas and digital experiences.
              </p>
            </div>

            <span className="projects-count">
              03 PROJECTS
            </span>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              direction="up"
              delay={index * 150}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal direction="up">
          <div className="projects-bottom">
            <p>MORE IDEAS. MORE PROJECTS. MORE TO COME.</p>

            <a href="#contact">
              Have a project in mind?
              <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Projects;