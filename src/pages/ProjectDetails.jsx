
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import projects from "../data/projects";
import "./pages.css";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => String(item.id) === id
  );

  if (!project) {
    return (
      <section className="project-details-error">
        <h1>Project Not Found</h1>
        <Link to="/projects">
          <ArrowLeft size={17} />
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-details-page">
      <div className="container">
        <Link to="/projects" className="project-back-link">
          <ArrowLeft size={17} />
          Back to Projects
        </Link>

        <div className="project-details-content">
          <span className="project-details-category">
            {project.category}
          </span>

          <h1>{project.name}</h1>

          <p>{project.description}</p>

          <img
            src={project.image}
            alt={project.name}
            className="project-details-image"
          />

          <div className="project-details-tech">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Live Website ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
