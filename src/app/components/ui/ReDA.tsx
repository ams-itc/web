"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { truncateText } from "@/helpers/textUtils";
import "swiper/css";
import "swiper/css/pagination";

// Clubs data with English and Khmer
const clubs = [
  {
    title: {
      en: "LLM Application and Research Club",
      kh: "សមាគមស្រាវជ្រាវ និងកម្មវិធី LLM",
    },
    desc: {
      en: "Explore new technology and research results around large language models and deploy them for solving real-world challenges, including building AI assistants, fine-tuning pre-trained models, developing and optimizing existing architecture of LLMs, as well as exploring theoretical properties of LLMs.",
      kh: "ស្វែងយល់អំពីបច្ចេកវិទ្យាថ្មី និងលទ្ធផលស្រាវជ្រាវជុំវិញម៉ូឌែលភាសាធំនិងអនុវត្តវាសម្រាប់ដោះស្រាយបញ្ហាជាក់ស្តែង រួមទាំងការបង្កើតជំនួយកប៉ាល់ AI ការបង្ហាញម៉ូឌែលដែលបានបណ្ដុះទុក ការអភិវឌ្ឍ និងធ្វើអុបទីម៉ៃសង់ស្ថាបត្យកម្ម LLM និងការស្វែងយល់អំពីលក្ខណៈទ្រឹស្តីរបស់ LLM។",
    },
    color: "border-[#3A3B5C]",
  },
  {
    title: {
      en: "Computer Vision and AI Club",
      kh: "សមាគមកុំព្យូទ័រចម្រង់ និង AI",
    },
    desc: {
      en: "Dedicated to advancing research and solutions in computer vision, deep learning, and general artificial intelligence. It works on image recognition, object detection, scene understanding, medical imaging, and video analysis using state-of-the-art models such as CNNs, transformers, and generative networks. The unit also supports applications in agriculture, smart cities, and surveillance technology",
      kh: "សមាគមនេះផ្តោតលើការកែលម្អការស្រាវជ្រាវ និងដំណោះស្រាយក្នុងវិស័យកុំព្យូទ័រចម្រង់ ការសិក្សាជ្រៅ និងបញ្ញាសិប្បនិម្មិតទូទៅ។ វាធ្វើការលើការទទួលស្គាល់រូបភាព ការរកឃើញវត្ថុ ការយល់ដឹងទិដ្ឋភាព វិចិត្រសាលវេជ្ជសាស្ត្រ និងការវិភាគវីដេអូ ដោយប្រើម៉ូឌែលទំនើបដូចជា CNNs, Transformers និង Generative Networks។ ភ្នាក់ងារនេះក៏គាំទ្រការអនុវត្តនៅវិស័យកសិកម្ម, ទីក្រុងឆ្លាតវៃ និងបច្ចេកវិទ្យាការត្រួតពិនិត្យ។",
    },
    color: "border-[#C41E3A]",
  },
  {
    title: {
      en: "Data Science and Machine Learning Club",
      kh: "សមាគមវិទ្យាទិន្នន័យ និងការសិក្សាម៉ាស៊ីន",
    },
    desc: {
      en: "This unit concentrates on the development and application of statistical models, machine learning algorithms, and AI techniques to extract insights from data. Research areas include supervised and unsupervised learning, predictive modeling, anomaly detection, and model interpretability. The club is under unit collaborates with public and private sectors to solve problems using data science.",
      kh: "ភ្នាក់ងារនេះផ្តោតលើការអភិវឌ្ឍ និងអនុវត្តន៍ម៉ូឌែលស្ថិតិ, អាល់ហ្គរីថមការសិក្សាម៉ាស៊ីន និងបច្ចេកទេស AI ដើម្បីទាញយកចំណេះដឹងពីទិន្នន័យ។ វិស័យស្រាវជ្រាវរួមមានការសិក្សាដោយអធិប្បាយ និងមិនអធិប្បាយ, ម៉ូឌែលព្យាករ, ការរកឃើញករណីមិនទៀងទាត់ និងការបកស្រាយម៉ូឌែល។ សមាគមនេះសហការជាមួយវិស័យសាធារណៈ និងឯកជនក្នុងការដោះស្រាយបញ្ហា ដោយប្រើវិទ្យាទិន្នន័យ។",
    },
    color: "border-[#3A3B5C]",
  },
  {
    title: {
      en: "Data and Business Analytics Club",
      kh: "សមាគមវិភាគទិន្នន័យ និងអាជីវកម្ម",
    },
    desc: {
      en: "This club aims to harness data analytics, business intelligence, and decision science to drive strategic insights and performance improvement. It explores domains such as customer behavior analysis, financial forecasting, operations optimization, and marketing analytics. The unit builds dashboards, reporting systems, and analytical pipelines to support data-driven decision-making.",
      kh: "សមាគមនេះមានគោលបំណងប្រើប្រាស់វិភាគទិន្នន័យ, បញ្ញាអាជីវកម្ម និងវិទ្យាស្រាវជ្រាវសំរាប់ការសម្រេចចិត្ត ដើម្បីផ្តល់ចំណេះដឹងយុទ្ធសាស្ត្រ និងបង្កើនសមត្ថភាព។ វាស្វែងយល់វិស័យដូចជា ការវិភាគនៃទម្លាប់អតិថិជន, ការព្យាករណ៍ហិរញ្ញវត្ថុ, ការបង្កើនប្រសិទ្ធភាពប្រតិបត្តិការ និងវិភាគទីផ្សារ។ ភ្នាក់ងារនេះកសាង dashboard, reporting system និង analytical pipeline ដើម្បីគាំទ្រការសម្រេចចិត្តដោយផ្អែកលើទិន្នន័យ។",
    },
    color: "border-[#C41E3A]",
  },
];

