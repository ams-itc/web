import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Helper function to add language to URLs
  const addLangToPath = (path: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("lang", language);
    return `${path}?${newParams.toString()}`;
  };

  return (
    <section className="bg-white grid grid-cols-2 md:flex-row items-center justify-center gap-36 px-20 py-16">
      <div className="max-w-xl space-y-6 col-span-1">
        {language === "en" ? (
          <>
            <h1 className="text-5xl font-bold leading-tight text-gray-900 font-playfair_display">
              Learning Today, <br /> Leading Tomorrow
            </h1>
            <p className="text-lg text-gray-600 font-raleway">
              Through world-class instruction and hands-on research opportunities,
              we prepare students at every level to excel in data-driven fields and
              contribute meaningfully to science, technology, and society.
            </p>
          </>
        ) : (
          <>
            <div className="text-5xl font-medium leading-tight text-gray-900 font-preahvihear space-y-4">
              <h1>រៀនសូត្រថ្ងៃនេះ</h1>
              <h1>ដឹកនាំថ្ងៃស្អែក</h1>
            </div>
            <p className="text-lg text-gray-600 font-kantumruy_pro leading-relaxed">
              តាមរយៈការបង្រៀនគុណភាពខ្ពស់ និងឱកាសស្រាវជ្រាវជាក់ស្តែង យើងរៀបចំ
              និស្សិតគ្រប់កម្រិតឱ្យក្លាយជាអ្នកឯកទេសក្នុងវិស័យដំណើរការទិន្នន័យ ហើយ
              ចូលរួមយ៉ាងសំខាន់ក្នុងវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា និងសង្គម។
            </p>
          </>
        )}

        <div className="flex space-x-4">
          <Link
            to={addLangToPath("/academics")}
            className="px-6 py-3 bg-[#3A3B5C] rounded-md shadow hover:bg-[#62649d] transition font-raleway text-white font-semibold"
          >
            {language === "en" ? "Explore Our Programs →" : "ស្វែងយល់អំពីកម្មវិធី →"}
          </Link>

          <Link
            to={addLangToPath("/faculty-and-research")}
            className="px-6 py-3 border border-[#C41E3A] rounded-md hover:bg-red-50 transition font-raleway text-[#C41E3A] font-semibold"
          >
            {language === "en" ? "Meet the Faculty" : "ជួបសំណេះសំណាលជាមួយគ្រូបង្រៀន"}
          </Link>
        </div>
      </div>

      <div className="mt-5 md:mt-0 col-span-1">
        <img
          src="/campus.jpg"
          alt={language === "en" ? "AMS Building" : "អគាររបស់ AMS"}
          className="rounded-lg shadow-xl/50 w-500 object-cover"
        />
      </div>
    </section>
  );
}
