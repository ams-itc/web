"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";



export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
      url: "/faculty-research",
      icon: null,
      items: [
        { title: "Faculty Directory", url: "/faculty-research/directory" },
        { title: "Research Areas", url: "/faculty-research/areas" },
        { title: "Publications", url: "/faculty-research/publications" },
      ],
    },
    {
      title: "Students",
      url: "/students",
      icon: null,
      items: [
        { title: "Resources", url: "/students/resources" },
        { title: "Opportunities", url: "/students/opportunities" },
        { title: "Student Life", url: "/students/life" },
      ],
    },
    { title: "News & Events", url: "/news-events", icon: null },
    { title: "Contact", url: "/contact", icon: null },
  ];

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto pr-0">
        <div className="flex justify-between items-center h-16">
          {/* Nav Links */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <div key={item.title} className="relative" >
                {item.items ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="inline-flex items-center px-3  text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md font-raleway"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`m-0 h-4 w-4 transition-transform ${
                          openDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.title && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1">
                          {item.items.map((subItem) => (
                            <NavLink
                              key={subItem.title}
                              to={subItem.url}
                              className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 font-raleway"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.title}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
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
    </header>
  );
}
