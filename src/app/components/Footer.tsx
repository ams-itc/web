import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-700 text-white overflow-hidden py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Department Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-medium font-raleway mb-4">
              Department of Applied Mathematics and Statistics
            </h3>
            <p className="text-base font-normal font-raleway mb-6">
              Advancing mathematical sciences through excellence in education
              and research.
            </p>
            <div className="flex space-x-4">
              <i className="fa-brands fa-square-facebook text-3xl"></i>
              <i className="fa-brands fa-square-twitter text-3xl"></i>
              <i className="fa-brands fa-linkedin text-3xl"></i>
              <i className="fa-brands fa-square-instagram text-3xl"></i>
              <i className="fa-brands fa-youtube text-3xl"></i>
              <i className="fa-brands fa-tiktok text-3xl"></i>
              <i className="fa-brands fa-x-twitter text-3xl"></i>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-medium font-raleway mb-4">
              Quick Links
            </h3>
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
            <h3 className="text-xl font-medium font-raleway mb-4">
              Academic Resources
            </h3>
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
            <h3 className="text-xl font-medium font-raleway mb-4">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-5 h-5 bg-gray-400 mr-3 mt-1 flex-shrink-0"></div>
                <p className="text-sm">
                  Room F103, Building F, Russian Blvd Phnom Penh, Cambodia 855,
                  Phnom Penh, Cambodia
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-gray-400 mr-3 flex-shrink-0"></div>
                <p className="text-sm">(+855) 12 999 310</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 bg-gray-400 mr-3 mt-1 flex-shrink-0"></div>
                <p className="text-sm font-medium">
                  ams@itc.edu.kh
                  <br />
                  phauk.sokkhey@itc.edu.kh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base font-normal font-raleway mb-4 md:mb-0">
            <i className="fa-regular fa-copyright text-lg"></i> 2025 Department of Applied Mathematics and Statistics, Institute of
            Technology of Cambodia. All rights reserved
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-base font-bold hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-base font-bold hover:underline">
              Term of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
