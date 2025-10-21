'use client';

import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface InitialImageProps {
  imagePath: string;
  textEn: string;
  textKh: string;
  textColor?: string; // Optional prop for text color
}

const InitialImage: React.FC<InitialImageProps> = ({
  imagePath,
  textEn,
  textKh,
  textColor = 'white', // Default text color is white
}) => {
  const { language } = useLanguage();

  const text = language === 'en' ? textEn : textKh;

  return (
    <div className="w-full relative">
      <img src={imagePath} alt={text} className="w-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`font-bold text-center ${
            language === 'en'
              ? 'font-playfair_display text-[clamp(2rem,3vw,3rem)]'
              : 'font-moul text-[clamp(1.75rem,2.75vw,2.75rem)]'
          }`}
          style={{ color: textColor }} // Apply the text color
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
