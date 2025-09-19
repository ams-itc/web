import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

type Language = "en" | "kh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper to get initial language from URL or localStorage
const getInitialLanguage = (searchParams: URLSearchParams): Language => {
  const urlLang = searchParams.get("lang");
  if (urlLang === "en" || urlLang === "kh") return urlLang;
  
  const storedLang = localStorage.getItem("preferred-language");
  if (storedLang === "en" || storedLang === "kh") return storedLang;
  
  return "en";
};

export const LanguageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [language, setLanguageState] = useState<Language>(() => 
    getInitialLanguage(searchParams)
  );

  // Update URL and localStorage when language changes
  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem("preferred-language", newLang);
    
    // Update URL preserving other parameters
    searchParams.set("lang", newLang);
    navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
  };

  // Listen for URL changes to sync language
  useEffect(() => {
    const urlLang = searchParams.get("lang");
    if (urlLang === "en" || urlLang === "kh") {
      setLanguageState(urlLang);
      localStorage.setItem("preferred-language", urlLang);
    }
  }, [location.search]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
