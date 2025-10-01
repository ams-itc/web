"use client";
import { useLanguage } from "@/contexts/LanguageContext";

// Utility function (same as before)
function renderTextWithFont(
  text: string,
  language: "en" | "kh",
  type: "heading" | "body"
) {
  if (language === "en") {
    return <span className={type === "heading" ? "font-raleway" : "font-raleway"}>{text}</span>;
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

export default function Accreditation() {
  const { language } = useLanguage();

  const accreditations = [
    {
      imagepath: "/accreditations/success_pet.png",
      titleEn: "Certification Title",
      titleKh: "ចំណងជើងវិញ្ញាបនបត្រ",
      descriptionEn: "My name is Joofy. When I'm free, I like to fight my owner.",
      descriptionKh: "ខ្ញុំឈ្មោះ Joofy។ ពេលដែលខ្ញុំទំនេរ ខ្ញុំចូលចិត្តប្រយុទ្ធជាមួយម្ចាស់ខ្ញុំ។",
    },
    {
      imagepath: "/accreditations/success_pet_1.png",
      titleEn: "Certification Title",
      titleKh: "ចំណងជើងវិញ្ញាបនបត្រ",
      descriptionEn: "My name is Ah Peal. When I'm free, I like to fight my owner.",
      descriptionKh: "ខ្ញុំឈ្មោះ Ah Peal។ ពេលដែលខ្ញុំទំនេរ ខ្ញុំចូលចិត្តប្រយុទ្ធជាមួយម្ចាស់ខ្ញុំ។",
    },
    {
      imagepath: "/accreditations/success_pet_2.png",
      titleEn: "Certification Title",
      titleKh: "ចំណងជើងវិញ្ញាបនបត្រ",
      descriptionEn: "My name is Mister Keav. When I'm free, I like to fight my owner.",
      descriptionKh: "ខ្ញុំឈ្មោះ Mister Keav។ ពេលដែលខ្ញុំទំនេរ ខ្ញុំចូលចិត្តប្រយុទ្ធជាមួយម្ចាស់ខ្ញុំ។",
    },
    {
      imagepath: "/accreditations/success_pet.png",
      titleEn: "Certification Title",
      titleKh: "ចំណងជើងវិញ្ញាបនបត្រ",
      descriptionEn: "My name is Joofy. When I'm free, I like to fight my owner.",
      descriptionKh: "ខ្ញុំឈ្មោះ Joofy។ ពេលដែលខ្ញុំទំនេរ ខ្ញុំចូលចិត្តប្រយុទ្ធជាមួយម្ចាស់ខ្ញុំ។",
    },
    {
      imagepath: "/accreditations/success_pet_1.png",
      titleEn: "Certification Title",
      titleKh: "ចំណងជើងវិញ្ញាបនបត្រ",
      descriptionEn: "My name is Ah Peal. When I'm free, I like to fight my owner.",
      descriptionKh: "ខ្ញុំឈ្មោះ Ah Peal។ ពេលដែលខ្ញុំទំនេរ ខ្ញុំចូលចិត្តប្រយុទ្ធជាមួយម្ចាស់ខ្ញុំ។",
    },
    {
      imagepath: "/accreditations/success_pet_2.png",
      titleEn: "Certification Title",
      titleKh: "ចំណងជើងវិញ្ញាបនបត្រ",
      descriptionEn: "My name is Mister Keav. When I'm free, I like to fight my owner.",
      descriptionKh: "ខ្ញុំឈ្មោះ Mister Keav។ ពេលដែលខ្ញុំទំនេរ ខ្ញុំចូលចិត្តប្រយុទ្ធជាមួយម្ចាស់ខ្ញុំ។",
    },
  ];

  return (
    <div className="pt-10 w-full">
      <h1 className={`text-3xl text-black font-semibold ${language === "en" ? "font-playfair_display" : "font-preahvihear"}`}>
        {
          language === "en" 
          ? "Accreditation" 
          : "ការទទួលស្គាល់"
        }
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      <div className="px-3 pt-7">
        <div className="grid grid-cols-3 gap-x-20 gap-y-10">
          {accreditations.map((accreditation, index) => (
            <div key={index} className="col-span-1">
              <div className="min-h-[510px]">
                <img
                  src={accreditation.imagepath}
                  alt={`${index + 1} Image`}
                  className="rounded-lg w-full"
                />
              </div>

              <h1 className="text-lg text-black font-semibold pt-3">
                {renderTextWithFont(
                  language === "en" ? accreditation.titleEn : accreditation.titleKh,
                  language,
                  "heading"
                )}
              </h1>
              <p className="text-sm text-[#2E2E2E]">
                {renderTextWithFont(
                  language === "en" ? accreditation.descriptionEn : accreditation.descriptionKh,
                  language,
                  "body"
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
