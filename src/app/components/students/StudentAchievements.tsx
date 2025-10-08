'use client';
import { useLanguage } from '@/contexts/LanguageContext';

// Utility function (same as before)
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
    const parts = text.split(/([^\u1780-\u17FF]+)/); // match non-Khmer sequences
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

export default function StudentAchievements() {
  const { language } = useLanguage();

  const OutstandingStudent = [
    {
      titleen: 'Ms.',
      titlekh: 'កញ្ញា',
      nameen: 'Luy Lyhor',
      namekh: 'លុយ លីហួរ',
      majoren: 'UX/UI Design',
      majorkh: 'អ្នកឌីហ្សាញ UX/UI',
      graduation: '2025',
      descriptionEn:
        'Ms. Luy Lyhor specializes in distributed systems and cloud computing architecture. She has extensive industry experience and maintains active collaboration with tech companies.',
      descriptionKh:
        'លោកស្រី សារា ជិនឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្ម cloud computing។ នាងមានបទពិសោធន៍វិស័យយ៉ាងទូលំទូលាយ និងរក្សាការសហការទំនាក់ទំនងជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។',
      awards: {
        en: [
          'Google Research Internship',
          'Outstanding Graduation Student Award',
          'Data Science Competition Winner',
        ],
        kh: [
          'អាហារូបករណ៍ស្រាវជ្រាវ Google',
          'រង្វាន់សិស្សបញ្ចប់លេចធ្លោ',
          'ជើងឯកប្រកួតវិទ្យាសាស្ត្រទិន្នន័យ',
        ],
      },
      researchInterests: {
        en: ['Data Science', 'Statistics', 'Analytics'],
        kh: ['វិទ្យាសាស្ត្រទិន្នន័យ', 'ស្ថិតិវិទ្យា', 'វិភាគទិន្នន័យ'],
      },
      imagepath: '/outstandingstudents/lyhor.jpg',
    },
    {
      titleen: 'Ms.',
      titlekh: 'កញ្ញា',
      nameen: 'Luy Lyhor',
      namekh: 'លុយ លីហួរ',
      majoren: 'UX/UI Design',
      majorkh: 'អ្នកឌីហ្សាញ UX/UI',
      graduation: '2025',
      descriptionEn:
        'Ms. Luy Lyhor specializes in distributed systems and cloud computing architecture. She has extensive industry experience and maintains active collaboration with tech companies.',
      descriptionKh:
        'លោកស្រី សារា ជិនឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្ម cloud computing។ នាងមានបទពិសោធន៍វិស័យយ៉ាងទូលំទូលាយ និងរក្សាការសហការទំនាក់ទំនងជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។',
      awards: {
        en: [
          'Google Research Internship',
          'Outstanding Graduation Student Award',
          'Data Science Competition Winner',
        ],
        kh: [
          'អាហារូបករណ៍ស្រាវជ្រាវ Google',
          'រង្វាន់សិស្សបញ្ចប់លេចធ្លោ',
          'ជើងឯកប្រកួតវិទ្យាសាស្ត្រទិន្នន័យ',
        ],
      },
      researchInterests: {
        en: ['Data Science', 'Statistics', 'Analytics'],
        kh: ['វិទ្យាសាស្ត្រទិន្នន័យ', 'ស្ថិតិវិទ្យា', 'វិភាគទិន្នន័យ'],
      },
      imagepath: '/outstandingstudents/lyhor.jpg',
    },
    {
      titleen: 'Ms.',
      titlekh: 'កញ្ញា',
      nameen: 'Luy Lyhor',
      namekh: 'លុយ លីហួរ',
      majoren: 'UX/UI Design',
      majorkh: 'អ្នកឌីហ្សាញ UX/UI',
      graduation: '2025',
      descriptionEn:
        'Ms. Luy Lyhor specializes in distributed systems and cloud computing architecture. She has extensive industry experience and maintains active collaboration with tech companies.',
      descriptionKh:
        'លោកស្រី សារា ជិនឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្ម cloud computing។ នាងមានបទពិសោធន៍វិស័យយ៉ាងទូលំទូលាយ និងរក្សាការសហការទំនាក់ទំនងជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។',
      awards: {
        en: [
          'Google Research Internship',
          'Outstanding Graduation Student Award',
          'Data Science Competition Winner',
        ],
        kh: [
          'អាហារូបករណ៍ស្រាវជ្រាវ Google',
          'រង្វាន់សិស្សបញ្ចប់លេចធ្លោ',
          'ជើងឯកប្រកួតវិទ្យាសាស្ត្រទិន្នន័យ',
        ],
      },
      researchInterests: {
        en: ['Data Science', 'Statistics', 'Analytics'],
        kh: ['វិទ្យាសាស្ត្រទិន្នន័យ', 'ស្ថិតិវិទ្យា', 'វិភាគទិន្នន័យ'],
      },
      imagepath: '/outstandingstudents/lyhor.jpg',
    },
    {
      titleen: 'Ms.',
      titlekh: 'កញ្ញា',
      nameen: 'Luy Lyhor',
      namekh: 'លុយ លីហួរ',
      majoren: 'UX/UI Design',
      majorkh: 'អ្នកឌីហ្សាញ UX/UI',
      graduation: '2025',
      descriptionEn:
        'Ms. Luy Lyhor specializes in distributed systems and cloud computing architecture. She has extensive industry experience and maintains active collaboration with tech companies.',
      descriptionKh:
        'លោកស្រី សារា ជិនឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្ម cloud computing។ នាងមានបទពិសោធន៍វិស័យយ៉ាងទូលំទូលាយ និងរក្សាការសហការទំនាក់ទំនងជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។',
      awards: {
        en: [
          'Google Research Internship',
          'Outstanding Graduation Student Award',
          'Data Science Competition Winner',
        ],
        kh: [
          'អាហារូបករណ៍ស្រាវជ្រាវ Google',
          'រង្វាន់សិស្សបញ្ចប់លេចធ្លោ',
          'ជើងឯកប្រកួតវិទ្យាសាស្ត្រទិន្នន័យ',
        ],
      },
      researchInterests: {
        en: ['Data Science', 'Statistics', 'Analytics'],
        kh: ['វិទ្យាសាស្ត្រទិន្នន័យ', 'ស្ថិតិវិទ្យា', 'វិភាគទិន្នន័យ'],
      },
      imagepath: '/outstandingstudents/lyhor.jpg',
    },
  ];

  const Awards = [
    {
      title: {
        en: 'ENSIIE Scholarship Awardees',
        kh: 'អ្នកទទួលអាហារូបករណ៍ ENSIIE',
      },
      icon: <i className="fa-solid fa-medal"></i>,
      scholarshipAwardees: [
        {
          name: { en: 'Mr. LY Chhaythean', kh: 'លោក LY Chhaythean' },
          class: { en: 'Class of 2027', kh: 'ថ្នាក់ឆ្នាំ 2027' },
        },
        {
          name: { en: 'Mr. NGEN Tina', kh: 'លោក NGEN Tina' },
          class: { en: 'Class of 2027', kh: 'ថ្នាក់ឆ្នាំ 2027' },
        },
      ],
      filepath: '/awards/ensiee.JPG',
    },
    {
      title: {
        en: 'XYZ Competition Winners',
        kh: 'អ្នកឈ្នះការប្រកួត XYZ',
      },
      icon: <i className="fa-solid fa-trophy"></i>,
      competitionWinners: [
        {
          team: { en: 'Team AAA', kh: 'ក្រុម AAA' },
          members: {
            en: ['Member 1', 'Member 2'],
            kh: ['សមាជិក 1', 'សមាជិក 2'],
          },
        },
        {
          team: { en: 'Team BBB', kh: 'ក្រុម BBB' },
          members: {
            en: ['Member 1', 'Member 2'],
            kh: ['សមាជិក 1', 'សមាជិក 2'],
          },
        },
      ],
      filepath: '/awards/ensiee.JPG',
    },
  ];

  const descriptionEn = `We are incredibly proud of our students and the extraordinary achievements they continue to accomplish. Every fellowship earned, every publication authored, and every career milestone represents not just individual excellence, but countless hours of dedication, resilience, and the pursuit of knowledge that inspires us all. From our students who have secured prestigious fellowships and published in top-tier journals, to those landing dream positions at leading technology companies or pioneering groundbreaking research, each success story reflects the transformative journey of growth and discovery that defines our academic community. We celebrate these victories not just as individual triumphs, but as a testament to the collaborative spirit and unwavering support that characterizes our department family.`;
  const descriptionKh = `យើងមានមោទនភាពខ្លាំងណាស់ចំពោះសិស្សរបស់យើង និងសមិទ្ធផលអស្ចារ្យដែលពួកគេកំពុងបន្តសម្រេចបាន។ រាល់អាហារូបករណ៍ដែលទទួលបាន រាល់ការបោះពុម្ពផ្សាយ និងរាល់ជំហានអាជីពទាំងអស់ មិនត្រឹមតែបង្ហាញពីភាពឆ្នើមផ្ទាល់ខ្លួនទេ ប៉ុន្តែបង្ហាញពីម៉ោងរាប់មិនអស់នៃការប្តេជ្ញា ការអត់ធ្មត់ និងការស្វែងរកចំណេះដឹងដែលបំផុសគំនិតយើងទាំងអស់។ ចាប់ពីសិស្សរបស់យើងដែលទទួលបានអាហារូបករណ៍ឆ្នើម ក៏ដូចជាបោះពុម្ពក្នុងទស្សនាវដ្តីឆ្នើម ដល់សិស្សដែលទទួលបានការងារសុបិននៅក្រុមហ៊ុនបច្ចេកវិទ្យាដ៏ល្បី ឬចូលរួមស្រាវជ្រាវបង្កើតអ្វីថ្មីៗ—រឿងជោគជ័យនីមួយៗបង្ហាញពីដំណើរផ្លាស់ប្តូរនៃការលូតលាស់ និងការរកឃើញ ដែលកំណត់អត្តសញ្ញាណសហគមន៍អប់រំរបស់យើង។ យើងសម្ដែងការទទួលស្គាល់ជ័យជំនះទាំងនេះ មិនត្រឹមតែជាជ័យជំនះផ្ទាល់ខ្លួនទេ ប៉ុន្តែជាភស្តុតាងនៃវិញ្ញាណសហការ និងការគាំទ្រមិនអស់កម្លាំង ដែលក្លាយជាឯកសាររបស់គ្រួសារនាយកដ្ឋានយើង។`;

  return (
    <div className="w-full">
      <h1 className="text-3xl text-black font-semibold">
        {renderTextWithFont(
          language === 'en' ? 'Student’s Achievement' : 'សមិទ្ធិផលសិស្ស',
          language,
          'heading'
        )}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      {/* Description */}
      <div className="space-y-3">
        <p className="mt-8 text-base text-black">
          {renderTextWithFont(
            language === 'en' ? descriptionEn : descriptionKh,
            language,
            'body'
          )}
        </p>
      </div>

      {/* Outstanding Student Spotlight */}
      <h1 className="text-2xl text-black font-medium mt-8">
        {renderTextWithFont(
          language === 'en' ? 'Outstanding Student Spotlight' : 'សិស្សលេចធ្លោ',
          language,
          'heading'
        )}
      </h1>

      {/* Students */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-5 gap-x-3 my-5">
        {OutstandingStudent.map((student, index) => (
          <div
            key={index}
            className="border rounded-xl shadow bg-white mx-auto min-w-[500px]"
          >
            <img
              src={student.imagepath}
              alt={student.nameen + ' image'}
              className="rounded-t-xl"
            />
            <div className="relative px-6 py-3">
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-semibold text-lg text-black">
                  {renderTextWithFont(
                    language === 'en'
                      ? `${student.titleen} ${student.nameen}`
                      : `${student.titlekh} ${student.namekh}`,
                    language,
                    'heading'
                  )}
                </h2>
                <p className="text-gray-500 text-sm">
                  {renderTextWithFont(
                    language === 'en'
                      ? `${student.majoren}, Class of ${student.graduation}`
                      : `${student.majorkh}, ថ្ងៃបញ្ចប់ឆ្នាំ ${student.graduation}`,
                    language,
                    'body'
                  )}
                </p>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                {renderTextWithFont(
                  language === 'en'
                    ? student.descriptionEn
                    : student.descriptionKh,
                  language,
                  'body'
                )}
              </p>
              <h3 className="font-semibold text-base mb-2 text-black">
                {renderTextWithFont(
                  language === 'en'
                    ? 'AWARDS & ACHIEVEMENTS'
                    : 'រង្វាន់ និងសមិទ្ធិផល',
                  language,
                  'heading'
                )}
              </h3>
              {/* Awards */}
              <ul className="list-disc list-inside mb-4 text-gray-700 text-sm">
                {student.awards[language].map((award, i) => (
                  <li key={i}>{renderTextWithFont(award, language, 'body')}</li>
                ))}
              </ul>

              <h3 className="font-semibold text-base text-black mb-2">
                {renderTextWithFont(
                  language === 'en'
                    ? 'RESEARCH INTEREST'
                    : 'ចំណង់ចំណូលចិត្តស្រាវជ្រាវ',
                  language,
                  'heading'
                )}
              </h3>
              {/* Research Interests */}
              <div className="flex gap-2 flex-wrap">
                {student.researchInterests[language].map((interest, i) => (
                  <span
                    key={i}
                    className="bg-pink-100 text-pink-600 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {renderTextWithFont(
                      interest.toUpperCase(),
                      language,
                      'body'
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Awards */}
      <h1 className="text-2xl text-black font-medium mt-10">
        {renderTextWithFont(
          language === 'en'
            ? 'Recent Awards and Recognitions'
            : 'រង្វាន់ និងការទទួលស្គាល់ថ្មីៗ',
          language,
          'heading'
        )}
      </h1>

      <div className="space-y-5 py-5">
        {Awards.map((award, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-2xl shadow grid grid-cols-3 max-w-[800px] h-fit"
          >
            <div className="col-span-1">
              <img
                src={award.filepath}
                alt={`${award.title.en} image`}
                className="rounded-l-xl w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 px-5 py-4">
              {/* Award Title */}
              <h1 className="text-xl font-semibold text-[#C41E3A] mb-3">
                {renderTextWithFont(
                  language === 'en' ? award.title.en : award.title.kh,
                  language,
                  'heading'
                )}
              </h1>

              {/* Scholarship Awardees */}
              {award.scholarshipAwardees &&
                award.scholarshipAwardees.map((awardee, i) => (
                  <div key={i} className="grid grid-cols-5 items-center">
                    <div className="col-span-1 flex justify-center">
                      <span className="text-[#C41E3A] text-lg">
                        {award.icon}
                      </span>
                    </div>
                    <div className="col-span-3">
                      <p className="text-black text-sm">
                        {renderTextWithFont(
                          language === 'en' ? awardee.name.en : awardee.name.kh,
                          language,
                          'body'
                        )}
                      </p>
                    </div>
                    <div className="col-span-1 text-right">
                      <p className="text-gray-500 text-xs">
                        {renderTextWithFont(
                          language === 'en'
                            ? awardee.class.en
                            : awardee.class.kh,
                          language,
                          'body'
                        )}
                      </p>
                    </div>
                  </div>
                ))}

              {/* Competition Winners */}
              {award.competitionWinners &&
                award.competitionWinners.map((team, i) => (
                  <div key={i} className="grid grid-cols-5 items-center">
                    <div className="col-span-1 flex justify-center">
                      <span className="text-[#C41E3A] text-lg">
                        {award.icon}
                      </span>
                    </div>
                    <div className="col-span-4 flex">
                      <p className="text-black text-sm">
                        {renderTextWithFont(
                          `${language === 'en' ? team.team.en : team.team.kh} : [${(language === 'en' ? team.members.en : team.members.kh).join(', ')}]`,
                          language,
                          'body'
                        )}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
