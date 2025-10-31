'use client';

import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`relative w-full min-h-fit border-b border-gray-300 shadow-sm top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'sticky bg-white/80 backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="flex items-center justify-between w-full px-3 sm:px-6 py-2">
        {/* Left side: Laptop / Tablet / iPad */}
        <div className="hidden sm:flex items-center space-x-2 w-2/3 sm:w-auto">
          <img
            src="/Institute_of_Technology_of_Cambodia_logo-removebg-preview.png"
            alt="ITC Logo"
            className="h-10 sm:h-12 w-auto object-contain border-r border-gray-500 pr-2"
          />
          <img
            src="/ams-logo.png"
            alt="AMS Logo"
            className="h-8 sm:h-12 w-auto object-contain pl-1"
          />
          {/* Department Name */}
          <div className="ml-2">
            {language === 'en' ? (
              <h2 className="text-[clamp(0.625rem,1.4vw,1.125rem)] font-bold text-black font-playfair_display leading-tight">
                Department of
                <br />
                Applied Mathematics
                <br />
                and Statistics
              </h2>
            ) : (
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-black font-moul leading-tight">
                ដេប៉ាតឺម៉ង់ <br />
                គណិតវិទ្យាអនុវត្ត <br />
                និងស្ថិតិ
              </h2>
            )}
          </div>
        </div>

        {/* Left side: Mobile / Phone */}
        <div className="flex sm:hidden items-center space-x-2">
          <img
            src="/Institute_of_Technology_of_Cambodia_logo-removebg-preview.png"
            alt="ITC Logo"
            className="h-8 w-auto object-contain border-r border-gray-500 pr-1"
          />
          <img
            src="/ams-logo.png"
            alt="AMS Logo"
            className="h-6 w-auto object-contain pl-1"
          />
          <div className="ml-1">
            {language === 'en' ? (
              <h2 className="text-xs font-bold text-black font-playfair_display leading-tight">
                Department of <br />
                Applied Mathematics <br />
                and Statistics
              </h2>
            ) : (
              <h2 className="text-xs font-bold text-black font-moul leading-tight">
                ដេប៉ាតឺម៉ង់ <br />
                គណិតវិទ្យា <br />
                អនុវត្ត និងស្ថិតិ
              </h2>
            )}
          </div>
        </div>

        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
}
