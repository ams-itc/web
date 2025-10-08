"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Font utility
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

export default function IndustrialPartners() {
  const { language } = useLanguage();

  const partners = [
    { imagepath: "/partners/partners.png" },
    { imagepath: "/partners/partners.png" },
    { imagepath: "/partners/partners.png" },
    { imagepath: "/partners/partners.png" },
    { imagepath: "/partners/partners.png" },
    { imagepath: "/partners/partners.png" },
  ];

  const descriptionEn = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

  const descriptionKh = `គម្រូកឋាខណ្ឌ`; // Replace with real Khmer description

  return (
    <div className="pt-10 w-full">
      {/* Header */}
      <h1
        className={`text-[clamp(1.75rem,2.5vw,2.5rem)] text-black font-semibold ${
          language === "en" ? "font-playfair_display" : "font-preahvihear"
        }`}
      >
        {language === "en" ? "Industrial Partners" : "ដៃគូឧស្សាហកម្ម"}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      {/* Description */}
      <p className="pt-7 text-[#2E2E2E]/80 text-[clamp(0.95rem,1.1vw,1.1rem)] leading-relaxed px-3 md:px-0">
        {renderTextWithFont(language === "en" ? descriptionEn : descriptionKh, language, "body")}
      </p>

      {/* ✅ Swiper Carousel (Mobile/Tablet) */}
      <div className="lg:hidden px-6 py-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="pb-8"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={partner.imagepath}
                  alt={`Partner ${index + 1}`}
                  className="w-[70%] sm:w-[60%] object-contain rounded-xl shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Grid Layout (Desktop) */}
      <div className="hidden lg:grid grid-cols-4 gap-x-10 gap-y-8 px-10 py-5">
        {partners.map((partner, index) => (
          <div key={index} className="col-span-1 flex justify-center">
            <img
              src={partner.imagepath}
              alt={`Partner ${index + 1}`}
              className="w-3/4 object-contain rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
