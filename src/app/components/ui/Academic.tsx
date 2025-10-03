'use client';

import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Utility function for font rendering
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

// Cards data (same as before)
const cards = [
  {
    border: 'border-blue-500',
    title: {
      en: 'Bachelor of Engineering ',
      kh: 'បរិញ្ញាបត្រវិស្វកម្ម ',
    },
    highlight: {
      en: 'Data Science',
      kh: 'វិទ្យាសាស្ត្រ​ទិន្នន័យ',
    },
    description: {
      en: 'Dive into the world of big data, machine learning, AI, data analytics and business analytics. Equip yourself with the skills to solve real-world problems using data-driven insights.',
      kh: 'ចូលរួមស្វែងយល់អំពីពិភព ទិន្នន័យធំ (Big Data), ការរៀនម៉ាស៊ីន (Machine Learning), បញ្ញាសិប្បនិម្មិត (AI), វិភាគទិន្នន័យ (Data Analytics) និង វិភាគអាជីវកម្ម (Business Analytics)។ រៀបចំខ្លួនអ្នកឲ្យមានជំនាញក្នុងការដោះស្រាយបញ្ហាក្នុងពិភពជាក់ស្តែង ដោយប្រើ ចំណេះដឹងផ្អែកលើទិន្នន័យ។',
    },
    list: {
      en: [
        'Core mathematical concepts',
        'Computational Methods',
        'Real-world application',
        'Research opportunities',
      ],
      kh: [
        'មូលដ្ឋានគណិតវិទ្យា',
        'វិធីសាស្ត្រគណនា',
        'កម្មវិធីជាក់ស្តែង',
        'ឱកាសស្រាវជ្រាវ',
      ],
    },
    duration: { en: 'Duration: 5 Years', kh: 'រយៈពេល៖ ៥ ឆ្នាំ' },
    linkText: { en: 'Learn More →', kh: 'ស្វែងយល់បន្ថែម →' },
  },
  {
    border: 'border-red-500',
    title: { en: 'Bachelor of Engineering ', kh: 'បរិញ្ញាបត្រវិស្វកម្ម ' },
    highlight: { en: 'Financial Engineering', kh: 'ហិរញ្ញវត្ថុ' },
    description: {
      en: 'Combine mathematics, statistics, and finance to design and manage complex financial systems. Prepare for careers in quantitative finance, risk management, fintech innovation, and actuarial science.',
      kh: 'បញ្ចូលសមាសធាតុ គណិតវិទ្យា, ស្ថិតិវិទ្យា និង ហិរញ្ញវត្ថុ ដើម្បីរចនានិងគ្រប់គ្រងប្រព័ន្ធហិរញ្ញវត្ថុស្មុគស្មាញ។ រៀបចំខ្លួនសម្រាប់អាជីពក្នុង ហិរញ្ញវត្ថុគុណភាព (Quantitative Finance), ការគ្រប់គ្រងហានិភ័យ (Risk Management), នវានុវត្តហិរញ្ញវត្ថុបច្ចេកវិទ្យា (FinTech Innovation) និង វិទ្យាសាស្ត្រធានារ៉ាប់រង (Actuarial Science)។',
    },
    list: {
      en: [
        'Applied Statistics & Numerical methods',
        'Financial economic & risk management',
        'Real-world application',
        'Research opportunities',
      ],
      kh: [
        'ស្ថិតិសាស្ត្រ និងវិធីសាស្ត្រគណនា',
        'សេដ្ឋកិច្ចហិរញ្ញវត្ថុ និងការគ្រប់គ្រងហានិភ័យ',
        'កម្មវិធីជាក់ស្តែង',
        'ឱកាសស្រាវជ្រាវ',
      ],
    },
    duration: { en: 'Duration: 5 Years', kh: 'រយៈពេល៖ ៥ ឆ្នាំ' },
    linkText: { en: 'Learn More →', kh: 'ស្វែងយល់បន្ថែម →' },
  },
  {
    border: 'border-indigo-900',
    title: {
      en: 'Master of Engineering ',
      kh: 'បរិញ្ញាបត្រជាន់ខ្ពស់ វិស្វកម្ម ',
    },
    highlight: { en: 'Data Science', kh: 'វិទ្យាសាស្ត្រ​ទិន្នន័យ' },
    description: {
      en: 'Uses real-world problems and scenarios to prepare graduates for roles as strategic thought leaders who leverage predictive modeling to support data decision-making.',
      kh: 'ប្រើប្រាស់បញ្ហា និងសេណារីយ៉ោជាក់ស្តែង ដើម្បីរៀបចំសិស្សបញ្ចប់ការសិក្សា ឲ្យក្លាយជាអ្នកដឹកនាំផ្នែកយុទ្ធសាស្ត្រដែលអាចប្រើ គំរូប៉ុស្តិចទាយ (Predictive Modeling) ដើម្បីគាំទ្រការទិញសម្រេចចិត្តផ្អែកលើទិន្នន័យ។',
    },
    list: {
      en: [
        'Statistical theory',
        'Data science methods',
        'Machine learning',
        'Thesis research',
      ],
      kh: [
        'ទ្រឹស្តីស្ថិតិសាស្ត្រ',
        'វិធីសាស្ត្រវិទ្យាសាស្ត្រ​ទិន្នន័យ',
        'ការសិក្សាម៉ាស៊ីន',
        'ស្រាវជ្រាវថេសី',
      ],
    },
    duration: { en: 'Duration: 1–2 Years', kh: 'រយៈពេល៖ ១–២ ឆ្នាំ' },
    linkText: { en: 'Learn More →', kh: 'ស្វែងយល់បន្ថែម →' },
  },
];

