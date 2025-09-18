import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";
import AppRouter from "./AppRouter";
import { LanguageProvider } from "./LanguageContext";

export default function App() {
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider>
        <AppRouter />
        <Toaster richColors />
      </LanguageProvider>
    </ThemeProvider>
  );
}
