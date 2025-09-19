"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Faculty data with both English and Khmer
const facultyMembers = [
  {
    name: { en: "Asst. Prof. Dr. PHAUK Sokkhey", kh: "សាស្ត្រាចារ្យ ភោគ សុខខី" },
    position: { en: "Head of Department", kh: "ប្រធានដេប៉ាតឺម៉ង់" },
    specialization: { en: "Mathematics and Data Science", kh: "គណិតវិទ្យា និង វិទ្យាសាស្ត្រ​ទិន្នន័យ" },
    quote: {
      en: "I believe that the greatest gift I can give my students is not just knowledge, but the confidence to seek it for themselves. My goal is to light a spark of curiosity that will guide them long after they leave my classroom.",
      kh: "ខ្ញុំជឿថា អំណោយធំបំផុតដែលខ្ញុំអាចផ្តល់ឲ្យសិស្ស មិនមែនត្រឹមតែចំណេះដឹងទេ ប៉ុន្តែជាកម្លាំងនិងទំនុកចិត្តស្វែងរកចំណេះដឹងដោយខ្លួនឯង។ ខ្ញុំចង់បង្កើតចំណង់ចំណូលចិត្តឲ្យពួកគេ ដើម្បីបន្តសិក្សា និងស្វែងយល់ទៀត បន្ទាប់ពីចាកចេញពីថ្នាក់។"
    },
    image: "/faculty1.jpg",
    profileUrl: "#",
  },
  {
    name: { en: "Dr. Chan Sophea", kh: "បណ្ឌិត ចាន់ សោភា" },
    position: { en: "Senior Lecturer", kh: "គ្រូបង្រៀនជាន់ខ្ពស់" },
    specialization: { en: "Artificial Intelligence", kh: "បញ្ញាសិប្បនិម្មិត (AI)" },
    quote: {
      en: "Teaching AI is about preparing students to design solutions that shape the future responsibly and ethically.",
      kh: "ការបង្រៀន AI គឺជាការរៀបចំសិស្ស ដើម្បីរចនាចម្លើយដែលផ្លាស់ប្តូរអនាគតដោយទទួលខុសត្រូវ និងតាមតំរូវការផ្លូវច្បាប់។"
    },
    image: "/faculty2.jpg",
    profileUrl: "#",
  },
  {
    name: { en: "Prof. Lim Dara", kh: "សាស្ត្រាចារ្យ លឹម ដារា" },
    position: { en: "Professor", kh: "សាស្ត្រាចារ្យ" },
    specialization: { en: "Financial Engineering", kh: "វិស្វកម្មហិរញ្ញវត្ថុ" },
    quote: {
      en: "Finance and engineering go hand in hand. I guide students to bridge technical models with real-world applications.",
      kh: "ហិរញ្ញវត្ថុ និង វិស្វកម្ម ដៃគូគ្នា។ ខ្ញុំណែនាំសិស្ស ដើម្បីភ្ជាប់គំរូបច្ចេកទេសនឹងកម្មវិធីជាក់ស្តែង។"
    },
    image: "/faculty3.jpg",
    profileUrl: "#",
  },
  {
    name: { en: "Dr. Nary Sok", kh: "បណ្ឌិត ណារី សុក" },
    position: { en: "Lecturer", kh: "គ្រូបង្រៀន" },
    specialization: { en: "Data Analytics", kh: "វិភាគទិន្នន័យ" },
    quote: {
      en: "Data tells powerful stories. I aim to equip students with the skills to interpret and use data effectively.",
      kh: "ទិន្នន័យប្រាប់រឿងរ៉ាវដ៏មានអំណាច។ គោលបំណងរបស់ខ្ញុំគឺផ្តល់ជំនាញដល់សិស្សក្នុងការបកស្រាយ និងប្រើទិន្នន័យដោយមានប្រសិទ្ធភាព។"
    },
    image: "/faculty4.jpg",
    profileUrl: "#",
  },
  {
    name: { en: "Dr. Kim Rithy", kh: "បណ្ឌិត គីម រិទ្ធី" },
    position: { en: "Assistant Professor", kh: "សាស្ត្រាចារ្យជំនួយ" },
    specialization: { en: "Machine Learning", kh: "ការសិក្សាម៉ាស៊ីន" },
    quote: {
      en: "Machine learning is more than algorithms — it's about solving problems that matter in society.",
      kh: "ការសិក្សាម៉ាស៊ីនមិនមែនគ្រាន់តែអាល់ហ្គរីថមទេ ប៉ុន្តែជាការដោះស្រាយបញ្ហាដែលមានតម្លៃសម្រាប់សង្គម។"
    },
    image: "/faculty5.jpg",
    profileUrl: "#",
  },
];


