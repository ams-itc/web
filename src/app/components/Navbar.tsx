"use client";

import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface NavbarProps {
  language: "en" | "kh";
  setLanguage: (lang: "en" | "kh") => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {

  const changeLanguage = (lang: "en" | "kh") => {
    setLanguage(lang);
  };

  const navItems = {
    en: [
      { title: "Home", url: "/", icon: null },
      {
        title: "About Us",
        url: "/about",
        icon: null,
        items: [
          { title: "About AMS", url: "/about/#aboutAMS" },
          { title: "Board of Trustees", url: "/about/#boardoftrustees" },
          { title: "Accreditation", url: "/about/#accreditation" },
          { title: "Industrial Partners", url: "/about/#industrialpartners" },
        ],
      },
      {
        title: "Academics",
        url: "/academics",
        icon: null,
        items: [
          { title: "Programs", url: "/academics/programs" },
          { title: "Courses", url: "/academics/courses" },
          { title: "Admissions", url: "/academics/admissions" },
        ],
      },
      {
        title: "Faculty & Research",
        url: "/faculty-and-research",
        icon: null,
        items: [
          { title: "Academic Support Staff", url: "/faculty-and-research#academic-support-staff" },
          { title: "ReDa Lab", url: "/faculty-and-research#redalab" },
          { title: "Previous Collaborations", url: "/faculty-and-research#previous-collaborations" },
          { title: "Ongoing Projects", url: "/faculty-and-research#ongoing-projects" },
        ],
      },
      {
        title: "Students",
        url: "/students",
        icon: null,
        items: [
          { title: "Student’s Achievement", url: "/students/#achievement" },
          { title: "Student’s Life", url: "/students/#activity" },
          { title: "Student’s Resource", url: "/students/#resource" },
          { title: "Alumni", url: "/students/#alumni" },
        ],
      },
      { title: "News & Events", url: "/news-and-events", icon: null },
      { title: "Contact", url: "/contact", icon: null },
    ],
    kh: [
      { title: "ទំព័រដើម", url: "/", icon: null },
      {
        title: "អំពីយើង",
        url: "/about",
        icon: null,
        items: [
          { title: "អំពី AMS", url: "/about/#aboutAMS" },
          { title: "ក្រុមប្រឹក្សាភិបាល", url: "/about/#boardoftrustees" },
          { title: "ការទទួលស្គាល់", url: "/about/#accreditation" },
          { title: "ដៃគូសហការ", url: "/about/#industrialpartners" },
        ],
      },
      {
        title: "កម្មវិធីសិក្សា",
        url: "/academics",
        icon: null,
        items: [
          { title: "កម្មវិធី", url: "/academics/programs" },
          { title: "វគ្គសិក្សា", url: "/academics/courses" },
          { title: "ការចូលរៀន", url: "/academics/admissions" },
        ],
      },
      {
        title: "គ្រូបង្រៀន និងការស្រាវជ្រាវ",
        url: "/faculty-and-research",
        icon: null,
        items: [
          { title: "បុគ្គលិកអប់រំ", url: "/faculty-and-research#academic-support-staff" },
          { title: "ReDa Lab", url: "/faculty-and-research#redalab" },
          { title: "ការសហការ", url: "/faculty-and-research#previous-collaborations" },
          { title: "គម្រោង", url: "/faculty-and-research#ongoing-projects" },
        ],
      },
      {
        title: "សិស្ស",
        url: "/students",
        icon: null,
        items: [
          { title: "សមិទ្ធិផល", url: "/students/#achievement" },
          { title: "សកម្មភាព", url: "/students/#activity" },
          { title: "ធនធាន", url: "/students/#resource" },
          { title: "អតីតសិស្ស", url: "/students/#alumni" },
        ],
      },
      { title: "ព័ត៌មាន", url: "/news-and-events", icon: null },
      { title: "ទំនាក់ទំនង", url: "/contact", icon: null },
    ]
  };

  const currentNav = navItems[language];

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto h-16 px-4">
        {/* Nav Links */}
        <nav className="hidden md:flex space-x-2">
          {currentNav.map((item) => (
            <div key={item.title} className="relative group">
              {item.items ? (
                <>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      `inline-flex items-center px-3 font-medium rounded-md transition ${
                        isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:bg-gray-100"
                      } ${language === "kh" ? "font-kantumruy_pro text-base" : "font-raleway text-sm "}`
                    }
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </NavLink>

                  {/* Dropdown menu */}
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                    <div className="py-1">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.url}
                          className={`block px-4 py-2  text-gray-700 hover:bg-gray-100 ${
                            language === "kh" ? "font-kantumruy_pro text-sm" : "font-raleway text-xs"
                          }`}
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `inline-flex items-center px-3 font-medium rounded-md ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:bg-gray-100"
                    } ${language === "kh" ? "font-kantumruy_pro text-base" : "font-raleway text-sm"}`
                  }
                >
                  {item.title}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="flex items-center space-x-2 pl-1">
          <button
            onClick={() => changeLanguage("kh")}
            className={`transition-transform duration-200 hover:scale-110 ${
              language === "kh" ? "ring-2 ring-blue-200 rounded" : ""
            }`}
          >
            <img src="Cambodia.png" alt="Khmer" className="w-8 rounded-xs" />
          </button>

          <span className="border border-black h-7"></span>

          <button
            onClick={() => changeLanguage("en")}
            className={`transition-transform duration-200 hover:scale-110 ${
              language === "en" ? "ring-2 ring-blue-200 rounded" : ""
            }`}
          >
            <img src="England.png" alt="English" className="w-8 rounded-xs" />
          </button>
        </div>
      </div>
    </header>
  );
}
