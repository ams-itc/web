'use client';

import { NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = {
    en: [
      { title: 'Home', url: '/', icon: null },
      {
        title: 'About Us',
        url: '/about',
        icon: null,
        items: [
          { title: 'About AMS', url: '/about/#aboutAMS' },
          { title: 'Board of Trustees', url: '/about/#boardoftrustees' },
          { title: 'Accreditation', url: '/about/#accreditation' },
          { title: 'Industrial Partners', url: '/about/#industrialpartners' },
        ],
      },
      {
        title: 'Academics',
        url: '/academics',
        icon: null,
        items: [
          { title: 'Programs', url: '/academics/programs' },
          { title: 'Courses', url: '/academics/courses' },
          { title: 'Admissions', url: '/academics/admissions' },
        ],
      },
      {
        title: 'Faculty & Research',
        url: '/faculty-and-research',
        icon: null,
        items: [
          {
            title: 'Academic Support Staff',
            url: '/faculty-and-research#academic-support-staff',
          },
          { title: 'ReDa Lab', url: '/faculty-and-research#redalab' },
          {
            title: 'Previous Collaborations',
            url: '/faculty-and-research#previous-collaborations',
          },
          {
            title: 'Ongoing Projects',
            url: '/faculty-and-research#ongoing-projects',
          },
        ],
      },
      {
        title: 'Students',
        url: '/students',
        icon: null,
        items: [
          { title: "Student's Achievement", url: '/students/#achievement' },
          { title: "Student's Life", url: '/students/#activity' },
          { title: "Student's Resource", url: '/students/#resource' },
          { title: 'Alumni', url: '/students/#alumni' },
        ],
      },
      { title: 'News & Events', url: '/news-and-events', icon: null },
      { title: 'Contact', url: '/contact', icon: null },
    ],
    kh: [
      { title: 'ទំព័រដើម', url: '/', icon: null },
      {
        title: 'អំពីយើង',
        url: '/about',
        icon: null,
        items: [
          { title: 'អំពី AMS', url: '/about/#aboutAMS' },
          { title: 'ក្រុមប្រឹក្សាភិបាល', url: '/about/#boardoftrustees' },
          { title: 'ការទទួលស្គាល់', url: '/about/#accreditation' },
          { title: 'ដៃគូឧសាហកម្ម', url: '/about/#industrialpartners' },
        ],
      },
      {
        title: 'កម្មវិធីសិក្សា',
        url: '/academics',
        icon: null,
        items: [
          { title: 'កម្មវិធី', url: '/academics/programs' },
          { title: 'វគ្គសិក្សា', url: '/academics/courses' },
          { title: 'ការចូលរៀន', url: '/academics/admissions' },
        ],
      },
      {
        title: 'គ្រូបង្រៀន និងការស្រាវជ្រាវ',
        url: '/faculty-and-research',
        icon: null,
        items: [
          {
            title: 'បុគ្គលិកអនុរំ',
            url: '/faculty-and-research#academic-support-staff',
          },
          { title: 'ReDa Lab', url: '/faculty-and-research#redalab' },
          {
            title: 'ការសហការ',
            url: '/faculty-and-research#previous-collaborations',
          },
          { title: 'គម្រោង', url: '/faculty-and-research#ongoing-projects' },
        ],
      },
      {
        title: 'សិស្ស',
        url: '/students',
        icon: null,
        items: [
          { title: 'សមិទ្ធិផល', url: '/students/#achievement' },
          { title: 'សកម្មភាព', url: '/students/#activity' },
          { title: 'ធនធាន', url: '/students/#resource' },
          { title: 'អតីតសិស្ស', url: '/students/#alumni' },
        ],
      },
      { title: 'ព័ត៌មាន', url: '/news-and-events', icon: null },
      { title: 'ទំនាក់ទំនង', url: '/contact', icon: null },
    ],
  };

  const currentNav = navItems[language];

  const addLangToPath = (path: string) => {
    const url = new URL(path, window.location.origin);
    url.searchParams.set('lang', language);
    return url.pathname + url.search + url.hash;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden xl:flex space-x-2">
        {currentNav.map((item) => (
          <div key={item.title} className="relative group">
            {item.items ? (
              <>
                <NavLink
                  to={addLangToPath(item.url)}
                  className={({ isActive }) =>
                    `inline-flex items-center px-3 text-sm font-medium rounded-md transition ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  <span
                    className={
                      language === 'kh'
                        ? 'font-kantumruy_pro text-sm'
                        : 'font-raleway text-sm'
                    }
                  >
                    {item.title}
                  </span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </NavLink>

                <div className="absolute left-0 top-[calc(100%+8px)] w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[70] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 2xl:w-72">
                  {item.items.map((subItem) => (
                    <NavLink
                      key={subItem.title}
                      to={addLangToPath(subItem.url)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span
                        className={
                          language === 'kh'
                            ? 'font-kantumruy_pro text-sm'
                            : 'font-raleway text-sm'
                        }
                      >
                        {subItem.title}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </>
            ) : (
              <NavLink
                to={addLangToPath(item.url)}
                className={({ isActive }) =>
                  `inline-flex items-center px-3 text-sm font-medium rounded-md transition ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <span
                  className={
                    language === 'kh'
                      ? 'font-kantumruy_pro text-sm'
                      : 'font-raleway text-sm'
                  }
                >
                  {item.title}
                </span>
              </NavLink>
            )}
          </div>
        ))}

        {/* Desktop Language Switcher */}
        <div className="flex items-center space-x-2 pl-1">
          {/* Khmer */}
          <div className="relative group">
            <button
              onClick={() => setLanguage('kh')}
              className={`transition-transform duration-200 hover:scale-110 ${
                language === 'kh' ? 'ring-2 ring-blue-200 rounded' : ''
              }`}
            >
              <img src="/Cambodia.png" alt="Khmer" className="w-8 rounded-xs" />
            </button>
            <span
              className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 ${language === 'en' ? 'font-reddit_sans font-medium' : 'font-kantumruy_pro font-semibold'}`}
            >
              {language === 'en' ? 'Khmer' : 'ភាសាខ្មែរ'}
            </span>
          </div>

          <span className="border border-black h-7"></span>

          {/* English */}
          <div className="relative group">
            <button
              onClick={() => setLanguage('en')}
              className={`transition-transform duration-200 hover:scale-110 ${
                language === 'en' ? 'ring-2 ring-blue-200 rounded' : ''
              }`}
            >
              <img
                src="/England.png"
                alt="English"
                className="w-8 rounded-xs"
              />
            </button>
            <span
              className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 ${language === 'en' ? 'font-reddit_sans font-medium' : 'font-kantumruy_pro font-semibold'}`}
            >
              {language === 'en' ? 'English' : 'ភាសាអង់គ្លេស'}
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="xl:hidden flex items-center space-x-4">
        {/* Mobile Language Switcher */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setLanguage('kh')}
            className={`transition-transform duration-200 ${
              language === 'kh' ? 'ring-2 ring-blue-200 rounded' : ''
            }`}
          >
            <img src="/Cambodia.png" alt="Khmer" className="w-6 rounded-xs" />
          </button>
          <span className="border border-gray-400 h-5"></span>
          <button
            onClick={() => setLanguage('en')}
            className={`transition-transform duration-200 ${
              language === 'en' ? 'ring-2 ring-blue-200 rounded' : ''
            }`}
          >
            <img src="/England.png" alt="English" className="w-6 rounded-xs" />
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-[clamp(1.25rem,2vw,2rem)] w-[clamp(1.25rem,2vw,2rem)]" />
          ) : (
            <Menu className="h-[clamp(1.25rem,2vw,2rem)] w-[clamp(1.25rem,2vw,2rem)]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="block absolute left-0 right-0 top-full bg-white shadow-xl border-t border-gray-200 z-50">
          <div className="px-6 py-4 space-y-1">
            {currentNav.map((item) => (
              <div key={item.title}>
                {item.items ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="w-full flex items-center justify-between px-3 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-md transition"
                    >
                      <span
                        className={
                          language === 'kh'
                            ? 'font-kantumruy_pro text-base font-medium'
                            : 'font-raleway text-base font-medium'
                        }
                      >
                        {item.title}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.title && (
                      <div
                        className="ml-4 space-y-1 transition-opacity duration-200 opacity-100 visible z-50"
                        style={{
                          position: 'relative',
                          background: 'white',
                          overflow: 'visible',
                        }}
                      >
                        {item.items.map((subItem) => (
                          <NavLink
                            key={subItem.title}
                            to={addLangToPath(subItem.url)}
                            onClick={closeMobileMenu}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                          >
                            <span
                              className={
                                language === 'kh'
                                  ? 'font-kantumruy_pro'
                                  : 'font-raleway'
                              }
                            >
                              {subItem.title}
                            </span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={addLangToPath(item.url)}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block px-3 py-3 rounded-md transition ${
                        isActive
                          ? 'text-blue-600 bg-blue-50 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    <span
                      className={
                        language === 'kh'
                          ? 'font-kantumruy_pro text-base font-medium'
                          : 'font-raleway text-base font-medium'
                      }
                    >
                      {item.title}
                    </span>
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
