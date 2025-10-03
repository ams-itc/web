"use client";

import {
  CalendarDays,
  ArrowRight,
  Award,
  Users2,
  BookMarkedIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function renderTextWithFont(
  text: string,
  language: "en" | "kh",
  type: "heading" | "body"
) {
  if (language === "en") {
    return (
      <span
        className={
          type === "heading" ? "font-playfair_display" : "font-raleway"
        }
      >
        {text}
      </span>
    );
  } else {
    const parts = text.split(/([^\u1780-\u17FF]+)/);
    return (
      <>
        {parts.map((part, i) => {
          const isKhmer = /[\u1780-\u17FF]/.test(part);
          const fontClass = isKhmer
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

interface NewsItem {
  id: number;
  category: { en: string; kh: string };
  icon: typeof Award | typeof Users2 | typeof BookMarkedIcon;
  categoryColor: "#3A3B5C" | "#C41E3A" | "#D9D9D9";
  date: { en: string; kh: string };
  title: { en: string; kh: string };
  description: { en: string; kh: string };
  image: string;
  imageLayout: "grid" | "full";
}

interface EventItem {
  id: number;
  title: { en: string; kh: string };
  speaker: { en: string; kh: string };
  date: { en: string; kh: string };
  time: { en: string; kh: string };
  location: { en: string; kh: string };
}

export default function NewsEvents() {
  const { language } = useLanguage();

  const newsData: NewsItem[] = [
    {
      id: 1,
      category: { en: "Events", kh: "ព្រឹត្តិការណ៍" },
      icon: Users2,
      categoryColor: "#3A3B5C",
      date: { en: "July 12, 2025", kh: "ថ្ងៃទី ១២ ខែកក្កដា ឆ្នាំ ២០២៥" },
      title: {
        en: "AMS 1st Generation Thesis Defense – A Historic Milestone",
        kh: "ការពារវិទ្យាសាស្ត្រ ១ របស់ AMS – ជាប្រវត្តិសាស្ត្រសំខាន់",
      },
      description: {
        en: "On July 9–10, 2025, we mark a proud and unforgettable moment for the Department of Applied Mathematics and Statistics (AMS) at ITC...",
        kh: "នៅថ្ងៃទី ៩–១០ ខែកក្កដា ឆ្នាំ ២០២៥ យើងបានច្រៀងខ្លួនឯងក្នុងពេលវេលាដ៏មានកិត្តិយសសម្រាប់ផ្នែកគណិតវិទ្យាអនុវត្តន៍ និងស្ថិតិ (AMS) នៅ ITC...",
      },
      image: "/newsAndevents/news1.png",
      imageLayout: "grid",
    },
    {
      id: 2,
      category: { en: "Awards", kh: "រង្វាន់" },
      icon: Award,
      categoryColor: "#C41E3A",
      date: { en: "July 11, 2025", kh: "ថ្ងៃទី ១១ ខែកក្កដា ឆ្នាំ ២០២៥" },
      title: {
        en: "Internship Program Announcement – 2025 DGIST Summer Research",
        kh: "ការប្រកាសកម្មវិធីអនុវត្តិការងារ – 2025 DGIST ស្រាវជ្រាវរដូវក្តៅ",
      },
      description: {
        en: "We are proud to announce that Mr. PNV Limseng, a Year 4 student from AMS, has been selected to participate in the 2025 Summer Research Internship...",
        kh: "យើងមានកិត្តិយសប្រកាសថាសិស្ស PNV Limseng, ឆ្នាំទី ៤, ពី AMS ត្រូវបានជ្រើសរើសចូលរួមកម្មវិធីស្រាវជ្រាវរដូវក្តៅ ២០២៥...",
      },
      image: "/newsAndevents/news2.png",
      imageLayout: "full",
    },
    {
      id: 3,
      category: { en: "Programs", kh: "កម្មវិធី" },
      icon: BookMarkedIcon,
      categoryColor: "#D9D9D9",
      date: { en: "July 12, 2025", kh: "ថ្ងៃទី ១២ ខែកក្កដា ឆ្នាំ ២០២៥" },
      title: {
        en: "Master Program in Data Science (M-DAS) 2025 Announcement",
        kh: "ការប្រកាសកម្មវិធីសញ្ញាបត្រមាស្ទើរ ក្នុងវិទ្យាសាស្ត្រទិន្នន័យ (M-DAS) ២០២៥",
      },
      description: {
        en: "The Graduate School (GSI) of ITC and AMS are now accepting applications for the Master’s Program in Data Science (M-DAS) for 2025...",
        kh: "សាលាឧត្តមសិក្សា (GSI) នៃ ITC និង AMS កំពុងទទួលពាក្យស្នើសុំសម្រាប់កម្មវិធីសញ្ញាបត្រមាស្ទើរ M-DAS សម្រាប់ឆ្នាំ ២០២៥...",
      },
      image: "/newsAndevents/news3.png",
      imageLayout: "full",
    },
  ];

  const UpcomingEvents: EventItem[] = [
    {
      id: 1,
      title: { en: "Sharing Sessions", kh: "វគ្គចែករំលែក" },
      speaker: { en: "AMS Alumni", kh: "អតីតសិស្ស AMS" },
      date: { en: "August 12, 2025", kh: "ថ្ងៃទី ១២ ខែសីហា ឆ្នាំ ២០២៥" },
      time: { en: "9:00 AM", kh: "ម៉ោង ៩:០០ ព្រឹក" },
      location: { en: "SF1, Building F", kh: "SF1, អគារ F" },
    },
    {
      id: 2,
      title: {
        en: "Seminar on AI in Public Health",
        kh: "សិក្ខាសាលា AI ក្នុងសុខភាពសាធារណៈ",
      },
      speaker: {
        en: "Dr. Phauk Sokkhey, ITC",
        kh: "សាស្រ្តាចារ្យ ភោគ សុខខី, ITC",
      },
      date: { en: "August 27, 2025", kh: "ថ្ងៃទី ២៧ ខែសីហា ឆ្នាំ ២០២៥" },
      time: { en: "9:00 AM", kh: "ម៉ោង ៩:០០ ព្រឹក" },
      location: {
        en: "Innovation Centre, CADT",
        kh: "មជ្ឈមណ្ឌលច្នៃប្រឌិត, CADT",
      },
    },
    {
      id: 3,
      title: {
        en: "Master of Engineering in Data Science M-DAS Roadshow",
        kh: "កម្មវិធីដំណើរការទូទាំងប្រទេស M-DAS",
      },
      speaker: { en: "Dr. Lin Mongkulsery", kh: "សាស្រ្តាចារ្យ លិន មង្គលសិរី" },
      date: { en: "July 12, 2025", kh: "ថ្ងៃទី ១២ ខែកក្កដា ឆ្នាំ ២០២៥" },
      time: { en: "9:00 AM", kh: "ម៉ោង ៩:០០ ព្រឹក" },
      location: { en: "SF1, Building F", kh: "SF1, អគារ F" },
    },
  ];

  return (
<section className="bg-gray-50 py-8 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    {/* Title */}
    <div className="text-center mb-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
        {renderTextWithFont(
          language === "en"
            ? "Latest News & Events"
            : "ព័ត៌មានថ្មីៗ និង ព្រឹត្តិការណ៍",
          language,
          "heading"
        )}
      </h2>
      <p className="text-[#2E2E2E]/80 mt-2 text-xs md:text-sm">
        {renderTextWithFont(
          language === "en"
            ? "Stay updated with the latest news, events, and achievements from our department."
            : "ទទួលបានព័ត៌មានថ្មីៗ ព្រឹត្តិការណ៍ និងសមិទ្ធផលពីផ្នែករបស់យើង។",
          language,
          "body"
        )}
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-x-6">
      {/* Left: Recent News */}
      <div className="md:col-span-2 space-y-4">
        <h1 className="text-lg md:text-xl lg:text-2xl text-black">
          {renderTextWithFont(
            language === "en" ? "Recent News" : "ព័ត៌មានថ្មីៗ",
            language,
            "heading"
          )}
        </h1>
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden grid grid-cols-3 h-auto"
          >
            <img
              src={news.image}
              alt={language === "en" ? news.title.en : news.title.kh}
              className="h-fit object-cover col-span-1"
            />
            <div className="px-2 py-1.5 lg:p-4 col-span-2 h-full relative flex flex-col">
              <div className="flex items-center justify-between text-[10px] md:text-xs lg:text-sm mb-1 lg:mb-2">
  <span
    style={{ backgroundColor: news.categoryColor }}
    className={`${
      news.categoryColor.toLowerCase().includes("d9d9d9")
        ? "text-black"
        : "text-white"
    } px-1.5 py-0.5 rounded-full text-[8px] md:text-[10px] lg:text-sm font-medium inline-flex items-center gap-0.5`}
  >
    {news.icon && (
      <news.icon className="inline-block mr-1" size={10} />
    )}
    {renderTextWithFont(
      language === "en" ? news.category.en : news.category.kh,
      language,
      "body"
    )}
  </span>
  <span className="flex items-center gap-0.5 text-gray-500 text-[8px] md:text-[10px] lg:text-sm lg:mb-1.5">
    <CalendarDays size={10} />{" "}
    {renderTextWithFont(
      language === "en" ? news.date.en : news.date.kh,
      language,
      "body"
    )}
  </span>
</div>

<h3 className="text-xs md:text-base lg:text-xl font-semibold text-gray-800 mb-1">
  {renderTextWithFont(
    language === "en" ? news.title.en : news.title.kh,
    language,
    "heading"
  )}
</h3>

<p className="text-gray-600 text-[8px] md:text-[11px] lg:text-sm lg:mb-3 leading-snug">
  {renderTextWithFont(
    language === "en" ? news.description.en : news.description.kh,
    language,
    "body"
  )}
</p>
  {/* Spacer pushes link to bottom */}
  <div className="flex-grow" />

  {/* Link pinned to bottom-left */}
  <a
    href="#"
    className="text-[#C41E3A] font-medium text-[8px] md:text-[11px] lg:text-sm inline-flex items-center gap-0.5 hover:underline"
  >
    {renderTextWithFont(
      language === "en" ? "Read Full Article" : "អានអត្ថបទពេញ",
      language,
      "body"
    )}{" "}
    <ArrowRight size={10} />
  </a>

            </div>
          </div>
        ))}
      </div>

      {/* Right: Upcoming Events */}
      <div className="space-y-4 mt-2 lg:mt-0">
        <h1 className="text-xl text-black">
          {renderTextWithFont(
            language === "en" ? "Upcoming Events" : "ព្រឹត្តិការណ៍ខាងមុខ",
            language,
            "heading"
          )}
        </h1>
        {UpcomingEvents.map((event) => (
          <div
            key={event.id}
            className="rounded-xl space-y-3 shadow hover:shadow-lg transition"
          >
            <div className="bg-white shadow rounded-xl p-3 border border-gray-200">
              <h1 className="text-xs lg:text-sm text-black mb-1">
                {renderTextWithFont(
                  language === "en" ? event.title.en : event.title.kh,
                  language,
                  "heading"
                )}
              </h1>
              <div className="text-xs text-gray-600 space-y-0.5 mt-1">
                <h2 className="text-xs mb-0.5">
                  {renderTextWithFont(
                    language === "en" ? event.speaker.en : event.speaker.kh,
                    language,
                    "body"
                  )}
                </h2>
                <span className="inline-flex gap-1 items-center">
                  <CalendarDays size={12} />{" "}
                  {renderTextWithFont(
                    language === "en" ? event.date.en : event.date.kh,
                    language,
                    "body"
                  )}
                </span>
                <p className="text-xs">
                  {renderTextWithFont(
                    language === "en" ? event.time.en : event.time.kh,
                    language,
                    "body"
                  )}
                </p>
                <p className="text-xs">
                  {renderTextWithFont(
                    language === "en" ? event.location.en : event.location.kh,
                    language,
                    "body"
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Newsletter */}
        <div className="bg-[#3A3B5C] text-white rounded-xl p-4 space-y-3">
          <h4 className="font-semibold mb-1 text-sm">
            {renderTextWithFont(
              language === "en"
                ? "Stay Connected"
                : "សូមភ្ជាប់ជាមួយយើង ដើម្បីទទួលបានព័ត៌មាន និងព្រឹត្តិការណ៍ថ្មីៗ",
              language,
              "heading"
            )}
          </h4>
          <p className="text-xs text-white mb-2">
            {renderTextWithFont(
              language === "en"
                ? "Subscribe to our newsletter for the latest updates and events"
                : "ចុះឈ្មោះដើម្បីទទួលព័ត៌មានថ្មីៗ និងព្រឹត្តិការណ៍",
              language,
              "body"
            )}
          </p>
          <button className="w-full bg-white text-[#3A3B5C] py-1.5 rounded-xl text-xs font-semibold hover:bg-gray-200 hover:text-[#4f507d] transition">
            {renderTextWithFont(
              language === "en" ? "Subscribe" : "ចុះឈ្មោះ",
              language,
              "body"
            )}
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
