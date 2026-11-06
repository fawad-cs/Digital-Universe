import Projects from "../components/sections/Projects";
import "./pages.css";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="projects-page-heading">
        <span>MY CREATIVE WORK</span>
        <h1>All <span>Projects.</span></h1>
        <p>A collection of websites and digital experiences I've built.</p>
      </div>

      <Projects />
    </div>
  );
}

export default ProjectsPage;