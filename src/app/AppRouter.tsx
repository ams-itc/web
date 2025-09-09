import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/ui/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import AcademicPage from "./pages/AcademicPage";
import ContactPage from "./pages/ContactPage";
import FacultyandResearchPage from "./pages/FacultyandResearchPage";
import NewsandEventsPage from "./pages/NewsandEventsPage";
import StudentsPage from "./pages/StudentsPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faculty-and-research" element={<FacultyandResearchPage />} />
          <Route path="/news-and-events" element={<NewsandEventsPage />} />
          <Route path="/students" element={<StudentsPage />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;