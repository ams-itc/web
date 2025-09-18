import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [language, setLanguage] = useState<"en" | "kh">("en");

  return (
    <header className="w-full bg-white h-100px border-b-1 border-gray-300 shadow-sm top-0 z-50">
      <div className="flex items-center justify-between w-full px-6 py-2">
        {/* Left side with Logo + Department Name */}
        <div className="flex items-center space-x-2 w-1/3">
          <img
            src="/Institute_of_Technology_of_Cambodia_logo-removebg-preview.png"
            alt="ITC Logo"
            className="h-20 w-20 object-contain border-r-1 border-gray-500 m-0 pr-2"
          />
          <img
            src="/ams_logo.JPG"
            alt="AMS Logo"
            className=" w-20 object-contain pl-1"
          />
          <div className="w-3xs">
            <h2
              className={`text-base font-bold text-black ${
                language === "kh" ? "font-moul" : "font-playfair_display"
              }`}
            >
              {language === "en"
                ? "Department of Applied Mathematics and Statistics"
                : (
                  <>
                    ដេប៉ាតឺម៉ង់ <br />
                    គណិតវិទ្យាអនុវត្ត និងស្ថិតិ
                  </>
                )}
            </h2>
          </div>
        </div>

        {/* Navbar */}
        <Navbar language={language} setLanguage={setLanguage} />
      </div>
    </header>
  );
}
