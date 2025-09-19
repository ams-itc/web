"use client";

import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Utility function to apply font based on language and character type
function renderTextWithFont(text: string, language: "en" | "kh", type: "heading" | "body") {
  if (language === "en") {
    return <span className={type === "heading" ? "font-playfair_display" : "font-raleway"}>{text}</span>;
  } else {
    // Split text into Khmer vs non-Khmer parts
    const parts = text.split(/([^\u1780-\u17FF]+)/); // match non-Khmer sequences
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
        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          {language === "en"
            ? renderTextWithFont("Learning Today, Leading Tomorrow", language, "heading")
            : (
                <>
                  <div className="space-y-4">
                    <h1>{renderTextWithFont("រៀនសូត្រថ្ងៃនេះ", language, "heading")}</h1>
                    <h1>{renderTextWithFont("ដឹកនាំថ្ងៃស្អែក", language, "heading")}</h1>
                  </div>
                </>
              )}
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          {language === "en"
            ? renderTextWithFont(
                "Through world-class instruction and hands-on research opportunities, we prepare students at every level to excel in data-driven fields and contribute meaningfully to science, technology, and society.",
                language,
                "body"
              )
            : renderTextWithFont(
                "តាមរយៈការបង្រៀនគុណភាពខ្ពស់ និងឱកាសស្រាវជ្រាវជាក់ស្តែង យើងរៀបចំនិស្សិតគ្រប់កម្រិតឱ្យក្លាយជាអ្នកឯកទេសក្នុងវិស័យដំណើរការទិន្នន័យ ហើយចូលរួមយ៉ាងសំខាន់ក្នុងវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា និងសង្គម។",
                language,
                "body"
              )}
        </p>

        <div className="flex space-x-4">
          <Link
            to={addLangToPath("/academics")}
            className="px-6 py-3 bg-[#3A3B5C] rounded-md shadow hover:bg-[#62649d] transition font-raleway text-white font-semibold"
          >
            {language === "en"
              ? renderTextWithFont("Explore Our Programs →", language, "body")
              : renderTextWithFont("ស្វែងយល់អំពីកម្មវិធី →", language, "body")}
          </Link>

          <Link
            to={addLangToPath("/faculty-and-research")}
            className="px-6 py-3 border border-[#C41E3A] rounded-md hover:bg-red-50 transition font-raleway text-[#C41E3A] font-semibold"
          >
            {language === "en"
              ? renderTextWithFont("Meet the Faculty", language, "body")
              : renderTextWithFont("ជួបសំណេះសំណាលជាមួយគ្រូបង្រៀន", language, "body")}
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
