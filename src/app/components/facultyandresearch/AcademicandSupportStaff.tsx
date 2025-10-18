'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LocalizedString {
  en: string;
  kh: string;
}

interface Staff {
  name: string | LocalizedString;
  title: string | LocalizedString;
  position: string | LocalizedString;
  degrees: string | LocalizedString;
  expert: string | LocalizedString;
  image: string;
  division?: string | LocalizedString;
  description?: string | LocalizedString;
  education?: (string | LocalizedString)[];
  tags?: (string | LocalizedString)[];
  research?: string | LocalizedString;
  email?: string;
  phone?: string;
  office?: string | LocalizedString;
  officeHour?: (string | LocalizedString)[];
  specialist?: (string | LocalizedString)[];
}

// Font rendering function
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

export default function AcademicSupportStaffSection() {
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();

  const staffData = {
    head: {
      title: { en: 'Dr', kh: 'សាស្រ្តចារ្យ' },
      name: { en: 'Phauk Sokkhey', kh: 'ភោគ​ សុខខី' },
      position: { en: 'Head of Department', kh: 'ប្រធាននាយកដ្ឋាន' },
      degrees: { en: 'PHD MATHEMATICS', kh: 'បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា' },
      expert: {
        en: 'Algorithm and Computational Theory',
        kh: 'ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា',
      },
      image: '/staff/sokkhey.jpg',
      division: { en: 'Mathematics Division', kh: 'ផ្នែកគណិតវិទ្យា' },
      description: {
        en: 'Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.',
        kh: 'លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។',
      },
      education: [
        {
          en: 'PhD in Statistics - University of Chicago (2019)',
          kh: 'ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)',
        },
        {
          en: 'MS in Applied Mathematics - Northwestern (2016)',
          kh: 'មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)',
        },
        {
          en: 'BS in Computer Science - UIUC (2014)',
          kh: 'បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)',
        },
      ],
      tags: [
        { en: 'DATA SCIENCE', kh: 'វិទ្យាសាស្រ្តទិន្នន័យ' },
        { en: 'STATISTICS', kh: 'ស្ថិតិ' },
        { en: 'ANALYTICS', kh: 'វិភាគទិន្នន័យ' },
      ],
      research: {
        en: 'Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.',
        kh: 'ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។',
      },
      email: 'abc@gmial.com',
      phone: '012345678',
      office: { en: 'Room 104', kh: 'បន្ទប់ 104' },
      officeHour: [
        {
          en: 'Monday - Friday : 8:00 AM - 5:00 PM',
          kh: 'ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច',
        },
        {
          en: 'Appointment via Email or Phone Number',
          kh: 'ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ',
        },
      ],
    },
    actingHead: {
      title: { en: 'Dr', kh: 'សាស្រ្តាចារ្យ' },
      name: { en: 'Lin Mongkulsery', kh: 'លិន មង្គលសិរី' },
      position: { en: 'Acting Head', kh: 'ប្រធានស្ដីទី' },
      degrees: { en: 'PHD MATHEMATICS', kh: 'បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា' },
      expert: {
        en: 'Algorithm and Computational Theory',
        kh: 'ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា',
      },
      image: '/staff/mongkulserey.jpg',
      division: { en: 'Mathematics Division', kh: 'ផ្នែកគណិតវិទ្យា' },
      description: {
        en: 'Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.',
        kh: 'លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។',
      },
      education: [
        {
          en: 'PhD in Statistics - University of Chicago (2019)',
          kh: 'ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)',
        },
        {
          en: 'MS in Applied Mathematics - Northwestern (2016)',
          kh: 'មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)',
        },
        {
          en: 'BS in Computer Science - UIUC (2014)',
          kh: 'បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)',
        },
      ],
      tags: [
        { en: 'DATA SCIENCE', kh: 'វិទ្យាសាស្រ្តទិន្នន័យ' },
        { en: 'STATISTICS', kh: 'ស្ថិតិ' },
        { en: 'ANALYTICS', kh: 'វិភាគទិន្នន័យ' },
      ],
      research: {
        en: 'Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.',
        kh: 'ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។',
      },
      email: 'abc@gmial.com',
      phone: '012345678',
      office: { en: 'Room 104', kh: 'បន្ទប់ 104' },
      officeHour: [
        {
          en: 'Monday - Friday : 8:00 AM - 5:00 PM',
          kh: 'ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច',
        },
        {
          en: 'Appointment via Email or Phone Number',
          kh: 'ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ',
        },
      ],
    },
    professors: [
      {
        title: { en: 'Dr', kh: 'សាស្រ្តាចារ្យ' },
        name: { en: 'John Da', kh: 'ចន ដា' },
        position: { en: 'Professor', kh: 'គ្រូបង្រៀន' },
        degrees: { en: 'PHD MATHEMATICS', kh: 'បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា' },
        expert: {
          en: 'Algorithm and Computational Theory',
          kh: 'ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា',
        },
        image: '/staff/vanda.jpg',
        division: { en: 'Mathematics Division', kh: 'ផ្នែកគណិតវិទ្យា' },
        description: {
          en: 'Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.',
          kh: 'លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។',
        },
        education: [
          {
            en: 'PhD in Statistics - University of Chicago (2019)',
            kh: 'ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)',
          },
          {
            en: 'MS in Applied Mathematics - Northwestern (2016)',
            kh: 'មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)',
          },
          {
            en: 'BS in Computer Science - UIUC (2014)',
            kh: 'បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)',
          },
        ],
        tags: [
          { en: 'DATA SCIENCE', kh: 'វិទ្យាសាស្រ្តទិន្នន័យ' },
          { en: 'STATISTICS', kh: 'ស្ថិតិ' },
          { en: 'ANALYTICS', kh: 'វិភាគទិន្នន័យ' },
        ],
        research: {
          en: 'Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.',
          kh: 'ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។',
        },
        email: 'abc@gmial.com',
        phone: '012345678',
        office: { en: 'Room 104', kh: 'បន្ទប់ 104' },
        officeHour: [
          {
            en: 'Monday - Friday : 8:00 AM - 5:00 PM',
            kh: 'ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច',
          },
          {
            en: 'Appointment via Email or Phone Number',
            kh: 'ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ',
          },
        ],
      },
      {
        title: { en: 'Dr', kh: 'សាស្រ្តាចារ្យ' },
        name: { en: 'John Da', kh: 'ចន ដា' },
        position: { en: 'Professor', kh: 'គ្រូបង្រៀន' },
        degrees: { en: 'PHD MATHEMATICS', kh: 'បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា' },
        expert: {
          en: 'Algorithm and Computational Theory',
          kh: 'ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា',
        },
        image: '/staff/vanda.jpg',
        division: { en: 'Mathematics Division', kh: 'ផ្នែកគណិតវិទ្យា' },
        description: {
          en: 'Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.',
          kh: 'លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។',
        },
        education: [
          {
            en: 'PhD in Statistics - University of Chicago (2019)',
            kh: 'ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)',
          },
          {
            en: 'MS in Applied Mathematics - Northwestern (2016)',
            kh: 'មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)',
          },
          {
            en: 'BS in Computer Science - UIUC (2014)',
            kh: 'បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)',
          },
        ],
        tags: [
          { en: 'DATA SCIENCE', kh: 'វិទ្យាសាស្រ្តទិន្នន័យ' },
          { en: 'STATISTICS', kh: 'ស្ថិតិ' },
          { en: 'ANALYTICS', kh: 'វិភាគទិន្នន័យ' },
        ],
        research: {
          en: 'Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.',
          kh: 'ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។',
        },
        email: 'abc@gmial.com',
        phone: '012345678',
        office: { en: 'Room 104', kh: 'បន្ទប់ 104' },
        officeHour: [
          {
            en: 'Monday - Friday : 8:00 AM - 5:00 PM',
            kh: 'ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច',
          },
          {
            en: 'Appointment via Email or Phone Number',
            kh: 'ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ',
          },
        ],
      },
      {
        title: { en: 'Dr', kh: 'សាស្រ្តាចារ្យ' },
        name: { en: 'John Da', kh: 'ចន ដា' },
        position: { en: 'Professor', kh: 'គ្រូបង្រៀន' },
        degrees: { en: 'PHD MATHEMATICS', kh: 'បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា' },
        expert: {
          en: 'Algorithm and Computational Theory',
          kh: 'ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា',
        },
        image: '/staff/vanda.jpg',
        division: { en: 'Mathematics Division', kh: 'ផ្នែកគណិតវិទ្យា' },
        description: {
          en: 'Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.',
          kh: 'លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។',
        },
        education: [
          {
            en: 'PhD in Statistics - University of Chicago (2019)',
            kh: 'ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)',
          },
          {
            en: 'MS in Applied Mathematics - Northwestern (2016)',
            kh: 'មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)',
          },
          {
            en: 'BS in Computer Science - UIUC (2014)',
            kh: 'បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)',
          },
        ],
        tags: [
          { en: 'DATA SCIENCE', kh: 'វិទ្យាសាស្រ្តទិន្នន័យ' },
          { en: 'STATISTICS', kh: 'ស្ថិតិ' },
          { en: 'ANALYTICS', kh: 'វិភាគទិន្នន័យ' },
        ],
        research: {
          en: 'Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.',
          kh: 'ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។',
        },
        email: 'abc@gmial.com',
        phone: '012345678',
        office: { en: 'Room 104', kh: 'បន្ទប់ 104' },
        officeHour: [
          {
            en: 'Monday - Friday : 8:00 AM - 5:00 PM',
            kh: 'ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច',
          },
          {
            en: 'Appointment via Email or Phone Number',
            kh: 'ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ',
          },
        ],
      },
      {
        title: { en: 'Dr', kh: 'សាស្រ្តាចារ្យ' },
        name: { en: 'John Da', kh: 'ចន ដា' },
        position: { en: 'Professor', kh: 'គ្រូបង្រៀន' },
        degrees: { en: 'PHD MATHEMATICS', kh: 'បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា' },
        expert: {
          en: 'Algorithm and Computational Theory',
          kh: 'ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា',
        },
        image: '/staff/vanda.jpg',
        division: { en: 'Mathematics Division', kh: 'ផ្នែកគណិតវិទ្យា' },
        description: {
          en: 'Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.',
          kh: 'លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។',
        },
        education: [
          {
            en: 'PhD in Statistics - University of Chicago (2019)',
            kh: 'ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)',
          },
          {
            en: 'MS in Applied Mathematics - Northwestern (2016)',
            kh: 'មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)',
          },
          {
            en: 'BS in Computer Science - UIUC (2014)',
            kh: 'បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)',
          },
        ],
        tags: [
          { en: 'DATA SCIENCE', kh: 'វិទ្យាសាស្រ្តទិន្នន័យ' },
          { en: 'STATISTICS', kh: 'ស្ថិតិ' },
          { en: 'ANALYTICS', kh: 'វិភាគទិន្នន័យ' },
        ],
        research: {
          en: 'Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.',
          kh: 'ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។',
        },
        email: 'abc@gmial.com',
        phone: '012345678',
        office: { en: 'Room 104', kh: 'បន្ទប់ 104' },
        officeHour: [
          {
            en: 'Monday - Friday : 8:00 AM - 5:00 PM',
            kh: 'ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច',
          },
          {
            en: 'Appointment via Email or Phone Number',
            kh: 'ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ',
          },
        ],
      },
    ],
    assistants: [
      {
        title: { en: 'Mr', kh: 'លោក' },
        name: { en: 'Sam Vanda', kh: 'សំ វ៉ាន់ដា' },
        position: { en: 'Assistant', kh: 'អគ្គលេខាធិការ' },
        degrees: { en: 'PHD MATHEMATICS', kh: 'បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា' },
        expert: {
          en: 'Algorithm and Computational Theory',
          kh: 'ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា',
        },
        image: '/staff/vanda.jpg',
        division: { en: 'Mathematics Division', kh: 'ផ្នែកគណិតវិទ្យា' },
        description: {
          en: 'Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.',
          kh: 'លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។',
        },
        education: [
          {
            en: 'PhD in Statistics - University of Chicago (2019)',
            kh: 'ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)',
          },
          {
            en: 'MS in Applied Mathematics - Northwestern (2016)',
            kh: 'មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)',
          },
          {
            en: 'BS in Computer Science - UIUC (2014)',
            kh: 'បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)',
          },
        ],
        tags: [
          { en: 'DATA SCIENCE', kh: 'វិទ្យាសាស្រ្តទិន្នន័យ' },
          { en: 'STATISTICS', kh: 'ស្ថិតិ' },
          { en: 'ANALYTICS', kh: 'វិភាគទិន្នន័យ' },
        ],
        research: {
          en: 'Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.',
          kh: 'ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។',
        },
        email: 'abc@gmial.com',
        phone: '012345678',
        office: { en: 'Room 104', kh: 'បន្ទប់ 104' },
        officeHour: [
          {
            en: 'Monday - Friday : 8:00 AM - 5:00 PM',
            kh: 'ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច',
          },
          {
            en: 'Appointment via Email or Phone Number',
            kh: 'ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ',
          },
        ],
      },
      // {
      // name: "Ms. Sok Nary",
      // position: "Assistant",
      // degrees: "PHD MATHEMATICS",
      // expert: "Algorithm and Computational Theory",
      // image: "/staff/nary.png",
      // },
    ],
  };
  const handleOpenModal = (staff: Staff) => {
    setSelectedStaff(staff);
    setTimeout(() => setIsModalOpen(true), 10); // trigger animation
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedStaff(null), 300); // wait for animation to finish
  };

  return (
    <section className="w-full px-4 md:px-10">
      <h1 className="text-3xl md:text-4xl font-playfair_display text-black font-semibold">
        {renderTextWithFont(
          language === 'en'
            ? 'Academic & Support Staff'
            : 'បុគ្គលិកអប់រំនិងគាំទ្រ',
          language,
          'heading'
        )}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
      <p className="mt-6 text-base md:text-lg text-[#767676] font-raleway">
        {renderTextWithFont(
          language === 'en'
            ? 'Our department is home to a team of dedicated academic and support staff who are committed to excellence in education and research. With a diverse range of expertise and a passion for fostering student success, our faculty members bring a wealth of knowledge and experience to the classroom.'
            : 'មណ្ឌលរបស់យើងមានក្រុមបុគ្គលិកអប់រំនិងគាំទ្រដែលស្ម័គ្រចិត្តខ្ពស់ ចូលរួមក្នុងការផ្ដល់អប់រំ និងការស្រាវជ្រាវ។ ជាមួយនឹងជំនាញផ្សេងៗ និងក្តីស្រឡាញ់សម្រាប់ជំនួយនិស្សិត បុគ្គលិកនៃផ្នែកយើងផ្ដល់ចំណេះដឹង និងបទពិសោធន៍ដល់ថ្នាក់រៀន។',
          language,
          'body'
        )}
      </p>

      <div className="mt-8">
        <h1 className="text-xl md:text-2xl font-raleway text-[#3A3B5C] font-bold">
          {renderTextWithFont(
            language === 'en' ? 'Organizational Chart' : 'សមាសភាពគណៈរដ្ឋមន្រ្តី',
            language,
            'heading'
          )}
        </h1>

        {/* Admin Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-5">
          {staffData.head && (
            <div className="w-full sm:w-[300px] md:w-[320px]">
              <StaffCard staff={staffData.head} onClick={() => handleOpenModal(staffData.head)} />
            </div>
          )}
          {staffData.actingHead && (
            <div className="w-full sm:w-[300px] md:w-[320px]">
              <StaffCard staff={staffData.actingHead} onClick={() => handleOpenModal(staffData.actingHead)} />
            </div>
          )}
          {staffData.assistants?.map((assistant, idx) => (
            <div key={idx} className="w-full sm:w-[300px] md:w-[320px]">
              <StaffCard staff={assistant} onClick={() => handleOpenModal(assistant)} />
            </div>
          ))}
        </div>

        {/* Professors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {staffData.professors?.map((professor, idx) => (
            <StaffCard key={idx} staff={professor} onClick={() => handleOpenModal(professor)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          <div
            className={`relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isModalOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
          >
            <button
              className="absolute top-4 right-4 z-20 text-gray-400 hover:text-[#C41E3A] text-2xl"
              onClick={handleCloseModal}
            >
              <X />
            </button>

            {/* Modal Content */}
            <div className="p-5 md:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                <img
                  src={selectedStaff.image}
                  alt={
                    typeof selectedStaff.name === 'string'
                      ? selectedStaff.name
                      : selectedStaff.name[language]
                  }
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1 space-y-2">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#3A3B5C]">
                    {typeof selectedStaff.title === 'string'
                      ? `${selectedStaff.title}. ${selectedStaff.name}`
                      : `${selectedStaff.title[language]} ${
                          typeof selectedStaff.name === 'string'
                            ? selectedStaff.name
                            : selectedStaff.name[language]
                        }`}
                  </h2>
                  <p className="text-[#C41E3A] font-semibold">
                    {renderTextWithFont(
                      typeof selectedStaff.position === 'string'
                        ? selectedStaff.position
                        : selectedStaff.position[language],
                      language,
                      'body'
                    )}
                  </p>
                  <p className="text-[#767676] text-sm">
                    {renderTextWithFont(
                      typeof selectedStaff.division === 'string'
                        ? selectedStaff.division || ''
                        : selectedStaff.division?.[language] || '',
                      language,
                      'body'
                    )}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mt-5">
                <p className="text-black text-sm">
                  {renderTextWithFont(
                    typeof selectedStaff.description === 'string'
                      ? selectedStaff.description || ''
                      : selectedStaff.description?.[language] || '',
                    language,
                    'body'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function StaffCard({ staff, onClick }: { staff: Staff; onClick: () => void }) {
  const { language } = useLanguage();

  return (
    <div
      className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300"
      onClick={onClick}
    >
      <img
        src={staff.image}
        alt={typeof staff.name === 'string' ? staff.name : staff.name[language]}
        className="w-full h-60 md:h-64 object-cover"
      />
      <div className="p-3 text-center">
        <h3 className="text-lg font-semibold text-[#3A3B5C]">
          {typeof staff.name === 'string' ? staff.name : staff.name[language]}
        </h3>
        <p className="text-[#C41E3A] font-medium text-sm">
          {typeof staff.position === 'string' ? staff.position : staff.position[language]}
        </p>
      </div>
    </div>
  );
}