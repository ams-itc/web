'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useLanguage } from '@/contexts/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Interface for section data
interface InnovationSection {
  title: { en: string; kh: string };
  images: string[];
  description: { en: string; kh: string };
}

// Static bilingual data
const innovationSections: InnovationSection[] = [
  {
    title: {
      en: 'Where Innovation Meets Learning',
      kh: 'កន្លែងដែលនវានុវត្តន៍រីកចម្រើនជាមួយការអប់រំ',
    },
    images: [
      '/innovations/image1.png',
      '/innovations/image2.png',
      '/innovations/image3.png',
    ],
    description: {
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      kh: 'គម្រូកឋាខណ្ឌ',
    },
  },
  {
    title: { en: 'The Power of Collaboration', kh: 'កម្លាំងនៃការសហការគ្នា' },
    images: [
      '/innovations/image1.png',
      '/innovations/image2.png',
      '/innovations/image3.png',
    ],
    description: {
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      kh: 'គម្រូកឋាខណ្ឌ',
    },
  },
  {
    title: {
      en: 'World-Class Mentorship',
      kh: 'ការណែនាំបណ្ដុះបណ្ដាលកម្រិតពិភពលោក',
    },
    images: [
      '/innovations/image1.png',
      '/innovations/image2.png',
      '/innovations/image3.png',
    ],
    description: {
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      kh: 'គម្រូកឋាខណ្ឌ',
    },
  },
  {
    title: { en: 'Real-World Adventures', kh: 'ដំណើរផ្សងព្រេងជាក់ស្តែង' },
    images: [
      '/innovations/image1.png',
      '/innovations/image2.png',
      '/innovations/image3.png',
    ],
    description: {
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      kh: 'គម្រូកឋាខណ្ឌ',
    },
  },
];

// Utility function for bilingual font rendering
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

export default function StudentActivity() {
  const { language } = useLanguage();

  return (
    <div className="w-full">
      <h1 className="text-3xl font-playfair_display text-black">
        {renderTextWithFont(
          language === 'en' ? 'Student’s Life' : 'ជីវិតសិស្ស',
          language,
          'heading'
        )}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      <div className="max-w-5xl mt-10 space-y-12">
        {innovationSections.map((section, idx) => (
          <div key={idx} className="space-y-6">
            {/* Title */}
            <h1 className="text-2xl text-black font-semibold font-raleway">
              {renderTextWithFont(
                language === 'en' ? section.title.en : section.title.kh,
                language,
                'heading'
              )}
            </h1>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="mx-auto mt-5"
            >
              {section.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center rounded-2xl border h-100">
                    <img
                      src={img}
                      alt={`slide-${index}`}
                      className="rounded-2xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-black font-raleway text-base mt-5">
                {renderTextWithFont(
                  language === 'en'
                    ? section.description.en
                    : section.description.kh,
                  language,
                  'body'
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Grid Layout for Student Activities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {/* Render student activity cards or content */}
      </div>
    </div>
  );
}