export default function ResearchClubs() {
  const { language } = useLanguage();

  return (
    <section className="bg-white py-10 min-h-screen flex flex-col items-center gap-y-5 w-full overflow-hidden">
      {/* Title */}
      <div className="text-center max-w-3xl px-4 space-y-4">
        <h2
          className={`text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 ${
            language === "en" ? "font-playfair_display" : "font-preahvihear"
          }`}
        >
          {language === "en"
            ? "Research and Data Analytics Lab"
            : "មន្ទីរស្រាវជ្រាវ និងវិភាគទិន្នន័យ"}
        </h2>
        <p
          className={`text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed ${
            language === "en" ? "font-raleway" : "font-kantumruy_pro"
          }`}
        >
          {language === "en"
            ? "The Research and Data Analytics Lab (ReDA Lab), an interdisciplinary research center at the Institute of Technology of Cambodia (ITC), is where theoretical knowledge meets practical application. Within the Department of Applied Mathematics and Statistics, we are a leading force in using data science to solve real-world problems and drive innovation. Our lab provides students with hands-on experience and a direct path to career readiness through five dynamic units. Each unit offers a unique focus, from cutting-edge research to community-based projects, ensuring our members are well-equipped to excel in the evolving landscape of data."
            : "មន្ទីរស្រាវជ្រាវ និងវិភាគទិន្នន័យ (ReDA Lab) គឺជមណ្ឌលស្រាវជ្រាវអន្តិសញ្ញាបច្ចេកទេសនៅវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC) ដែលចំណេះដឹងទ្រឹស្តីសម្រុកនឹងអនុវត្តការប្រកបប្រសើរ។ ក្នុងផ្នែកគណិតវិទ្យាអនុវត្តន៍ និងស្ថិតិ យើងជាដៃគូដ៏សំខាន់ក្នុងការប្រើវិទ្យាទិន្នន័យ ដើម្បីដោះស្រាយបញ្ហាជាក់ស្តែង និងជំរុញវិបត្តិវិចារណា។ មន្ទីររបស់យើងផ្តល់បទពិសោធន៍ដោយផ្ទាល់ និងផ្លូវផ្ទាល់ទៅការងារជាស្រេចតាមឯកត្តិភាព។ ពីរោមនីមួយផ្តល់ការផ្តោតលើជាផ្នែកខុសៗគ្នា ពីការស្រាវជ្រាវទំនើបទៅការងារសហគមន៍ ដើម្បីធានាថាសមាជិករបស់យើងមានសមត្ថភាពល្អក្នុងដែនដីទិន្នន័យ។"}
        </p>
      </div>

      <div className="relative w-full mx-auto overflow-hidden">
        {/* Left Gradient */}
        <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>

        {/* Swiper */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={15}
            centeredSlides
            loop={false}
            onReachEnd={(swiper) => {
              setTimeout(() => {
                swiper.slideTo(0, 500); // Quickly reverse to the first card
              }, 1000);
            }}
            grabCursor={true}
            breakpoints={{
              // Always 1 card until desktop
              0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 15 },
              640: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20 },
              768: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20 },
              // Desktop+
              1024: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 25 },
              1280: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 25 },
              1440: { slidesPerView: 4, slidesPerGroup: 1, spaceBetween: 30 },
            }}
            autoHeight={false}
            className="w-full max-w-[60vw] md:max-w-[50vw] lg:max-w-6xl mx-auto !overflow-visible relative pb-12 px-4"
          >
          {clubs.map((club, idx) => (
            <SwiperSlide
              key={idx}
              className="transition-transform duration-300 h-auto min-h-[400px] content-start pb-3"
            >
              {({ isActive }) => (
                <div
                  className={`p-4 sm:p-6 rounded-xl shadow-md border-2 bg-white flex flex-col justify-between transition-transform duration-300 min-h-[400px] mt-8 ${
                    club.color
                  } ${
                    isActive
                      ? "scale-[1.01] shadow-xl"
                      : "scale-[0.98] opacity-80"
                  }`}
                >
                  <div>
                    <h3
                      className={`text-base sm:text-lg font-medium text-gray-900 line-clamp-2 ${
                        language === "en"
                          ? "font-playfair_display"
                          : "font-preahvihear"
                      }`}
                    >
                      {language === "en" ? club.title.en : club.title.kh}
                    </h3>
                    <p
                      className={`text-gray-600 mt-2 sm:mt-3 text-xs sm:text-sm ${
                        language === "en"
                          ? "font-raleway"
                          : "font-kantumruy_pro"
                      }`}
                    >
                      {language === "en"
                        ? truncateText(club.desc.en, 40)
                        : truncateText(club.desc.kh, 40)}
                    </p>
                  </div>
                  <hr className="border-[0.25px] border-gray-300 mt-6" />
                  <div className="flex justify-end">
                    <a
                      href="#"
                      className={`text-[#C41E3A] text-sm font-semibold hover:underline mt-1 ${
                        language === "en"
                          ? "font-raleway"
                          : "font-kantumruy_pro"
                      }`}
                    >
                      {language === "en"
                        ? "Learn More →"
                        : "សូមស្វែងយល់បន្ថែម →"}
                    </a>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Gradient */}
        <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Collaborate with Us */}
      <div className="bg-[#3A3B5C] text-white rounded-xl p-4 sm:p-6 shadow-md flex flex-col items-center w-[95%] max-w-6xl mx-auto mt-8 sm:mt-12">
        <h3
          className={`text-lg md:text-xl lg:text-2xl font-semibold mb-2 ${
            language === "en" ? "font-raleway" : "font-kantumruy_pro"
          }`}
        >
          {language === "en" ? "Collaborate with Us" : "សហការជាមួយយើង"}
        </h3>
        <p
          className={`mb-4 text-sm text-center ${
            language === "en" ? "font-raleway" : "font-kantumruy_pro"
          }`}
        >
          {language === "en"
            ? "Interested in research collaboration or partnership opportunities? We welcome connections with industry, government, and academic institutions."
            : "ចាប់អារម្មណ៍ក្នុងការសហការស្រាវជ្រាវ ឬឱកាសដៃគូ? យើងសូមស្វាគមន៍ការតភ្ជាប់ជាមួយឧស្សាហកម្ម រដ្ឋាភិបាល និងស្ថាប័នអប់រំ។"}
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-indigo-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            <p
              className={`inline-flex font-bold ${
                language === "en" ? "font-raleway" : "font-kantumruy_pro"
              }`}
            >
              {language === "en" ? "Contact ReDA Lab" : "ទាក់ទង ReDA Lab"}{" "}
              <span>
                <ArrowRight className="w-10" />
              </span>
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
