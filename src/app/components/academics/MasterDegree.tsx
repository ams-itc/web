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
      <h1 className="text-3xl font-playfair_display text-black font-semibold">
        {renderTextWithFont(
          language === 'en' ? 'Master’s Degree' : 'កម្រិតបរិញ្ញាបត្រជាន់ខ្ពស់',
          language,
          'heading'
        )}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
      {/* master's Degree Tabs */}
      <h1 className="mt-4 text-xl text-black font-medium font-reddit_sans">
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
          <h2 className="text-xl font-extrabold mb-2 text-[#3A3B5C]">
            {renderTextWithFont(
              language === 'en' ? 'Program Overview' : 'ទិដ្ឋភាពកម្មវិធី',
              language,
              'heading'
            )}
          </h2>
          <p className="font-raleway text-[#2E2E2E]">
            {renderTextWithFont(
              language === 'en'
                ? `${program.overview.en}`
                : `${program.overview.kh}`,
              language,
              'body'
            )}
          </p>
        </section>

        {/* Curriculum */}
        <section className="mb-8">
          <h2 className="text-xl font-extrabold mb-2 text-[#3A3B5C] font-raleway">
            Curriculum Structure
          </h2>
          {/* Year Tab */}
          <div className="bg-white">
            <div className="w-full grid grid-cols-2">
              {Object.keys(program.curriculum).map((yearKey) => (
                <button
                  key={yearKey}
                  className={`py-3 font-medium px-2 text-base border border-gray-300 ${
                    selectedYear === yearKey
                      ? 'bg-[#D9D9D9] text-black'
                      : 'bg-gray-100 text-black'
                  } ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
                  onClick={() => setSelectedYear(yearKey as keyof Curriculum)}
                >
                  {yearLabels[yearKey]?.[language === 'en' ? 'en' : 'kh']}
                </button>
              ))}
            </div>
          </div>

          <div>
            {/* Animated Curriculum Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedYear}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-2 divide-x-2 divide-gray-400 mt-5 "
              >
                {/* Column 1 - Semester 1 */}
                <div className="grid grid-rows-7 divide-y-2 divide-gray-400">
                  {/* Header */}
                  <div className="grid grid-cols-5 py-2 row-span-1 px-4 text-lg text-[#3A3B5C] bg-gray-50 items-center rounded-t-xl font-raleway">
                    <h3 className="font-semibold col-span-4">
                      {renderTextWithFont(
                        language === 'en' ? 'Semester 1' : 'ឆមាស ១',
                        language,
                        'heading'
                      )}
                    </h3>
                    <h3 className="font-semibold col-span-1 text-center">
                      {renderTextWithFont(
                        language === 'en' ? 'Credit' : 'ក្រេឌីត',
                        language,
                        'heading'
                      )}
                    </h3>
                  </div>

                  {/* Courses */}
                  {yearData && (
                    <ul className="overflow-y-auto row-span-5">
                      {yearData.semester1?.map((c) => (
                        <li
                          key={c.code}
                          className="grid grid-cols-5 border-b pt-5 pb-5 px-4 text-base font-medium text-[#767676] space-y-2 font-reddit_sans "
                        >
                          <div className="col-span-4 grid grid-cols-4 space-x-7">
                            <p className="col-span-3">{c.code}</p>
                            <p className="col-span-1">
                              {renderTextWithFont(
                                language === 'en'
                                  ? `${c.name.en}`
                                  : `${c.name.kh}`,
                                language,
                                'body'
                              )}
                            </p>
                          </div>
                          <span className="col-span-1 text-center">
                            {c.credit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Total */}
                  <div className="grid grid-cols-5 py-2 px-4 text-base text-[#3A3B5C] bg-gray-50 row-span-1 items-center rounded-b-xl">
                    <h3
                      className={`font-bold col-span-4 ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
                    >
                      {language === 'en' ? (
                        <>
                          Total Semester 1{' '}
                          <span className="text-[#C41E3A]">
                            {yearLabels[selectedYear]?.[language]}
                          </span>
                        </>
                      ) : (
                        <>
                          សរុបក្រេឌីតឆមាសទី១សម្រាប់{' '}
                          <span className="text-[#C41E3A]">
                            {yearLabels[selectedYear]?.[language]}
                          </span>
                        </>
                      )}
                    </h3>
                    <h3 className="font-bold col-span-1 text-center font-reddit_sans">
                      {yearData?.totalCredit}
                    </h3>
                  </div>
                </div>

                {/* Column 2 - Semester 2 */}
                <div className="grid grid-rows-7 divide-y-2 divide-gray-400">
                  {/* Header */}
                  <div className="grid grid-cols-5 py-2 row-span-1 px-4 text-lg text-[#3A3B5C] bg-gray-50 items-center rounded-t-xl font-raleway">
                    <h3 className="font-semibold col-span-4">
                      {renderTextWithFont(
                        language === 'en' ? 'Semester 2' : 'ឆមាស ២',
                        language,
                        'heading'
                      )}
                    </h3>
                    <h3 className="font-semibold col-span-1 text-center">
                      {renderTextWithFont(
                        language === 'en' ? 'Credit' : 'ក្រេឌីត',
                        language,
                        'heading'
                      )}
                    </h3>
                  </div>

                  {/* Courses */}
                  {yearData && (
                    <ul className="overflow-y-auto row-span-5">
                      {yearData.semester2?.map((c) => (
                        <li
                          key={c.code}
                          className="grid grid-cols-5 border-b pt-5 pb-5 px-4 text-base font-medium text-[#767676] space-y-2 font-reddit_sans "
                        >
                          <div className="col-span-4 grid grid-cols-4 space-x-7">
                            <p className="col-span-3">{c.code}</p>
                            <p className="col-span-1">
                              {renderTextWithFont(
                                language === 'en'
                                  ? `${c.name.en}`
                                  : `${c.name.kh}`,
                                language,
                                'body'
                              )}
                            </p>
                          </div>
                          <span className="col-span-1 text-center">
                            {c.credit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Total */}
                  <div className="grid grid-cols-5 py-2 px-4 text-base text-[#3A3B5C] bg-gray-50 row-span-1 items-center rounded-b-xl">
                    <h3
                      className={`font-bold col-span-4 ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
                    >
                      {language === 'en' ? (
                        <>
                          Total Semester 1{' '}
                          <span className="text-[#C41E3A]">
                            {yearLabels[selectedYear]?.[language]}
                          </span>
                        </>
                      ) : (
                        <>
                          សរុបក្រេឌីតឆមាសទី១សម្រាប់{' '}
                          <span className="text-[#C41E3A]">
                            {yearLabels[selectedYear]?.[language]}
                          </span>
                        </>
                      )}
                    </h3>
                    <h3 className="font-bold col-span-1 text-center font-reddit_sans">
                      {yearData?.totalCredit}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Career Opportunities*/}
        <section className="mb-8">
          <h2
            className={`text-xl font-extrabold mb-4 text-[#3A3B5C] ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
          >
            {language === 'en' ? 'Career Opportunities' : 'ឱកាសការងារ'}
          </h2>
          {program.career_opportunities.map((opportunity, idx) => (
            <div key={idx} className="space-y-5">
              <p className="text-[#2E2E2E] font-raleway text-base">
                {renderTextWithFont(
                  language === 'en'
                    ? opportunity.description.en
                    : opportunity.description.kh,
                  language,
                  'body'
                )}
              </p>

              <div>
                <p
                  className={`text-black mb-2 ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
                >
                  {language === 'en'
                    ? 'Data Science career paths may include:'
                    : 'ផ្លូវការងារផ្នែកវិទ្យាសាស្ត្រទិន្នន័យអាចរួមមាន:'}
                </p>
                <ul className="list-disc list-inside tracking-wide text-[#2E2E2E] pl-3 space-y-1">
                  {opportunity.career_path.map((career, index) => (
                    <li key={index}>
                      {renderTextWithFont(
                        <>
                          <span
                            className={`${language === 'en' ? 'font-bold' : 'font-semibold'}`}
                          >
                            {career.title[language]}
                          </span>{' '}
                          : <span>{career.description[language]}</span>
                        </>,
                        language,
                        'body'
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Learning Outcomes */}
        <section className="mb-5">
          <h2
            className={`text-xl font-extrabold mb-4 text-[#3A3B5C] ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
          >
            {language === 'en'
              ? 'Learning Outcomes'
              : 'លទ្ធផលរំពឹងទុកពីការសិក្សា'}
          </h2>
          <p
            className={`font-extrabold mb-2 text-[#2E2E2E] ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
          >
            {language === 'en'
              ? 'Upon completing the program, students will be able to:'
              : 'បន្ទាប់ពីបញ្ចប់កម្មវិធីនេះ និស្សិតនឹងមានសមត្ថភាព៖'}
          </p>
          {program.learningOutcomes.map((outcome, index) => (
            <div key={index} className="py-4 text-base font-raleway">
              <p className="text-[#3A3B5C] mb-3 font-semibold">
                {renderTextWithFont(
                  language === 'en'
                    ? `${outcome.title.en}`
                    : `${outcome.title.kh}`,
                  language,
                  'body'
                )}
                :
              </p>
              <ul className="space-y-1">
                {outcome.learning_description.map((description, index) => (
                  <li
                    key={index}
                    className="list-disc list-inside text-base text-[#2E2E2E] pl-3"
                  >
                    {renderTextWithFont(
                      language === 'en'
                        ? `${description.text.en}`
                        : `${description.text.en}`,
                      language,
                      'body'
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <a href="" className="border text-[#C41E3A] font-raleway">
          {renderTextWithFont(
            language === 'en'
              ? 'Learn More about the Admission Process '
              : 'ស្វែងយល់បន្ថែមអំពីការចូលរៀន',
            language,
            'body'
          )}
          <i className="fa-solid fa-arrow-right-long pl-3"></i>
        </a>
      </div>
    </div>
  );
}
