import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import AboutPage from "./pages/About";

// export default function version
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        {/* Header always on top */}
        {/* <Header /> */}
        {/* <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes> */}
                    {/* Add more routes as needed */}
        {/* Page content */}
        <main className="flex-grow">
          <HomePage />
          <AboutPage />
        </main>

        {/* Toast notifications */}
        <Toaster richColors />
      </Router>
    </ThemeProvider>
  );
}
