import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";
import { universityService } from "@/lib/services/university";

/* -------------------- TYPES -------------------- */
interface Course {
  title: { en: string; kh: string };
  year: number;
  semester: string;
  specialist?: string;
  credit: number;
  code_name: string;
}

interface YearCurriculum {
  semester1: Course[];
  semester2: Course[];
  totalCredit: number;
  totalCredit2: number;
}

interface Curriculum {
  [key: string]: YearCurriculum;
}

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
  year2: { en: "Year 2", kh: "ឆ្នាំទី ២" },
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

  /* ---- Fetch from API ---- */
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const result = await universityService.getAll("course");
        if (Array.isArray(result)) setCourses(result as unknown as Course[]);
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
          language === "en" ? "Loading curriculum..." : "កំពុងផ្ទុកកម្មវិធីសិក្សា...",
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
    <div className="w-auto bg-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-[clamp(1.5rem,2vw,2rem)] font-playfair_display text-black font-semibold">
        {renderTextWithFont(
          language === "en" ? "Bachelor Degree Curriculum" : "កម្មវិធីសិក្សាបរិញ្ញាបត្រ",
          language,
          "heading"
        )}
      </h1>

      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      {/* Year Tabs */}
      <div className="grid grid-cols-5 my-5">
        {Object.keys(curriculum).map((yearKey) => (
          <button
            key={yearKey}
            className={`py-3 px-2 border border-gray-300 ${
              selectedYear === yearKey
                ? "bg-[#D9D9D9] text-black"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelectedYear(yearKey as keyof Curriculum)}
          >
            {yearLabels[yearKey]?.[language] ||
              yearKey.replace("year", "Year ")}
          </button>
        ))}
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Semester 1 */}
            <div>
              <h3 className="font-semibold text-[#3A3B5C] text-lg mb-2">
                {language === "en" ? "Semester 1" : "ឆមាស ១"}
              </h3>
              <ul className="border rounded-lg divide-y">
                {yearData.semester1.map((c) => (
                  <li
                    key={c.code_name}
                    className="flex justify-between p-3 text-gray-700"
                  >
                    <span>
                      {renderTextWithFont(
                        language === "en" ? c.title.en : c.title.kh,
                        language,
                        "body"
                      )}
                    </span>
                    <span>{c.credit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-right font-semibold text-[#C41E3A]">
                Total: {yearData.totalCredit}
              </p>
            </div>

            {/* Semester 2 */}
            <div>
              <h3 className="font-semibold text-[#3A3B5C] text-lg mb-2">
                {language === "en" ? "Semester 2" : "ឆមាស ២"}
              </h3>
              <ul className="border rounded-lg divide-y">
                {yearData.semester2.map((c) => (
                  <li
                    key={c.code_name}
                    className="flex justify-between p-3 text-gray-700"
                  >
                    <span>
                      {renderTextWithFont(
                        language === "en" ? c.title.en : c.title.kh,
                        language,
                        "body"
                      )}
                    </span>
                    <span>{c.credit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-right font-semibold text-[#C41E3A]">
                Total: {yearData.totalCredit2}
              </p>
            </div>
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
