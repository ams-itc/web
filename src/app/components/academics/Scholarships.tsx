import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function renderTextWithFont(
  text: ReactNode, // <-- change from string to ReactNode
  language: 'en' | 'kh',
  type: 'heading' | 'body'
) {
  const fontClass =
    language === 'en'
      ? type === 'heading'
        ? 'font-playfair_display'
        : 'font-reddit_sans'
      : type === 'heading'
        ? 'font-preahvihear'
        : 'font-kantumruy_pro';

  return <span className={fontClass}>{text}</span>;
}

export default function Scholarships() {
  const scholarships = [
    {
      en: {
        title: 'Academic Achievement Award',
        type: 'MERIT-BASED',
        amount: '$4,000 per year',
        description:
          'Recognizes outstanding academic performance and commitment to scholarly excellence within the department.',
        duration: '5 years',
        recipients: '20 per year',
        deadline: 'December 10, 2025',
        notification: 'January 10, 2026',
        requirements: [
          'Minimum GPA of 3.5 in high school or university',
          'Top 10% in the entrance exam score',
          'Strong letters of recommendation',
          'No academic probation history',
        ],
        contact: {
          office: 'Department Office: Building F, Room 103',
          email: 'amp@itc.edu.kh',
          phone: '012 345 678',
        },
      },
      kh: {
        title: 'រង្វាន់សមិទ្ធផលសិក្សា',
        type: 'ផ្អែកលើសមត្ថភាព',
        amount: '៤,០០០ ដុល្លារ ក្នុងមួយឆ្នាំ',
        description:
          'ទទួលស្គាល់សមិទ្ធផលសិក្សាដ៏លេចធ្លោ និងការប្តេជ្ញាចិត្តចំពោះភាពឆ្នើមវិទ្យាសាស្ត្រនៅក្នុងមហាវិទ្យាល័យ។',
        duration: '៥ ឆ្នាំ',
        recipients: '២០ នាក់ក្នុងមួយឆ្នាំ',
        deadline: '១០ ធ្នូ ២០២៥',
        notification: '១០ មករា ២០២៦',
        requirements: [
          'មានពិន្ទុមធ្យមសរុប (GPA) អប្បបរមា ៣.៥ ក្នុងវិទ្យាល័យ ឬ សាកលវិទ្យាល័យ',
          'ចំណាត់ថ្នាក់នៅក្នុង ១០% កំពូលនៃពិន្ទុប្រឡងចូល',
          'មានលិខិតផ្ដល់អនុសាសន៍រឹងមាំ',
          'មិនមានប្រវត្តិនៅក្រោមវិន័យសិក្សា',
        ],
        contact: {
          office: 'ការិយាល័យនាយកដ្ឋាន៖ អគារ F បន្ទប់ 103',
          email: 'amp@itc.edu.kh',
          phone: '012 345 678',
        },
      },
    },
    {
      en: {
        title: 'Academic Achievement Award',
        type: 'MERIT-BASED',
        amount: '$4,000 per year',
        description:
          'Recognizes outstanding academic performance and commitment to scholarly excellence within the department.',
        duration: '5 years',
        recipients: '20 per year',
        deadline: 'December 10, 2025',
        notification: 'January 10, 2026',
        requirements: [
          'Minimum GPA of 3.5 in high school or university',
          'Top 10% in the entrance exam score',
          'Strong letters of recommendation',
          'No academic probation history',
        ],
        contact: {
          office: 'Department Office: Building F, Room 103',
          email: 'amp@itc.edu.kh',
          phone: '012 345 678',
        },
      },
      kh: {
        title: 'រង្វាន់សមិទ្ធផលសិក្សា',
        type: 'ផ្អែកលើសមត្ថភាព',
        amount: '៤,០០០ ដុល្លារ ក្នុងមួយឆ្នាំ',
        description:
          'ទទួលស្គាល់សមិទ្ធផលសិក្សាដ៏លេចធ្លោ និងការប្តេជ្ញាចិត្តចំពោះភាពឆ្នើមវិទ្យាសាស្ត្រនៅក្នុងមហាវិទ្យាល័យ។',
        duration: '៥ ឆ្នាំ',
        recipients: '២០ នាក់ក្នុងមួយឆ្នាំ',
        deadline: '១០ ធ្នូ ២០២៥',
        notification: '១០ មករា ២០២៦',
        requirements: [
          'មានពិន្ទុមធ្យមសរុប (GPA) អប្បបរមា ៣.៥ ក្នុងវិទ្យាល័យ ឬ សាកលវិទ្យាល័យ',
          'ចំណាត់ថ្នាក់នៅក្នុង ១០% កំពូលនៃពិន្ទុប្រឡងចូល',
          'មានលិខិតផ្ដល់អនុសាសន៍រឹងមាំ',
          'មិនមានប្រវត្តិនៅក្រោមវិន័យសិក្សា',
        ],
        contact: {
          office: 'ការិយាល័យនាយកដ្ឋាន៖ អគារ F បន្ទប់ 103',
          email: 'amp@itc.edu.kh',
          phone: '012 345 678',
        },
      },
    },
    {
      en: {
        title: 'Academic Achievement Award',
        type: 'MERIT-BASED',
        amount: '$4,000 per year',
        description:
          'Recognizes outstanding academic performance and commitment to scholarly excellence within the department.',
        duration: '5 years',
        recipients: '20 per year',
        deadline: 'December 10, 2025',
        notification: 'January 10, 2026',
        requirements: [
          'Minimum GPA of 3.5 in high school or university',
          'Top 10% in the entrance exam score',
          'Strong letters of recommendation',
          'No academic probation history',
        ],
        contact: {
          office: 'Department Office: Building F, Room 103',
          email: 'amp@itc.edu.kh',
          phone: '012 345 678',
        },
      },
      kh: {
        title: 'រង្វាន់សមិទ្ធផលសិក្សា',
        type: 'ផ្អែកលើសមត្ថភាព',
        amount: '៤,០០០ ដុល្លារ ក្នុងមួយឆ្នាំ',
        description:
          'ទទួលស្គាល់សមិទ្ធផលសិក្សាដ៏លេចធ្លោ និងការប្តេជ្ញាចិត្តចំពោះភាពឆ្នើមវិទ្យាសាស្ត្រនៅក្នុងមហាវិទ្យាល័យ។',
        duration: '៥ ឆ្នាំ',
        recipients: '២០ នាក់ក្នុងមួយឆ្នាំ',
        deadline: '១០ ធ្នូ ២០២៥',
        notification: '១០ មករា ២០២៦',
        requirements: [
          'មានពិន្ទុមធ្យមសរុប (GPA) អប្បបរមា ៣.៥ ក្នុងវិទ្យាល័យ ឬ សាកលវិទ្យាល័យ',
          'ចំណាត់ថ្នាក់នៅក្នុង ១០% កំពូលនៃពិន្ទុប្រឡងចូល',
          'មានលិខិតផ្ដល់អនុសាសន៍រឹងមាំ',
          'មិនមានប្រវត្តិនៅក្រោមវិន័យសិក្សា',
        ],
        contact: {
          office: 'ការិយាល័យនាយកដ្ឋាន៖ អគារ F បន្ទប់ 103',
          email: 'amp@itc.edu.kh',
          phone: '012 345 678',
        },
      },
    },
  ];

  const { language } = useLanguage();

  return (
    <div className="mb-10 max-w-screen">
      {/* Page Header */}
      <h1 className="text-[clamp(1.5rem,2vw,2rem)] font-playfair_display font-semibold text-black">
        {renderTextWithFont(
          language === 'en' ? 'Scholarships' : 'អាហាររូបករណ៍',
          language,
          'heading'
        )}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      <p
        className={`pt-4 md:pt-6 lg:pt-8 text-[#2E2E2E] text-[clamp(0.875rem,2vw,1.25rem)] ${
          language === 'en' ? 'font-raleway' : 'font-preahvihear'
        }`}
      >
        {language === 'en'
          ? 'We believe that financial barriers should not stand in the way of a quality education. Our department is committed to helping students achieve their academic goals through a variety of scholarship opportunities and financial aid options'
          : 'យើងជឿថា​ឧបសគ្គហិរញ្ញវត្ថុមិនគួរជាបញ្ហាដែលរារាំងការទទួលបានការអប់រំដែលមានគុណភាពទេ។ នាយកដ្ឋានរបស់យើងមានប្តេជ្ញាផ្តល់ជំនួយដល់និស្សិតក្នុងការសម្រេចគោលដៅសិក្សារបស់ពួកគេ តាមរយៈឱកាសអាហារូបករណ៍និងជម្រើសជំនួយហិរញ្ញវត្ថុជាច្រើន។'}
      </p>

      <div className='hidden xl:flex'>

      </div>
      <div className='xl:hidden'>
      {/* Swiper Slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        className="mt-5 pb-6" // Add bottom padding for pagination dots
      >   
        {scholarships.map((sch, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between border-4 border-gray-200"
            >
              {/* Tag */}
              <span className="inline-block bg-[#C41E3A] text-white text-[clamp(0.625rem,2vw,0.875rem)] px-3 py-1 rounded-full font-semibold w-fit mb-3">
                {renderTextWithFont(
                  language === 'en' ? sch.en.type : sch.kh.type,
                  language,
                  'body'
                )}
              </span>

              {/* Title & Amount */}
              <h3 className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-[#3A3B5C] pb-3">
                {renderTextWithFont(
                  language === 'en' ? sch.en.title : sch.kh.title,
                  language,
                  'body'
                )}
              </h3>
              <p className="text-[#C41E3A] font-bold text-[clamp(0.875rem,2vw,1rem)]">
                {renderTextWithFont(
                  language === 'en' ? sch.en.amount : sch.kh.amount,
                  language,
                  'body'
                )}
              </p>

              <p className="text-[#2E2E2E] text-[clamp(0.75rem,1.5vw,0.875rem)] mt-2">
                {renderTextWithFont(
                  language === 'en' ? sch.en.description : sch.kh.description,
                  language,
                  'body'
                )}
              </p>

              {/* Duration & Recipients */}
              <div className="grid grid-cols-2 gap-4 text-[clamp(0.75rem,1.5vw,0.875rem)] mt-6 text-[#2E2E2E]">
                <div className="bg-[#767676]/10 rounded-md p-2 w-full">
                  <p className="font-medium text-gray-900">
                    {language === 'en' ? 'Duration' : 'រយៈពេល'}
                  </p>
                  <p className="font-medium py-2">
                    {language === 'en' ? sch.en.duration : sch.kh.duration}
                  </p>
                </div>
                <div className="bg-[#767676]/10 rounded-md p-2 w-full">
                  <p className="font-medium text-gray-900">
                    {language === 'en' ? 'Recipients' : 'អ្នកទទួល'}
                  </p>
                  <p className="font-medium py-2">
                    {language === 'en' ? sch.en.recipients : sch.kh.recipients}
                  </p>
                </div>
              </div>

              {/* Deadlines */}
              <div className="grid grid-cols-2 gap-4 text-[clamp(0.75rem,1.5vw,0.875rem)] text-[#2E2E2E] mt-4">
                <div className="bg-[#767676]/10 rounded-md p-2 w-full">
                  <p className="font-medium text-gray-900">
                    {language === 'en'
                      ? 'Application Deadline'
                      : 'ថ្ងៃផុតកំណត់នៃការដាក់ពាក្យ'}
                  </p>
                  <p className="font-medium py-2">
                    {language === 'en' ? sch.en.deadline : sch.kh.deadline}
                  </p>
                </div>
                <div className="bg-[#767676]/10 rounded-md p-2 w-full">
                  <p className="font-medium text-gray-900">
                    {language === 'en'
                      ? 'Notification Date'
                      : 'កាលបរិច្ឆេទជូនដំណឹង'}
                  </p>
                  <p className="font-medium py-2">
                    {language === 'en' ? sch.en.notification : sch.kh.notification}
                  </p>
                </div>
              </div>

              {/* Contact & Buttons */}
              <div className="mt-4 grid grid-cols-1 gap-4">
                <div className="text-[clamp(0.75rem,1.5vw,0.875rem)]">
                  <p className="font-semibold text-[#3A3B5C] mb-1">
                    {language === 'en'
                      ? 'CONTACT FOR APPLICATION'
                      : 'ទំនាក់ទំនងសម្រាប់ការដាក់ពាក្យ'}
                  </p>
                  <p className="py-1 text-[#2E2E2E]">{sch[language]?.contact.office}</p>
                  <a
                    href={`mailto:${sch[language]?.contact.email}`}
                    className="text-[#C41E3A]"
                  >
                    {sch[language]?.contact.email}
                  </a>
                  <p className="py-1 text-[#2E2E2E]">
                    {language === 'en' ? 'Phone Number:' : 'លេខទូរស័ព្ទ៖'}{' '}
                    {sch[language]?.contact.phone}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="border border-[#3A3B5C] bg-[#3A3B5C] px-4 py-2 rounded-md text-white hover:bg-[#3A3B5C]/50">
                    {language === 'en'
                      ? 'Download the Detail Document'
                      : 'ទាញយកឯកសារលម្អិត'}
                  </button>
                  <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800">
                    {language === 'en' ? 'Apply Now' : 'ដាក់ពាក្យឥឡូវនេះ'}
                  </button>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

    </div>
  );
}
