"use client";

import { Mail, MapPin, Phone, Clock, ArrowRight, Building } from "lucide-react";
import InitialImage from "../components/ui/InitialImage";
import { useLanguage } from "../../contexts/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();

  const text = {
    en: {
      hero: "Contact",
      getInTouch: "Get in Touch",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      sendButton: "Send Message",
      contactInfo: "Contact Information",
      address: "Address",
      addressValue:
        "Room F103, Building F, Russian Blvd Phnom Penh, Cambodia 855, Phnom Penh, Cambodia",
      phone: "Phone",
      phoneValue: "(+855) 12 999 310",
      emailLabel: "Email",
      emailValue1: "ams@itc.edu.kh",
      emailValue2: "phauk.sokkhey@itc.edu.kh",
      officeHours: "Office Hours",
      officeHoursValue1: "Monday - Friday: 9:00 AM - 5:00 PM",
      officeHoursValue2: "Saturday: 10:00 AM - 2:00 PM",
      collaborateTitle: "Collaborate with Us",
      collaborateText:
        "Interested in research collaboration or partnership opportunities? We welcome connections with industry, government, and academic institutions.",
      collaborateButton: "Contact ReDA Lab",
      visitTitle: "Visit Our Department",
      visitText:
        "Our department office is located in Room F103 Building F of Institute of Technology of Cambodia. Visitors are welcome during regular office hours.",
    },
    kh: {
      hero: "ទំនាក់ទំនង",
      getInTouch: "ទំនាក់ទំនងមកកាន់យើង",
      firstName: "នាម",
      lastName: "គោត្តនាម",
      email: "អាសយដ្ឋានអ៊ីមែល",
      subject: "ប្រធានបទ",
      message: "សារ",
      sendButton: "ផ្ញើសារ",
      contactInfo: "ព័ត៌មានទំនាក់ទំនង",
      address: "អាសយដ្ឋាន",
      addressValue:
        "បន្ទប់ F103, អាគារ F, មហាវិថីសហព័ន្ធរុស្ស៊ី, រាជធានីភ្នំពេញ, ព្រះរាជាណាចក្រកម្ពុជា",
      phone: "ទូរស័ព្ទ",
      phoneValue: "(+855) 12 999 310",
      emailLabel: "អាសយដ្ឋានអ៊ីមែល",
      emailValue1: "ams@itc.edu.kh",
      emailValue2: "phauk.sokkhey@itc.edu.kh",
      officeHours: "ម៉ោងការងារ",
      officeHoursValue1: "ចន្ទ - សុក្រ: 9:00ព្រឹក - 5:00ល្ងាច",
      officeHoursValue2: "សៅរ៍: 10:00ព្រឹក - 2:00រសៀល",
      collaborateTitle: "សហការជាមួយយើង",
      collaborateText:
        "ចាប់អារម្មណ៍ក្នុងការសហការស្រាវជ្រាវ ឬឱកាសដៃគូ? យើងស្វាគមន៍ការតភ្ជាប់ជាមួយឧស្សាហកម្ម រដ្ឋាភិបាល និងស្ថាប័នអកាដេមិក។",
      collaborateButton: "ទំនាក់ទង ReDA Lab",
      visitTitle: "មកកាន់ដេប៉ាតឺម៉ង់របស់យើង",
      visitText:
        "ការិយាល័យដេប៉ាតឺម៉ង់របស់យើងស្ថិតនៅបន្ទប់ F103 អាគារ F នៃវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា។ អ្នកទស្សនាអាចមកទស្សនា ក្នុងម៉ោងការងារធម្មតា។",
    },
  };

  const t = text[language];

  // font helpers
  const headingFont = language === "kh" ? "font-preahvihear" : "font-playfair_display";
  const bodyFont = language === "kh" ? "font-kantumruy_pro" : "font-raleway";
  
  // size helpers
  const headingSize = language === "kh" ? "text-xl md:text-2xl" : "text-2xl md:text-3xl";

  return (
    <div className="w-full">
      {/* Hero Section */}
      <InitialImage imagePath="/image.png" textEn="Contact" textKh="ទំនាក់ទំនង" />

      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
        {/* Left: Contact Form */}
        <div className="col-span-2">
          <h2 className={`${headingFont} ${headingSize} font-semibold text-black`}>
            {t.getInTouch}
          </h2>
          <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
          <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
          <form className="space-y-4 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <div>
                <label className={`${bodyFont} text-black text-lg font-semibold`}>
                  {t.firstName}
                </label>
                <input
                  type="text"
                  placeholder={t.firstName}
                  className={`${bodyFont} w-full border bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 text-gray-800`}
                />
              </div>
              <div>
                <label className={`${bodyFont} text-black text-lg font-semibold`}>
                  {t.lastName}
                </label>
                <input
                  type="text"
                  placeholder={t.lastName}
                  className={`${bodyFont} w-full border bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 text-gray-800`}
                />
              </div>
            </div>
            <label className={`${bodyFont} text-black text-lg font-semibold`}>
              {t.email}
            </label>
            <input
              type="email"
              placeholder={t.email}
              className={`${bodyFont} w-full border bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 text-gray-800`}
            />
            <label className={`${bodyFont} text-black text-lg font-semibold`}>
              {t.subject}
            </label>
            <input
              type="text"
              placeholder={t.subject}
              className={`${bodyFont} w-full border bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 text-gray-800`}
            />
            <label className={`${bodyFont} text-black text-lg font-semibold`}>
              {t.message}
            </label>
            <textarea
              placeholder={t.message}
              className={`${bodyFont} w-full border bg-gray-100 rounded-lg p-3 h-40 focus:ring-2 focus:ring-indigo-500 text-gray-800`}
            />
            <button
              type="submit"
              className={`${bodyFont} w-full bg-[#3A3B5C] text-white py-3 rounded-lg font-semibold hover:bg-[#585a8d] transition`}
            >
              {t.sendButton}
            </button>
          </form>
        </div>

        {/* Right: Contact Information */}
        <div className="col-span-1">
          <h2 className={`${headingFont} ${headingSize} font-semibold text-black`}>
            {t.contactInfo}
          </h2>
          <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
          <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
          <div className="space-y-6 bg-white shadow-2xl rounded-xl p-6 border border-[#C41E3A] mt-10 border-l-8">
            <div className="flex items-start space-x-2">
              <MapPin className="w-6 h-6 text-[#C41E3A]" />
              <div>
                <h4 className={`${language === "kh" ? "font-kantumruy_pro" : "font-playfair_display"} text-lg text-[#2E2E2E] font-medium`}>
                  {t.address}
                </h4>
                <p className={`${bodyFont} text-xs text-gray-600`}>{t.addressValue}</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Phone className="w-6 h-6 text-[#C41E3A] mt-1" />
              <div>
                <h4 className={`${language === "kh" ? "font-kantumruy_pro" : "font-playfair_display"} text-lg text-[#2E2E2E] font-medium`}>
                  {t.phone}
                </h4>
                <p className={`${bodyFont} text-xs text-gray-600`}>{t.phoneValue}</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Mail className="w-6 h-6 text-[#C41E3A] mt-0.5" />
              <div>
                <h4 className={`${language === "kh" ? "font-kantumruy_pro" : "font-playfair_display"} text-lg text-[#2E2E2E] font-medium`}>
                  {t.emailLabel}
                </h4>
                <p className={`${bodyFont} text-xs text-gray-600`}>
                  <a href={`mailto:${t.emailValue1}`}>{t.emailValue1}</a>
                  <br />
                  <a href={`mailto:${t.emailValue2}`}>{t.emailValue2}</a>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Clock className="w-6 h-6 text-[#C41E3A] mt-0.5" />
              <div>
                <h4 className={`${language === "kh" ? "font-kantumruy_pro" : "font-playfair_display"} text-lg text-[#2E2E2E] font-medium`}>
                  {t.officeHours}
                </h4>
                <p className={`${bodyFont} text-xs text-gray-600`}>
                  {t.officeHoursValue1}
                  <br />
                  {t.officeHoursValue2}
                </p>
              </div>
            </div>
          </div>

          {/* Collaborate with Us */}
          <div className="mt-8 bg-[#3A3B5C] text-white rounded-xl p-6 shadow-md flex flex-col items-center space-y-3">
            <h3 className={`${headingFont} ${language === "kh" ? "text-lg" : "text-xl"} font-semibold`}>
              {t.collaborateTitle}
            </h3>
            <p className={`${bodyFont} mb-4 text-center text-sm`}>{t.collaborateText}</p>
            <button className="bg-white text-indigo-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">
              <p className={`${bodyFont} inline-flex font-bold`}>
                {t.collaborateButton} <ArrowRight className="w-6 h-6 ml-1" />
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Visit Section */}
      <div className="container mx-auto px-6 lg:px-20 pb-16">
        <div className="bg-gray-100 rounded-xl py-6 px-10 shadow-2xl border border-[#3A3B5C] border-l-8">
          <h3 className={`${headingFont} ${headingSize} mb-2 text-black inline-flex items-center ${language === "kh" ? "font-medium" : "font-semibold"}`}>
            <Building className="mr-5" /> {t.visitTitle}
          </h3>
          <p className={`${bodyFont} mb-4 text-sm text-gray-800`}>{t.visitText}</p>
          <div className="w-full h-90 bg-gray-300 flex items-center justify-center rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6309290619924!2d104.89793907627153!3d11.570933688615233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095135c2ad598d%3A0xb2d48d6f11032091!2sDepartment%20of%20Applied%20Mathematics%20and%20Statistics%20(AMS)!5e0!3m2!1sen!2skh!4v1733729142000!5m2!1sen!2skh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
