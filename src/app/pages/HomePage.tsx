import Home from "../components/ui/Home";
import About from "../components/ui/About";
import AcademicPrograms from "../components/ui/Academic";
import FacultySection from "../components/ui/Faculty";
import ResearchClubs from "../components/ui/ReDA";

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <AcademicPrograms />
      <FacultySection />
      <ResearchClubs />
    </div>
  );
}
