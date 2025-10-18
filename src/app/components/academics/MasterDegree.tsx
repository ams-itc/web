import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ReactNode } from 'react';

/* -------------------- 1. INTERFACES -------------------- */
interface Course {
  code: string;
  name: { en: string; kh: string };
  credit: number;
}

interface YearCurriculum {
  semester1: Course[];
  totalCredit: number;
  semester2: Course[];
  totalCredit2: number;
}

interface Curriculum {
  year1: YearCurriculum;
  year2: YearCurriculum;
  year3?: YearCurriculum;
  year4?: YearCurriculum;
  year5?: YearCurriculum;
}

interface CareerPath {
  title: { en: string; kh: string };
  description: { en: string; kh: string };
}

interface CareerOpportunities {
  description: { en: string; kh: string };
  career_path: CareerPath[];
}

interface LearningDescription {
  text: { en: string; kh: string };
}

interface LearningOutcomes {
  title: { en: string; kh: string };
  learning_description: LearningDescription[];
}

interface Program {
  title: { en: string; kh: string };
  overview: { en: string; kh: string };
  curriculum: Curriculum;
  career_opportunities: CareerOpportunities[];
  learningOutcomes: LearningOutcomes[];
}

type ProgramKey = 'master_datascience';

/* -------------------- 2. STATIC DATA -------------------- */
const programs: Record<ProgramKey, Program> = {
  master_datascience: {
    title: {
      en: 'Master of Engineering in Data Science',
      kh: 'បណ្ឌិតវិស្វកម្មក្នុងវិស័យទិន្នន័យ',
    },
    overview: {
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      kh: 'ពិពណ៌នាខ្លីអំពីកម្មវិធីជាភាសាខ្មែរ...',
    },
    curriculum: {
      year1: {
        semester1: [
          {
            code: 'DTC11ANL',
            name: { en: 'Calculus I', kh: 'គណិតវិទ្យាអនុវត្ត ភាគ​ ១' },
            credit: 3,
          },
          {
            code: 'DTC11MCN',
            name: { en: 'Mechanics I', kh: 'មេកានិច I' },
            credit: 3,
          },
          {
            code: 'DTC11GEC',
            name: {
              en: 'Management & Accounting',
              kh: 'ការគ្រប់គ្រង និង គណនេយ្យ',
            },
            credit: 3,
          },
          {
            code: 'DTC11PHI',
            name: { en: 'Philosophy', kh: 'ទស្សនវិទ្យា' },
            credit: 2,
          },
          {
            code: 'DTC11HIS',
            name: { en: 'History', kh: 'ប្រវត្តិវិទ្យា' },
            credit: 2,
          },
          {
            code: 'DTC11FRA',
            name: { en: 'French', kh: 'ភាសាបារាំង' },
            credit: 3,
          },
        ],
        totalCredit: 16,
        semester2: [
          {
            code: 'DTC12INF',
            name: { en: 'Introduction to ICT', kh: 'ការណែនាំអំពី ICT' },
            credit: 2,
          },
          {
            code: 'DTC12ANL',
            name: { en: 'Calculus II', kh: 'គណិតវិទ្យាអនុវត្ត ភាគ​ ២' },
            credit: 3,
          },
          {
            code: 'DTC12TMD',
            name: { en: 'Thermodynamics', kh: 'កំដៅវិទ្យា' },
            credit: 3,
          },
          {
            code: 'DTC12MKT',
            name: { en: 'Marketing', kh: 'ទីផ្សារ' },
            credit: 2,
          },
          {
            code: 'DTC12TDN',
            name: { en: 'Technical Drawing', kh: 'គំនូរ​បច្ចេកទេស' },
            credit: 2,
          },
          {
            code: 'DTC12ENV',
            name: { en: 'Environment', kh: 'បរិស្ថាន' },
            credit: 2,
          },
          {
            code: 'DTC12FRA',
            name: { en: 'French', kh: 'ភាសាបារាំង' },
            credit: 3,
          },
        ],
        totalCredit2: 17,
      },
      year2: {
        semester1: [
          {
            code: 'DTC21ANL',
            name: { en: 'Calculus II', kh: 'គណិតវិទ្យាអនុវត្ត ភាគ​ ២' },
            credit: 3,
          },
          {
            code: 'DTC21MCN',
            name: { en: 'Mechanics II', kh: 'មេកានិច II' },
            credit: 3,
          },
          {
            code: 'DTC21GEC',
            name: {
              en: 'Management & Accounting',
              kh: 'ការគ្រប់គ្រង និង គណនេយ្យ',
            },
            credit: 3,
          },
          {
            code: 'DTC21PHI',
            name: { en: 'Philosophy', kh: 'ទស្សនវិទ្យា' },
            credit: 2,
          },
          {
            code: 'DTC21HIS',
            name: { en: 'History', kh: 'ប្រវត្តិវិទ្យា' },
            credit: 2,
          },
          {
            code: 'DTC21FRA',
            name: { en: 'French', kh: 'ភាសាបារាំង' },
            credit: 3,
          },
        ],
        totalCredit: 16,
        semester2: [
          {
            code: 'DTC22INF',
            name: { en: 'Introduction to ICT', kh: 'ការណែនាំអំពី ICT' },
            credit: 2,
          },
          {
            code: 'DTC22ANL',
            name: { en: 'Calculus II', kh: 'គណិតវិទ្យាអនុវត្ត ភាគ​ ២' },
            credit: 3,
          },
          {
            code: 'DTC22TMD',
            name: { en: 'Thermodynamics', kh: 'កំដៅវិទ្យា' },
            credit: 3,
          },
          {
            code: 'DTC22MKT',
            name: { en: 'Marketing', kh: 'ទីផ្សារ' },
            credit: 2,
          },
          {
            code: 'DTC22TDN',
            name: { en: 'Technical Drawing', kh: 'គំនូរ​បច្ចេកទេស' },
            credit: 2,
          },
          {
            code: 'DTC22ENV',
            name: { en: 'Environment', kh: 'បរិស្ថាន' },
            credit: 2,
          },
          {
            code: 'DTC22FRA',
            name: { en: 'French', kh: 'ភាសាបារាំង' },
            credit: 3,
          },
        ],
        totalCredit2: 17,
      },
    },
    career_opportunities: [
      {
        description: {
          en: 'Data science offers a wide array of career opportunities...',
          kh: 'វិទ្យាសាស្ត្រទិន្នន័យផ្តល់នូវឱកាសអាជីពជាច្រើន...',
        },
        career_path: [
          {
            title: { en: 'Data Scientist', kh: 'អ្នកវិទ្យាសាស្ត្រទិន្នន័យ' },
            description: {
              en: 'Focuses on extracting insights...',
              kh: 'ផ្តោតលើការទាញយកចំណេះដឹង...',
            },
          },
          {
            title: { en: 'Data Engineer', kh: 'វិស្វករទិន្នន័យ' },
            description: {
              en: 'Builds and manages data infrastructure...',
              kh: 'បង្កើត និងគ្រប់គ្រងប្រព័ន្ធទិន្នន័យ...',
            },
          },
        ],
      },
    ],
    learningOutcomes: [
      {
        title: {
          en: 'Computational and Programming Proficiency',
          kh: 'ជំនាញគណនាកម្មវិធី',
        },
        learning_description: [
          {
            text: {
              en: 'Design, develop, and optimize robust software applications...',
              kh: 'រចនា អភិវឌ្ឍ និងបង្កើនប្រសិទ្ធភាពកម្មវិធី...',
            },
          },
          {
            text: {
              en: 'Build scalable data pipelines...',
              kh: 'បង្កើតបណ្តាញទិន្នន័យអាចពង្រីកបាន...',
            },
          },
        ],
      },
    ],
  },
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

const yearLabels: Record<string, { en: string; kh: string }> = {
  year1: { en: 'Year 1', kh: 'ឆ្នាំទី១' },
  year2: { en: 'Year 2', kh: 'ឆ្នាំទី២' },
};

/* -------------------- 3. COMPONENT -------------------- */
export default function MasterDegree() {
  // const [selected, setSelected] = useState<ProgramKey>("dataScience");
  const [selectedYear, setSelectedYear] = useState<keyof Curriculum>('year1');
  const program = programs['master_datascience'];
  const yearData = program.curriculum[selectedYear];
  const { language } = useLanguage();

  return (
<div className="w-full">
  <h1 className="text-[clamp(1.5rem,2vw,2rem)] font-playfair_display text-black font-semibold">
    {renderTextWithFont(
      language === 'en'
        ? 'Master’s Degree'
        : 'កម្រិតបរិញ្ញាបត្រជាន់ខ្ពស់',
      language,
      'heading'
    )}
  </h1>
  <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
  <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

  {/* Master's Degree Tabs */}
      <h1 className="mt-4 text-[clamp(1.25rem,2vw,1.5rem)] text-black font-medium font-reddit_sans">
        <span
          className={
            language === 'en' ? 'font-reddit_sans' : 'font-preahvihear'
          }
        >
          {language === 'en' ? (
            <>
              Master of Engineering in{' '}
              <span className="text-[#C41E3A]">Data Science</span>
            </>
          ) : (
            <>
              បរិញ្ញាបត្រជាន់ខ្ពស់វិស្វកម្មនៃ{' '}
              <span className="text-[#C41E3A]">វិទ្យាសាស្ត្រទិន្នន័យ</span>
            </>
          )}
        </span>
      </h1>


  {/* Content */}
  <div className="max-w-6xl py-6">
    {/* Overview */}
    <section className="mb-5">
      <h2 className="font-extrabold mb-2 text-[#3A3B5C] text-[clamp(1.125rem,2vw,1.5rem)]">
        {renderTextWithFont(
          language === 'en' ? 'Program Overview' : 'ទិដ្ឋភាពកម្មវិធី',
          language,
          'heading'
        )}
      </h2>
      <p className="font-raleway text-[#2E2E2E] text-[clamp(0.875rem,2vw,1.25rem)]">
        {renderTextWithFont(
          language === 'en' ? program.overview.en : program.overview.kh,
          language,
          'body'
        )}
      </p>
    </section>

    {/* Curriculum */}
    <section className="mb-8">
      <h2 className="text-[clamp(1.125rem,2vw,1.5rem)] font-extrabold mb-2 text-[#3A3B5C] font-raleway">
        {renderTextWithFont(
          language === 'en' ? 'Curriculum Structure' : 'កម្មវិធីសិក្សា',
          language,
          'heading'
        )}
      </h2>

      {/* Year Tabs */}
      <div className="bg-white">
        <div className="w-full grid grid-cols-2">
          {Object.keys(program.curriculum).map((yearKey) => (
            <button
              key={yearKey}
              className={`py-3 font-medium px-2 text-[clamp(0.75rem,2vw,0.825rem)] border border-gray-300 ${
                selectedYear === yearKey
                  ? 'bg-[#D9D9D9] text-black'
                  : 'bg-gray-100 text-black'
              } ${language === 'en' ? 'font-reddit_sans' : 'font-preahvihear'}`}
              onClick={() => setSelectedYear(yearKey as keyof Curriculum)}
            >
              {yearLabels[yearKey]?.[language] || yearKey.replace('year', 'Year ')}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Curriculum */}
      <div className="hidden lg:flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 divide-x-2 divide-gray-400 mt-5"
          >
            {/* Semester 1 */}
            <div className="grid grid-rows-7 divide-y-2 divide-gray-400">
              <div className="grid grid-cols-5 py-2 px-4 text-[clamp(1rem,2vw,1.25rem)] text-[#3A3B5C] bg-gray-50 items-center rounded-t-xl font-raleway">
                <h3 className="font-semibold col-span-4">
                  {renderTextWithFont(
                    language === 'en' ? 'Semester 1' : 'ឆមាស ១',
                    language,
                    'heading'
                  )}
                </h3>
                <h3 className="font-semibold col-span-1 text-center">
                  {renderTextWithFont(language === 'en' ? 'Credit' : 'ក្រេឌីត', language, 'heading')}
                </h3>
              </div>
              <ul className="overflow-y-auto row-span-5">
                {yearData?.semester1?.map((c) => (
                  <li
                    key={c.code}
                    className="grid grid-cols-5 border-b pt-5 pb-5 px-4 text-[clamp(0.875rem,1.5vw,1rem)] font-medium text-[#767676] space-y-2 font-reddit_sans"
                  >
                    <div className="col-span-4 grid grid-cols-4 space-x-7">
                      <p className="col-span-2 xl:col-span-1">{c.code}</p>
                      <p className="col-span-2 xl:col-span-3">
                        {renderTextWithFont(language === 'en' ? c.name.en : c.name.kh, language, 'body')}
                      </p>
                    </div>
                    <span className="col-span-1 text-center">{c.credit}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-5 py-2 px-4 text-[clamp(0.875rem,1.5vw,1rem)] text-[#3A3B5C] bg-gray-50 items-center rounded-b-xl">
                <h3 className={`font-bold col-span-4 ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}>
                  {language === 'en' ? (
                    <>Total Semester 1 <span className="text-[#C41E3A]">{yearLabels[selectedYear]?.[language]}</span></>
                  ) : (
                    <>សរុបក្រេឌីតឆមាសទី១សម្រាប់ <span className="text-[#C41E3A]">{yearLabels[selectedYear]?.[language]}</span></>
                  )}
                </h3>
                <h3 className="font-bold col-span-1 text-center font-reddit_sans">{yearData?.totalCredit}</h3>
              </div>
            </div>

            {/* Semester 2 */}
            <div className="grid grid-rows-7 divide-y-2 divide-gray-400">
              <div className="grid grid-cols-5 py-2 px-4 text-[clamp(1rem,2vw,1.25rem)] text-[#3A3B5C] bg-gray-50 items-center rounded-t-xl font-raleway">
                <h3 className="font-semibold col-span-4">
                  {renderTextWithFont(
                    language === 'en' ? 'Semester 2' : 'ឆមាស ២',
                    language,
                    'heading'
                  )}
                </h3>
                <h3 className="font-semibold col-span-1 text-center">
                  {renderTextWithFont(language === 'en' ? 'Credit' : 'ក្រេឌីត', language, 'heading')}
                </h3>
              </div>
              <ul className="overflow-y-auto row-span-5">
                {yearData?.semester2?.map((c) => (
                  <li
                    key={c.code}
                    className="grid grid-cols-5 border-b pt-5 pb-5 px-4 text-[clamp(0.875rem,1.5vw,1rem)] font-medium text-[#767676] space-y-2 font-reddit_sans"
                  >
                    <div className="col-span-4 grid grid-cols-4 space-x-7">
                      <p className="col-span-2 xl:col-span-1">{c.code}</p>
                      <p className="col-span-2 xl:col-span-3">
                        {renderTextWithFont(language === 'en' ? c.name.en : c.name.kh, language, 'body')}
                      </p>
                    </div>
                    <span className="col-span-1 text-center">{c.credit}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-5 py-2 px-4 text-[clamp(0.875rem,1.5vw,1rem)] text-[#3A3B5C] bg-gray-50 items-center rounded-b-xl">
                <h3 className={`font-bold col-span-4 ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}>
                  {language === 'en' ? (
                    <>Total Semester 2 <span className="text-[#C41E3A]">{yearLabels[selectedYear]?.[language]}</span></>
                  ) : (
                    <>សរុបក្រេឌីតឆមាសទី២សម្រាប់ <span className="text-[#C41E3A]">{yearLabels[selectedYear]?.[language]}</span></>
                  )}
                </h3>
                <h3 className="font-bold col-span-1 text-center font-reddit_sans">{yearData?.totalCredit}</h3>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Curriculum */}
      <div className="lg:hidden mt-5" key={selectedYear}>
        {/* Semester 1 */}
        <div className="mb-6 grid grid-rows-[auto_1fr_auto] divide-y-2 divide-gray-400 rounded-xl bg-gray-50">
          <div className="grid grid-cols-5 py-2 px-4 text-[clamp(1rem,2vw,1.25rem)] text-[#3A3B5C] bg-gray-50 items-center rounded-t-xl font-raleway">
            <h3 className="font-semibold col-span-4">
              {renderTextWithFont(language === 'en' ? 'Semester 1' : 'ឆមាស ១', language, 'heading')}
            </h3>
            <h3 className="font-semibold col-span-1 text-center">
              {renderTextWithFont(language === 'en' ? 'Credit' : 'ក្រេឌីត', language, 'heading')}
            </h3>
          </div>
          <ul className="overflow-y-auto row-span-5">
            {yearData?.semester1?.map((c) => (
              <li
                key={c.code}
                className="grid grid-cols-5 border-b pt-5 pb-5 px-4 text-[clamp(0.875rem,1.5vw,1rem)] font-medium text-[#767676] space-y-2 font-reddit_sans"
              >
                <div className="col-span-4 grid grid-cols-4 space-x-7">
                  <p className="col-span-2 xl:col-span-1">{c.code}</p>
                  <p className="col-span-2 xl:col-span-3">
                    {renderTextWithFont(language === 'en' ? c.name.en : c.name.kh, language, 'body')}
                  </p>
                </div>
                <span className="col-span-1 text-center">{c.credit}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-5 py-2 px-4 text-[clamp(0.875rem,1.5vw,1rem)] text-[#3A3B5C] bg-gray-50 items-center rounded-b-xl">
            <h3 className={`font-bold col-span-4 ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}>
              {language === 'en' ? 'Total Semester 1' : 'សរុបក្រេឌីតឆមាសទី១'}
            </h3>
            <h3 className="font-bold col-span-1 text-center font-reddit_sans">{yearData?.totalCredit}</h3>
          </div>
        </div>

        {/* Semester 2 */}
        <div className="mb-6 grid grid-rows-[auto_1fr_auto] divide-y-2 divide-gray-400 rounded-xl bg-gray-50">
          <div className="grid grid-cols-5 py-2 px-4 text-[clamp(1rem,2vw,1.25rem)] text-[#3A3B5C] bg-gray-50 items-center rounded-t-xl font-raleway">
            <h3 className="font-semibold col-span-4">
              {renderTextWithFont(language === 'en' ? 'Semester 2' : 'ឆមាស ២', language, 'heading')}
            </h3>
            <h3 className="font-semibold col-span-1 text-center">
              {renderTextWithFont(language === 'en' ? 'Credit' : 'ក្រេឌីត', language, 'heading')}
            </h3>
          </div>
          <ul className="overflow-y-auto row-span-5">
            {yearData?.semester2?.map((c) => (
              <li
                key={c.code}
                className="grid grid-cols-5 border-b pt-5 pb-5 px-4 text-[clamp(0.875rem,1.5vw,1rem)] font-medium text-[#767676] space-y-2 font-reddit_sans"
              >
                <div className="col-span-4 grid grid-cols-4 space-x-7">
                  <p className="col-span-2 xl:col-span-1">{c.code}</p>
                  <p className="col-span-2 xl:col-span-3">
                    {renderTextWithFont(language === 'en' ? c.name.en : c.name.kh, language, 'body')}
                  </p>
                </div>
                <span className="col-span-1 text-center">{c.credit}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-5 py-2 px-4 text-[clamp(0.875rem,1.5vw,1rem)] text-[#3A3B5C] bg-gray-50 items-center rounded-b-xl">
            <h3 className={`font-bold col-span-4 ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}>
              {language === 'en' ? 'Total Semester 2' : 'សរុបក្រេឌីតឆមាសទី២'}
            </h3>
            <h3 className="font-bold col-span-1 text-center font-reddit_sans">{yearData?.totalCredit}</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

  );
}
