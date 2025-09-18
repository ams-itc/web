"use client";

import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

interface InitialImageProps {
  imagePath: string;
  textEn: string;
  textKh: string;
}

const InitialImage: React.FC<InitialImageProps> = ({
  imagePath,
  textEn,
  textKh,
}) => {
  const { language } = useLanguage();

  const text = language === "en" ? textEn : textKh;

  return (
    <div className="w-full relative">
      <img src={imagePath} alt={text} className="w-full h-auto object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`text-white font-bold text-center ${
            language === "en"
              ? "font-playfair_display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              : "font-moul text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl "
          }`}
        >
          <span className="leading-tight sm:leading-snug md:leading-normal">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InitialImage;
