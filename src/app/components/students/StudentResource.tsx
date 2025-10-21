'use client';

import { useLanguage } from '@/contexts/LanguageContext';

function renderTextWithFont(
  text: string,
  language: 'en' | 'kh',
  type: 'heading' | 'body'
) {
  if (language === 'en') {
    return (
      <span
        className={
          type === 'heading' ? 'font-playfair_display' : 'font-raleway'
        }
      >
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

export default function StudentResource() {
  const { language } = useLanguage();

  return (
    <div className="w-full mt-10">
      <h1 className="text-3xl font-playfair_display text-black font-semibold">
        {renderTextWithFont(
          language === 'en' ? 'Student’s Resource' : 'ធនធានសិស្ស',
          language,
          'heading'
        )}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
      <img src="/comingsoon.png" alt="Coming Soon Image" className="mt-1" />
      <div className="flex flex-wrap gap-4">
        {/* Render student resources dynamically */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render resource cards dynamically */}
        {/* Example static card, replace with dynamic rendering logic */}
        <div className="bg-white shadow-md rounded-lg p-4">
          {/* Card content */}
        </div>
      </div>
    </div>
  );
}
