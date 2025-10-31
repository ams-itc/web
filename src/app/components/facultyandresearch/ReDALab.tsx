'use client';

import { useLanguage } from '@/contexts/LanguageContext';

function renderTextWithFont(
  text: string,
  language: 'en' | 'kh',
  type: 'heading' | 'body'
) {
  if (language === 'en') {
    return <span className={type === 'heading' ? 'font-playfair_display' : 'font-raleway'}>{text}</span>;
  } else {
    const parts = text.split(/([^\u1780-\u17FF]+)/).filter(Boolean);
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

export default function ReDALabSection() {
  const { language } = useLanguage();

  const redaLabData = {
    en: {
      heading: 'Research and Data Analytics Laboratory',
      description:
        'The Research and Data Analytics Lab (ReDA Lab), an interdisciplinary research center at the Institute of Technology of Cambodia (ITC), is where theoretical knowledge meets practical application. Within the Department of Applied Mathematics and Statistics, we are a leading force in using data science to solve real-world problems and drive innovation. Our lab provides students with hands-on experience and a direct path to career readiness through five dynamic units. Each unit offers a unique focus, from cutting-edge research to community-based projects, ensuring our members are well-equipped to excel in the evolving landscape of data.',
      learnMore: 'Learn more about ReDA Lab',
      link: '#',
    },
    kh: {
      heading: 'មណ្ឌលស្រាវជ្រាវ និងវិភាគទិន្នន័យ',
      description:
        'មណ្ឌលស្រាវជ្រាវ និងវិភាគទិន្នន័យ (ReDA Lab) ដែលជាមជ្ឈមណ្ឌលស្រាវជ្រាវអន្តរវិស័យនៅវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC) គឺជាកន្លែងដែលចំណេះដឹងទ្រឹស្តីជួបប្រទៈនឹងការអនុវត្តជាក់ស្តែង។ នៅក្នុងដេប៉ាតឺម៉ង់គណិតវិទ្យាអនុវត្តន៍ និងស្ថិតិ ពួកយើងបានក្លាយជាអ្នកឈានមុខក្នុងការប្រើប្រាស់វិទ្យាសាស្ត្រទិន្នន័យ ដើម្បីដោះស្រាយបញ្ហាជាក់ស្តែង និងជំរុញនវានុវត្ត។ មណ្ឌលស្រាវជ្រាវរបស់យើងផ្តល់ឱ្យសិស្សនូវបទពិសោធន៍អនុវត្តដោយផ្ទាល់ និងផ្លូវផ្ទាល់ឆ្ពោះទៅកាន់ការត្រៀមខ្លួនសម្រាប់អាជីព តាមរយៈក្លឹបសិក្សាចំនួន៥។ រាល់ក្លឹបសិក្សានីមួយៗមានការផ្តោត ចាប់ពីការស្រាវជ្រាវទំនើបរហូតដល់គម្រោងផ្អែកលើសហគមន៍ ដើម្បីធានាថាសមាជិករបស់យើងមានសមត្ថភាពឈានមុខគេក្នុងទីផ្សារទិន្នន័យដែលកំពុងអភិវឌ្ឍន៍។',
      learnMore: 'ស្វែងយល់បន្ថែមអំពី ReDA Lab',
      link: '#',
    },
  };

  return (
    <section className="w-full">
      <h1 className="text-3xl font-semibold text-black mb-3">
        {renderTextWithFont(redaLabData[language].heading, language, 'heading')}{' '}
        | <span className="text-[#C41E3A] font-playfair_display">ReDa Lab</span>
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] w-2/3 mt-1" />
      <p className="mt-6 text-base text-[#767676] leading-relaxed">
        {renderTextWithFont(redaLabData[language].description, language, 'body')}
      </p>
      <div className="mt-6">
        <a
          href={redaLabData[language].link}
          className="inline-flex items-center border border-[#C41E3A] text-[#C41E3A] px-4 py-2 font-raleway rounded hover:bg-[#C41E3A] hover:text-white transition"
        >
          {renderTextWithFont(redaLabData[language].learnMore, language, 'body')}
          <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
        </a>
      </div>
    </section>
  );
}
