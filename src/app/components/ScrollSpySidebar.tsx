import React from "react";

interface Section {
  id: string;
  label: string;
}

interface ScrollSpySidebarProps {
  sections: Section[];
  activeSection: string;
  className?: string;
}

const ScrollSpySidebar: React.FC<ScrollSpySidebarProps> = ({
  sections,
  activeSection,
  className = "",
}) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`px-10 py-3 sticky top-0 h-screen overflow-y-auto ${className}`}
    >
      {sections.map((section) => (
        <div
          key={section.id}
          className={`py-8 border-b border-gray-300 ${
            section.id === "faqs" ? "border-b-0" : ""
          }`}
        >
          <button
            type="button"
            onClick={() => handleScroll(section.id)}
            className={`text-base font-raleway text-left w-full ${
              activeSection === section.id
                ? "text-gray-700 font-bold"
                : "text-black"
            }`}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            {section.label}
          </button>
        </div>
      ))}
    </nav>
  );
};

export default ScrollSpySidebar;
