'use client';

import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ReactNode } from 'react';

// Utility function to apply font based on language and character type
function renderTextWithFont(
  text: string | ReactNode,
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
    // Split text into Khmer vs non-Khmer parts
    const parts = (text as string).split(/([^\u1780-\u17FF]+)/); // match non-Khmer sequences
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

export default function Home() {
  const { language } = useLanguage();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Helper function to add language to URLs
  const addLangToPath = (path: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('lang', language);
    return `${path}?${newParams.toString()}`;
  };

  return (
    <section className="bg-white flex flex-col lg:flex-row items-center justify-center gap-12 px-6 md:px-20 py-16">
      {/* Image */}
      <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src="/campus.jpg"
          alt={language === 'en' ? 'AMS Building' : 'អគាររបស់ AMS'}
          className="rounded-lg shadow-xl w-full max-w-[500px] object-cover"
        />
      </div>

      {/* Text */}
      <div className="max-w-screen space-y-6 order-2 md:order-1 w-full lg:w-1/2">
        <h1 className="text-[clamp(1.5rem,1.5vw,3rem)] font-medium sm:font-semibold md:font-bold leading-tight text-gray-900">
          {language === 'en' ? (
            renderTextWithFont(
              <>
                Learning Today,
                <br />
                Leading Tomorrow
              </>,
              language,
              'heading'
            )
          ) : (
            <div className="space-y-4">
              <h1>
                {renderTextWithFont('រៀនសូត្រថ្ងៃនេះ', language, 'heading')}
              </h1>
              <h1>
                {renderTextWithFont('ដឹកនាំថ្ងៃស្អែក', language, 'heading')}
              </h1>
            </div>
          )}
        </h1>

        <p className="text-[clamp(0.75rem,1vw,1.125rem)] text-gray-600 leading-relaxed">
          {language === 'en'
            ? renderTextWithFont(
                'Through world-class instruction and hands-on research opportunities, we prepare students at every level to excel in data-driven fields and contribute meaningfully to science, technology, and society.',
                language,
                'body'
              )
            : renderTextWithFont(
                'តាមរយៈការបង្រៀនគុណភាពខ្ពស់ និងឱកាសស្រាវជ្រាវជាក់ស្តែង យើងរៀបចំនិស្សិតគ្រប់កម្រិតឱ្យក្លាយជាអ្នកឯកទេសក្នុងវិស័យដំណើរការទិន្នន័យ ហើយចូលរួមយ៉ាងសំខាន់ក្នុងវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា និងសង្គម។',
                language,
                'body'
              )}
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link
            to={addLangToPath('/academics')}
            className="px-4 py-3 bg-[#3A3B5C] rounded-2xl shadow hover:bg-[#62649d] transition font-raleway text-white font-semibold text-center text-[clamp(0.625rem,1vw,1rem)] inline-flex"
          >
            {language === 'en'
              ? renderTextWithFont('Explore Our Programs →', language, 'body')
              : renderTextWithFont('ស្វែងយល់អំពីកម្មវិធី →', language, 'body')}
          </Link>

          <Link
            to={addLangToPath('/faculty-and-research')}
            className="px-4 py-3 border border-[#C41E3A] rounded-2xl hover:bg-red-50 transition font-raleway text-[#C41E3A] font-semibold text-center text-[clamp(0.625rem,1vw,1rem)] inline-flex"
          >
            {language === 'en'
              ? renderTextWithFont('Meet the Faculty', language, 'body')
              : renderTextWithFont(
                  'ជួបសំណេះសំណាលជាមួយគ្រូបង្រៀន',
                  language,
                  'body'
                )}
          </Link>
        </div>
      </div>
    </section>
  );
}
