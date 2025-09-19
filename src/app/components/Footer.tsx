"use client";

import React from "react";
import { MapPinnedIcon, Phone, Mail } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

function renderTextWithFont(text: string, language: "en" | "kh", type: "heading" | "body") {
  if (language === "en") {
    return <span className={type === "heading" ? "font-playfair_display" : "font-raleway"}>{text}</span>;
  } else {
    const parts = text.split(/([^\u1780-\u17FF]+)/);
    return (
      <>
        {parts.map((part, i) => {
          const isKhmer = /[\u1780-\u17FF]/.test(part);
          const fontClass =
            isKhmer
              ? type === "heading"
                ? "font-preahvihear"
                : "font-kantumruy_pro"
              : type === "heading"
              ? "font-playfair_display"
              : "font-raleway";
          return (
            <span key={i} className={fontClass}>
              {part}
            </span>
          );
        })}
      </>
    );
  }
}

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const footerItems = {
    departmentName: language === "en"
      ? "Department of Applied Mathematics and Statistics"
      : "ដេប៉ាតឺម៉ង់គណិតវិទ្យាអនុវត្តន៍ និងស្ថិតិ",
    description: language === "en"
      ? "Advancing mathematical sciences through excellence in education and research."
      : "ជំរុញវិទ្យាសាស្ត្រគណិតវិទ្យាតាមរយៈឧត្តមភាពក្នុងការអប់រំនិងការស្រាវជ្រាវ។",
    quickLinks: language === "en"
      ? ["About Us", "Academics", "Faculty & Research", "Students"]
      : ["អំពីយើង", "សិក្សា", "គ្រូបង្រៀន និងការស្រាវជ្រាវ", "សិស្ស"],
    academicResources: language === "en"
      ? ["Academic Programs", "Academic Calendar", "Student Resource", "Career Services"]
      : ["កម្មវិធីអប់រំ", "ប្រតិទិនសិក្សា", "ធនធានសិស្ស", "សេវាកម្មវិជ្ជាជីវៈ"],
    contact: {
      address: language === "en"
        ? "Room F103, Building F, Russian Blvd Phnom Penh, Cambodia 855, Phnom Penh, Cambodia"
        : "បន្ទប់ F103, អាគារ F, មហាវិថីសហព័ន្ធរុស្ស៊ី, រាជធានីភ្នំពេញ, ព្រះរាជាណាចក្រកម្ពុជា (ទល់មុខមន្ទីរពេទ្យកុមារជាតិ)",
      phone: "(+855) 12 999 310",
      emails: ["ams@itc.edu.kh", "phauk.sokkhey@itc.edu.kh"]
    }
  };

  return (
    <footer className="w-full bg-[#3A3B5C] text-[#FFFFFF] font-raleway overflow-hidden py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Department Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-medium mb-4">
              {renderTextWithFont(footerItems.departmentName, language, "heading")}
            </h3>
            <p className="text-base font-normal mb-6 leading-relaxed">
              {renderTextWithFont(footerItems.description, language, "body")}
            </p>

            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ams.itc.edu.kh"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <i className="fa-brands fa-square-facebook text-3xl"></i>
              </a>
              {/* LinkedIn */}
              <a href="" className="hover:text-gray-400 transition-colors duration-200">
                <i className="fa-brands fa-linkedin text-3xl"></i>
              </a>
              {/* Instagram */}
              <a href="" className="hover:text-gray-400 transition-colors duration-200">
                <i className="fa-brands fa-square-instagram text-3xl"></i>
              </a>
              {/* TikTok */}
              <a href="" className="hover:text-gray-400 transition-colors duration-200">
                <i className="fa-brands fa-tiktok text-3xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-medium mb-4">
              {renderTextWithFont(language === "en" ? "Quick Links" : "តំណភ្ជាប់រហ័ស", language, "heading")}
            </h3>
            <ul className="space-y-2">
              {footerItems.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:underline">
                    {renderTextWithFont(link, language, "body")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Resources */}
          <div className="col-span-1">
            <h3 className="text-xl font-medium mb-4">
              {renderTextWithFont(language === "en" ? "Academic Resources" : "ធនធានសិក្សា", language, "heading")}
            </h3>
            <ul className="space-y-2">
              {footerItems.academicResources.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:underline">
                    {renderTextWithFont(item, language, "body")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-medium mb-4">
              {renderTextWithFont(language === "en" ? "Contact Info" : "ព័ត៌មានទំនាក់ទំនង", language, "heading")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
                  <MapPinnedIcon />
                </div>
                <a
                  href="https://www.google.com/maps"
                  className="text-sm hover:underline"
                >
                  {renderTextWithFont(footerItems.contact.address, language, "body")}
                </a>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 mr-3 flex-shrink-0">
                  <Phone />
                </div>
                <p className="text-sm">{renderTextWithFont(footerItems.contact.phone, language, "body")}</p>
              </div>

              <div className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-2 flex-shrink-0">
                  <Mail />
                </div>
                <div className="flex flex-col text-sm space-y-1">
                  {footerItems.contact.emails.map((email, idx) => (
                    <a key={idx} href={`mailto:${email}`} className="hover:underline">
                      {renderTextWithFont(email, language, "body")}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base font-normal mb-4 md:mb-0">
            <i className="fa-regular fa-copyright text-lg"></i>{" "}
            {renderTextWithFont(
              language === "en"
                ? "2025 Department of Applied Mathematics and Statistics, Institute of Technology of Cambodia. All rights reserved"
                : "២០២៥ ដេប៉ាតឺម៉ង់គណិតវិទ្យាអនុវត្តន៍ និងស្ថិតិ, វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា។ សិទ្ធិគ្រប់យ៉ាងត្រូវបានរក្សា",
              language,
              "body"
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
