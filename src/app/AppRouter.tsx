import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Layout from './components/ui/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicPage from './pages/AcademicPage';
import ContactPage from './pages/ContactPage';
import FacultyandResearchPage from './pages/FacultyandResearchPage';
import NewsAndEventsPage from './pages/NewsandEventsPage';
import StudentsPage from './pages/StudentsPage';
import NotFoundPage from './pages/NotFoundPage';
import ComingSoon from './pages/ComingSoon';
import StudentResource from './components/students/StudentResource';
import StudentAchievements from './components/students/StudentAchievements';
import StudentActivity from './components/students/StudentActivity';
import Alumni from './components/students/Alumini';

const AppRouter: React.FC = () => {
  const isMainSiteReady = false;

  return (
    <Router>
      <LanguageProvider>
        {isMainSiteReady ? (
          <Routes>
            {/* Layout wraps all main pages */}
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/academics" element={<AcademicPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="/faculty-and-research"
                element={<FacultyandResearchPage />}
              />
              <Route path="/news-and-events" element={<NewsAndEventsPage />} />

              {/* Nested Student routes */}
              <Route path="/students" element={<StudentsPage />}>
                <Route path="achievement" element={<StudentAchievements />} />
                <Route path="activity" element={<StudentActivity />} />
                <Route path="resource" element={<StudentResource />} />
                <Route path="alumni" element={<Alumni />} />
              </Route>

              {/* Catch-all */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        ) : (
          <ComingSoon />
        )}
      </LanguageProvider>
    </Router>
  );
};

export default AppRouter;
