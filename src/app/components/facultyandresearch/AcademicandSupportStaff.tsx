"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
  language: "en" | "kh",
  type: "heading" | "body"
) {
  if (language === "en") {
    return (
      <span className={type === "heading" ? "font-playfair_display" : "font-raleway"}>
        {text}
      </span>
    );
  } else {
    const parts = text.split(/([^\u1780-\u17FF]+)/).filter(Boolean);
    return (
      <>
        {parts.map((part, i) => {
          const isKhmer = /[\u1780-\u17FF]/.test(part);
          const fontClass =
            isKhmer
              ? type === "heading"
                ? "font-preahvihear"
                : "font-kantumruy_pro"
              : type === "heading"
              ? "font-playfair_display"
              : "font-raleway";
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
            title: {en: "Dr", kh: "សាស្រ្តចារ្យ"},
            name: {en: "Phauk Sokkhey", kh: "ភោគ​ សុខខី"},
            position: { en: "Head of Department", kh: "ប្រធាននាយកដ្ឋាន" },
            degrees: { en: "PHD MATHEMATICS", kh: "បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា" },
            expert: { en: "Algorithm and Computational Theory", kh: "ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា" },
            image: "/staff/sokkhey.jpg",
            division: { en: "Mathematics Division", kh: "ផ្នែកគណិតវិទ្យា" },
            description: {
                en: "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
                kh: "លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។"
            },
            education: [
                { en: "PhD in Statistics - University of Chicago (2019)", kh: "ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)" },
                { en: "MS in Applied Mathematics - Northwestern (2016)", kh: "មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)" },
                { en: "BS in Computer Science - UIUC (2014)", kh: "បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)" },
            ],
            tags: [
                { en: "DATA SCIENCE", kh: "វិទ្យាសាស្រ្តទិន្នន័យ" },
                { en: "STATISTICS", kh: "ស្ថិតិ" },
                { en: "ANALYTICS", kh: "វិភាគទិន្នន័យ" }
            ],
            research: {
                en: "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
                kh: "ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។"
            },
            email: "abc@gmial.com",
            phone: "012345678",
            office: { en: "Room 104", kh: "បន្ទប់ 104" },
            officeHour: [
                { en: "Monday - Friday : 8:00 AM - 5:00 PM", kh: "ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច" },
                { en: "Appointment via Email or Phone Number", kh: "ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ" }
            ],
        },
        actingHead: {
            title: {en: "Dr", kh: "សាស្រ្តាចារ្យ"},
            name: {en: "Lin Mongkulsery", kh: "លិន មង្គលសិរី"},
            position: {en: "Acting Head", kh: "ប្រធានស្ដីទី"},
            degrees: { en: "PHD MATHEMATICS", kh: "បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា" },
            expert: { en: "Algorithm and Computational Theory", kh: "ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា" },
            image: "/staff/mongkulserey.jpg",
            division: { en: "Mathematics Division", kh: "ផ្នែកគណិតវិទ្យា" },
            description: {
                en: "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
                kh: "លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។"
            },
            education: [
                { en: "PhD in Statistics - University of Chicago (2019)", kh: "ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)" },
                { en: "MS in Applied Mathematics - Northwestern (2016)", kh: "មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)" },
                { en: "BS in Computer Science - UIUC (2014)", kh: "បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)" },
            ],
            tags: [
                { en: "DATA SCIENCE", kh: "វិទ្យាសាស្រ្តទិន្នន័យ" },
                { en: "STATISTICS", kh: "ស្ថិតិ" },
                { en: "ANALYTICS", kh: "វិភាគទិន្នន័យ" }
            ],
            research: {
                en: "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
                kh: "ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។"
            },
            email: "abc@gmial.com",
            phone: "012345678",
            office: { en: "Room 104", kh: "បន្ទប់ 104" },
            officeHour: [
                { en: "Monday - Friday : 8:00 AM - 5:00 PM", kh: "ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច" },
                { en: "Appointment via Email or Phone Number", kh: "ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ" }
            ],
        },
        professors: [
            {
                title: {en: "Dr", kh: "សាស្រ្តាចារ្យ"},
                name: {en: "John Da", kh: "ចន ដា"},
                position: {en: "Professor", kh: "គ្រូបង្រៀន"},
                degrees: { en: "PHD MATHEMATICS", kh: "បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា" },
                expert: { en: "Algorithm and Computational Theory", kh: "ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា" },
                image: "/staff/vanda.jpg",
                division: { en: "Mathematics Division", kh: "ផ្នែកគណិតវិទ្យា" },
                description: {
                    en: "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
                    kh: "លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។"
                },
                education: [
                    { en: "PhD in Statistics - University of Chicago (2019)", kh: "ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)" },
                    { en: "MS in Applied Mathematics - Northwestern (2016)", kh: "មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)" },
                    { en: "BS in Computer Science - UIUC (2014)", kh: "បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)" },
                ],
                tags: [
                    { en: "DATA SCIENCE", kh: "វិទ្យាសាស្រ្តទិន្នន័យ" },
                    { en: "STATISTICS", kh: "ស្ថិតិ" },
                    { en: "ANALYTICS", kh: "វិភាគទិន្នន័យ" }
                ],
                research: {
                    en: "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
                    kh: "ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។"
                },
                email: "abc@gmial.com",
                phone: "012345678",
                office: { en: "Room 104", kh: "បន្ទប់ 104" },
                officeHour: [
                    { en: "Monday - Friday : 8:00 AM - 5:00 PM", kh: "ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច" },
                    { en: "Appointment via Email or Phone Number", kh: "ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ" }
                ],
            },
            {
                title: {en: "Dr", kh: "សាស្រ្តាចារ្យ"},
                name: {en: "John Da", kh: "ចន ដា"},
                position: {en: "Professor", kh: "គ្រូបង្រៀន"},
                degrees: { en: "PHD MATHEMATICS", kh: "បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា" },
                expert: { en: "Algorithm and Computational Theory", kh: "ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា" },
                image: "/staff/vanda.jpg",
                division: { en: "Mathematics Division", kh: "ផ្នែកគណិតវិទ្យា" },
                description: {
                    en: "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
                    kh: "លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។"
                },
                education: [
                    { en: "PhD in Statistics - University of Chicago (2019)", kh: "ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)" },
                    { en: "MS in Applied Mathematics - Northwestern (2016)", kh: "មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)" },
                    { en: "BS in Computer Science - UIUC (2014)", kh: "បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)" },
                ],
                tags: [
                    { en: "DATA SCIENCE", kh: "វិទ្យាសាស្រ្តទិន្នន័យ" },
                    { en: "STATISTICS", kh: "ស្ថិតិ" },
                    { en: "ANALYTICS", kh: "វិភាគទិន្នន័យ" }
                ],
                research: {
                    en: "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
                    kh: "ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។"
                },
                email: "abc@gmial.com",
                phone: "012345678",
                office: { en: "Room 104", kh: "បន្ទប់ 104" },
                officeHour: [
                    { en: "Monday - Friday : 8:00 AM - 5:00 PM", kh: "ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច" },
                    { en: "Appointment via Email or Phone Number", kh: "ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ" }
                ],
            },
            {
                title: {en: "Dr", kh: "សាស្រ្តាចារ្យ"},
                name: {en: "John Da", kh: "ចន ដា"},
                position: {en: "Professor", kh: "គ្រូបង្រៀន"},
                degrees: { en: "PHD MATHEMATICS", kh: "បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា" },
                expert: { en: "Algorithm and Computational Theory", kh: "ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា" },
                image: "/staff/vanda.jpg",
                division: { en: "Mathematics Division", kh: "ផ្នែកគណិតវិទ្យា" },
                description: {
                    en: "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
                    kh: "លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។"
                },
                education: [
                    { en: "PhD in Statistics - University of Chicago (2019)", kh: "ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)" },
                    { en: "MS in Applied Mathematics - Northwestern (2016)", kh: "មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)" },
                    { en: "BS in Computer Science - UIUC (2014)", kh: "បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)" },
                ],
                tags: [
                    { en: "DATA SCIENCE", kh: "វិទ្យាសាស្រ្តទិន្នន័យ" },
                    { en: "STATISTICS", kh: "ស្ថិតិ" },
                    { en: "ANALYTICS", kh: "វិភាគទិន្នន័យ" }
                ],
                research: {
                    en: "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
                    kh: "ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។"
                },
                email: "abc@gmial.com",
                phone: "012345678",
                office: { en: "Room 104", kh: "បន្ទប់ 104" },
                officeHour: [
                    { en: "Monday - Friday : 8:00 AM - 5:00 PM", kh: "ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច" },
                    { en: "Appointment via Email or Phone Number", kh: "ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ" }
                ],
            },
            {
                title: {en: "Dr", kh: "សាស្រ្តាចារ្យ"},
                name: {en: "John Da", kh: "ចន ដា"},
                position: {en: "Professor", kh: "គ្រូបង្រៀន"},
                degrees: { en: "PHD MATHEMATICS", kh: "បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា" },
                expert: { en: "Algorithm and Computational Theory", kh: "ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា" },
                image: "/staff/vanda.jpg",
                division: { en: "Mathematics Division", kh: "ផ្នែកគណិតវិទ្យា" },
                description: {
                    en: "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
                    kh: "លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។"
                },
                education: [
                    { en: "PhD in Statistics - University of Chicago (2019)", kh: "ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)" },
                    { en: "MS in Applied Mathematics - Northwestern (2016)", kh: "មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)" },
                    { en: "BS in Computer Science - UIUC (2014)", kh: "បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)" },
                ],
                tags: [
                    { en: "DATA SCIENCE", kh: "វិទ្យាសាស្រ្តទិន្នន័យ" },
                    { en: "STATISTICS", kh: "ស្ថិតិ" },
                    { en: "ANALYTICS", kh: "វិភាគទិន្នន័យ" }
                ],
                research: {
                    en: "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
                    kh: "ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។"
                },
                email: "abc@gmial.com",
                phone: "012345678",
                office: { en: "Room 104", kh: "បន្ទប់ 104" },
                officeHour: [
                    { en: "Monday - Friday : 8:00 AM - 5:00 PM", kh: "ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច" },
                    { en: "Appointment via Email or Phone Number", kh: "ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ" }
                ],
            },
        ],
        assistants: [
            {
                title: {en: "Mr", kh: "លោក"},
                name: {en: "Sam Vanda", kh: "សំ វ៉ាន់ដា"},
                position: {en: "Assistant", kh: "អគ្គលេខាធិការ"},
                degrees: { en: "PHD MATHEMATICS", kh: "បណ្ឌិតវិទ្យាសាស្រ្តគណិតវិទ្យា" },
                expert: { en: "Algorithm and Computational Theory", kh: "ទ្រឹស្តីអាល់ហ្គរីធម៍ និង ការគណនា" },
                image: "/staff/vanda.jpg",
                division: { en: "Mathematics Division", kh: "ផ្នែកគណិតវិទ្យា" },
                description: {
                    en: "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
                    kh: "លោក Dr. LIN Mongkulsery ជាអ្នកឯកទេសក្នុងប្រព័ន្ធចែកចាយ និងស្ថាបត្យកម្មកុំព្យូទ័រមេឃ។ គាត់មានបទពិសោធន៍ឧស្សាហកម្មយ៉ាងច្រើន និងរក្សាការសហការយ៉ាងសកម្មជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យា។"
                },
                education: [
                    { en: "PhD in Statistics - University of Chicago (2019)", kh: "ឌុចតូរ ក្នុងវិទ្យាសាស្រ្តស្ថិតិ - សាកលវិទ្យាល័យ Chicago (2019)" },
                    { en: "MS in Applied Mathematics - Northwestern (2016)", kh: "មេស្ទ័រ ក្នុងគណិតវិទ្យា អនុវត្ត - Northwestern (2016)" },
                    { en: "BS in Computer Science - UIUC (2014)", kh: "បរិញ្ញាបត្រ ស្ថិតិវិទ្យា - UIUC (2014)" },
                ],
                tags: [
                    { en: "DATA SCIENCE", kh: "វិទ្យាសាស្រ្តទិន្នន័យ" },
                    { en: "STATISTICS", kh: "ស្ថិតិ" },
                    { en: "ANALYTICS", kh: "វិភាគទិន្នន័យ" }
                ],
                research: {
                    en: "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
                    kh: "ការម៉ូឌែលទាយទ្រង់, ការសិក្សាម៉ាស៊ីនស្ថិតិ, ការតំណាងទិន្នន័យ និងកម្មវិធីវិភាគទិន្នន័យសុខាភិបាល។"
                },
                email: "abc@gmial.com",
                phone: "012345678",
                office: { en: "Room 104", kh: "បន្ទប់ 104" },
                officeHour: [
                    { en: "Monday - Friday : 8:00 AM - 5:00 PM", kh: "ថ្ងៃច័ន្ទ - ថ្ងៃសុក្រ : 8:00 ព្រឹក - 5:00 ល្ងាច" },
                    { en: "Appointment via Email or Phone Number", kh: "ណាត់ជួបតាមអ៊ីមែល ឬលេខទូរស័ព្ទ" }
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

        <section className="w-full">
            <h1 className="text-3xl font-playfair_display text-black font-semibold">
                {renderTextWithFont(language === "en" ? "Academic & Support Staff" : "បុគ្គលិកអប់រំនិងគាំទ្រ", language, "heading")}
            </h1>
            <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
            <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
            <p className="mt-6 text-lg text-[#767676] font-raleway">
                {renderTextWithFont(
                language === "en"
                    ? "Our department is home to a team of dedicated academic and support staff who are committed to excellence in education and research. With a diverse range of expertise and a passion for fostering student success, our faculty members bring a wealth of knowledge and experience to the classroom."
                    : "មណ្ឌលរបស់យើងមានក្រុមបុគ្គលិកអប់រំនិងគាំទ្រដែលស្ម័គ្រចិត្តខ្ពស់ ចូលរួមក្នុងការផ្ដល់អប់រំ និងការស្រាវជ្រាវ។ ជាមួយនឹងជំនាញផ្សេងៗ និងក្តីស្រឡាញ់សម្រាប់ជំនួយនិស្សិត បុគ្គលិកនៃផ្នែកយើងផ្ដល់ចំណេះដឹង និងបទពិសោធន៍ដល់ថ្នាក់រៀន។",
                language,
                "body"
                )}
            </p>
            <div className="mt-5">
                <h1 className="text-xl font-raleway text-[#3A3B5C] font-bold">
                {renderTextWithFont(language === "en" ? "Organizational Chart" : "សមាសភាពគណៈរដ្ឋមន្រ្តី", language, "heading")}
                </h1>
                <div className="space-y-10 pt-5">
                    {/* Administrator  */}
                    <div className="flex flex-row justify-around items-center">
                        {/* Head of department */}
                        <div className="rounded-xl bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                        {staffData.head && (
                            <StaffCard staff={staffData.head} onClick={() => handleOpenModal(staffData.head)} />
                        )}
                        </div>
                        {/* Acting Head of department */}
                        <div className="rounded-xl bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                            {staffData.actingHead && (
                                <StaffCard staff={staffData.actingHead} onClick={() => handleOpenModal(staffData.actingHead)} />
                            )}
                        </div>
                        {/* Assistant of department */}
                        <div className="rounded-xl bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                        {staffData.assistants?.map((assistant, index) => (
                            <StaffCard
                            key={index}
                            staff={assistant}
                            onClick={() => handleOpenModal(assistant)}
                            />
                        ))}
                        </div>
                    </div>
                    {/* Professors */}
                    <div className="grid grid-cols-4 gap-x-10">
                        {staffData.professors?.map((professor, index) => (
                            <StaffCard
                                key={index}
                                staff={professor}
                                onClick={() => handleOpenModal(professor)}
                            />
                        ))}
                    </div>
                </div>
                {/* Modal */}
                {selectedStaff && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Blurred Background */}
                    <div
                    className="absolute inset-0 bg-opacity-30 backdrop-blur-sm transition-opacity duration-300"
                    onClick={handleCloseModal}
                    ></div>

                    {/* Modal Content */}
                    <div 
                        className={`relative bg-white rounded-2xl shadow-2xl max-w-lg w-full min-h-[500px] min-w-1/2 z-10 transform transition-all duration-300 ${isModalOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-8 z-20 text-gray-200 hover:text-[#C41E3A] font-bold text-xl group"
                            onClick={handleCloseModal}
                        >
                            <X />
                            {/* Tooltip */}
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                {renderTextWithFont(language === "en" ? "Exit the page" : "ចាកចេញ", language, "body")}
                            </span>
                        </button>

                        {/* Staff Info */}
                        <div className="max-h-[800px] overflow-y-auto rounded-2xl bg-white shadow-lg scrollbar-hidden">
                            <div>
                                <div className="relative py-8 rounded-t-2xl">
                                    {/* Background image */}
                                    <img
                                        src="/staff/background.png"
                                        alt="background"
                                        className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                                    />

                                {/* Overlay for dimming (optional) */}
                                <div className="absolute inset-0 bg-black/30 rounded-t-2xl"></div>

                                    {/* Foreground profile image */}
                                    <img
                                        src={selectedStaff.image}
                                        alt={typeof selectedStaff.name === "string" ? selectedStaff.name : selectedStaff.name[language]}
                                        className="relative z-10 w-50 h-50 object-cover rounded-full mx-auto shadow-lg"
                                    />
                                </div>
                                <div className="p-5 space-y-2">
                                    <h2 className="text-2xl font-bold text-[#3A3B5C]">
                                        {renderTextWithFont(
                                            typeof selectedStaff.title === "string"
                                                ? selectedStaff.title + ". " + selectedStaff.name
                                                : `${selectedStaff.title[language]} ${
                                                    typeof selectedStaff.name === "string"
                                                        ? selectedStaff.name
                                                        : selectedStaff.name[language]
                                                }`,
                                            language,
                                            "heading"
                                        )}
                                    </h2>
                                    <p className="text-[#C41E3A] font-semibold">
                                        {renderTextWithFont(
                                            typeof selectedStaff.position === "string"
                                                ? selectedStaff.position
                                                : selectedStaff.position[language],
                                            language,
                                            "body"
                                        )}
                                    </p>
                                    <p className="text-[#767676] text-xs">
                                        {renderTextWithFont(
                                            typeof selectedStaff.division === "string"
                                                ? selectedStaff.division || ""
                                                : selectedStaff.division?.[language] || "",
                                            language,
                                            "body"
                                        )}
                                    </p>
                                    <p className="text-black text-sm">
                                        {renderTextWithFont(
                                            typeof selectedStaff.description === "string"
                                                ? selectedStaff.description || ""
                                                : selectedStaff.description?.[language] || "",
                                            language,
                                            "body"
                                        )}
                                    </p>
                                    <p className="text-[#3A3B5C] text-sm font-semibold pt-3">EDUCATION & QUALIFICATIONS</p>
                                    <ul>
                                        {selectedStaff.education?.map((edu, idx) => (
                                            <li key={idx} className="text-black text-sm list-disc list-inside font-medium">
                                                {renderTextWithFont(
                                                    typeof edu === "string" ? edu : edu[language],
                                                    language,
                                                    "body"
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-2 flex flex-row space-x-2">
                                        {selectedStaff.tags?.map((tag, idx) => (
                                            <div className="px-2 py-1 border bg-[#C41E3A]/20 rounded-full w-fit" key={idx}>
                                                <p key={idx} className="text-xs text-[#C41E3A] font-medium">
                                                    {renderTextWithFont(
                                                        typeof tag === "string" ? tag : tag[language],
                                                        language,
                                                        "body"
                                                    )}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border w-full h-auto px-5 py-3 rounded-lg mt-4 bg-[#767676]/10">
                                        <h3 className="text-[#3A3B5C] font-bold text-sm">RESEARCH INTEREST</h3>
                                        <p className="text-xs text-black pt-3">
                                            {renderTextWithFont(
                                                typeof selectedStaff.research === "string"
                                                    ? selectedStaff.research || ""
                                                    : selectedStaff.research?.[language] || "",
                                                language,
                                                "body"
                                            )}
                                        </p>
                                    </div>
                                    <div className="w-full h-auto p-5 rounded-lg mt-4 bg-[#767676]/10">
                                        <div className="grid grid-cols-10 gap-x-4 gap-y-2">
                                            <p className="col-span-2 text-[#3A3B5C] font-semibold text-sm">EMAIL:</p>
                                            <p className="col-span-8 text-[#3A3B5C] font-medium text-sm">{selectedStaff.email}</p>

                                            <p className="col-span-2 text-[#3A3B5C] font-semibold text-sm">PHONE:</p>
                                            <p className="col-span-8 text-[#3A3B5C] font-medium text-sm">{selectedStaff.phone}</p>

                                            <p className="col-span-2 text-[#3A3B5C] font-semibold text-sm">OFFICE:</p>
                                            <p className="col-span-8 text-[#3A3B5C] font-medium text-sm">
                                                {renderTextWithFont(
                                                    typeof selectedStaff.office === "string"
                                                        ? selectedStaff.office || ""
                                                        : selectedStaff.office?.[language] || "",
                                                    language,
                                                    "body"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="border w-full h-auto p-5 rounded-lg mt-4 bg-[#767676]/10">
                                        <h3 className="text-[#3A3B5C] font-bold text-sm">OFFICE HOUR:</h3>
                                        {selectedStaff.officeHour?.map((hour, idx) => (
                                            <p key={idx} className="text-xs text-black pt-1">
                                                {renderTextWithFont(
                                                    typeof hour === "string" ? hour : hour[language],
                                                    language,
                                                    "body"
                                                )}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </section>
    );
}

// StaffCard component
interface StaffCardProps {
  staff: Staff;
  onClick: () => void;
}

function StaffCard({ staff, onClick }: StaffCardProps) {
  return (
    <div
      className="rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer min-w-[250px]"
      onClick={onClick}
    >
      <img
        src={staff.image}
        alt={typeof staff.name === "string" ? staff.name : staff.name.en}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="text-center px-4 pb-6 pt-4 font-raleway space-y-2">
        <h3 className="text-lg font-bold text-[#3A3B5C]">
            {(typeof staff.title === "string" ? staff.title : staff.title[useLanguage().language])
            + " " +
            (typeof staff.name === "string" ? staff.name : staff.name[useLanguage().language])}
        </h3>
        <p className="text-sm text-[#C41E3A] font-semibold">
          {typeof staff.position === "string"
            ? staff.position
            : staff.position[useLanguage().language]}
        </p>
        <div className="px-2 border bg-[#C41E3A]/20 rounded-full w-fit mx-auto">
          <p className="text-xs text-[#C41E3A] font-semibold">
            {typeof staff.degrees === "string"
              ? staff.degrees
              : staff.degrees[useLanguage().language]}
          </p>
        </div>
        <p className="text-xs text-black mt-2 font-inter">
          {typeof staff.expert === "string"
            ? staff.expert
            : staff.expert[useLanguage().language]}
        </p>
      </div>
    </div>
  );
}