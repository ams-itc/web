'use client';

import { FaMountain, FaEye, FaHandsHelping } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function AboutAMS() {
  // Utility function to apply font based on language
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

  const { language } = useLanguage();

  const images = [
    { filepath: '/aboutams/aboutams.png' },
    { filepath: '/aboutams/aboutams1.jpg' },
    { filepath: '/aboutams/aboutams2.png' },
  ];

  const describes = {
    en: [
      {
        icon: <FaMountain />,
        title: 'Missions',
        items: [
          'Promote quality education in applied mathematics and statistics.',
          'Conduct research that addresses real-world challenges in science, technology, and society.',
          'Support national development by producing highly skilled graduates.',
        ],
      },
      {
        icon: <FaEye />,
        title: 'Visions',
        items: [
          'To become a leading department in applied mathematics and statistics in Cambodia and the region.',
          'To foster innovation, critical thinking, and collaboration in mathematical sciences.',
          'To prepare future leaders who can integrate mathematics into interdisciplinary fields.',
        ],
      },
      {
        icon: <FaHandsHelping />,
        title: 'Core Values',
        items: [
          'Excellence in education and research.',
          'Integrity, responsibility, and ethical practice.',
          'Collaboration, inclusiveness, and service to society.',
        ],
      },
    ],
    kh: [
      {
        icon: <FaMountain />,
        title: 'បេសកកម្ម',
        items: [
          'ជំរុញការអប់រំគុណភាពខ្ពស់ក្នុងវិស័យគណិតវិទ្យាអនុវត្តន៍ និងស្ថិតិ។',
          'ធ្វើការស្រាវជ្រាវដើម្បីដោះស្រាយបញ្ហាពិតប្រាកដក្នុងវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា និងសង្គម។',
          'គាំទ្រការអភិវឌ្ឍន៍ជាតិ ដោយបង្កើតបញ្ញាវ័ន្តដែលមានជំនាញខ្ពស់។',
        ],
      },
      {
        icon: <FaEye />,
        title: 'ចក្ខុវិស័យ',
        items: [
          'ក្លាយជាដេប៉ាតឺម៉ង់ឈានមុខគេក្នុងគណិតវិទ្យាអនុវត្តន៍ និងស្ថិតិនៅកម្ពុជា និងតំបន់។',
          'លើកកម្ពស់ការច្នៃប្រឌិត ការគិតវិចារណកថា និងសហការក្នុងវិទ្យាសាស្ត្រគណិត។',
          'បណ្តុះបណ្តាលមេដឹកនាំអនាគតដែលអាចបញ្ចូលគណិតវិទ្យាទៅក្នុងវិស័យពហុវិស័យ។',
        ],
      },
      {
        icon: <FaHandsHelping />,
        title: 'តម្លៃស្នូល',
        items: [
          'ឧត្តមភាពក្នុងការអប់រំ និងការស្រាវជ្រាវ។',
          'ភាពស្មោះត្រង់ ការទទួលខុសត្រូវ និងអភិបាលគោលចិត្ត។',
          'ការសហការណ៍ ភាពរួមបញ្ចូល និងការបម្រើសង្គម។',
        ],
      },
    ],
  };

  return (
    <div className="w-full">
      {/* Title */}
      <h1 className="text-[clamp(1.5rem,2vw,2rem)] text-black font-semibold">
        {renderTextWithFont(
          language === 'en' ? 'About AMS' : 'អំពី AMS',
          language,
          'heading'
        )}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      {/* Image Grid / Carousel */}
      <div className="pt-5 px-3">
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.filepath}
              alt={`AMS image ${index + 1}`}
              className="rounded-2xl object-cover w-full h-full"
            />
          ))}
        </div>

        {/* Mobile / Tablet Carousel */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.filepath}
                  alt={`AMS image ${index + 1}`}
                  className="rounded-2xl object-cover w-full h-64"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Intro Text */}
      <div className="p-7">
        <p className="text-[#2E2E2E] text-[clamp(0.75rem,1.5vw,1rem)] leading-relaxed">
          {renderTextWithFont(
            language === 'en'
              ? 'The Department of Applied Mathematics and Statistics (AMS) is committed to advancing mathematical sciences through excellence in teaching, research, and service. We aim to prepare students with analytical and problem-solving skills to meet the growing demand in various industries and academic fields.'
              : 'ដេប៉ាតឺម៉ង់គណិតវិទ្យាអនុវត្តន៍ និងស្ថិតិ (AMS) មានបំណងជំរុញវិទ្យាសាស្ត្រគណិតវិទ្យាតាមរយៈឧត្តមភាពក្នុងការបង្រៀន ការស្រាវជ្រាវ និងការបម្រើសង្គម។ យើងមានគោលដៅក្នុងការបណ្តុះបណ្តាលសិស្សឱ្យមានជំនាញវិភាគ និងដោះស្រាយបញ្ហា ដើម្បីឆ្លើយតបទៅនឹងតម្រូវការកំពុងកើនឡើងក្នុងវិស័យឧស្សាហកម្ម និងវិស័យអប់រំ។',
            language,
            'body'
          )}
        </p>
      </div>

      {/* Cards / Descriptions */}
      <div className="pt-7 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6">
        {describes[language].map((block, index) => (
          <div key={index} className="md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 pb-5">
              <span className="text-[#3A3B5C] text-[clamp(1.5rem,2vw,2rem)]">
                {block.icon}
              </span>
              <h2 className="text-[clamp(1.5rem,2vw,2rem)] font-medium text-[#3A3B5C]">
                {renderTextWithFont(block.title, language, 'heading')}
              </h2>
            </div>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              {block.items.map((item, i) => (
                <li
                  key={i}
                  className={`list-disc list-inside tracking-wide ${language === 'kh' ? 'font-medium' : 'text-[clamp(0.75rem,1.5vw,1rem)] md:text-[clamp(0.75rem,1.5vw,1rem)]/4 lg:text-[clamp(0.75rem,1.5vw,1rem)]/8'}`}
                >
                  {renderTextWithFont(item, language, 'body')}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
