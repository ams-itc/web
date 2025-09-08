import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";
import AppRouter from "./AppRouter";

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      // Perform any necessary actions on scroll here
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRouter />
      <Toaster richColors />
    </ThemeProvider>
  );
}
