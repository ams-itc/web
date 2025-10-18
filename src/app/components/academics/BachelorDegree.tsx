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
  year3: YearCurriculum;
  year4: YearCurriculum;
  year5: YearCurriculum;
  // add year2, year3, etc. as needed
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

type ProgramKey = 'dataScience' | 'financialEngineering';

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

/* -------------------- 2. STATIC DATA -------------------- */
const programs: Record<ProgramKey, Program> = {
  dataScience: {
    title: {
      en: 'Bachelor of Engineering in Data Science',
      kh: 'បរិញ្ញាបត្រវិស្វកម្មវិទ្យាសាស្ត្រទិន្នន័យ',
    },
    overview: {
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      kh: 'គម្រូកឋាខណ្ឌ',
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
      year3: {
        semester1: [
          {
            code: 'DTC31ANL',
            name: { en: 'Calculus I', kh: 'គណិតវិទ្យាអនុវត្ត ភាគ​ ១' },
            credit: 3,
          },
          {
            code: 'DTC31MCN',
            name: { en: 'Mechanics I', kh: 'មេកានិច I' },
            credit: 3,
          },
          {
            code: 'DTC31GEC',
            name: {
              en: 'Management & Accounting',
              kh: 'ការគ្រប់គ្រង និង គណនេយ្យ',
            },
            credit: 3,
          },
          {
            code: 'DTC31PHI',
            name: { en: 'Philosophy', kh: 'ទស្សនវិទ្យា' },
            credit: 2,
          },
          {
            code: 'DTC31HIS',
            name: { en: 'History', kh: 'ប្រវត្តិវិទ្យា' },
            credit: 2,
          },
          {
            code: 'DTC31FRA',
            name: { en: 'French', kh: 'ភាសាបារាំង' },
            credit: 3,
          },
        ],
        totalCredit: 16,
        semester2: [
          {
            code: 'DTC32INF',
            name: { en: 'Introduction to ICT', kh: 'ការណែនាំអំពី ICT' },
            credit: 2,
          },
          {
            code: 'DTC32ANL',
            name: { en: 'Calculus II', kh: 'គណិតវិទ្យាអនុវត្ត ភាគ​ ២' },
            credit: 3,
          },
          {
            code: 'DTC32TMD',
            name: { en: 'Thermodynamics', kh: 'កំដៅវិទ្យា' },
            credit: 3,
          },
          {
            code: 'DTC32MKT',
            name: { en: 'Marketing', kh: 'ទីផ្សារ' },
            credit: 2,
          },
          {
            code: 'DTC32TDN',
            name: { en: 'Technical Drawing', kh: 'គំនូរ​បច្ចេកទេស' },
            credit: 2,
          },
          {
            code: 'DTC32ENV',
            name: { en: 'Environment', kh: 'បរិស្ថាន' },
            credit: 2,
          },
          {
            code: 'DTC32FRA',
            name: { en: 'French', kh: 'ភាសាបារាំង' },
            credit: 3,
          },
        ],
        totalCredit2: 17,
      },
      year4: {
        semester1: [{ code: '', name: { en: '', kh: '' }, credit: 0 }],
        totalCredit: 0,
        semester2: [{ code: '', name: { en: '', kh: '' }, credit: 0 }],
        totalCredit2: 0,
      },
      year5: {
        semester1: [{ code: '', name: { en: '', kh: '' }, credit: 0 }],
        totalCredit: 0,
        semester2: [{ code: '', name: { en: '', kh: '' }, credit: 0 }],
        totalCredit2: 0,
      },
    },
    career_opportunities: [
      {
        description: {
          en: 'Data science offers a wide array of career opportunities, ranging from specialized roles like data scientists and engineers to more general roles like business analysts. These roles often involve analyzing data, developing models, and building infrastructure to support data-driven decision-making. Many of these positions are in high demand, with projected growth in the field expected to be faster than average.',
          kh: 'វិទ្យាសាស្ត្រទិន្នន័យផ្តល់នូវឱកាសអាជីពជាច្រើន ដែលរួមមានពីតួនាទីឯកទេសដូចជា អ្នកវិទ្យាសាស្ត្រទិន្នន័យ និងវិស្វករ ទៅតួនាទីទូទៅដូចជា អ្នកវិភាគអាជីវកម្ម។ តួនាទីទាំងនេះភាគច្រើនពាក់ព័ន្ធនឹងការវិភាគទិន្នន័យ ការអភិវឌ្ឍគំរូ និងការបង្កើតហេដ្ឋារចនាសម្ព័ន្ធ ដើម្បីគាំទ្រការសម្រេចចិត្តផ្អែកលើទិន្នន័យ។ តួនាទីជាច្រើនក្នុងចំណោមតួនាទីទាំងនេះកំពុងមានតម្រូវការខ្លាំង ហើយការកើនឡើងក្នុងវិស័យនេះត្រូវបានគេរំពឹងថានឹងលឿនជាងមធ្យម។',
        },
        career_path: [
          {
            title: {
              en: 'Data Scientist',
              kh: 'វិទ្យាសាស្រ្តទីន្នន័យ',
            },
            description: {
              en: 'Focuses on extracting insights, building predictive models, and developing strategies from complex data.',
              kh: 'ផ្តោតលើការវិភាគទិន្នន័យស្មុគស្មាញ ដើម្បីទាញយកចំណេះដឹង និងបង្កើតគំរូទាយទំនង',
            },
          },
          {
            title: {
              en: 'Data Engineer',
              kh: 'វិស្វកម្មទិន្នន័យ',
            },
            description: {
              en: 'Builds and manages the infrastructure for collecting, storing, and processing data.',
              kh: 'បង្កើត និងគ្រប់គ្រងប្រព័ន្ធសម្រាប់ប្រមូល និងដំណើរការទិន្នន័យ',
            },
          },
          {
            title: {
              en: 'Machine Learning Engineer',
              kh: 'វិស្វកម្ម Machine Learning',
            },
            description: {
              en: 'Develops and implements machine learning algorithms and models.',
              kh: 'អភិវឌ្ឍ និងអនុវត្តគំរូ Machine Learning',
            },
          },
          {
            title: {
              en: 'Data Analyst',
              kh: 'វិភាគទិន្នន័យ',
            },
            description: {
              en: 'Analyzes data to provide insights, often using tools like SQL and visualization software.',
              kh: 'វិភាគទិន្នន័យដោយប្រើ SQL និងកម្មវិធី Visualization ដើម្បីទាញយកចំណេះដឹង',
            },
          },
          {
            title: {
              en: 'Data Architecture',
              kh: 'អ្នកគូរគម្រូទិន្នន័យ',
            },
            description: {
              en: 'Designs the overall structure and framework for managing data within an organization.',
              kh: 'រចនារចនាសម្ព័ន្ធ និងគ្រោងការគ្រប់គ្រងទិន្នន័យក្នុងអង្គភាព',
            },
          },
          {
            title: {
              en: 'Business Intelligence Analyst',
              kh: 'អ្នកវិភាគព័ត៌មានជំនួយសម្រេចចិត្តអាជីវកម្ម',
            },
            description: {
              en: 'Focuses on using data to improve business performance and decision-making.',
              kh: 'ប្រើទិន្នន័យដើម្បីលើកកម្ពស់អាជីវកម្ម និងសម្រេចចិត្តឲ្យមានប្រសិទ្ធភាព',
            },
          },
          {
            title: {
              en: 'Statistician',
              kh: 'អ្នកចំរើនស្ថិតិ',
            },
            description: {
              en: 'Applies statistical methods to analyze data and draw conclusions.',
              kh: 'អនុវត្តវិធីស្ថិតិដើម្បីវិភាគទិន្នន័យ និងសន្និដ្ឋានលទ្ធផល។',
            },
          },
          {
            title: {
              en: 'Database Administrator',
              kh: 'អ្នកគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ',
            },
            description: {
              en: 'Manages and maintains database systems.',
              kh: 'គ្រប់គ្រង និងថែទាំប្រព័ន្ធមូលដ្ឋានទិន្នន័យ។',
            },
          },
          {
            title: {
              en: 'AI Research Scientist',
              kh: 'អ្នកវិទ្យាសាស្ត្រស្រាវជ្រាវ AI',
            },
            description: {
              en: 'Conducts research and develops new AI technologies.',
              kh: 'ធ្វើស្រាវជ្រាវ និងអភិវឌ្ឍបច្ចេកវិទ្យា AI ថ្មីៗ។',
            },
          },
        ],
      },
    ],
    learningOutcomes: [
      {
        title: {
          en: 'Computational and Programming Proficiency',
          kh: 'ជំនាញក្នុងការគណនានិងការសរសេរកម្មវិធី',
        },
        learning_description: [
          {
            text: {
              en: 'Design, develop, and optimize robust software applications using object-oriented programming languages (e.g., Python, Java).',
              kh: 'រចនា អភិវឌ្ឍ និងបង្កើនប្រសិទ្ធភាពកម្មវិធីទន់ដោយប្រើភាសាកម្មវិធីមូលដ្ឋានវត្ថុ (ឧ. Python, Java)។',
            },
          },
          {
            text: {
              en: 'Build scalable data pipelines with modern frameworks such as PySpark and Pandas.',
              kh: 'បង្កើតបណ្តាញទិន្នន័យអាចពង្រីកបានដោយប្រើស៊ុមទិន្នន័យទំនើបដូចជា PySpark និង Pandas។',
            },
          },
        ],
      },
      {
        title: {
          en: 'Analytical and Modeling Skills',
          kh: 'ជំនាញវិភាគ និងម៉ូដែល',
        },
        learning_description: [
          {
            text: {
              en: 'Apply statistical and mathematical methods to extract insights from complex datasets.',
              kh: 'អនុវត្តវិធីសាស្ត្រគណិតវិទ្យា និងស្ថិតិ ដើម្បីទាញយកចំណេះដឹងពីទិន្នន័យស្មុគស្មាញ។',
            },
          },
          {
            text: {
              en: 'Develop predictive and descriptive models to support decision-making.',
              kh: 'អភិវឌ្ឍម៉ូដែលព្យាករណ៍ និងពិពណ៌នា ដើម្បីគាំទ្រការសម្រេចចិត្ត។',
            },
          },
        ],
      },
      {
        title: {
          en: 'Engineering and Systems Integration',
          kh: 'វិស្វកម្ម និងការរួមបញ្ចូលប្រព័ន្ធ',
        },
        learning_description: [
          {
            text: {
              en: 'Integrate software, hardware, and data systems to create efficient solutions.',
              kh: 'រួមបញ្ចូលកម្មវិធី ផ្នែករឹង និងប្រព័ន្ធទិន្នន័យ ដើម្បីបង្កើតដំណោះស្រាយប្រសិទ្ធភាព។',
            },
          },
          {
            text: {
              en: 'Apply engineering principles to design scalable and maintainable systems.',
              kh: 'អនុវត្តគោលការណ៍វិស្វកម្ម ដើម្បីរចនាប្រព័ន្ធអាចពង្រីក និងថែទាំបាន។',
            },
          },
        ],
      },
      {
        title: {
          en: 'Ethical and Professional Practice',
          kh: 'អភិវឌ្ឍន៍វិជ្ជាជីវៈ និងសីលធម៌',
        },
        learning_description: [
          {
            text: {
              en: 'Follow ethical standards and best practices in data collection, analysis, and usage.',
              kh: 'គោរពតាមស្តង់ដារ និងអនុវត្តល្អក្នុងការប្រមូល វិភាគ និងប្រើប្រាស់ទិន្នន័យ។',
            },
          },
          {
            text: {
              en: 'Demonstrate professionalism, responsibility, and collaboration in real-world projects.',
              kh: 'បង្ហាញពីវិជ្ជាជីវៈ ការទទួលខុសត្រូវ និងសហការណ៍ក្នុងគម្រោងជាក់ស្តែង។',
            },
          },
        ],
      },
    ],
  },
  financialEngineering: {
    title: {
      en: 'Bachelor of Engineering in Financial Engineering',
      kh: 'បរិញ្ញាបត្រវិស្វករនៅវិស្វកម្មហិរញ្ញវត្ថុ',
    },
    overview: {
      en: 'This program provides students with a strong foundation in engineering, finance, and quantitative methods. It equips graduates with the skills to design and apply financial models, manage risks, and integrate modern technologies to solve financial challenges in banking, investment, and corporate sectors.',
      kh: 'កម្មវិធីនេះផ្តល់ឱ្យនិស្សិតនូវគ្រឹះរឹងមាំក្នុងវិស្វកម្ម ហិរញ្ញវត្ថុ និងវិធីសាស្ត្រគណនាមានលក្ខណៈបរិមាណ។ វាបណ្ដុះបណ្ដាលឱ្យបរិញ្ញាបត្រទទួលបានជំនាញក្នុងការរចនា និងអនុវត្តម៉ូដែលហិរញ្ញវត្ថុ ការគ្រប់គ្រងហានិភ័យ និងការរួមបញ្ចូលបច្ចេកវិទ្យាទំនើប ដើម្បីដោះស្រាយបញ្ហាហិរញ្ញវត្ថុនានាក្នុងវិស័យធនាគារ វិនិយោគ និងក្រុមហ៊ុន។',
    },
    curriculum: {
      year1: {
        semester1: [],
        totalCredit: 0,
        semester2: [],
        totalCredit2: 0,
      },
      year2: {
        semester1: [
          {
            code: 'DTC11ANL',
            name: { en: 'Calculus I', kh: 'គណិតវិទ្យាអនុវត្ត ភាគ ១' },
            credit: 3,
          },
          {
            code: 'DTC11MCN',
            name: { en: 'Mechanics I', kh: 'មេកានិច ភាគ ១' },
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
            name: { en: 'Philosophy', kh: 'ទស្សនវិជ្ជា' },
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
            name: { en: 'Calculus II', kh: 'គណិតវិទ្យាអនុវត្ត ភាគ ២' },
            credit: 3,
          },
          {
            code: 'DTC12TMD',
            name: { en: 'Thermodynamics', kh: 'ធរណីយកម្តៅ' },
            credit: 3,
          },
          {
            code: 'DTC12MKT',
            name: { en: 'Marketing', kh: 'ទីផ្សារ' },
            credit: 2,
          },
          {
            code: 'DTC12TDN',
            name: { en: 'Technical Drawing', kh: 'គំនូរបច្ចេកទេស' },
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
      year3: {
        semester1: [
          {
            code: 'DTC11ANL',
            name: { en: 'Calculus I', kh: 'គណិតវិទ្យាអនុវត្ត ភាគ ១' },
            credit: 3,
          },
          {
            code: 'DTC11MCN',
            name: { en: 'Mechanics I', kh: 'មេកានិច ភាគ ១' },
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
            name: { en: 'Philosophy', kh: 'ទស្សនវិជ្ជា' },
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
            name: { en: 'Calculus II', kh: 'គណិតវិទ្យាអនុវត្ត ភាគ ២' },
            credit: 3,
          },
          {
            code: 'DTC12TMD',
            name: { en: 'Thermodynamics', kh: 'ធរណីយកម្តៅ' },
            credit: 3,
          },
          {
            code: 'DTC12MKT',
            name: { en: 'Marketing', kh: 'ទីផ្សារ' },
            credit: 2,
          },
          {
            code: 'DTC12TDN',
            name: { en: 'Technical Drawing', kh: 'គំនូរបច្ចេកទេស' },
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
      year4: {
        semester1: [],
        totalCredit: 0,
        semester2: [],
        totalCredit2: 0,
      },
      year5: {
        semester1: [],
        totalCredit: 0,
        semester2: [],
        totalCredit2: 0,
      },
    },
    career_opportunities: [
      {
        description: {
          en: 'Financial engineering opens career opportunities in banking, investment, insurance, and corporate finance. Graduates can work in roles involving financial modeling, risk management, data analysis, and algorithmic trading.',
          kh: 'វិស្វកម្មហិរញ្ញវត្ថុបើកឱកាសអាជីពនៅក្នុងវិស័យធនាគារ វិនិយោគ ធានារ៉ាប់រង និងហិរញ្ញវត្ថុក្រុមហ៊ុន។ បរិញ្ញាបត្រអាចធ្វើការក្នុងតួនាទីដែលពាក់ព័ន្ធនឹងម៉ូដែលហិរញ្ញវត្ថុ ការគ្រប់គ្រងហានិភ័យ ការវិភាគទិន្នន័យ និងការជួញដូរដោយប្រើកុំព្យូទ័រ។',
        },
        career_path: [
          {
            title: { en: 'Financial Engineer', kh: 'វិស្វករហិរញ្ញវត្ថុ' },
            description: {
              en: 'Designs and develops financial models and tools to solve complex financial problems.',
              kh: 'រចនា និងអភិវឌ្ឍម៉ូដែលហិរញ្ញវត្ថុ និងឧបករណ៍ ដើម្បីដោះស្រាយបញ្ហាហិរញ្ញវត្ថុស្មុគស្មាញ។',
            },
          },
          {
            title: { en: 'Risk Manager', kh: 'អ្នកគ្រប់គ្រងហានិភ័យ' },
            description: {
              en: 'Identifies, assesses, and manages financial risks within organizations.',
              kh: 'កំណត់ វាយតម្លៃ និងគ្រប់គ្រងហានិភ័យហិរញ្ញវត្ថុក្នុងអង្គភាព។',
            },
          },
          {
            title: { en: 'Quantitative Analyst', kh: 'អ្នកវិភាគបរិមាណ' },
            description: {
              en: 'Applies mathematical and statistical techniques to financial and risk management problems.',
              kh: 'អនុវត្តបច្ចេកទេសគណិតវិទ្យា និងស្ថិតិ ទៅលើបញ្ហាហិរញ្ញវត្ថុ និងការគ្រប់គ្រងហានិភ័យ។',
            },
          },
          {
            title: { en: 'Investment Analyst', kh: 'អ្នកវិភាគវិនិយោគ' },
            description: {
              en: 'Analyzes investment opportunities and provides recommendations to maximize returns.',
              kh: 'វិភាគឱកាសវិនិយោគ និងផ្តល់អនុសាសន៍ ដើម្បីបង្កើនប្រាក់ចំណេញ។',
            },
          },
          {
            title: {
              en: 'Business Intelligence Analyst',
              kh: 'អ្នកវិភាគព័ត៌មានអាជីវកម្ម',
            },
            description: {
              en: 'Uses data-driven insights to improve financial decision-making and business performance.',
              kh: 'ប្រើចំណេះដឹងផ្អែកលើទិន្នន័យ ដើម្បីបង្កើនប្រសិទ្ធភាពក្នុងការសម្រេចចិត្តហិរញ្ញវត្ថុ និងអាជីវកម្ម។',
            },
          },
        ],
      },
    ],
    learningOutcomes: [
      {
        title: {
          en: 'Computational and Programming Proficiency',
          kh: 'ជំនាញក្នុងការគណនា និងសរសេរកម្មវិធី',
        },
        learning_description: [
          {
            text: {
              en: 'Design, develop, and optimize robust financial software applications using programming languages (e.g., Python, Java).',
              kh: 'រចនា អភិវឌ្ឍ និងបង្កើនប្រសិទ្ធភាពកម្មវិធីហិរញ្ញវត្ថុដោយប្រើភាសាកម្មវិធី (ឧ. Python, Java)។',
            },
          },
          {
            text: {
              en: 'Implement scalable financial data pipelines using frameworks such as PySpark and Pandas.',
              kh: 'អនុវត្តបណ្តាញទិន្នន័យហិរញ្ញវត្ថុអាចពង្រីកបាន ដោយប្រើស៊ុមទិន្នន័យដូចជា PySpark និង Pandas។',
            },
          },
        ],
      },
      {
        title: {
          en: 'Analytical and Modeling Skills',
          kh: 'ជំនាញវិភាគ និងម៉ូដែល',
        },
        learning_description: [
          {
            text: {
              en: 'Develop financial models to support decision-making in investment, banking, and risk management.',
              kh: 'អភិវឌ្ឍម៉ូដែលហិរញ្ញវត្ថុ ដើម្បីគាំទ្រការសម្រេចចិត្តក្នុងវិនិយោគ ធនាគារ និងការគ្រប់គ្រងហានិភ័យ។',
            },
          },
          {
            text: {
              en: 'Apply quantitative techniques to analyze financial markets and instruments.',
              kh: 'អនុវត្តបច្ចេកទេសបរិមាណ ដើម្បីវិភាគទីផ្សារ និងឧបករណ៍ហិរញ្ញវត្ថុ។',
            },
          },
        ],
      },
      {
        title: {
          en: 'Engineering and Systems Integration',
          kh: 'វិស្វកម្ម និងការរួមបញ្ចូលប្រព័ន្ធ',
        },
        learning_description: [
          {
            text: {
              en: 'Integrate financial systems and technologies to improve efficiency and scalability.',
              kh: 'រួមបញ្ចូលប្រព័ន្ធ និងបច្ចេកវិទ្យាហិរញ្ញវត្ថុ ដើម្បីបង្កើនប្រសិទ្ធភាព និងភាពអាចពង្រីកបាន។',
            },
          },
          {
            text: {
              en: 'Design architectures for managing large-scale financial data systems.',
              kh: 'រចនាស្ថាបត្យកម្មសម្រាប់គ្រប់គ្រងប្រព័ន្ធទិន្នន័យហិរញ្ញវត្ថុទំហំធំ។',
            },
          },
        ],
      },
      {
        title: {
          en: 'Ethical and Professional Practice',
          kh: 'សីលធម៌ និងអនុវត្តវិជ្ជាជីវៈ',
        },
        learning_description: [
          {
            text: {
              en: 'Adhere to ethical standards in financial analysis, investment, and risk management.',
              kh: 'គោរពតាមស្តង់ដារសីលធម៌ក្នុងការវិភាគហិរញ្ញវត្ថុ វិនិយោគ និងការគ្រប់គ្រងហានិភ័យ។',
            },
          },
          {
            text: {
              en: 'Demonstrate professionalism and responsibility in financial decision-making and teamwork.',
              kh: 'បង្ហាញពីវិជ្ជាជីវៈ និងការទទួលខុសត្រូវក្នុងការសម្រេចចិត្តហិរញ្ញវត្ថុ និងការងារជាក្រុម។',
            },
          },
        ],
      },
    ],
  },
};

const yearLabels: Record<string, { en: string; kh: string }> = {
  year1: { en: 'Year 1 (Foundation Year)', kh: 'ឆ្នាំទី ១ (ឆ្នាំមូលដ្ឋាន)' },
  year2: { en: 'Year 2 (Foundation Year)', kh: 'ឆ្នាំទី ២ ​(ឆ្នាំមូលដ្ឋាន)' },
  year3: { en: 'Year 3', kh: 'ឆ្នាំទី ៣' },
  year4: { en: 'Year 4', kh: 'ឆ្នាំទី ៤' },
  year5: { en: 'Year 5', kh: 'ឆ្នាំទី ៥' },
};

/* -------------------- 3. COMPONENT -------------------- */
export default function BachelorDegree() {
  const [selected, setSelected] = useState<ProgramKey>('dataScience');
  const [selectedYear, setSelectedYear] = useState<keyof Curriculum>('year1');
  const program = programs[selected];
  const yearData = program.curriculum[selectedYear];
  const { language } = useLanguage();

  return (
<div className="w-auto bg-white">
  <div className="w-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-[clamp(1.5rem,2vw,2rem)] font-playfair_display text-black font-semibold">
      {renderTextWithFont(
        language === 'en' ? 'Bachelor Degree' : 'កម្រិតបរិញ្ញាបត្រ',
        language,
        'heading'
      )}
    </h1>

    <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
    <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
      {/* Bachelor's Degree Tabs */}
      <div className="bg-white shadow-md overflow-hidden">
          <div className="grid grid-cols-2">
            <button
              className={`col-span-1 py-3 text-left font-medium px-3 text-[clamp(0.875rem,2vw,1.25rem)] ${
                selected === 'dataScience'
                  ? 'bg-[#3A3B5C]/20 text-[#3A3B5C]'
                  : 'bg-[#D9D9D9]/50 text-[#3A3B5C]'
              }`}
              onClick={() => setSelected('dataScience')}
            >
              <span
                className={
                  language === 'en' ? 'font-reddit_sans' : 'font-preahvihear'
                }
              >
                {language === 'en' ? (
                  <>
                    Bachelor of Engineering in{' '}
                    <span className="text-[#C41E3A]">Data Science</span>
                  </>
                ) : (
                  <>
                    បរិញ្ញាបត្រវិស្វកម្មនៃ{' '}
                    <span className="text-[#C41E3A]">
                      វិទ្យាសាស្ត្រទិន្នន័យ
                    </span>
                  </>
                )}
              </span>
            </button>

            <button
              className={`col-span-1 py-3 text-left font-medium px-3 text-[clamp(0.875rem,2vw,1.25rem)] ${
                selected === 'financialEngineering'
                  ? 'bg-[#3A3B5C]/20 text-[#3A3B5C]'
                  : 'bg-[#D9D9D9]/50 text-[#3A3B5C]'
              }`}
              onClick={() => setSelected('financialEngineering')}
            >
              <span
                className={
                  language === 'en' ? 'font-reddit_sans' : 'font-preahvihear'
                }
              >
                {language === 'en' ? (
                  <>
                    Bachelor of Engineering in{' '}
                    <span className="text-[#C41E3A]">
                      Financial Engineering
                    </span>
                  </>
                ) : (
                  <>
                    បរិញ្ញាបត្រវិស្វកម្មនៃ{' '}
                    <span className="text-[#C41E3A]">វិស្វកម្មហិរញ្ញវត្ថុ</span>
                  </>
                )}
              </span>
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="w-auto py-6">
        {/* Overview */}
        <section className="mb-5">
          <h2 className=" font-extrabold mb-2 text-[#3A3B5C] text-[clamp(1.125rem,2vw,1.5rem)]">
            {renderTextWithFont(
              language === 'en' ? 'Program Overview' : 'ទិដ្ឋភាពកម្មវិធី',
              language,
              'heading'
            )}
          </h2>
          <p className="font-raleway text-[#2E2E2E] text-[clamp(0.875rem,2vw,1.25rem)]">
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
          <h2 className="text-[clamp(1.125rem,2vw,1.5rem)] font-extrabold mb-2 text-[#3A3B5C] font-raleway">
            {renderTextWithFont(
              language === 'en' ? 'Curriculum Structure' : 'កម្មវិធីសិក្សា',
              language,
              'heading'
            )}
          </h2>
          {/* Year Tab */}
          <div className="bg-white">
            <div className="w-full grid grid-cols-5">
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
                  {yearLabels[yearKey]?.[language] ||
                    yearKey.replace('year', 'Year ')}
                  {selectedYear === yearKey && (
                    <motion.div layoutId="underline" className="" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className='hidden lg:flex flex-col'>
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
                  <div className="grid grid-cols-5 py-2 row-span-1 px-4 text-[clamp(1rem,2vw,1.25rem)] text-[#3A3B5C] bg-gray-50 items-center rounded-t-xl font-raleway">
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
                  <ul className="overflow-y-auto row-span-5">
                    {yearData.semester1?.map((c) => (
                      <li
                        key={c.code}
                        className="grid grid-cols-5 border-b pt-5 pb-5 px-4 text-[clamp(0.875rem,1.5vw,1rem)] font-medium text-[#767676] space-y-2 font-reddit_sans "
                      >
                        <div className="col-span-4 grid grid-cols-4 space-x-7">
                          <p className="col-span-2 xl:col-span-1">{c.code}</p>
                          <p className="col-span-2 xl:col-span-3">
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

                  {/* Total */}
                  <div className="grid grid-cols-5 py-2 px-4 text-[clamp(0.875rem,1.5vw,1rem)] text-[#3A3B5C] bg-gray-50 row-span-1 items-center rounded-b-xl">
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
                      {yearData.totalCredit}
                    </h3>
                  </div>
                </div>

                {/* Column 2 - Semester 2 */}
                <div className="grid grid-rows-7 divide-y-2 divide-gray-400">
                  {/* Header */}
                  <div className="grid grid-cols-5 py-2 px-4 text-[clamp(1rem,2vw,1.25rem)] text-[#3A3B5C] bg-gray-50 row-span-1 items-center font-raleway rounded-t-xl">
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
                  <ul className="overflow-y-auto row-span-5">
                    {yearData.semester2?.map((c) => (
                      <li
                        key={c.code}
                        className="grid grid-cols-5 border-b pt-5 pb-5 px-4 text-[clamp(0.875rem,1.5vw,1rem)] font-medium text-[#767676] font-reddit_sans space-y-2"
                      >
                        <div className="col-span-4 grid grid-cols-4">
                          <p className="col-span-2 xl:col-span-1">{c.code}</p>
                          <p className="col-span-2 xl:col-span-3">
                            {renderTextWithFont(
                              language === 'en'
                                ? `${c.name.en}`
                                : `${c.name.kh}`,
                              language,
                              'body'
                            )}
                          </p>
                        </div>
                        <span className="col-span-1 text-gray-600 text-center">
                          {c.credit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Total */}
                  <div className="grid grid-cols-5 py-2 px-4 text-[clamp(0.875rem,1.5vw,1rem)] text-[#3A3B5C] bg-gray-50 row-span-1 items-center rounded-b-xl">
                    <h3
                      className={`font-bold col-span-4 ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
                    >
                      {language === 'en' ? (
                        <>
                          Total Semester 2{' '}
                          <span className="text-[#C41E3A]">
                            {yearLabels[selectedYear]?.[language]}
                          </span>
                        </>
                      ) : (
                        <>
                          សរុបក្រេឌីតឆមាសទី២សម្រាប់{' '}
                          <span className="text-[#C41E3A]">
                            {yearLabels[selectedYear]?.[language]}
                          </span>
                        </>
                      )}
                    </h3>
                    <h3 className="font-bold col-span-1 text-center font-reddit_sans">
                      {yearData.totalCredit}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div 
            className='lg:hidden mt-5'
            key={selectedYear}
          >
            {/* Column 1 - Semester 1 */}
                <div className="mb-6 grid grid-rows-[auto_1fr_auto] divide-y-2 divide-gray-400 rounded-xl bg-gray-50">
                  {/* Header */}
                  <div className="grid grid-cols-5 py-2 row-span-1 px-4 text-[clamp(1rem,2vw,1.25rem)] text-[#3A3B5C] bg-gray-50 items-center rounded-t-xl font-raleway">
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
                  <ul className="overflow-y-auto row-span-5">
                    {yearData.semester1?.map((c) => (
                      <li
                        key={c.code}
                        className="grid grid-cols-5 border-b pt-5 pb-5 px-4 text-[clamp(0.875rem,1.5vw,1rem)] font-medium text-[#767676] space-y-2 font-reddit_sans "
                      >
                        <div className="col-span-4 grid grid-cols-4 space-x-7">
                          <p className="col-span-1">{c.code}</p>
                          <p className="col-span-3">
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

                  {/* Total */}
                  <div className="grid grid-cols-5 py-2 px-4 text-[clamp(0.875rem,1.5vw,1rem)] text-[#3A3B5C] bg-gray-50 row-span-1 items-center rounded-b-xl">
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
                      {yearData.totalCredit}
                    </h3>
                  </div>
                </div>

                {/* Column 2 - Semester 2 */}
                <div className="grid grid-rows-[auto_1fr_auto] divide-y-2 divide-gray-400 rounded-xl bg-gray-50">
                  {/* Header */}
                  <div className="grid grid-cols-5 py-2 px-4 text-[clamp(1rem,2vw,1.25rem)] text-[#3A3B5C] bg-gray-50 row-span-1 items-center font-raleway rounded-t-xl">
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
                  <ul className="overflow-y-auto row-span-5">
                    {yearData.semester2?.map((c) => (
                      <li
                        key={c.code}
                        className="grid grid-cols-5 border-b pt-5 pb-5 px-4 text-[clamp(0.875rem,1.5vw,1rem)] font-medium text-[#767676] font-reddit_sans space-y-2"
                      >
                        <div className="col-span-4 grid grid-cols-4">
                          <p className="col-span-1">{c.code}</p>
                          <p className="col-span-3">
                            {renderTextWithFont(
                              language === 'en'
                                ? `${c.name.en}`
                                : `${c.name.kh}`,
                              language,
                              'body'
                            )}
                          </p>
                        </div>
                        <span className="col-span-1 text-gray-600 text-center">
                          {c.credit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Total */}
                  <div className="grid grid-cols-5 py-2 px-4 text-[clamp(0.875rem,1.5vw,1rem)] text-[#3A3B5C] bg-gray-50 row-span-1 items-center rounded-b-xl">
                    <h3
                      className={`font-bold col-span-4 ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
                    >
                      {language === 'en' ? (
                        <>
                          Total Semester 2{' '}
                          <span className="text-[#C41E3A]">
                            {yearLabels[selectedYear]?.[language]}
                          </span>
                        </>
                      ) : (
                        <>
                          សរុបក្រេឌីតឆមាសទី២សម្រាប់{' '}
                          <span className="text-[#C41E3A]">
                            {yearLabels[selectedYear]?.[language]}
                          </span>
                        </>
                      )}
                    </h3>
                    <h3 className="font-bold col-span-1 text-center font-reddit_sans">
                      {yearData.totalCredit}
                    </h3>
                  </div>
                </div>
              
          </div>
        </section>

        {/* Career Opportunities*/}
        <section className="mb-8">
          <h2
            className={`text-[clamp(1.125rem,2vw,1.5rem)] font-extrabold mb-4 text-[#3A3B5C] ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
          >
            {language === 'en' ? 'Career Opportunities' : 'ឱកាសការងារ'}
          </h2>

          {program.career_opportunities.map((opportunity, idx) => (
            <div key={idx} className="space-y-5">
              <p className="text-[#2E2E2E] font-raleway text-[clamp(0.875rem,2vw,1.25rem)]">
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
                  className={`text-black text-[clamp(0.875rem,2vw,1.25rem)] mb-2 ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
                >
                  {language === 'en'
                    ? 'Data Science career paths may include:'
                    : 'ផ្លូវការងារផ្នែកវិទ្យាសាស្ត្រទិន្នន័យអាចរួមមាន:'}
                </p>
                <ul className="list-disc list-inside tracking-wide text-[#2E2E2E] pl-3 space-y-1 text-[clamp(0.875rem,2vw,1.25rem)]">
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
            className={`text-[clamp(1.125rem,2vw,1.5rem)] font-extrabold mb-4 text-[#3A3B5C] ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
          >
            {language === 'en'
              ? 'Learning Outcomes'
              : 'លទ្ធផលរំពឹងទុកពីការសិក្សា'}
          </h2>
          <p
            className={`font-extrabold mb-2 text-[clamp(0.875rem,2vw,1.25rem)] text-[#2E2E2E] ${language === 'en' ? 'font-raleway' : 'font-preahvihear'}`}
          >
            {language === 'en'
              ? 'Upon completing the program, students will be able to:'
              : 'បន្ទាប់ពីបញ្ចប់កម្មវិធីនេះ និស្សិតនឹងមានសមត្ថភាព៖'}
          </p>
          {program.learningOutcomes.map((outcome, index) => (
            <div key={index} className="py-4 text-[clamp(0.875rem,2vw,1.25rem)] font-raleway">
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
                    className="list-disc list-inside text-[clamp(0.875rem,2vw,1.25rem)] text-[#2E2E2E] pl-3"
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
        <a href="" className="border text-[#C41E3A] font-raleway text-[clamp(0.875rem,2vw,1.25rem)]">
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
    </div>
  );
}
