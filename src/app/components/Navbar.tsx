"use client";

import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { title: "Home", url: "/", icon: null },
    { 
      title: "About Us", 
      url: "/about", 
      icon: null, 
      items: [
        { title: "About AMS", url: "/about/aboutams" },
        { title: "Board of Trustees", url: "/about/boardoftrustees" },
        { title: "Accreditation", url: "/about/accreditation" },
        { title: "Industrial Partners", url: "/about/industrialpartners" },
        { title: "FAQs", url: "/about/faqs" },
      ]
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
        { title: "Faculty Directory", url: "/faculty-and-research/directory" },
        { title: "Research Areas", url: "/faculty-and-research/areas" },
        { title: "Publications", url: "/faculty-and-research/publications" },
      ],
    },
    {
      title: "Students",
      url: "/students",
      icon: null,
      items: [
        { title: "Student’s Achievement", url: "/students#achievement" },
        { title: "Student’s Life", url: "/students#activity" },
        { title: "Student’s Resource", url: "/students#resource" },
        { title: "Alumni", url: "/students#alumni" },
      ],
    },
    { title: "News & Events", url: "/news-and-events", icon: null },
    { title: "Contact", url: "/contact", icon: null },
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="flex flex-row">
        <nav className="max-w-7xl mx-auto pr-0">
          <div className="flex justify-between items-center h-16">
            {/* Nav Links */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <div key={item.title} className="relative group">
                  {item.items ? (
                    <>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) =>
                          `inline-flex items-center px-3 text-sm font-medium rounded-md transition ${
                            isActive
                              ? "text-blue-600 bg-blue-50 font-raleway"
                              : "text-gray-700 hover:bg-gray-100 font-raleway"
                          }`
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
                              className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 font-raleway"
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
                        `inline-flex items-center px-3 text-sm font-medium rounded-md ${
                          isActive
                            ? "text-blue-600 bg-blue-50 font-raleway"
                            : "text-gray-700 hover:bg-gray-100 font-raleway"
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center space-x-2 ml-5">
          <a 
            href="#"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img 
              src="Cambodia.png"
              alt="Khmer"
              className="w-8 rounded-xs"
            />
          </a>

          <span className="border border-black h-7"></span>

          <a 
            href="#"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img 
              src="England.png"
              alt="English"
              className="w-8 rounded-xs"
            />
          </a>
        </div>
      </div>

    </header>
  );
}
