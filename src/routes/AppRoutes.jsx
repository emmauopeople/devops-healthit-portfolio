import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageShell from "../components/layout/PageShell";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import LocalKubernetesChurchPage from "../pages/LocalKubernetesChurchPage";
import ResumePage from "../pages/ResumePage";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/local-kubernetes-church-microservices" element={<LocalKubernetesChurchPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  );
}

export default AppRoutes;
