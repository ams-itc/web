import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { universityService } from "@/lib/services/university";
import type { Course, Curriculum } from "@/types/types";
import type { ReactNode } from "react";

/* -------------------- HELPERS -------------------- */
function renderTextWithFont(
  text: ReactNode,
  language: "en" | "kh",
  type: "heading" | "body"
) {
  const fontClass =
    language === "en"
      ? type === "heading"
        ? "font-playfair_display"
        : "font-reddit_sans"
      : type === "heading"
      ? "font-preahvihear"
      : "font-kantumruy_pro";

  return <span className={fontClass}>{text}</span>;
}

const yearLabels: Record<string, { en: string; kh: string }> = {
  year1: { en: "Year 1 (Foundation Year)", kh: "ឆ្នាំទី ១ (ឆ្នាំមូលដ្ឋាន)" },
  year2: { en: "Year 2 (Foundation Year)", kh: "ឆ្នាំទី ២ (ឆ្នាំមូលដ្ឋាន)" },
  year3: { en: "Year 3", kh: "ឆ្នាំទី ៣" },
  year4: { en: "Year 4", kh: "ឆ្នាំទី ៤" },
  year5: { en: "Year 5", kh: "ឆ្នាំទី ៥" },
};

/* -------------------- COMPONENT -------------------- */
export default function BachelorDegree() {
  const [selectedYear, setSelectedYear] = useState<keyof Curriculum>("year1");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  /* ---- Fetch and map API ---- */
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const result = await universityService.getAll("course");
        // Map Entity[] -> Course[]
        const coursesData: Course[] = (result || [])
          .map((e) => {
            if (!e.title || !e.year || !e.semester || !e.credit || !e.code_name)
              return null;
            return {
              title: e.title,
              year: e.year,
              semester: e.semester,
              credit: e.credit,
              code_name: e.code_name,
              specialist: e.specialist,
            } as Course;
          })
          .filter(Boolean) as Course[];
        setCourses(coursesData);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  /* ---- Transform flat data into curriculum ---- */
  const curriculum: Curriculum = useMemo(() => {
    const structure: Curriculum = {};
    courses.forEach((c) => {
      const yearKey = `year${c.year}`;
      if (!structure[yearKey]) {
        structure[yearKey] = {
          semester1: [],
          semester2: [],
          totalCredit: 0,
          totalCredit2: 0,
        };
      }
      if (c.semester === "1") {
        structure[yearKey].semester1.push(c);
        structure[yearKey].totalCredit += c.credit;
      } else if (c.semester === "2") {
        structure[yearKey].semester2.push(c);
        structure[yearKey].totalCredit2 += c.credit;
      }
    });
    return structure;
  }, [courses]);

  const yearData = curriculum[selectedYear];

  /* ---- Render ---- */
  if (loading)
    return (
      <p className="text-center py-10 text-gray-600">
        {renderTextWithFont(
          language === "en"
            ? "Loading curriculum..."
            : "កំពុងផ្ទុកកម្មវិធីសិក្សា...",
          language,
          "body"
        )}
      </p>
    );

  if (!courses.length)
    return (
      <p className="text-center py-10 text-red-500">
        {renderTextWithFont(
          language === "en" ? "No course data found." : "មិនមានទិន្នន័យមុខវិជ្ជា។",
          language,
          "body"
        )}
      </p>
    );

  return (
    <div className="w-full max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-[clamp(1.5rem,2vw,2rem)] font-playfair_display text-black font-semibold">
        {renderTextWithFont(
          language === "en"
            ? "Bachelor Degree Curriculum"
            : "កម្មវិធីសិក្សាបរិញ្ញាបត្រ",
          language,
          "heading"
        )}
      </h1>

      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      {/* Year Tabs */}
      <div className="flex border border-gray-300 rounded-lg overflow-hidden my-5">
        {Object.keys(curriculum).map((yearKey, index, arr) => {
          const isSelected = selectedYear === yearKey;
          return (
            <button
              key={yearKey}
              className={`flex-1 py-2 sm:py-3 text-sm sm:text-base transition-colors duration-200 ${
                isSelected
                  ? "bg-[#D9D9D9] text-black"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              } ${index === 0 ? "rounded-l-lg" : ""} ${
                index === arr.length - 1 ? "rounded-r-lg" : ""
              }`}
              onClick={() => setSelectedYear(yearKey as keyof Curriculum)}
            >
              {yearLabels[yearKey]?.[language] || yearKey.replace("year", "Year ")}
            </button>
          );
        })}
      </div>

      {/* Curriculum Display */}
      {yearData ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
          >
            {[1, 2].map((sem) => {
              const semesterData = sem === 1 ? yearData.semester1 : yearData.semester2;
              const total = sem === 1 ? yearData.totalCredit : yearData.totalCredit2;
              return (
                <div key={sem} className="flex flex-col h-full min-w-0">
                  {/* Header */}
                  <div className="grid grid-cols-[1fr_5fr_64px] py-2 px-4 text-[clamp(1rem,2vw,1.25rem)] text-[#3A3B5C] bg-gray-50 items-center rounded-t-lg font-raleway">
                    <h3 className="col-span-2 font-semibold">
                      {renderTextWithFont(
                        language === "en"
                          ? `Semester ${sem}`
                          : `ឆមាស ${sem}`,
                        language,
                        "heading"
                      )}
                    </h3>
                    <h3 className="col-span-1 text-center font-semibold">
                      {renderTextWithFont(
                        language === "en" ? "Credit" : "ក្រេឌីត",
                        language,
                        "heading"
                      )}
                    </h3>
                  </div>

                  {/* Courses */}
                  <ul className="flex-1 overflow-auto max-h-[70vh] min-w-0">
                    {semesterData.map((c) => (
                      <li
                        key={c.code_name + c.semester}
                        className="flex items-start justify-between border-b py-4 px-3 sm:px-4 text-[clamp(0.875rem,1.5vw,1rem)] font-medium text-[#767676] min-w-0"
                      >
                        <div className="flex flex-1 gap-4 min-w-0">
                          <p className="flex-none font-semibold">{c.code_name}</p>
                          <p className="flex-1 break-words">{renderTextWithFont(
                            language === "en" ? c.title.en : c.title.kh,
                            language,
                            "body"
                          )}</p>
                        </div>
                        <span className="flex-none text-center w-12">{c.credit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Total */}
                  <div className="grid grid-cols-[1fr_64px] py-4 px-4 text-[clamp(0.875rem,1.5vw,1rem)] text-[#3A3B5C] bg-gray-50 items-center rounded-b-lg font-bold min-w-0">
                    <h3 className={`${language === "en" ? "font-raleway" : "font-preahvihear"}`}>
                      {language === "en"
                        ? `Total Semester ${sem} (${yearLabels[selectedYear]?.[language]})`
                        : `សរុបក្រេឌីតឆមាសទី${sem} សម្រាប់ ${yearLabels[selectedYear]?.[language]}`}
                    </h3>
                    <h3 className="text-center font-reddit_sans">{total}</h3>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      ) : (
        <p className="text-gray-500 italic mt-4">
          {language === "en"
            ? "No curriculum data available for this year."
            : "គ្មានទិន្នន័យកម្មវិធីសិក្សាសម្រាប់ឆ្នាំនេះ។"}
        </p>
      )}
    </div>
  );
}