export default function AcademicPrograms() {
  const { language } = useLanguage();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const addLangToPath = (path: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('lang', language);
    return `${path}?${newParams.toString()}`;
  };

  return (
    <section className="bg-white px-8 md:px-20 py-10">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          {language === 'en'
            ? renderTextWithFont('Academic Programs', language, 'heading')
            : renderTextWithFont('កម្មវិធីសិក្សា', language, 'heading')}
        </h2>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed">
          {language === 'en'
            ? renderTextWithFont(
                "Explore your passion and build your future with our diverse range of academic programs. Whether you're a prospective student seeking a new challenge or a current student looking to specialize, our curriculum is designed to provide you with the knowledge and skills needed to thrive in an ever-evolving world.",
                language,
                'body'
              )
            : renderTextWithFont(
                'ស្វែងយល់ពីចំណង់ចំណូលចិត្តរបស់អ្នក និងកសាងអនាគតរបស់អ្នកជាមួយនឹងកម្មវិធីសិក្សាចម្រុះរបស់យើង។ មិនថាអ្នកជាសិស្សអនាគតដែលកំពុងស្វែងរកបញ្ហាប្រឈមថ្មី ឬនិស្សិតបច្ចុប្បន្នកំពុងស្វែងរកជំនាញនោះទេ កម្មវិធីសិក្សារបស់យើងត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ឱ្យអ្នកនូវចំណេះដឹង និងជំនាញដែលត្រូវការដើម្បីរីកចម្រើននៅក្នុងពិភពលោកដែលមិនធ្លាប់មាន។',
                language,
                'body'
              )}
        </p>
      </div>

      {/* Cards */}
      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`border-2 ${card.border} rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 p-6 flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-base sm:text-md lg:text-xl font-bold text-gray-900">
                {renderTextWithFont(card.title[language], language, 'heading')}
                <span className="text-[#C41E3A]">
                  {renderTextWithFont(
                    card.highlight[language],
                    language,
                    'heading'
                  )}
                </span>
              </h3>
              <p className="text-gray-600 mt-3 text-xs lg:text-sm">
                {renderTextWithFont(
                  card.description[language],
                  language,
                  'body'
                )}
              </p>
              <ul className="mt-4 space-y-1 text-gray-700 text-sm list-disc list-inside">
                {card.list[language].map((item, i) => (
                  <li
                    key={i}
                    className={
                      language === 'en' ? 'font-raleway' : 'font-kantumruy_pro'
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs border-t border-gray-400 pt-2">
              <span className="text-gray-500">
                {renderTextWithFont(card.duration[language], language, 'body')}
              </span>
              <a
                href="#"
                className="text-[#C41E3A] font-semibold hover:underline"
              >
                {renderTextWithFont(card.linkText[language], language, 'body')}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Swiper */}
      <div className="lg:hidden">
        <Swiper
          modules={[Pagination, Autoplay]} 
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="!flex !justify-center !w-full">
              {({ isActive }) => (   // Swiper passes `isActive` to a render function
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`w-full max-w-xs border-2 ${card.border} rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 p-6 flex flex-col justify-between`}
                >
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {renderTextWithFont(card.title[language], language, 'heading')}
                    <span className="text-[#C41E3A]">
                      {renderTextWithFont(card.highlight[language], language, 'heading')}
                    </span>
                  </h3>
                  <p className="text-gray-600 mt-3 text-sm">
                    {renderTextWithFont(card.description[language], language, 'body')}
                  </p>
                  <ul className="mt-4 space-y-1 text-gray-700 text-sm list-disc list-inside">
                    {card.list[language].map((item, i) => (
                      <li
                        key={i}
                        className={language === 'en' ? 'font-raleway' : 'font-kantumruy_pro'}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs border-t border-gray-400 pt-2">
                  <span className="text-gray-500">
                    {renderTextWithFont(card.duration[language], language, 'body')}
                  </span>
                  <a
                    href="#"
                    className="text-[#C41E3A] font-semibold hover:underline"
                  >
                    {renderTextWithFont(card.linkText[language], language, 'body')}
                  </a>
                </div>
              </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom button */}
      <div className="flex justify-center mt-10">
        <Link
          to={addLangToPath('/academics')}
          className="px-6 py-3 bg-[#3A3B5C] rounded-full shadow hover:bg-[#62649d] transition font-raleway text-white font-semibold"
        >
          {language === 'en'
            ? renderTextWithFont('Learn More →', language, 'body')
            : renderTextWithFont('ស្វែងយល់បន្ថែម →', language, 'body')}
        </Link>
      </div>
    </section>
  );
}
