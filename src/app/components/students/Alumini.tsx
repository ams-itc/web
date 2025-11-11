'use client';

// import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
// import { universityService, type Entity } from '@/lib/services/university';
import ComingSoon from '@/components/SectionComingSoon';

/* -------------------- FONT HELPER -------------------- */
function renderTextWithFont(
  text: string,
  language: 'en' | 'kh',
  type: 'heading' | 'body'
) {
  if (language === 'en') {
    return (
      <span className={type === 'heading' ? 'font-playfair_display' : 'font-raleway'}>
        {text}
      </span>
    );
  } else {
    const parts = text.split(/([^\u1780-\u17FF]+)/);
    return (
      <>
        {parts.map((part, i) => {
          const isKhmer = /[\u1780-\u17FF]/.test(part);
          const fontClass = isKhmer
            ? type === 'heading'
              ? 'font-preahvihear'
              : 'font-kantumruy_pro'
            : type === 'heading'
            ? 'font-playfair_display'
            : 'font-raleway';
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

/* -------------------- COMPONENT -------------------- */
export default function Alumni() {
  const { language } = useLanguage();

  /* -------------------- RENDER -------------------- */
  return (
    <div className="w-full mt-10">
      {/* Title */}
      <h1 className="text-3xl font-playfair_display text-black font-semibold">
        {renderTextWithFont(language === 'en' ? 'Alumni' : 'អតីតសិស្ស', language, 'heading')}
      </h1>

      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      <ComingSoon/>
    </div>
  );
}
