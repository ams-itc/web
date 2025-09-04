"use client"

import { ChevronDown, Home, BookOpen, Users, BarChart3, Newspaper, Phone } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navItems = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "AboutUs",
      url: "/about",
      icon: Users,
    },
    {
      title: "Academics",
      url: "/academics",
      icon: BookOpen,
      items: [
        { title: "Programs", url: "/academics/programs" },
        { title: "Courses", url: "/academics/courses" },
        { title: "Admissions", url: "/academics/admissions" },
      ],
    },
    {
      title: "Faculty & Research",
      url: "/faculty-research",
      icon: Users,
      items: [
        { title: "Faculty Directory", url: "/faculty-research/directory" },
        { title: "Research Areas", url: "/faculty-research/areas" },
        { title: "Publications", url: "/faculty-research/publications" },
      ],
    },
    {
      title: "Students",
      url: "/students",
      icon: BarChart3,
      items: [
        { title: "Resources", url: "/students/resources" },
        { title: "Opportunities", url: "/students/opportunities" },
        { title: "Student Life", url: "/students/life" },
      ],
    },
    {
      title: "News & Events",
      url: "/news-events",
      icon: Newspaper,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: Phone,
    },
  ]

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top section with department name */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-900">Department of</h1>
            <h2 className="text-xl font-semibold text-gray-700">
              Applied Mathematics and Statistics
            </h2>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-2">
                {navItems.map((item) => (
                  <div key={item.title} className="relative">
                    {item.items ? (
                      <div className="relative">
                        <button
                          onClick={() => toggleDropdown(item.title)}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          {item.icon && <item.icon className="mr-1 h-4 w-4" />}
                          <span>{item.title}</span>
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                        {openDropdown === item.title && (
                          <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                            <div className="py-1">
                              {item.items.map((subItem) => (
                                <NavLink
                                  key={subItem.title}
                                  to={subItem.url}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {subItem.title}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <NavLink
                        to={item.url}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      >
                        {item.icon && <item.icon className="mr-1 h-4 w-4" />}
                        <span>{item.title}</span>
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

