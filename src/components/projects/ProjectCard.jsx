
import { ArrowUpRight, GitBranch, ExternalLink } from "lucide-react";
function ProjectCard({ project }) {
  return (
    <article className="project-card">

      {/* Project Image */}
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          className="project-image"
          loading="lazy"
        />

        <span className="project-number">
          {project.number}
        </span>

        <div className="project-image-overlay"></div>
      </div>

      {/* Project Information */}
      <div className="project-info">

        <span className="project-category">
          {project.category}
        </span>

        <div className="project-title-row">
          <h3>{project.name}</h3>
          <ArrowUpRight size={22} />
        </div>

        <p className="project-description">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {/* Project Links */}
        <div className="project-links">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={15} />
              Live Preview
            </a>
          ) : (
            <span className="project-link-disabled">
              <ExternalLink size={15} />
              Add Live URL
            </span>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={15} />
              Source Code
            </a>
          ) : (
            <span className="project-link-disabled">
              <GitBranch size={15} />
              Add GitHub URL
            </span>
          )}
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;
