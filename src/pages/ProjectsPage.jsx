import { Navigate } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectsPage() {
  return <Navigate to={`/projects/${projects[0].slug}`} replace />;
}

export default ProjectsPage;
