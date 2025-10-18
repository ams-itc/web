import { useLanguage } from '@/contexts/LanguageContext';
import { useState, type ReactNode } from 'react';

/* -------------------- 1. INTERFACES -------------------- */
// helper type for bilingual strings

interface LocalizedText {
  en: string;
  kh: string;
}

interface ApplicationPoint {
  title?: LocalizedText;
  description?: LocalizedText | LocalizedText[];
  list_heading?: LocalizedText;
  list?: LocalizedText[];
  conclusion?: LocalizedText;
}

interface ApplicationSection {
  title: LocalizedText;
  description?: LocalizedText | LocalizedText[];
  points?: ApplicationPoint[];
}

type ProgramLevel = "Bachelor's Degree" | "Master's Degree";

interface ApplicationGuide {
  programLevel: LocalizedText;
  sections: ApplicationSection[];
}

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

const applicationGuide: Record<ProgramLevel, ApplicationGuide> = {
  "Master's Degree": {
    programLevel: {
      en: "Master's Degree",
      kh: 'បរិញ្ញាបត្រជាន់ខ្ពស់',
    },
    sections: [
      {
        title: {
          en: 'Admission Requirements',
          kh: 'លក្ខខណ្ឌចូលរៀន',
        },
        points: [
          {
            description: {
              en: 'All prospective students must successfully complete online and pass our university entrance examination to gain admission to the first year of any bachelor’s degree program. Our university operates with a unique admission system where we do not accept transfer students from other institutions, meaning all students must begin their academic journey from Year 1, regardless of their previous educational background.',
              kh: 'និស្សិតទាំងឡាយដែលចង់ចូលរៀន ត្រូវតែបញ្ចប់ការចុះឈ្មោះតាមប្រព័ន្ធអនឡាញ និងជាប់ការប្រលងចូលសាកលវិទ្យាល័យ ដើម្បីអាចចូលរៀនថ្នាក់ទី១ នៃកម្មវិធីបរិញ្ញាបត្រណាមួយ។ សាកលវិទ្យាល័យរបស់យើងប្រើប្រព័ន្ធទទួលសិស្សចូលរៀនពិសេស ដោយមិនទទួលសិស្សផ្ទេរពីស្ថាប័នផ្សេងទៀត។ នេះមានន័យថា និស្សិតទាំងអស់ត្រូវចាប់ផ្តើមដំណើរការសិក្សាពីឆ្នាំទី១ មិនថាមានប្រវត្តិការសិក្សាមុនយ៉ាងណាក៏ដោយ។',
            },
          },
        ],
      },
      {
        title: {
          en: 'The Application Journey',
          kh: 'ដំណើរដាក់ពាក្យ',
        },
        points: [
          {
            title: {
              en: 'Entrance Examination',
              kh: 'ការប្រឡងចូល',
            },
            description: {
              en: 'Your path to joining our department begins with the university entrance examination, which serves as the sole gateway to our programs. This comprehensive assessment is mandatory for all applicants, and your performance will determine both your admission status and your likelihood of being placed in your preferred academic department.',
              kh: 'ផ្លូវរបស់អ្នកដើម្បីចូលរួមជាមួយនាយកដ្ឋានរបស់យើង ចាប់ផ្តើមពីការប្រឡងចូលសាកលវិទ្យាល័យ ដែលជាវិធានចូលសំខាន់តែមួយទៅកាន់កម្មវិធីរបស់យើង។ ការប្រឡងសាកល្បងទូលំទូលាយនេះ គឺជាការប្រឡងចាំបាច់សម្រាប់អ្នកដាក់ពាក្យទាំងអស់ ហើយលទ្ធផលនៃការប្រឡងនឹងកំណត់ទាំងស្ថានភាពចូលរៀនរបស់អ្នក និងឱកាសទទួលបានការចាត់ចែងចូលនាយកដ្ឋានសិក្សាដែលអ្នកចង់បាន។',
            },
          },
          {
            title: {
              en: 'Foundation Program and Department Selection',
              kh: 'កម្មវិធីគ្រឹះ និងការជ្រើសរើសនាយកដ្ឋាន',
            },
            description: {
              en: 'Upon successful completion of the entrance examination, you’ll enter our comprehensive two-year Foundation program starting with Year 1. During your first semester, you’ll engage with core foundational courses while participating in the crucial department selection process.',
              kh: 'បន្ទាប់ពីជាប់ការប្រឡងចូលសាកលវិទ្យាល័យ អ្នកនឹងចូលរៀនក្នុងកម្មវិធីមូលដ្ឋានរយៈពេលពីរឆ្នាំ ដែលចាប់ផ្តើមពីឆ្នាំទី១។ នៅឆមាសទី១ អ្នកនឹងចូលរួមរៀនមុខវិជ្ជាមូលដ្ឋានសំខាន់ៗ ព្រមទាំងចូលរួមក្នុងដំណើរការជ្រើសរើសនាយកដ្ឋានសិក្សាដ៏សំខាន់ផងដែរ។',
            },
            list_heading: {
              en: 'The Selection Process:',
              kh: 'ដំណើរការជ្រើសរើស:',
            },
            list: [
              {
                en: 'During Semester 1 of Year 1, you’ll receive notification to access your student portal',
                kh: 'ក្នុងអំឡុងពេលឆមាសទី១ នៃឆ្នាំទី១ អ្នកនឹងទទួលបានសារជូនដំណឹង ដើម្បីចូលប្រើ Portal សិស្សរបស់អ្នក',
              },
              {
                en: 'You must rank ALL available majors at the university in order of preference',
                kh: 'អ្នកត្រូវតែចាត់ថ្នាក់មហាវិទ្យាល័យ/មុខជំនាញទាំងអស់ដែលមាននៅសាកលវិទ្យាល័យ តាមលំដាប់ចំណូលចិត្តរបស់អ្នក',
              },
              {
                en: 'Rank requirements may be met through completion, community, sequentially through all options',
                kh: 'ការទាមទារចំណាត់ថ្នាក់អាចបំពេញបាន ដោយបញ្ចប់ ការចូលរួមសហគមន៍ ឬធ្វើតាមលំដាប់ជម្រើសទាំងអស់',
              },
              {
                en: 'Submit your completed rankings through the portal, both prior to the specified deadline',
                kh: 'សូមដាក់ស្នើចំណាត់ថ្នាក់របស់អ្នកដែលបានបញ្ចប់តាមរយៈប្រព័ន្ធ Portal មុនពេលផុតកំណត់ដែលបានកំណត់',
              },
              {
                en: 'This ranking system ensures every student receives a department placement, but your final assignment considers not only your entrance examination performance. Students with higher rank scores receive priority in securing places in their top-ranked departments. If your selected department is highly competitive and your entrance score doesn’t meet the threshold, the system will automatically consider your subsequent choice until a placement is made.',
                kh: 'ប្រព័ន្ធចំណាត់ថ្នាក់នេះធានាថា និស្សិតនីមួយៗទទួលបានការចាត់ចែងចូលនាយកដ្ឋានសិក្សា ប៉ុន្តែការចាត់ចែងចុងក្រោយនឹងពិចារណាមិនត្រឹមតែការប្រឡងចូលសាកលវិទ្យាល័យទេ។ និស្សិតដែលមានពិន្ទុចំណាត់ថ្នាក់ខ្ពស់នឹងទទួលបានអាទិភាពក្នុងការចូលរៀននៅនាយកដ្ឋានដែលពួកគេចង់បាន។ ប្រសិនបើនាយកដ្ឋានដែលអ្នកជ្រើសរើសមានការប្រកួតប្រជែងខ្លាំង ហើយពិន្ទុប្រឡងចូលរបស់អ្នកមិនគ្រប់គ្រាន់ នោះប្រព័ន្ធនឹងពិចារណាជម្រើសបន្ទាប់របស់អ្នកដោយស្វ័យប្រវត្តិ រហូតដល់មានការចាត់ចែងបាន។',
              },
            ],
            conclusion: {
              en: 'This ranking system ensures every student receives a department placement, but your final assignment considers not only your entrance examination performance. Students with higher rank scores receive priority in securing places in their top-ranked departments. If your selected department is highly competitive and your entrance score doesn’t meet the threshold, the system will automatically consider your subsequent choice until a placement is made.',
              kh: 'ប្រព័ន្ធចំណាត់ថ្នាក់នេះធានាថា និស្សិតនីមួយៗទទួលបានការចាត់ចែងចូលនាយកដ្ឋានសិក្សា ប៉ុន្តែការចាត់ចែងចុងក្រោយនឹងពិចារណាមិនត្រឹមតែការប្រឡងចូលសាកលវិទ្យាល័យទេ។ និស្សិតដែលមានពិន្ទុចំណាត់ថ្នាក់ខ្ពស់នឹងទទួលបានអាទិភាពក្នុងការចូលរៀននៅនាយកដ្ឋានដែលពួកគេចង់បាន។ ប្រសិនបើនាយកដ្ឋានដែលអ្នកជ្រើសរើសមានការប្រកួតប្រជែងខ្លាំង ហើយពិន្ទុប្រឡងចូលរបស់អ្នកមិនគ្រប់គ្រាន់ នោះប្រព័ន្ធនឹងពិចារណាជម្រើសបន្ទាប់របស់អ្នកដោយស្វ័យប្រវត្តិ រហូតដល់មានការចាត់ចែងបាន។',
            },
          },
          {
            title: {
              en: 'Department Assignment and Foundation Completion',
              kh: 'ការចាត់តាំងនាយកដ្ឋាន និងការបញ្ចប់កម្មវិធីគ្រឹះ',
            },
            description: {
              en: 'The university announces department assignments at the conclusion of Semester 1, Year 1, marking a significant milestone in your academic career. Once assigned to your department, you’ll continue with specialized foundational coursework throughout the remainder of Year 1 and all of Year 2.',
              kh: 'សាកលវិទ្យាល័យនឹងប្រកាសលទ្ធផលចាត់ចែងនាយកដ្ឋាន នៅចុងឆមាសទី១ នៃឆ្នាំទី១ ដែលជាចំណុចសំខាន់មួយក្នុងដំណើរការសិក្សារបស់អ្នក។ បន្ទាប់ពីត្រូវបានចាត់ចែងចូលនាយកដ្ឋានរួច អ្នកនឹងបន្តការសិក្សាមុខវិជ្ជាមូលដ្ឋានឯកទេស ក្នុងអំឡុងពេលនៅសល់នៃឆ្នាំទី១ និងឆ្នាំទី២ទាំងមូល។',
            },
            list_heading: {
              en: 'What Happens Next:',
              kh: 'អ្វីកើតមានបន្ទាប់:',
            },
            list: [
              {
                en: 'Receive your department assignment after Semester 1 ends',
                kh: 'ទទួលលទ្ធផលចាត់ចែងនាយកដ្ឋានរបស់អ្នក បន្ទាប់ពីឆមាសទី១ បញ្ចប់',
              },
              {
                en: 'Begin department-specific coursework while completing foundation requirements',
                kh: 'ចាប់ផ្តើមរៀនមុខវិជ្ជាពិសេសតាមនាយកដ្ឋាន ពេលកំពុងបញ្ចប់មុខវិជ្ជាមូលដ្ឋាន',
              },
              {
                en: 'Complete full two years of foundation study before advancing to specialized programs',
                kh: 'បញ្ចប់ការសិក្សាមូលដ្ឋានពេញរយៈពេលពីរឆ្នាំ មុនពេលបន្តទៅកម្មវិធីឯកទេស',
              },
              {
                en: 'Build essential knowledge and skills tailored to your assigned field',
                kh: 'បង្កើតចំណេះដឹង និងជំនាញសំខាន់ៗឲ្យសមស្របនឹងវិស័យដែលអ្នកត្រូវបានចាត់ចែង',
              },
              {
                en: 'Those foundation years are carefully designed to prepare you for success in your chosen discipline, providing both broad academic skills and field-specific preparation.',
                kh: 'ឆ្នាំមូលដ្ឋានទាំងនោះត្រូវបានរចនាឡើងយ៉ាងប្រុងប្រយ័ត្ន ដើម្បីរៀបចំអ្នកឱ្យជោគជ័យក្នុងវិស័យដែលអ្នកបានជ្រើសរើស ដោយផ្តល់ទាំងជំនាញសិក្សាទូលំទូលាយ និងការរៀបចំឯកទេសតាមវិស័យផ្ទាល់។',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'Department Change Opportunity',
          kh: 'ឱកាសផ្លាស់ប្តូរនាយកដ្ឋាន',
        },
        description: {
          en: 'We understand that academic interests can evolve during your foundation years. For students who wish to reconsider their department placement, our university provides one exceptional opportunity to request a change, though this option requires outstanding academic achievement.',
          kh: 'យើងយល់ថា ចំណាប់អារម្មណ៍វិជ្ជាសាស្ត្រអាចផ្លាស់ប្តូរនៅក្នុងអំឡុងពេលឆ្នាំមូលដ្ឋាន។ សម្រាប់និស្សិតដែលចង់ពិចារណាឡើងវិញអំពីការចាត់ចែងនាយកដ្ឋាន សាកលវិទ្យាល័យរបស់យើងផ្តល់ឱកាសពិសេសមួយសម្រាប់ស្នើសុំផ្លាស់ប្តូរ ប៉ុន្តែជម្រើសនេះទាមទារឲ្យមានលទ្ធផលសិក្សាល្អឥតខ្ចោះ។',
        },
        points: [
          {
            title: {
              en: 'Eligibility and Requirements:',
              kh: 'លក្ខខណ្ឌ និងតម្រូវការ:',
            },
            description: {
              en: 'The department change process is available exclusively at the end of Year 2, with strict eligibility criteria designed to ensure only the most academically prepared students can successfully transition between departments.',
              kh: 'ដំណើរការផ្លាស់ប្តូរនាយកដ្ឋាន មានអាចប្រើបានតែបញ្ចប់ឆ្នាំទី២ប៉ុណ្ណោះ ហើយមានលក្ខខណ្ឌតឹងរ៉ឹង ដើម្បីធានាថា មានតែនិស្សិតដែលមានការរៀបចំសិក្សាដ៏ល្អឥតខ្ចោះប៉ុណ្ណោះ អាចផ្លាស់ប្តូរពីនាយកដ្ឋានមួយទៅនាយកដ្ឋានមួយបានដោយជោគជ័យ។',
            },
            list_heading: {
              en: 'Requirements for Department Change:',
              kh: 'លក្ខខណ្ឌសម្រាប់ការផ្លាស់ប្តូរនាយកដ្ឋាន:',
            },
            list: [
              {
                en: 'Must complete all Year 1 and Year 2 foundation requirements',
                kh: 'ត្រូវបញ្ចប់លក្ខខណ្ឌមូលដ្ឋានទាំងអស់នៃឆ្នាំទី១ និងឆ្នាំទី២',
              },
              {
                en: 'Must rank within the top 5% of students in your current department',
                kh: 'ត្រូវមានចំណាត់ថ្នាក់ក្នុងចំណោម ៥% កំពូលនៃនិស្សិតក្នុងនាយកដ្ឋានបច្ចុប្បន្នរបស់អ្នក',
              },
              {
                en: 'Request must be submitted at the end of Year 2 only',
                kh: 'សំណើត្រូវតែដាក់នៅចុងឆ្នាំទី២ប៉ុណ្ណោះ',
              },
              {
                en: 'Academic performance will be thoroughly evaluated',
                kh: 'លទ្ធផល/សមតុល្យភាពសិក្សា នឹងត្រូវបានវាយតម្លៃយ៉ាងលម្អិត និងទូលំទូលាយ',
              },
            ],
          },
          {
            title: {
              en: 'The Change Process',
              kh: 'ដំណើរការផ្លាស់ប្តូរ',
            },
            description: [
              {
                en: 'Students meeting these demanding eligibility criteria may submit a formal department change request through official university administrative channels. However, meeting the academic requirements does not guarantee approval.',
                kh: 'និស្សិតដែលបំពេញបានលក្ខខណ្ឌតឹងរ៉ឹងទាំងនេះ អាចដាក់សំណើផ្លាស់ប្តូរនាយកដ្ឋានតាមរយៈឆានែលរដ្ឋបាលផ្លូវការរបស់សាកលវិទ្យាល័យ។ ទោះជាយ៉ាងណា ការបំពេញលក្ខខណ្ឌសិក្សា មិនធានាថានឹងទទួលបានការអនុម័តទេ។',
              },
              {
                en: "The evaluation process considers multiple factors including your academic record, availability of spaces in your desired department, and the receiving department's capacity to accommodate additional students. This process is highly selective, and students should view this as an exceptional opportunity rather than a standard pathway. The university's decision on department change requests is final and based on both academic merit and practical considerations.",
                kh: 'ដំណើរការវាយតម្លៃពិចារណាលើកត្តាជាច្រើន រួមទាំងប្រវត្តិសិក្សារបស់អ្នក ការរួមមានកន្លែងទំនេរនៅក្នុងនាយកដ្ឋានដែលអ្នកចង់ និងសមត្ថភាពរបស់នាយកដ្ឋានទទួលសិស្សបន្ថែម។ ដំណើរការនេះមានការជ្រើសរើសយ៉ាងតឹងរ៉ឹង ហើយនិស្សិតគួរមើលវាជាឱកាសពិសេស មិនមែនជាផ្លូវធម្មតាទេ។ ការសម្រេចចិត្តរបស់សាកលវិទ្យាល័យលើសំណើផ្លាស់ប្តូរនាយកដ្ឋាន គឺចុងក្រោយ ហើយផ្អែកទាំងលើសមត្ថភាពសិក្សា និងការពិចារណាផ្នែកអនុវត្ត។',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'Essential Consideration for Applicants',
          kh: 'ការពិចារណាសំខាន់សម្រាប់អ្នកដាក់ពាក្យ',
        },
        points: [
          {
            title: {
              en: 'Understanding Our System',
              kh: 'ការយល់ដឹងអំពីប្រព័ន្ធរបស់យើង',
            },
            description: {
              en: 'Our admission approach emphasizes fresh starts and equal opportunity. Every student begins the same foundational journey, ensuring all graduates share common knowledge and institutional standards that reflect our academic values.',
              kh: 'វិធីសាស្ត្រទទួលសិស្សរបស់យើងផ្តោតលើការចាប់ផ្តើមថ្មី និងឱកាសស្មើគ្នា។ និស្សិតទាំងអស់ចាប់ផ្តើមការសិក្សាមូលដ្ឋានដូចគ្នា ដើម្បីធានាថាបរិញ្ញាបត្រទាំងអស់មានចំណេះដឹងសាមញ្ញ និងស្តង់ដារសាកលវិទ្យាល័យដូចគ្នា ដែលបង្ហាញពីតម្លៃអប់រំរបស់យើង។',
            },
            list_heading: {
              en: 'Important Reminders:',
              kh: 'ការចងចាំសំខាន់ៗ៖',
            },
            list: [
              {
                en: 'No transfer credits accepted from other universities',
                kh: 'មិនទទួលយកឥណទានផ្ទេរពីសាកលវិទ្យាល័យផ្សេងទៀតទេ',
              },
              {
                en: 'All students start from Year 1 regardless of previous education',
                kh: 'និស្សិតទាំងអស់ចាប់ផ្តើមពីឆ្នាំទី១ មិនគិតពីការសិក្សាមុន',
              },
              {
                en: 'Entrance examination is your single pathway to admission',
                kh: 'ការប្រឡងចូលជាវិធីតែមួយដើម្បីចូលរៀន',
              },
              {
                en: 'Department rankings require careful research and consideration',
                kh: 'ការរៀបចំចំណាត់ថ្នាក់នាយកដ្ឋានត្រូវការស្រាវជ្រាវ និងពិចារណាឲ្យបានម៉ត់ចត់',
              },
            ],
          },
          {
            title: {
              en: 'Making Informed Decisions',
              kh: 'ការទទួលសេចក្ដីសម្រេចចិត្តដោយមានព័ត៌មានគ្រប់គ្រាន់',
            },
            description: [
              {
                en: 'When completing your department rankings, invest significant time in research and consultation. This decision will shape your entire university experience and future career trajectory.',
                kh: 'ពេលបញ្ចូលចំណាត់ថ្នាក់នាយកដ្ឋាន សូមចំណាយពេលស្រាវជ្រាវ និងពិគ្រោះយោបល់ឲ្យបានច្រើន។ សេចក្ដីសម្រេចនេះនឹងកំណត់បទពិសោធន៍សាកលវិទ្យាល័យទាំងមូល និងផ្លូវអាជីពនាពេលអនាគតរបស់អ្នក។',
              },
              {
                en: 'We strongly encourage you to speak with current students, faculty members, and career advisors to understand the realities of different programs. Consider factors such as curriculum content, career prospects, department culture, and your genuine interests rather than external pressures or perceived prestige.',
                kh: 'យើងផ្តល់អនុសាសន៍ឱ្យអ្នកសន្ទនាជាមួយនិស្សិតបច្ចុប្បន្ន សាស្រ្តាចារ្យ និងអ្នកប្រឹក្សាអាជីព ដើម្បីយល់ពីភាពពិតនៃកម្មវិធីនីមួយៗ។ សូមពិចារណាអំពីមាតិកា វិញ្ញាសា អនាគតអាជីព វប្បធម៌នាយកដ្ឋាន និងចំណង់ចំណូលចិត្តពិតប្រាកដ ជំនួសឲ្យសម្ពាធខាងក្រៅ ឬកិត្យានុភាព។',
              },
            ],
          },
          {
            title: {
              en: 'Academic Excellence Strategy',
              kh: 'យុទ្ធសាស្ត្រសម្រេចលទ្ធផលសិក្សាឆ្នើម',
            },
            description: [
              {
                en: 'Maintaining exceptional academic performance throughout your foundation years serves multiple purposes beyond personal learning and growth. Strong grades provide insurance should you wish to pursue a department change and demonstrate your commitment to academic success.',
                kh: 'ការរក្សាលទ្ធផលសិក្សាឆ្នើមក្នុងអំឡុងឆ្នាំមូលដ្ឋានផ្តល់អត្ថប្រយោជន៍ច្រើនជាងការរៀនផ្ទាល់ខ្លួន។ លទ្ធផលល្អអាចជាប្រយោជន៍ប្រសិនបើអ្នកចង់ផ្លាស់ប្តូរនាយកដ្ឋាន ហើយបង្ហាញពីការប្តេជ្ញាចិត្តរបស់អ្នកចំពោះភាពជោគជ័យក្នុងសិក្សា។',
              },
              {
                en: 'The top 5% threshold for department changes is intentionally demanding, requiring consistent dedication, effective study strategies, and genuine engagement with your coursework. Students should approach their foundation years with both immediate learning goals and longer-term strategic thinking.',
                kh: 'កម្រិតកំពូល ៥% សម្រាប់ការផ្លាស់ប្តូរនាយកដ្ឋាន ត្រូវបានកំណត់ឱ្យតឹងរ៉ឹង ដោយតម្រូវឱ្យមានការប្តេជ្ញាបន្តបន្ទាប់ យុទ្ធសាស្ត្រសិក្សាដ៏មានប្រសិទ្ធភាព និងការចូលរួមពិតប្រាកដជាមួយមុខវិជ្ជា។ និស្សិតគួរមើលឆ្នាំមូលដ្ឋានជាឱកាសសម្រាប់គោលដៅការរៀនភ្លាមៗ និងគំនិតយុទ្ធសាស្ត្ររយៈពេលវែង។',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'Ready to Begin Your Journey?',
          kh: 'ត្រៀមខ្លួនចាប់ផ្តើមដំណើររបស់អ្នកហើយឬនៅ?',
        },
        points: [
          {
            description: {
              en: 'Understanding Our System: Our admission approach emphasizes fresh starts and equal opportunity. Every student begins the same foundational journey, ensuring all graduates share common knowledge and institutional standards that reflect our academic values.',
              kh: 'ការយល់ដឹងអំពីប្រព័ន្ធរបស់យើង៖ វិធីទទួលសិស្សផ្តោតលើការចាប់ផ្តើមថ្មី និងឱកាសស្មើគ្នា។ និស្សិតទាំងអស់ចាប់ផ្តើមការសិក្សាមូលដ្ឋានដូចគ្នា ដើម្បីធានាថាបរិញ្ញាបត្រទាំងអស់មានចំណេះដឹងសាមញ្ញ និងស្តង់ដារសាកលវិទ្យាល័យដូចគ្នា។',
            },
          },
          {
            description: {
              en: 'Important Reminders:',
              kh: 'ការចងចាំសំខាន់ៗ៖',
            },
          },
          {
            description: {
              en: '- No transfer credits accepted from other universities',
              kh: '- មិនទទួលយកឥណទានផ្ទេរពីសាកលវិទ្យាល័យផ្សេងទៀត',
            },
          },
          {
            description: {
              en: '- All students start from Year 1 regardless of previous education',
              kh: '- និស្សិតទាំងអស់ចាប់ផ្តើមពីឆ្នាំទី១ មិនគិតពីការសិក្សាមុន',
            },
          },
          {
            description: {
              en: '- Entrance examination is your single pathway to admission',
              kh: '- ការប្រឡងចូលជាវិធីតែមួយដើម្បីចូលរៀន',
            },
          },
          {
            description: {
              en: '- Department rankings require careful research and consideration',
              kh: '- ការរៀបចំចំណាត់ថ្នាក់នាយកដ្ឋានត្រូវការស្រាវជ្រាវ និងពិចារណាឲ្យបានម៉ត់ចត់',
            },
          },
          {
            description: {
              en: 'Making Informed Decisions: When completing your department rankings, invest significant time in research and consultation. This decision will shape your entire university experience and future career trajectory. We strongly encourage you to speak with current students, faculty members, and career advisors to understand the realities of different programs. Consider factors such as curriculum content, career prospects, department culture, and faculty expertise.',
              kh: 'ការទទួលសេចក្ដីសម្រេចចិត្តដោយមានព័ត៌មានគ្រប់គ្រាន់៖ ពេលបញ្ចូលចំណាត់ថ្នាក់នាយកដ្ឋាន សូមចំណាយពេលស្រាវជ្រាវ និងពិគ្រោះយោបល់ឲ្យបានច្រើន។ សេចក្ដីសម្រេចនេះនឹងកំណត់បទពិសោធន៍សាកលវិទ្យាល័យទាំងមូល និងផ្លូវអាជីពនាពេលអនាគត។ យើងផ្តល់អនុសាសន៍ឱ្យអ្នកសន្ទនាជាមួយនិស្សិតបច្ចុប្បន្ន សាស្រ្តាចារ្យ និងអ្នកប្រឹក្សាអាជីព ដើម្បីយល់ពីភាពពិតនៃកម្មវិធីនីមួយៗ។ សូមពិចារណាអំពីមាតិកា អនាគតអាជីព វប្បធម៌នាយកដ្ឋាន និងជំនាញរបស់សាស្រ្តាចារ្យ។',
            },
          },
          {
            description: {
              en: 'Academic Excellence Strategy: Maintaining exceptional academic performance throughout your foundation years serves multiple purposes beyond personal learning and growth. Strong academic grades and superior skills will position you to pursue a department change and demonstrate your commitment to academic success. The top 5% threshold for department changes is intentionally demanding, requiring consistent dedication, effective study strategies, and genuine engagement with your coursework. Students should approach their foundation years with both immediate learning goals and long-term strategic thinking.',
              kh: 'យុទ្ធសាស្ត្រសម្រេចលទ្ធផលសិក្សាឆ្នើម៖ ការរក្សាលទ្ធផលសិក្សាឆ្នើមក្នុងអំឡុងឆ្នាំមូលដ្ឋានផ្តល់អត្ថប្រយោជន៍ច្រើនជាងការរៀនផ្ទាល់ខ្លួន។ លទ្ធផលល្អនឹងជួយអ្នកក្នុងការផ្លាស់ប្តូរនាយកដ្ឋាន និងបង្ហាញពីការប្តេជ្ញាចិត្តរបស់អ្នកចំពោះភាពជោគជ័យ។ កម្រិតកំពូល ៥% ត្រូវបានកំណត់ឱ្យតឹងរ៉ឹង តម្រូវឱ្យមានការប្តេជ្ញាបន្តបន្ទាប់ យុទ្ធសាស្ត្រសិក្សាដ៏មានប្រសិទ្ធភាព និងការចូលរួមពិតប្រាកដជាមួយមុខវិជ្ជា។ និស្សិតគួរមើលឆ្នាំមូលដ្ឋានជាឱកាសសម្រាប់គោលដៅការរៀនភ្លាមៗ និងគំនិតយុទ្ធសាស្ត្ររយៈពេលវែង។',
            },
          },
        ],
      },
      {
        title: {
          en: 'Ready to Begin Your Journey?',
          kh: 'ត្រៀមខ្លួនចាប់ផ្តើមដំណើររបស់អ្នកហើយឬនៅ?',
        },
        description: [
          {
            en: 'Your path to joining our department starts with comprehensive preparation for the entrance examination and thoughtful consideration of your academic interests. Take time to explore all available programs, understand the competitive landscape of different departments, and prepare yourself for the commitment that higher education at our institution requires.',
            kh: 'ដំណើរទៅរកនាយកដ្ឋានរបស់យើងចាប់ផ្តើមពីការរៀបចំទូលំទូលាយសម្រាប់ការប្រឡងចូល និងការពិចារណាយ៉ាងម៉ត់ចត់លើចំណាប់អារម្មណ៍សិក្សារបស់អ្នក។ សូមចំណាយពេលសិក្សាពីកម្មវិធីទាំងអស់ យល់អំពីការប្រកួតប្រជែង និងរៀបចំខ្លួនសម្រាប់កាតព្វកិច្ចក្នុងការសិក្សាថ្នាក់អាហារូបករណ៍ខ្ពស់នៅសាកលវិទ្យាល័យ។',
          },
          {
            en: "We encourage prospective students to view the application process not just as a series of requirements to meet, but as the beginning of an educational journey that will shape your future career and personal growth. Our faculty and staff are committed to supporting every student's success from the moment they enter our doors.",
            kh: 'យើងលើកទឹកចិត្តឱ្យអ្នកដាក់ពាក្យមើលដំណើរការដាក់ពាក្យជាមធ្យោបាយចាប់ផ្តើមដំណើរអប់រំដែលនឹងបង្កើតអនាគតអាជីព និងការលូតលាស់ផ្ទាល់ខ្លួនរបស់អ្នក។ សាស្រ្តាចារ្យ និងបុគ្គលិករបស់យើងតែងតែប្តេជ្ញាឱ្យការគាំទ្រដល់ជោគជ័យរបស់និស្សិតគ្រប់រូប ចាប់ពីពេលពួកគេជំហានដំបូងចូលមក។',
          },
          {
            en: 'We look forward to welcoming you to our academic community and supporting your educational aspirations throughout your time with us.',
            kh: 'យើងរង់ចាំការស្វាគមន៍អ្នកចូលរួមសហគមន៍អប់រំរបស់យើង និងគាំទ្រចំពោះបំណងអប់រំរបស់អ្នកពេញមួយរយៈពេលសិក្សាជាមួយយើង។',
          },
        ],
      },
    ],
  },
  "Bachelor's Degree": {
    programLevel: {
      en: "Bachelor's Degree",
      kh: 'បរិញ្ញាបត្រ',
    },
    sections: [
      {
        title: {
          en: 'Admission Requirements',
          kh: 'លក្ខខណ្ឌចូលរៀន',
        },
        points: [
          {
            description: {
              en: 'All prospective students must successfully complete online and pass our university entrance examination to gain admission to the first year of any bachelor’s degree program. Our university operates with a unique admission system where we do not accept transfer students from other institutions, meaning all students must begin their academic journey from Year 1, regardless of their previous educational background.',
              kh: 'និស្សិតទាំងអស់ត្រូវបញ្ចប់ការដាក់ពាក្យតាមអនឡាញ និងជាប់ការប្រឡងចូលសាកលវិទ្យាល័យ ដើម្បីទទួលបានសិទ្ធិចូលរៀននៅឆ្នាំទី១នៃកម្មវិធីបរិញ្ញាបត្រណាមួយ។ សាកលវិទ្យាល័យរបស់យើងប្រើប្រព័ន្ធទទួលសិស្សតែមួយគត់ ដែលមិនទទួលយកនិស្សិតផ្ទេរពីសាកលវិទ្យាល័យផ្សេងទេ។ នេះមានន័យថានិស្សិតទាំងអស់ត្រូវចាប់ផ្តើមដំណើរការសិក្សាពីឆ្នាំទី១ មិនគិតពីមូលដ្ឋានសិក្សាមុន។',
            },
          },
        ],
      },
      {
        title: {
          en: 'The Application Journey',
          kh: 'ដំណើរការដាក់ពាក្យ',
        },
        points: [
          {
            title: {
              en: 'Entrance Examination',
              kh: 'ការប្រឡងចូលសាកលវិទ្យាល័យ',
            },
            description: {
              en: 'Your path to joining our department begins with the university entrance examination, which serves as the sole gateway to our programs. This comprehensive assessment is mandatory for all applicants, and your performance will determine both your admission status and your likelihood of being placed in your preferred academic department.',
              kh: 'ដំណើរចូលរួមនាយកដ្ឋានរបស់យើងចាប់ផ្តើមពីការប្រឡងចូលសាកលវិទ្យាល័យ ដែលជាវិធីតែមួយដើម្បីចូលកម្មវិធីសិក្សា។ ការវាយតម្លៃទូលំទូលាយនេះត្រូវបានកំណត់ជាកាតព្វកិច្ចសម្រាប់អ្នកដាក់ពាក្យទាំងអស់ ហើយលទ្ធផលរបស់អ្នកនឹងកំណត់ទាំងស្ថានភាពចូលរៀន និងឱកាសក្នុងការទទួលបាននាយកដ្ឋានដែលអ្នកចង់បាន។',
            },
          },
          {
            title: {
              en: 'Foundation Program and Department Selection',
              kh: 'កម្មវិធីមូលដ្ឋាន និងការជ្រើសរើសនាយកដ្ឋាន',
            },
            description: {
              en: 'Upon successful completion of the entrance examination, you’ll enter our comprehensive two-year Foundation program starting with Year 1. During your first semester, you’ll engage with core foundational courses while participating in the crucial department selection process.',
              kh: 'បន្ទាប់ពីជាប់ការប្រឡងចូល អ្នកនឹងចូលកម្មវិធីមូលដ្ឋានរយៈពេល២ឆ្នាំចាប់ពីឆ្នាំទី១។ ក្នុងឆមាសទី១ អ្នកនឹងរៀនមុខវិជ្ជាមូលដ្ឋានសំខាន់ៗ ខណៈពេលចូលរួមក្នុងដំណើរការជ្រើសរើសនាយកដ្ឋាន។',
            },
            list_heading: {
              en: 'The Selection Process:',
              kh: 'ដំណើរការជ្រើសរើស៖',
            },
            list: [
              {
                en: "During Semester 1 of Year 1, you'll receive notification to access your student portal",
                kh: 'ក្នុងឆមាសទី១នៃឆ្នាំទី១ អ្នកនឹងទទួលសេចក្តីជូនដំណឹងឱ្យចូលទៅកាន់ប្រព័ន្ធសិស្ស',
              },
              {
                en: 'You must rank ALL available majors at the university in order of preference',
                kh: 'អ្នកត្រូវតម្រៀបជូនចំណាត់ថ្នាក់មុខជំនាញទាំងអស់របស់សាកលវិទ្យាល័យតាមលំដាប់ចំណូលចិត្ត',
              },
              {
                en: 'Ranking 1 represents your most desired program, continuing sequentially through all options',
                kh: 'ចំណាត់ថ្នាក់លេខ១ សំដៅដល់កម្មវិធីដែលអ្នកចង់បានបំផុត បន្តតាមលំដាប់ទៅតាមជម្រើសផ្សេងទៀត',
              },
              {
                en: 'Submit your completed rankings through the student portal by the specified deadline',
                kh: 'ដាក់ស្នើចំណាត់ថ្នាក់រួចរាល់របស់អ្នកតាមប្រព័ន្ធសិស្សមុនកាលកំណត់',
              },
            ],
            conclusion: {
              en: 'This ranking system ensures every student receives a department placement, but your final assignment considers not only your entrance examination performance. Students with higher rank scores receive priority in securing places in their top-ranked departments. If your selected department is highly competitive and your entrance score doesn’t meet the threshold, the system will automatically consider your subsequent choice until a placement is made.',
              kh: 'ប្រព័ន្ធចំណាត់ថ្នាក់ទាំងនេះធានាថានិស្សិតនីមួយៗទទួលបានកន្លែងក្នុងនាយកដ្ឋាន ប៉ុន្តែការចាត់តាំងចុងក្រោយគឺអាស្រ័យលើលទ្ធផលប្រឡងចូល។ និស្សិតដែលមានពិន្ទុខ្ពស់ទទួលបានសិទ្ធិអាទិភាពក្នុងការទទួលបាននាយកដ្ឋានដែលតម្រៀបឱ្យមានចំណូលចិត្តខ្ពស់។ ប្រសិនបើនាយកដ្ឋានដែលអ្នកជ្រើសរើសមានការប្រកួតប្រជែងខ្ពស់ ហើយពិន្ទុអ្នកមិនឈានដល់កម្រិតទេ ប្រព័ន្ធនឹងពិនិត្យជម្រើសបន្ទាប់របស់អ្នកដោយស្វ័យប្រវត្តិរហូតដល់មានកន្លែង។',
            },
          },
          {
            title: {
              en: 'Department Assignment and Foundation Completion',
              kh: 'ការចាត់តាំងនាយកដ្ឋាន និងបញ្ចប់កម្មវិធីមូលដ្ឋាន',
            },
            description: {
              en: 'The university announces department assignments at the conclusion of Semester 1, Year 1, marking a significant milestone in your academic career. Once assigned to your department, you’ll continue with specialized foundational coursework throughout the remainder of Year 1 and all of Year 2.',
              kh: 'សាកលវិទ្យាល័យនឹងប្រកាសការចាត់តាំងនាយកដ្ឋាននៅចុងឆមាសទី១ ឆ្នាំទី១ ដែលជាចំណុចសំខាន់មួយនៃអាជីពសិក្សារបស់អ្នក។ បន្ទាប់ពីបានចាត់តាំង អ្នកនឹងបន្តការសិក្សាមូលដ្ឋានជំនាញពិសេសចាប់ពីចុងឆ្នាំទី១រហូតដល់ចប់ឆ្នាំទី២។',
            },
            list_heading: {
              en: 'What Happens Next:',
              kh: 'អ្វីកើតឡើងបន្ទាប់៖',
            },
            list: [
              {
                en: 'Receive your department assignment after Semester 1 ends',
                kh: 'ទទួលបានការចាត់តាំងនាយកដ្ឋានបន្ទាប់ពីចប់ឆមាសទី១',
              },
              {
                en: 'Begin department-specific coursework while completing foundation requirements',
                kh: 'ចាប់ផ្តើមរៀនមុខវិជ្ជាជំនាញនាយកដ្ឋាន ខណៈពេលបន្តបំពេញលក្ខខណ្ឌមូលដ្ឋាន',
              },
              {
                en: 'Complete full two years of foundation study before advancing to specialized programs',
                kh: 'បញ្ចប់ការសិក្សាមូលដ្ឋានរយៈពេល២ឆ្នាំពេញ មុនពេលឈានទៅកម្មវិធីជំនាញ',
              },
              {
                en: 'Build essential knowledge and skills tailored to your assigned field',
                kh: 'ស្ថាបនាចំណេះដឹង និងជំនាញសំខាន់ៗឲ្យសមនឹងវាលសិក្សារបស់អ្នក',
              },
              {
                en: 'Those foundation years are carefully designed to prepare you for success in your chosen discipline, providing both broad academic skills and field-specific preparation.',
                kh: 'ឆ្នាំមូលដ្ឋានទាំងនោះត្រូវបានរចនាឡើងយ៉ាងម៉ត់ចត់ដើម្បីរៀបចំអ្នកឱ្យទទួលបានជោគជ័យក្នុងវិស័យដែលបានជ្រើសរើស ផ្តល់ទាំងជំនាញអប់រំទូលំទូលាយ និងការរៀបចំជាក់លាក់តាមវិស័យ។',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'Department Change Opportunity',
          kh: 'ឱកាសផ្លាស់ប្តូរនាយកដ្ឋាន',
        },
        description: {
          en: 'We understand that academic interests can evolve during your foundation years. For students who wish to reconsider their department placement, our university provides one exceptional opportunity to request a change, though this option requires outstanding academic achievement.',
          kh: 'យើងយល់ថាចំណាប់អារម្មណ៍សិក្សាអាចផ្លាស់ប្តូរនៅក្នុងអំឡុងឆ្នាំមូលដ្ឋាន។ សម្រាប់និស្សិតដែលចង់ពិចារណាឡើងវិញពីការចាត់តាំងនាយកដ្ឋាន សាកលវិទ្យាល័យផ្តល់ឱកាសពិសេសមួយក្នុងការស្នើសុំផ្លាស់ប្តូរ ប៉ុន្តែត្រូវការលទ្ធផលសិក្សាឆ្នើម។',
        },
        points: [
          {
            title: {
              en: 'Eligibility and Requirements:',
              kh: 'លក្ខខណ្ឌ និងតម្រូវការ៖',
            },
            description: {
              en: 'The department change process is available exclusively at the end of Year 2, with strict eligibility criteria designed to ensure only the most academically prepared students can successfully transition between departments.',
              kh: 'ដំណើរការផ្លាស់ប្តូរនាយកដ្ឋានមានស្រាប់តែចុងឆ្នាំទី២ ប៉ុណ្ណោះ។ លក្ខខណ្ឌតឹងរ៉ឹងត្រូវបានកំណត់ដើម្បីធានាថាមានតែនិស្សិតដែលរៀបចំខ្លួនបានល្អបំផុតទេដែលអាចផ្លាស់ប្តូរនាយកដ្ឋានបានដោយជោគជ័យ។',
            },
            list_heading: {
              en: 'Requirements for Department Change:',
              kh: 'តម្រូវការសម្រាប់ការផ្លាស់ប្តូរនាយកដ្ឋាន៖',
            },
            list: [
              {
                en: 'Must complete all Year 1 and Year 2 foundation requirements',
                kh: 'ត្រូវបំពេញលក្ខខណ្ឌមូលដ្ឋានរបស់ឆ្នាំទី១ និងទី២ទាំងអស់',
              },
              {
                en: 'Must rank within the top 5% of students in your current department',
                kh: 'ត្រូវស្ថិតក្នុងចំណាត់ថ្នាក់កំពូល៥%នៃនិស្សិតក្នុងនាយកដ្ឋានបច្ចុប្បន្ន',
              },
              {
                en: 'Request must be submitted at the end of Year 2 only',
                kh: 'ការស្នើសុំត្រូវដាក់នៅចុងឆ្នាំទី២ប៉ុណ្ណោះ',
              },
              {
                en: 'Academic performance will be thoroughly evaluated',
                kh: 'លទ្ធផលសិក្សាត្រូវបានវាយតម្លៃយ៉ាងម៉ត់ចត់',
              },
            ],
          },
          {
            title: {
              en: 'The Change Process',
              kh: 'ដំណើរការផ្លាស់ប្តូរ',
            },
            description: [
              {
                en: 'Students meeting these demanding eligibility criteria may submit a formal department change request through official university administrative channels. However, meeting the academic requirements does not guarantee approval.',
                kh: 'និស្សិតដែលបំពេញលក្ខខណ្ឌតឹងរ៉ឹងទាំងនេះអាចដាក់សំណើផ្លាស់ប្តូរនាយកដ្ឋានតាមរយៈប្រព័ន្ធរដ្ឋបាលផ្លូវការរបស់សាកលវិទ្យាល័យ។ ទោះយ៉ាងណាក៏ដោយ ការបំពេញលក្ខខណ្ឌសិក្សាមិនធានាថានឹងទទួលបានការអនុញ្ញាតទេ។',
              },
              {
                en: "The evaluation process considers multiple factors including your academic record, availability of spaces in your desired department, and the receiving department's capacity to accommodate additional students. This process is highly selective, and students should view this as an exceptional opportunity rather than a standard pathway. The university's decision on department change requests is final and based on both academic merit and practical considerations.",
                kh: 'ដំណើរការវាយតម្លៃពិចារណាកត្តាច្រើន រួមទាំងប្រវត្តិសិក្សារបស់អ្នក កន្លែងទំនេរនៅនាយកដ្ឋានដែលអ្នកចង់ចូល និងសមត្ថភាពទទួលនិស្សិតបន្ថែមរបស់នាយកដ្ឋាននោះ។ ដំណើរការនេះមានការជ្រើសរើសខ្ពស់ ហើយនិស្សិតគួរមើលវាដូចជាឱកាសពិសេសមួយ មិនមែនជាផ្លូវធម្មតាទេ។ ការសម្រេចចិត្តរបស់សាកលវិទ្យាល័យលើសំណើផ្លាស់ប្តូរនាយកដ្ឋានគឺចុងក្រោយ និងផ្អែកលើទាំងសមត្ថភាពសិក្សា និងកត្តាផ្នែកអនុវត្តន៍។',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'Essential Consideration for Applicants',
          kh: 'ការពិចារណាសំខាន់សម្រាប់អ្នកដាក់ពាក្យ',
        },
        points: [
          {
            title: {
              en: 'Understanding Our System',
              kh: 'ការយល់ដឹងអំពីប្រព័ន្ធរបស់យើង',
            },
            description: {
              en: 'Our admission approach emphasizes fresh starts and equal opportunity. Every student begins the same foundational journey, ensuring all graduates share common knowledge and institutional standards that reflect our academic values.',
              kh: 'វិធីសាស្ត្រទទួលសិស្សរបស់យើងផ្តោតលើការចាប់ផ្តើមថ្មី និងឱកាសស្មើគ្នា។ និស្សិតទាំងអស់ចាប់ផ្តើមដំណើរសិក្សាមូលដ្ឋានដូចគ្នា ដើម្បីធានាថាបញ្ចប់ការសិក្សាដែលមានចំណេះដឹង និងស្តង់ដារដូចគ្នា ដែលបង្ហាញពីតម្លៃសាកលវិទ្យាល័យ។',
            },
            list_heading: {
              en: 'Important Reminders:',
              kh: 'ការចងចាំសំខាន់ៗ៖',
            },
            list: [
              {
                en: 'No transfer credits accepted from other universities',
                kh: 'មិនទទួលយកការផ្ទេរឯកត្តាចំណាត់ថ្នាក់ពីសាកលវិទ្យាល័យផ្សេងទេ',
              },
              {
                en: 'All students start from Year 1 regardless of previous education',
                kh: 'និស្សិតទាំងអស់ចាប់ផ្តើមពីឆ្នាំទី១ មិនគិតពីប្រវត្តិសិក្សាមុនទេ',
              },
              {
                en: 'Entrance examination is your single pathway to admission',
                kh: 'ការប្រឡងចូលគឺជាមធ្យោបាយតែមួយសម្រាប់ចូលរៀន',
              },
              {
                en: 'Department rankings require careful research and consideration',
                kh: 'ការរៀបចំចំណាត់ថ្នាក់នាយកដ្ឋានត្រូវការការស្រាវជ្រាវ និងការពិចារណាដោយយកចិត្តទុកដាក់',
              },
            ],
          },
          {
            title: {
              en: 'Making Informed Decisions',
              kh: 'ការទទួលសេចក្ដីសម្រេចដ៏មានការយល់ដឹង',
            },
            description: [
              {
                en: 'When completing your department rankings, invest significant time in research and consultation. This decision will shape your entire university experience and future career trajectory.',
                kh: 'នៅពេលបំពេញចំណាត់ថ្នាក់នាយកដ្ឋាន សូមចំណាយពេលស្រាវជ្រាវ និងពិភាក្សាយ៉ាងច្រើន។ ការសម្រេចចិត្តនេះនឹងកំណត់បទពិសោធន៍សាកលវិទ្យាល័យ និងអាជីពរបស់អ្នក។',
              },
              {
                en: 'We strongly encourage you to speak with current students, faculty members, and career advisors to understand the realities of different programs. Consider factors such as curriculum content, career prospects, department culture, and your genuine interests rather than external pressures or perceived prestige.',
                kh: 'យើងលើកទឹកចិត្តឲ្យអ្នកនិយាយជាមួយនិស្សិតបច្ចុប្បន្ន សាស្រ្តាចារ្យ និងអ្នកផ្តល់ដំបូន្មានអាជីព ដើម្បីយល់អំពីភាពពិតនៃកម្មវិធីផ្សេងៗ។ សូមពិចារណាអំពីមាតិកាអនុគមន៍ សក្តានុពលអាជីព វប្បធម៌នាយកដ្ឋាន និងចំណាប់អារម្មណ៍ពិតរបស់អ្នក ជាជាងការត្រូវបានសម្ពាធពីខាងក្រៅ ឬភាពល្បីល្បាញ។',
              },
            ],
          },
          {
            title: {
              en: 'Academic Excellence Strategy',
              kh: 'យុទ្ធសាស្ត្រសិទ្ធិប្រសិទ្ធភាពសិក្សា',
            },
            description: [
              {
                en: 'Maintaining exceptional academic performance throughout your foundation years serves multiple purposes beyond personal learning and growth. Strong grades provide insurance should you wish to pursue a department change and demonstrate your commitment to academic success.',
                kh: 'ការរក្សាប្រសិទ្ធភាពសិក្សាខ្ពស់ក្នុងអំឡុងឆ្នាំមូលដ្ឋាន មានអត្ថប្រយោជន៍ច្រើនជាងការសិក្សាផ្ទាល់ខ្លួន។ ពិន្ទុខ្ពស់អាចធ្វើជាធានា ប្រសិនបើអ្នកចង់ផ្លាស់ប្តូរនាយកដ្ឋាន ហើយបង្ហាញពីការប្តេជ្ញាចិត្តនឹងភាពជោគជ័យក្នុងសិក្សា។',
              },
              {
                en: 'The top 5% threshold for department changes is intentionally demanding, requiring consistent dedication, effective study strategies, and genuine engagement with your coursework. Students should approach their foundation years with both immediate learning goals and longer-term strategic thinking.',
                kh: 'កម្រិត ៥% លើគឺមានបំណងដើម្បីធ្វើឱ្យមានការតស៊ូ តម្រូវឱ្យមានការប្តេជ្ញាចិត្ត ស្ត្រាតេហ្គីសិក្សាដែលមានប្រសិទ្ធភាព និងការចូលរួមយ៉ាងពិតប្រាកដ។ និស្សិតគួរចូលរួមឆ្នាំមូលដ្ឋានដោយមានគោលបំណងសិក្សាទាំងអស់ និងគោលនយោបាយរយៈពេលវែង។',
              },
            ],
          },
        ],
      },
      {
        title: {
          en: 'Ready to Begin Your Journey?',
          kh: 'តើអ្នករួចរាល់សម្រាប់ចាប់ផ្តើមដំណើររបស់អ្នកហើយឬនៅ?',
        },
        points: [
          {
            description: {
              en: 'Understanding Our System: Our admission approach emphasizes fresh starts and equal opportunity. Every student begins the same foundational journey, ensuring all graduates share common knowledge and institutional standards that reflect our academic values.',
              kh: 'ការយល់ដឹងអំពីប្រព័ន្ធរបស់យើង៖ វិធីសាស្ត្រទទួលចូលសិក្សារបស់យើងផ្តោតលើការចាប់ផ្តើមថ្មី និងឱកាសស្មើគ្នា។ និស្សិតទាំងអស់ចាប់ផ្តើមការសិក្សាមូលដ្ឋានដូចគ្នា ដើម្បីធានាថានិស្សិតបញ្ចប់សិក្សាមានចំណេះដឹងរួម និងស្តង់ដារសាកលវិទ្យាល័យតែមួយដែលបង្ហាញពីតម្លៃសិក្សារបស់យើង។',
            },
          },
          {
            description: {
              en: 'Important Reminders:',
              kh: 'ការចងចាំសំខាន់ៗ៖',
            },
          },
          {
            description: {
              en: '- No transfer credits accepted from other universities',
              kh: '- មិនទទួលយកឥណទានផ្ទេរពីសាកលវិទ្យាល័យផ្សេងទៀតទេ',
            },
          },
          {
            description: {
              en: '- All students start from Year 1 regardless of previous education',
              kh: '- និស្សិតទាំងអស់ចាប់ផ្តើមពីឆ្នាំទី១ ដោយមិនគិតពីការសិក្សាមុននោះទេ',
            },
          },
          {
            description: {
              en: '- Entrance examination is your single pathway to admission',
              kh: '- សម្ភាសន៍ប្រឡងចូលគឺជាមធ្យោបាយតែមួយដើម្បីចូលរៀន',
            },
          },
          {
            description: {
              en: '- Department rankings require careful research and consideration',
              kh: '- ចំណាត់ថ្នាក់នាយកដ្ឋានត្រូវការការស្រាវជ្រាវ និងពិចារណាយ៉ាងម៉ត់ចត់',
            },
          },
          {
            description: {
              en: 'Making Informed Decisions: When completing your department rankings, invest significant time in research and consultation. This decision will shape your entire university experience and future career trajectory. We strongly encourage you to speak with current students, faculty members, and career advisors to understand the realities of different programs. Consider factors such as curriculum content, career prospects, department culture, and faculty expertise.',
              kh: 'ការទទួលសម្រេចដោយព័ត៌មានពេញលេញ៖ នៅពេលបញ្ចប់ការចាត់ថ្នាក់នាយកដ្ឋាន សូមចំណាយពេលស្រាវជ្រាវ និងពិគ្រោះយោបល់។ ការសម្រេចចិត្តនេះនឹងប៉ះពាល់ដល់បទពិសោធន៍សាកលវិទ្យាល័យទាំងមូល និងអាជីពរបស់អ្នកនៅពេលអនាគត។ យើងលើកទឹកចិត្តឱ្យអ្នកនិយាយជាមួយនិស្សិតបច្ចុប្បន្ន អ្នកគ្រូអ្នកគង្វាល និងអ្នកផ្តល់អនុសាសន៍អាជីព ដើម្បីយល់ពីភាពពិតនៃកម្មវិធីនានា។ សូមពិចារណាកត្តាដូចជា មាតិកាវគ្គសិក្សា បទពិសោធន៍ការងារ វប្បធម៌នាយកដ្ឋាន និងជំនាញសាស្រ្តាចារ្យ។',
            },
          },
          {
            description: {
              en: 'Academic Excellence Strategy: Maintaining exceptional academic performance throughout your foundation years serves multiple purposes beyond personal learning and growth. Strong academic grades and superior skills will position you to pursue a department change and demonstrate your commitment to academic success. The top 5% threshold for department changes is intentionally demanding, requiring consistent dedication, effective study strategies, and genuine engagement with your coursework. Students should approach their foundation years with both immediate learning goals and long-term strategic thinking.',
              kh: 'យុទ្ធសាស្រ្តសមិទ្ធភាពសិក្សាល្អឆ្នើម៖ ការរក្សាភាពល្អឆ្នើមក្នុងសមិទ្ធភាពសិក្សារបស់អ្នកអំឡុងឆ្នាំមូលដ្ឋានមានប្រយោជន៍ច្រើនជាងការរៀន និងការរីកចម្រើនផ្ទាល់ខ្លួន។ ពិន្ទុល្អ និងជំនាញខ្ពស់នឹងជួយអ្នកអាចផ្លាស់ប្តូរនាយកដ្ឋាន និងបង្ហាញពីការប្តេជ្ញាចិត្តក្នុងជោគជ័យសិក្សារបស់អ្នក។ ចំណាត់ថ្នាក់ ៥% លើសម្រាប់ការផ្លាស់ប្តូរនាយកដ្ឋានគឺមានតម្រូវការតឹងរឹង ដែលទាមទារការខិតខំប្រឹងប្រែងយ៉ាងម៉ឺងម៉ាត់ យុទ្ធសាស្រ្តសិក្សាដែលមានប្រសិទ្ធភាព និងការចូលរួមយ៉ាងពិតប្រាកដក្នុងវគ្គសិក្សារបស់អ្នក។ និស្សិតគួរទទួលការសិក្សាមូលដ្ឋានជាមួយគោលដៅសិក្សាបន្ទាន់ និងគំនិតយុទ្ធសាស្រ្តរយៈពេលវែង។',
            },
          },
        ],
      },
      {
        title: {
          en: 'Ready to Begin Your Journey?',
          kh: 'តើអ្នករួចរាល់សម្រាប់ចាប់ផ្តើមដំណើររបស់អ្នកហើយឬនៅ?',
        },
        description: [
          {
            en: 'Your path to joining our department starts with comprehensive preparation for the entrance examination and thoughtful consideration of your academic interests. Take time to explore all available programs, understand the competitive landscape of different departments, and prepare yourself for the commitment that higher education at our institution requires.',
            kh: 'ផ្លូវរបស់អ្នកក្នុងការចូលរួមនាយកដ្ឋានរបស់យើងចាប់ផ្តើមដោយការរៀបចំយ៉ាងម៉ត់ចត់សម្រាប់ប្រឡងចូល និងការពិចារណាអំពីចំណង់ចំណូលចិត្តសិក្សារបស់អ្នក។ សូមចំណាយពេលសិក្សាអំពីកម្មវិធីទាំងអស់ ពិនិត្យលទ្ធភាពប្រកួតប្រជែងនៃនាយកដ្ឋាននីមួយៗ ហើយរៀបចំខ្លួនអ្នកសម្រាប់ការប្តេជ្ញាខ្ពស់ដែលការសិក្សាកម្រិតខ្ពស់តម្រូវ។',
          },
          {
            en: "We encourage prospective students to view the application process not just as a series of requirements to meet, but as the beginning of an educational journey that will shape your future career and personal growth. Our faculty and staff are committed to supporting every student's success from the moment they enter our doors.",
            kh: 'យើងលើកទឹកចិត្តឱ្យនិស្សិតបេក្ខជនមើលដំណើរការដាក់ពាក្យមិនមែនជាតម្រូវការដែលត្រូវបំពេញតែប៉ុណ្ណោះទេ ប៉ុន្តែជាការចាប់ផ្តើមនៃដំណើរសិក្សាដែលនឹងប៉ះពាល់ដល់អាជីព និងការរីកចម្រើនផ្ទាល់ខ្លួននៅពេលអនាគត។ សាស្រ្តាចារ្យ និងបុគ្គលិករបស់យើងស្ថិតក្នុងការផ្តល់ការគាំទ្រដល់ជោគជ័យរបស់និស្សិតគ្រប់រូបចាប់តាំងពីពេលដែលពួកគេឆ្លងកាត់ទ្វារយើង។',
          },
          {
            en: 'We look forward to welcoming you to our academic community and supporting your educational aspirations throughout your time with us.',
            kh: 'យើងរង់ចាំស្វាគមន៍អ្នកចូលរួមក្នុងសហគមន៍សិក្សារបស់យើង និងគាំទ្រគោលបំណងសិក្សារបស់អ្នកអំឡុងពេលដែលអ្នកស្ថិតនៅជាមួយយើង។',
          },
        ],
      },
    ],
  },
};

/* -------------------- 3. COMPONENT -------------------- */
export default function HowtoApply() {
  const [selected, setSelected] = useState<ProgramLevel>("Bachelor's Degree");
  const application = applicationGuide[selected];
  const { language } = useLanguage();

  return (
    <div className="w-full">
      <h1 className="text-[clamp(1.5rem,2vw,2rem)] font-playfair_display text-black font-semibold">
        {renderTextWithFont(
          language === 'en' ? 'How to Apply' : 'របៀបដាក់ពាក្យ',
          language,
          'heading'
        )}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
      {/* Application Degree Tabs */}
<div className="bg-white shadow-md">
  <div className="w-full grid grid-cols-2">
    <button
      className={`col-span-1 py-3 text-left font-medium px-3 text-[clamp(0.875rem,2vw,1.25rem)] ${
        selected === "Bachelor's Degree"
          ? 'bg-[#3A3B5C]/20 text-[#3A3B5C]'
          : 'bg-[#D9D9D9]/50 text-[#3A3B5C]'
      }`}
      onClick={() => setSelected("Bachelor's Degree")}
    >
      <span
        className={language === 'en' ? 'font-reddit_sans' : 'font-preahvihear'}
      >
        {language === 'en' ? 'Bachelor\'s Degree' : 'កម្រិតបរិញ្ញាបត្រ'}
      </span>
    </button>
    <button
      className={`col-span-1 py-3 text-left font-medium px-3 text-[clamp(0.875rem,2vw,1.25rem)] ${
        selected === "Master's Degree"
          ? 'bg-[#3A3B5C]/20 text-[#3A3B5C]'
          : 'bg-[#D9D9D9]/50 text-[#3A3B5C]'
      }`}
      onClick={() => setSelected("Master's Degree")}
    >
      <span
        className={language === 'en' ? 'font-reddit_sans' : 'font-preahvihear'}
      >
        {language === 'en' ? 'Master\'s Degree' : 'កម្រិតបរិញ្ញាបត្រជាន់ខ្ពស់'}
      </span>
    </button>
  </div>
</div>


      {/* Content */}
  <div className="mt-6 max-w-full">
    <section>
      {application.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-[clamp(1rem,2vw,1.5rem)] font-extrabold mb-2 text-[#3A3B5C]">
            {renderTextWithFont(
              language === 'en' ? section.title.en : section.title.kh,
              language,
              'heading'
            )}
          </h2>
          {section.description &&
            (Array.isArray(section.description) ? (
              section.description.map((desc, idx) => (
                <p key={idx} className="mb-2 text-[#2E2E2E] text-[clamp(0.875rem,2vw,1rem)]">
                  {renderTextWithFont(
                    language === 'en' ? desc.en : desc.kh,
                    language,
                    'body'
                  )}
                </p>
              ))
            ) : (
              <p className="mb-2 text-[#2E2E2E] text-[clamp(0.875rem,2vw,1rem)]">
                {renderTextWithFont(
                  language === 'en' ? section.description.en : section.description.kh,
                  language,
                  'body'
                )}
              </p>
            ))}
          {section.points && (
            <div>
              {section.points.map((point, pIndex) =>
                typeof point === 'string' ? (
                  <p
                    key={pIndex}
                    className="mb-2 text-[#3A3B5C] font-raleway text-[clamp(0.875rem,2vw,1rem)]"
                  >
                    {point}
                  </p>
                ) : (
                  <div key={pIndex} className="mb-4">
                    {point.title && (
                      <h3 className="text-[clamp(0.875rem,2.5vw,1.25rem)] font-semibold mb-2 text-[#3A3B5C]">
                        {renderTextWithFont(
                          language === 'en' ? point.title.en : point.title.kh,
                          language,
                          'body'
                        )}
                      </h3>
                    )}
                    {point.description &&
                      (Array.isArray(point.description) ? (
                        point.description.map((desc, dIdx) => (
                          <p
                            key={dIdx}
                            className="mb-2 text-[#2E2E2E] font-raleway text-[clamp(0.875rem,2vw,1rem)]"
                          >
                            {renderTextWithFont(
                              language === 'en' ? desc.en : desc.kh,
                              language,
                              'body'
                            )}
                          </p>
                        ))
                      ) : (
                        <p className="mb-2 text-[#2E2E2E] font-raleway text-[clamp(0.875rem,2vw,1rem)]">
                          {renderTextWithFont(
                            language === 'en' ? point.description.en : point.description.kh,
                            language,
                            'body'
                          )}
                        </p>
                      ))}
                    {point.list_heading && (
                      <p className="text-black font-raleway font-semibold text-[clamp(0.875rem,2vw,1rem)]">
                        {renderTextWithFont(
                          language === 'en' ? point.list_heading.en : point.list_heading.kh,
                          language,
                          'heading'
                        )}{' '}
                        :
                      </p>
                    )}
                    {point.list && (
                      <ul className="list-disc list-inside mb-2 text-[#2E2E2E] font-raleway text-[clamp(0.875rem,2vw,1rem)]">
                        {point.list.map((item, lIdx) => (
                          <li key={lIdx} className="py-2">
                            {renderTextWithFont(
                              language === 'en' ? item.en : item.kh,
                              language,
                              'body'
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                    {point.conclusion && (
                      <p className="mb-2 text-[#2E2E2E] font-raleway text-[clamp(0.875rem,2vw,1rem)]">
                        {renderTextWithFont(
                          language === 'en' ? point.conclusion.en : point.conclusion.kh,
                          language,
                          'body'
                        )}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  </div>
</div>
  );
}