export default function FacultySection() {
  const [current, setCurrent] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % facultyMembers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(current);
    }
  }, [current]);

  const { language } = useLanguage();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const addLangToPath = (path: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("lang", language);
    return `${path}?${newParams.toString()}`;
  };

  return (
    <section className="bg-gray-50 px-8 md:px-20 py-10">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-900 ${
            language === "en" ? "font-playfair_display" : "font-preahvihear"
          }`}
        >
          {language === "en" ? "Meet Our Faculty Members" : "ជួបជាមួយសាស្រ្តាចារ្យរបស់យើង"}
        </h2>
        <p
          className={`text-gray-600 text-base leading-relaxed ${
            language === "en" ? "font-raleway" : "font-kantumruy_pro"
          }`}
        >
          {language === "en"
            ? "Our faculty are the heart of our department. Get to know the passionate educators and mentors who are committed to guiding you, challenging your thinking, and inspiring your academic journey."
            : "សាស្រ្តាចារ្យរបស់យើងគឺជាចំណុចស្នូលនៃដេប៉ាតឺម៉ង់។ សូមស្គាល់សាស្ត្រាចារ្យ និងអ្នកណែនាំដែលពោរពេញដោយក្តីស្រឡាញ់ក្នុងការបង្រៀន ប្តេជ្ញាណែនាំអ្នក បញ្ចេញសមត្ថភាពគំនិតរបស់អ្នក និងបណ្ដុះបណ្ដាលឲ្យអ្នក​ ទទួលបានការរីកចម្រើនលើចំណេះដឹង។"}
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="max-w-5xl mx-auto"
      >
        {facultyMembers.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-md rounded-xl p-8 hover:shadow-xl hover:scale-105 transition-transform duration-300">
              {/* Faculty Image */}
              <div className="flex-shrink-0">
                <img
                  src={member.image}
                  alt={language === "en" ? member.name.en : member.name.kh}
                  className="rounded-lg shadow-lg w-[320px] h-[320px] object-cover"
                />
              </div>

              {/* Faculty Info */}
              <div className="space-y-4">
                <h3
                  className={`text-2xl font-bold text-gray-900 ${
                    language === "en" ? "font-raleway" : "font-preahvihear"
                  }`}
                >
                  {language === "en" ? member.name.en : member.name.kh}
                </h3>

                <p
                  className={`text-sm font-medium text-gray-700 ${
                    language === "en" ? "font-raleway" : "font-kantumruy_pro"
                  }`}
                >
                  {language === "en" ? member.position.en : member.position.kh}
                </p>

                <p
                  className={`italic text-gray-700 ${
                    language === "en" ? "font-raleway" : "font-kantumruy_pro"
                  }`}
                >
                  {language === "en"
                    ? `Specializes in ${member.specialization.en}`
                    : `ជំនាញ ${member.specialization.kh}`}
                </p>

                <p
                  className={`text-gray-600 leading-relaxed ${
                    language === "en" ? "font-reddit_sans" : "font-kantumruy_pro"
                  }`}
                >
                  “{language === "en" ? member.quote.en : member.quote.kh}”
                </p>

                <a
                  href={member.profileUrl}
                  className={`inline-flex items-center text-[#C41E3A] font-semibold hover:underline ${
                    language === "en" ? "font-raleway" : "font-kantumruy_pro"
                  }`}
                >
                  {language === "en" ? "View Full Profile" : "ប្រវត្តិរូបពេញ"}{" "}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <Link
          to={addLangToPath("/faculty-and-research")}
          className={`px-8 py-3 border border-[#C41E3A] text-[#C41E3A] font-semibold rounded-md hover:bg-red-50 transition ${
            language === "en" ? "font-raleway" : "font-kantumruy_pro"
          }`}
        >
          {language === "en" ? "View All Faculty" : "មើលបុគ្គលិកអប់រំទាំងអស់"}
        </Link>
      </div>
    </section>
  );
}
