"use client";

import React from "react";
import { MapPinnedIcon, Phone, Mail } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
// import Link from "next/link";

const Footer: React.FC = () => {
  const footerItems = {
    en: {
      departmentName: "Department of Applied Mathematics and Statistics",
      description:
        "Advancing mathematical sciences through excellence in education and research.",
    },
    kh: {
      departmentName: "ដេប៉ាតឺម៉ង់គណិតវិទ្យាអនុវត្តន៍ និងស្ថិតិ",
      description:
        "ជំរុញវិទ្យាសាស្ត្រគណិតវិទ្យាតាមរយៈឧត្តមភាពក្នុងការអប់រំនិងការស្រាវជ្រាវ។",
    },
    quickLinks: {
      en: [
        { title: "About Us", url: "/about/#aboutAMS" },
        { title: "Academics", url: "/about/academics" },
        { title: "Faculty & Research", url: "/about/faculty-and-research" },
        { title: "Students", url: "/about/students " },
      ],
      kh: [
        { title: "អំពីយើង", url: "/about/#aboutAMS" },
        { title: "សិក្សា", url: "/about/#academic" },
        {
          title: "គ្រូបង្រៀន និងការស្រាវជ្រាវ",
          url: "/about/faculty-and-research",
        },
        { title: "សិស្ស", url: "/about/students " },
      ],
    },
    academicResources: {
      en: ["Academic Programs"],
      kh: ["កម្មវិធីអប់រំ"],
    },
    contactInfo: {
      address: {
        en: "Room F103, Building F, Russian Blvd Phnom Penh, Cambodia 855, Phnom Penh, Cambodia",
        kh: "បន្ទប់ F103, អគារ F, ផ្លូវរុស្ស៊ី ភ្នំពេញ, កម្ពុជា 855, ភ្នំពេញ, កម្ពុជា (ទល់មុខពេទ្យកុមារជាតិ)",
      },
    },
    socialMedia: {
      facebook: "https://www.facebook.com/ams.itc.edu.kh",
      linkedin: "",
    },
  };

  const { language } = useLanguage();

  console.log(`footer language: ${language}`);

  return (
    <footer className="w-full bg-[#3A3B5C] text-[#FFFFFF] font-raleway overflow-hidden py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Department Info */}
          <div className="col-span-1 md:col-span-1">
            {language === "en" ? (
              <h3 className="text-xl font-medium mb-4">
                Department of Applied Mathematics and Statistics
              </h3>
            ) : (
              <h3 className="text-xl font-light mb-4 font-moul">
                ដេប៉ាតឺម៉ង់ <br /> គណិតវិទ្យាអនុវត្ត និងស្ថិតិ
              </h3>
            )}

            {language === "en" ? (
              <p className="text-base font-normal mb-6">
                Advancing mathematical sciences through excellence in education
                and research.
              </p>
            ) : (
              <p className="text-base font-normal mb-6 font-siemreap leading-relaxed">
                ជំរុញវិទ្យាសាស្ត្រគណិតវិទ្យាតាមរយៈឧត្តមភាពក្នុងការអប់រំនិងការស្រាវជ្រាវ។
              </p>
            )}
            <div className="flex space-x-4">
              {/* facebook */}
              <a
                href="https://www.facebook.com/ams.itc.edu.kh"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <i className="fa-brands fa-square-facebook text-3xl"></i>
              </a>

              {/* linkedin */}
              <a
                href=""
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <i className="fa-brands fa-linkedin text-3xl"></i>
              </a>

              {/* instagram */}
              <a
                href=""
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <i className="fa-brands fa-square-instagram text-3xl"></i>
              </a>

              {/* tiktok */}
              <a
                href=""
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <i className="fa-brands fa-tiktok text-3xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Academic
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Faculty & Research
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Students
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Resources */}
          <div className="col-span-1">
            <h3 className="text-xl font-medium mb-4">Academic Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Academic Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Academic Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Student Resource
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Career Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-medium mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
                  <MapPinnedIcon />
                </div>
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6309290619924!2d104.89793907627153!3d11.570933688615233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095135c2ad598d%3A0xb2d48d6f11032091!2sDepartment%20of%20Applied%20Mathematics%20and%20Statistics%20(AMS)!5e0!3m2!1sen!2skh!4v1733729142000!5m2!1sen!2skh"
                  className="text-sm hover:underline"
                >
                  Room F103, Building F, Russian Blvd Phnom Penh, Cambodia 855,
                  Phnom Penh, Cambodia
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 mr-3 flex-shrink-0">
                  <Phone />
                </div>
                <p className="text-sm">(+855) 12 999 310</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-2 flex-shrink-0">
                  <Mail />
                </div>
                <div className="flex flex-col text-sm">
                  <a href="mailto:ams@itc.edu.kh" className="hover:underline">
                    ams@itc.edu.kh
                  </a>
                  <a
                    href="mailto:phauk.sokkhey@itc.edu.kh"
                    className="hover:underline"
                  >
                    phauk.sokkhey@itc.edu.kh
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base font-normal mb-4 md:mb-0">
            <i className="fa-regular fa-copyright text-lg"></i> 2025 Department
            of Applied Mathematics and Statistics, Institute of Technology of
            Cambodia. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
