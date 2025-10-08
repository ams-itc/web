"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Font Rendering Helper
function renderTextWithFont(
  text: string,
  language: "en" | "kh",
  type: "heading" | "body"
) {
  if (language === "en") {
    return <span className={type === "heading" ? "font-raleway" : "font-raleway"}>{text}</span>;
  } else {
    const parts = text.split(/([^\u1780-\u17FF]+)/);
    return (
      <>
        {parts.map((part, i) => {
          const isKhmer = /[\u1780-\u17FF]/.test(part);
          const fontClass = isKhmer
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

export default function Accreditation() {
  const { language } = useLanguage();

  const accreditations = [
    {
      imagepath: "/accreditations/success_pet.png",
      titleEn: "Certification Title",
      titleKh: "ចំណងជើងវិញ្ញាបនបត្រ",
      descriptionEn: "My name is Joofy. When I'm free, I like to fight my owner.",
      descriptionKh: "ខ្ញុំឈ្មោះ Joofy។ ពេលដែលខ្ញុំទំនេរ ខ្ញុំចូលចិត្តប្រយុទ្ធជាមួយម្ចាស់ខ្ញុំ។",
    },
    {
      imagepath: "/accreditations/success_pet_1.png",
      titleEn: "Certification Title",
      titleKh: "ចំណងជើងវិញ្ញាបនបត្រ",
      descriptionEn: "My name is Ah Peal. When I'm free, I like to fight my owner.",
      descriptionKh: "ខ្ញុំឈ្មោះ Ah Peal។ ពេលដែលខ្ញុំទំនេរ ខ្ញុំចូលចិត្តប្រយុទ្ធជាមួយម្ចាស់ខ្ញុំ។",
    },
    {
      imagepath: "/accreditations/success_pet_2.png",
      titleEn: "Certification Title",
      titleKh: "ចំណងជើងវិញ្ញាបនបត្រ",
      descriptionEn: "My name is Mister Keav. When I'm free, I like to fight my owner.",
      descriptionKh: "ខ្ញុំឈ្មោះ Mister Keav។ ពេលដែលខ្ញុំទំនេរ ខ្ញុំចូលចិត្តប្រយុទ្ធជាមួយម្ចាស់ខ្ញុំ។",
    },
  ];

  return (
    <div className="pt-10 w-full">
      {/* Header */}
      <h1
        className={`text-[clamp(1.75rem,2.5vw,2.5rem)] text-black font-semibold ${
          language === "en" ? "font-playfair_display" : "font-preahvihear"
        }`}
      >
        {language === "en" ? "Accreditation" : "ការទទួលស្គាល់"}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      {/* Responsive Content */}
      <div className="pt-7">
        {/* ✅ Swiper Carousel for Mobile */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500, // 3.5 seconds per slide
              disableOnInteraction: false,
            }}
            className="pb-8"
          >
            {accreditations.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <img
                    src={item.imagepath}
                    alt={`Accreditation ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <h2 className="text-[clamp(1.1rem,1.5vw,1.3rem)] font-semibold text-black pt-3">
                    {renderTextWithFont(
                      language === "en" ? item.titleEn : item.titleKh,
                      language,
                      "heading"
                    )}
                  </h2>
                  <p className="text-[clamp(0.95rem,1.1vw,1.1rem)] text-[#2E2E2E] leading-relaxed">
                    {renderTextWithFont(
                      language === "en" ? item.descriptionEn : item.descriptionKh,
                      language,
                      "body"
                    )}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid layout on desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-x-16 gap-y-10 px-3">
          {accreditations.map((item, index) => (
            <div key={index} className="col-span-1">
              <img
                src={item.imagepath}
                alt={`Accreditation ${index + 1}`}
                className="rounded-lg w-full h-72 object-cover shadow-md"
              />
              <h2 className="text-[clamp(1.1rem,1.5vw,1.3rem)] font-semibold text-black pt-3">
                {renderTextWithFont(
                  language === "en" ? item.titleEn : item.titleKh,
                  language,
                  "heading"
                )}
              </h2>
              <p className="text-[clamp(0.95rem,1.1vw,1.1rem)] text-[#2E2E2E] leading-relaxed">
                {renderTextWithFont(
                  language === "en" ? item.descriptionEn : item.descriptionKh,
                  language,
                  "body"
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
