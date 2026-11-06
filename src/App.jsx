
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ScrollToHash from "./components/layout/ScrollToHash";
import ErrorBoundary from "./components/common/ErrorBoundary";

import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ErrorBoundary>
      <ScrollToHash />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/projects/:id"
            element={<ProjectDetails />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
