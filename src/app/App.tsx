import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import HomePage from "./pages/Home";
import Header from "./components/Header";

// export default function version
export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* Toast notifications */}
        <Toaster richColors />
      </Router>
    </ThemeProvider>
  );
}
