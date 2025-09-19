"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Trustee {
  nameEn: string;
  nameKh: string;
  titleEn: string;
  titleKh: string;
  image: string;
  quoteEn: string;
  quoteKh: string;
}

const trustees: Trustee[] = [
  {
    nameEn: "Asst. Prof. Dr. LIN Mongkulsery",
    nameKh: "ឯកឧត្តមសាស្ត្រាចារ្យ លិន មង្គុលសិរី",
    titleEn: "Acting Head of Department",
    titleKh: "អនុប្រធាននាយកដ្ឋាន",
    image: "/staff/mongkulserey.jpg",
    quoteEn:
      "I believe that the greatest gift I can give my students is not just knowledge, but the confidence to seek it for themselves. My goal is to light a spark of curiosity that will guide them long after they leave my classroom.",
    quoteKh:
      "ខ្ញុំជឿថាអំណោយដ៏ល្អបំផុតដែលខ្ញុំអាចផ្តល់ដល់សិស្សរបស់ខ្ញុំមិនមែនត្រឹមតែចំណេះដឹងទេ ប៉ុន្តែជាចំណុចទំនុកចិត្តក្នុងការស្វែងរកចំណេះដឹងដោយខ្លួនឯង។ គោលបំណងរបស់ខ្ញុំគឺបំភ្លឺភាពចន្ទនារបស់ពួកគេដែលនឹងណែនាំពួកគេច្រើនរយៈពេលបន្ទាប់ពីពួកគេចាកចេញពីថ្នាក់។",
  },
  {
    nameEn: "Asst. Prof. Dr. PHAUK Sokhhey",
    nameKh: "ឯកឧត្តមសាស្ត្រាចារ្យ ភោគ សុខខី",
    titleEn: "Head of Department",
    titleKh: "ប្រធាននាយកដ្ឋាន",
    image: "/staff/sokkhey.jpg",
    quoteEn:
      "I believe that the greatest gift I can give my students is not just knowledge, but the confidence to seek it for themselves. My goal is to light a spark of curiosity that will guide them long after they leave my classroom.",
    quoteKh:
      "ខ្ញុំជឿថាអំណោយដ៏ល្អបំផុតដែលខ្ញុំអាចផ្តល់ដល់សិស្សរបស់ខ្ញុំមិនមែនត្រឹមតែចំណេះដឹងទេ ប៉ុន្តែជាចំណុចទំនុកចិត្តក្នុងការស្វែងរកចំណេះដឹងដោយខ្លួនឯង។ គោលបំណងរបស់ខ្ញុំគឺបំភ្លឺភាពចន្ទនារបស់ពួកគេដែលនឹងណែនាំពួកគេច្រើនរយៈពេលបន្ទាប់ពីពួកគេចាកចេញពីថ្នាក់។",
  },
];

// Utility function to apply font based on language and character type
function renderTextWithFont(
  text: string,
  language: "en" | "kh",
  type: "heading" | "body"
) {
  if (language === "en") {
    return <span className={type === "heading" ? "font-playfair_display" : "font-raleway"}>{text}</span>;
  } else {
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

export default function BoardOfTrustees() {
  const { language } = useLanguage();

  return (
    <div className="pt-10 w-full">
      <h1 className="text-3xl text-black font-semibold">
        {language === "en" ? renderTextWithFont("Board of Trustees", "en", "heading") : renderTextWithFont("ក្រុមប្រឹក្សាភិបាល", "kh", "heading")}
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      {/* Trustees List */}
      <div className="pt-5 space-y-10">
        {trustees.map((trustee, index) => {
          const name = language === "en" ? trustee.nameEn : trustee.nameKh;
          const title = language === "en" ? trustee.titleEn : trustee.titleKh;
          const quote = language === "en" ? trustee.quoteEn : trustee.quoteKh;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-between gap-x-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-shrink-0 md:w-1/3">
                <img
                  src={trustee.image}
                  alt={name}
                  className="rounded-md shadow-lg w-full h-72 object-cover"
                />
              </div>

              {/* Text */}
              <div
                className={`w-full md:w-2/3 ${
                  index % 2 === 1 ? "text-left items-start" : "text-right items-end"
                } flex flex-col`}
              >
                <h3 className="text-3xl mb-3 font-semibold text-[#2E2E2E]">
                  {renderTextWithFont(name, language, "heading")}
                </h3>
                <p className="text-[#2E2E2E] mb-6 text-lg font-semibold">
                  {renderTextWithFont(title, language, "body")}
                </p>
                <div className="relative">
                  <FaQuoteLeft className="text-red-600 absolute text-xl -left-6 top-0" />
                  <p
                    className={`text-[#2E2E2E] text-base/7 leading-relaxed ${
                      index % 2 === 1 ? "pr-30 pl-10" : "pl-30 pr-10"
                    }`}
                  >
                    {renderTextWithFont(quote, language, "body")}
                  </p>
                  <FaQuoteRight className="text-red-600 absolute text-xl right-0 bottom-0" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
