'use clients';

import { useLanguage } from '@/contexts/LanguageContext';
import { Download } from 'lucide-react';
import type { ReactNode } from 'react';

/* -------------------- 1. INTERFACES -------------------- */

interface StartingDate {
  day: number;
  month: string;
  year: number;
}

interface EndingDate {
  day: number;
  month: string;
  year: number;
}

interface EventDate {
  startingdate: StartingDate;
  enddate: EndingDate;
}

interface Calendar {
  title: string;
  date: EventDate;
}

/* -------------------- 2. STATIC DATA -------------------- */

const calendarURL = '';

const calendarEvents: Record<'en' | 'kh', Calendar[]> = {
  en: [
    {
      title: 'Semester 1',
      date: {
        startingdate: { day: 1, month: 'September', year: 2023 },
        enddate: { day: 16, month: 'December', year: 2023 },
      },
    },
    {
      title: 'Semester 2',
      date: {
        startingdate: { day: 5, month: 'January', year: 2024 },
        enddate: { day: 20, month: 'May', year: 2024 },
      },
    },
    {
      title: 'Semester 3',
      date: {
        startingdate: { day: 1, month: 'September', year: 2024 },
        enddate: { day: 16, month: 'December', year: 2024 },
      },
    },
    {
      title: 'Semester 4',
      date: {
        startingdate: { day: 5, month: 'January', year: 2025 },
        enddate: { day: 20, month: 'May', year: 2025 },
      },
    },
  ],
  kh: [
    {
      title: 'ឆមាសទី១',
      date: {
        startingdate: { day: 1, month: 'កញ្ញា', year: 2023 },
        enddate: { day: 16, month: 'ធ្នូ', year: 2023 },
      },
    },
    {
      title: 'ឆមាសទី២',
      date: {
        startingdate: { day: 5, month: 'មករា', year: 2024 },
        enddate: { day: 20, month: 'ឧសភា', year: 2024 },
      },
    },
    {
      title: 'ឆមាសទី៣',
      date: {
        startingdate: { day: 1, month: 'កញ្ញា', year: 2024 },
        enddate: { day: 16, month: 'ធ្នូ', year: 2024 },
      },
    },
    {
      title: 'ឆមាសទី៤',
      date: {
        startingdate: { day: 5, month: 'មករា', year: 2025 },
        enddate: { day: 20, month: 'ឧសភា', year: 2025 },
      },
    },
  ],
};

const calendarHolidays = {
  en: [
    {
      title: 'Independence Day',
      date: 'Monday, 9 December 2024',
    },
    {
      title: 'Victory Day over Genocide',
      date: 'Tuesday, 7 January 2025',
    },
    {
      title: 'Khmer New Year',
      date: 'Monday, 14 April 2025 - Wednesday, 16 April 2025',
    },
    {
      title: 'Constitution Day',
      date: 'Thursday, 24 September 2025',
    },
  ],
  kh: [
    {
      title: 'ទិវាឯករាជ្យជាតិ',
      date: 'ថ្ងៃច័ន្ទ ទី ៩ ខែធ្នូ ឆ្នាំ ២០២៤',
    },
    {
      title: 'ទិវាជ័យជម្នះលើអំពើប្រល័យពូជសាសន៍',
      date: 'ថ្ងៃអង្គារ ទី ៧ ខែមករា ឆ្នាំ ២០២៥',
    },
    {
      title: 'ព្រះរាជពិធីបុណ្យចូលឆ្នាំខ្មែរ',
      date: 'ថ្ងៃច័ន្ទ ទី ១៤ ខែមេសា - ថ្ងៃពុធ ទី ១៦ ខែមេសា ឆ្នាំ ២០២៥',
    },
    {
      title: 'ថ្ងៃរដ្ឋធម្មនុញ្ញ',
      date: 'ថ្ងៃព្រហស្បតិ៍ ទី ២៤ ខែកញ្ញា ឆ្នាំ ២០២៥',
    },
  ],
};

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

export default function AcademicCalendar() {
  const { language } = useLanguage();

  return (
    <div className="w-full">
      <h1 className="text-3xl font-playfair_display text-black font-semibold">
        {renderTextWithFont(
          language === 'en' ? 'Academic Calendar' : 'ប្រតិទិនការសិក្សា',
          language,
          'heading'
        )}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
      <div className="py-5 px-2 grid grid-cols-2 gap-10 font-reddit_sans">
        <div className="col-span-1">
          {/* heading */}
          <div
            className={`bg-[#3A3B5C] flex justify-between px-5 py-2 text-white text-xl font-semibold mb-5 
                        ${language === 'en' ? 'font-reddit_sans' : 'font-preahvihear'}`}
          >
            <h2>
              {language === 'en' ? 'EVENTS' : 'ព្រឹត្តិការណ៍ និងបុណ្យជាតិ'}
            </h2>
            <h2>{language === 'en' ? 'DATE' : 'កាលបរិច្ឆេទ'}</h2>
          </div>
          {calendarEvents[language].map((event, i) => (
            <div key={i} className="grid grid-cols-2 gap-y-5 py-2 space-y-5">
              {/* Title */}
              <div
                className={`col-span-1 text-sm text-black ${language === 'en' ? 'font-reddit_sans' : 'font-preahvihear'}`}
              >
                <p>{event.title}</p>
              </div>

              {/* Date */}
              <div
                className={`col-span-1 text-sm text-black text-right ${language === 'en' ? 'font-reddit_sans' : 'font-kantumruy_pro'}`}
              >
                <p>
                  {event.date.startingdate.day} {event.date.startingdate.month}{' '}
                  {event.date.startingdate.year} – {event.date.enddate.day}{' '}
                  {event.date.enddate.month} {event.date.enddate.year}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1">
          <div
            className={`bg-[#C41E3A] flex justify-between px-5 py-2 text-white text-xl font-semibold mb-5 ${language === 'en' ? 'font-reddit_sans' : 'font-preahvihear'}`}
          >
            <h2>{language === 'en' ? 'HOLIDAYS' : 'ថ្ងៃឈប់សម្រាក'}</h2>
            <h2>{language === 'en' ? 'DATE' : 'កាលបរិច្ឆេទ'}</h2>
          </div>
          {calendarHolidays[language].map((holiday, i) => (
            <div key={i} className="grid grid-cols-2 gap-y-5 py-2 space-y-5">
              {/* Title */}
              <div
                className={`col-span-1 text-sm text-black ${language === 'en' ? 'font-reddit_sans' : 'font-preahvihear'}`}
              >
                <p>{holiday.title}</p>
              </div>

              {/* Date */}
              <div
                className={`col-span-1 text-sm text-black text-right ${language === 'en' ? 'font-reddit_sans' : 'font-kantumruy_pro'}`}
              >
                <p>{holiday.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <a
          href={calendarURL}
          className={`text-xl text-black font-semibold underline hover:text-[#C41E3A] hover:underline-offset-4 transition-all duration-200 inline-flex gap-x-4 ${
            language === 'en' ? 'font-reddit_sans' : 'font-preahvihear'
          }`}
        >
          {language === 'en'
            ? 'Calendar of Academic Year 2024-2025'
            : 'ប្រតិទិនឆ្នាំសិក្សា ២០២៤-២០២៥'}{' '}
          <Download />
        </a>
      </div>
    </div>
  );
}
