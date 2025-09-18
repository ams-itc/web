"use client";

import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

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
          {
            title: "Academic Support Staff",
            url: "/faculty-and-research#academic-support-staff",
          },
          { title: "ReDa Lab", url: "/faculty-and-research#redalab" },
          {
            title: "Previous Collaborations",
            url: "/faculty-and-research#previous-collaborations",
          },
          {
            title: "Ongoing Projects",
            url: "/faculty-and-research#ongoing-projects",
          },
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
          {
            title: "បុគ្គលិកអប់រំ",
            url: "/faculty-and-research#academic-support-staff",
          },
          { title: "ReDa Lab", url: "/faculty-and-research#redalab" },
          {
            title: "ការសហការ",
            url: "/faculty-and-research#previous-collaborations",
          },
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
    ],
  };

  const currentNav = navItems[language];

  console.log(language);

  return (
    <nav className={`hidden md:flex space-x-2`}>
      {currentNav.map((item) => (
        <div key={item.title} className="relative group">
          {item.items ? (
            <>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  `inline-flex items-center px-3 text-sm font-medium rounded-md transition ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <span
                  className={
                    language === "kh" ? "font-siemreap" : "font-raleway"
                  }
                >
                  {item.title}
                </span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </NavLink>

              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                {item.items.map((subItem) => (
                  <a
                    key={subItem.title}
                    href={subItem.url}
                    className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                  >
                    <span
                      className={
                        language === "kh" ? "font-siemreap" : "font-raleway"
                      }
                    >
                      {subItem.title}
                    </span>
                  </a>
                ))}
              </div>
            </>
          ) : (
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                `inline-flex items-center px-3 text-sm font-medium rounded-md ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span
                className={language === "kh" ? "font-siemreap" : "font-raleway"}
              >
                {item.title}
              </span>
            </NavLink>
          )}
        </div>
      ))}

      {/* Language Switcher */}
      <div className="flex items-center space-x-2 pl-1">
        <button
          onClick={() => setLanguage("kh")}
          className={`transition-transform duration-200 hover:scale-110 ${
            language === "kh" ? "ring-2 ring-blue-200 rounded" : ""
          }`}
        >
          <img src="Cambodia.png" alt="Khmer" className="w-8 rounded-xs" />
        </button>

        <span className="border border-black h-7"></span>

        <button
          onClick={() => setLanguage("en")}
          className={`transition-transform duration-200 hover:scale-110 ${
            language === "en" ? "ring-2 ring-blue-200 rounded" : ""
          }`}
        >
          <img src="England.png" alt="English" className="w-8 rounded-xs" />
        </button>
      </div>
    </nav>
  );
}
