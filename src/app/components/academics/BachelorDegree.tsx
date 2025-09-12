import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------- 1. INTERFACES -------------------- */
interface Course {
  code: string;
  name: string;
  credit: number;
}

interface YearCurriculum {
  semester1: Course[];
  totalCredit: number;
  semester2: Course[];
  totalCredit2: number;
}

interface Curriculum {
  year1: YearCurriculum;
  year2: YearCurriculum;
  year3: YearCurriculum;
  year4: YearCurriculum;
  year5: YearCurriculum;
  // add year2, year3, etc. as needed
}

interface CareerPath {
  title: string;
  description: string;
}

interface CareerOpportunities {
  description: string;
  career_path: CareerPath[];
}

interface LearningDescription {
  text: string;
}

interface LearningOutcomes {
  title: string;
  learning_description: LearningDescription[];
}

interface Program {
  title: string;
  overview: string;
  curriculum: Curriculum;
  career_opportunities: CareerOpportunities[];
  learningOutcomes: LearningOutcomes[];
}

type ProgramKey = "dataScience" | "financialEngineering";

/* -------------------- 2. STATIC DATA -------------------- */
const programs: Record<ProgramKey, Program> = {
  dataScience: {
    title: "Bachelor of Engineering in Data Science",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    curriculum: {
      year1: {
        semester1: [
          { code: "DTC11ANL", name: "Calculus I", credit: 3 },
          { code: "DTC11MCN", name: "Mechanics I", credit: 3 },
          { code: "DTC11GEC", name: "Management & Accounting", credit: 3 },
          { code: "DTC11PHI", name: "Philosophy", credit: 2 },
          { code: "DTC11HIS", name: "History", credit: 2 },
          { code: "DTC11FRA", name: "French", credit: 3 },
        ],
        totalCredit: 16,
        semester2: [
          { code: "DTC12INF", name: "Introduction to ICT", credit: 2 },
          { code: "DTC12ANL", name: "Calculus II", credit: 3 },
          { code: "DTC12TMD", name: "Thermodynamics", credit: 3 },
          { code: "DTC12MKT", name: "Marketing", credit: 2 },
          { code: "DTC12TDN", name: "Technical Drawing", credit: 2 },
          { code: "DTC12ENV", name: "Environment", credit: 2 },
          { code: "DTC12FRA", name: "French", credit: 3 },
        ],
        totalCredit2: 17,
      },
      year2: {
        semester1: [
          { code: "DTC11ANL", name: "Calculus II", credit: 3 },
          { code: "DTC11MCN", name: "Mechanics II", credit: 3 },
          { code: "DTC11GEC", name: "Management & Accounting", credit: 3 },
          { code: "DTC11PHI", name: "Philosophy", credit: 2 },
          { code: "DTC11HIS", name: "History", credit: 2 },
          { code: "DTC11FRA", name: "French", credit: 3 },
        ],
        totalCredit: 16,
        semester2: [
          { code: "DTC12INF", name: "Introduction to ICT", credit: 2 },
          { code: "DTC12ANL", name: "Calculus II", credit: 3 },
          { code: "DTC12TMD", name: "Thermodynamics", credit: 3 },
          { code: "DTC12MKT", name: "Marketing", credit: 2 },
          { code: "DTC12TDN", name: "Technical Drawing", credit: 2 },
          { code: "DTC12ENV", name: "Environment", credit: 2 },
          { code: "DTC12FRA", name: "French", credit: 3 },
        ],
        totalCredit2: 17,
      },
      year3: {
        semester1: [
          { code: "DTC11ANL", name: "Calculus I", credit: 3 },
          { code: "DTC11MCN", name: "Mechanics I", credit: 3 },
          { code: "DTC11GEC", name: "Management & Accounting", credit: 3 },
          { code: "DTC11PHI", name: "Philosophy", credit: 2 },
          { code: "DTC11HIS", name: "History", credit: 2 },
          { code: "DTC11FRA", name: "French", credit: 3 },
        ],
        totalCredit: 16,
        semester2: [
          { code: "DTC12INF", name: "Introduction to ICT", credit: 2 },
          { code: "DTC12ANL", name: "Calculus II", credit: 3 },
          { code: "DTC12TMD", name: "Thermodynamics", credit: 3 },
          { code: "DTC12MKT", name: "Marketing", credit: 2 },
          { code: "DTC12TDN", name: "Technical Drawing", credit: 2 },
          { code: "DTC12ENV", name: "Environment", credit: 2 },
          { code: "DTC12FRA", name: "French", credit: 3 },
        ],
        totalCredit2: 17,
      },
      year4: {
        semester1: [
          { code: "", name: "", credit: 0 },
        ],
        totalCredit: 0,
        semester2: [
          { code: "", name: "", credit: 0 },
        ],
        totalCredit2: 0,
      },
      year5: {
        semester1: [
          { code: "", name: "", credit: 0 },
        ],
        totalCredit: 0,
        semester2: [
          { code: "", name: "", credit: 0 },
        ],
        totalCredit2: 0,
      }
    },
    career_opportunities: [
      {
        description:
          "Data science offers a wide array of career opportunities, ranging from specialized roles like data scientists and engineers to more general roles like business analysts. These roles often involve analyzing data, developing models, and building infrastructure to support data-driven decision-making. Many of these positions are in high demand, with projected growth in the field expected to be faster than average.",
        career_path: [
          {
            title: "Data Scientist",
            description:
              "Focuses on extracting insights, building predictive models, and developing strategies from complex data.",
          },
          {
            title: "Data Engineer",
            description:
              "Builds and manages the infrastructure for collecting, storing, and processing data.",
          },
          {
            title: "Machine Learning Engineer",
            description:
              "Develops and implements machine learning algorithms and models.",
          },
          {
            title: "Data Analyst",
            description:
              "Analyzes data to provide insights, often using tools like SQL and visualization software.",
          },
          {
            title: "Data Architecture",
            description:
              "Designs the overall structure and framework for managing data within an organization.",
          },
          {
            title: "Business Intelligence Analyst",
            description:
              "Focuses on using data to improve business performance and decision-making.",
          },
          {
            title: "Statistician",
            description:
              "Applies statistical methods to analyze data and draw conclusions.",
          },
          {
            title: "Database Administrator",
            description: "Manages and maintains database systems.",
          },
          {
            title: "AI Research Scientist",
            description: "Conducts research and develops new AI technologies.",
          },
        ],
      },
    ],
    learningOutcomes: [
      {
        title: "Computational and Programming Proficiency",
        learning_description: [
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."},
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."}
        ]
      },
      {
        title: "Analytical and Modeling Skills",
        learning_description: [
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."},
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."}
        ]
      },
      {
        title: "Engineering and Systems Integration",
        learning_description: [
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."},
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."}
        ]
      },
      {
        title: "Ethical and Professional Practice",
        learning_description: [
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."},
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."}
        ]
      }
    ]
  },
  financialEngineering: {
    title: "Bachelor of Engineering in Financial Engineering",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    curriculum: {
      year1: {
        semester1: [],
        totalCredit: 0,
        semester2: [],
        totalCredit2: 0,
      },
      year2: {
        semester1: [
          { code: "DTC11ANL", name: "Calculus I", credit: 3 },
          { code: "DTC11MCN", name: "Mechanics I", credit: 3 },
          { code: "DTC11GEC", name: "Management & Accounting", credit: 3 },
          { code: "DTC11PHI", name: "Philosophy", credit: 2 },
          { code: "DTC11HIS", name: "History", credit: 2 },
          { code: "DTC11FRA", name: "French", credit: 3 },
        ],
        totalCredit: 16,
        semester2: [
          { code: "DTC12INF", name: "Introduction to ICT", credit: 2 },
          { code: "DTC12ANL", name: "Calculus II", credit: 3 },
          { code: "DTC12TMD", name: "Thermodynamics", credit: 3 },
          { code: "DTC12MKT", name: "Marketing", credit: 2 },
          { code: "DTC12TDN", name: "Technical Drawing", credit: 2 },
          { code: "DTC12ENV", name: "Environment", credit: 2 },
          { code: "DTC12FRA", name: "French", credit: 3 },
        ],
        totalCredit2: 17,
      },
      year3: {
        semester1: [
          { code: "DTC11ANL", name: "Calculus I", credit: 3 },
          { code: "DTC11MCN", name: "Mechanics I", credit: 3 },
          { code: "DTC11GEC", name: "Management & Accounting", credit: 3 },
          { code: "DTC11PHI", name: "Philosophy", credit: 2 },
          { code: "DTC11HIS", name: "History", credit: 2 },
          { code: "DTC11FRA", name: "French", credit: 3 },
        ],
        totalCredit: 16,
        semester2: [
          { code: "DTC12INF", name: "Introduction to ICT", credit: 2 },
          { code: "DTC12ANL", name: "Calculus II", credit: 3 },
          { code: "DTC12TMD", name: "Thermodynamics", credit: 3 },
          { code: "DTC12MKT", name: "Marketing", credit: 2 },
          { code: "DTC12TDN", name: "Technical Drawing", credit: 2 },
          { code: "DTC12ENV", name: "Environment", credit: 2 },
          { code: "DTC12FRA", name: "French", credit: 3 },
        ],
        totalCredit2: 17,
      },
      year4: {
        semester1: [
          { code: "", name: "", credit: 0 },
        ],
        totalCredit: 0,
        semester2: [
          { code: "", name: "", credit: 0 },
        ],
        totalCredit2: 0,
      },
      year5: {
        semester1: [
          { code: "", name: "", credit: 0 },
        ],
        totalCredit: 0,
        semester2: [
          { code: "", name: "", credit: 0 },
        ],
        totalCredit2: 0,
      }
    },
    career_opportunities: [
      {
        description:
          "Data science offers a wide array of career opportunities, ranging from specialized roles like data scientists and engineers to more general roles like business analysts. These roles often involve analyzing data, developing models, and building infrastructure to support data-driven decision-making. Many of these positions are in high demand, with projected growth in the field expected to be faster than average.",
        career_path: [
          {
            title: "Data Scientist",
            description:
              "Focuses on extracting insights, building predictive models, and developing strategies from complex data.",
          },
          {
            title: "Data Engineer",
            description:
              "Builds and manages the infrastructure for collecting, storing, and processing data.",
          },
          {
            title: "Machine Learning Engineer",
            description:
              "Develops and implements machine learning algorithms and models.",
          },
          {
            title: "Data Analyst",
            description:
              "Analyzes data to provide insights, often using tools like SQL and visualization software.",
          },
          {
            title: "Data Architecture",
            description:
              "Designs the overall structure and framework for managing data within an organization.",
          },
          {
            title: "Business Intelligence Analyst",
            description:
              "Focuses on using data to improve business performance and decision-making.",
          },
          {
            title: "Statistician",
            description:
              "Applies statistical methods to analyze data and draw conclusions.",
          },
          {
            title: "Database Administrator",
            description: "Manages and maintains database systems.",
          },
          {
            title: "AI Research Scientist",
            description: "Conducts research and develops new AI technologies.",
          },
        ],
      },
    ],
    learningOutcomes: [
      {
        title: "Computational and Programming Proficiency",
        learning_description: [
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."},
          {text: "Demonstrate expertise in data engineering principles, including data collection, cleaning, transformation, and storage in various database systems (e.g., SQL, NoSQL)."}
        ]
      },
      {
        title: "Analytical and Modeling Skills",
        learning_description: [
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."},
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."}
        ]
      },
      {
        title: "Engineering and Systems Integration",
        learning_description: [
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."},
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."}
        ]
      },
      {
        title: "Ethical and Professional Practice",
        learning_description: [
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."},
          {text: "Design, develop, and optimize robust software applications and scalable data pipelines using object-oriented programming languages (e.g., Python, Java) and modern data frameworks (e.g., PySpark, Pandas)."}
        ]
      }
    ]
  },
};

const yearLabels: Record<string, string> = {
  year1: "Year 1 (Foundation Year)",
  year2: "Year 2 (Foundation Year)",
  year3: "Year 3",
  year4: "Year 4",
  year5: "Year 5"
};

/* -------------------- 3. COMPONENT -------------------- */
export default function BachelorDegree() {
  const [selected, setSelected] = useState<ProgramKey>("dataScience");
  const [selectedYear, setSelectedYear] = useState<keyof Curriculum>("year1");
  const program = programs[selected];
  const yearData = program.curriculum[selectedYear];


  return (
    <div className="w-full">
      <h1 className="text-3xl font-playfair_display text-black font-semibold">
        Bachelor's Degree
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
      {/* Bachelor's Degree Tabs */}
      <div className="bg-white shadow-md">
        <div className="w-full grid grid-cols-2">
          <button
            className={`col-span-1 py-3 text-left font-medium px-3 text-xl ${
              selected === "dataScience"
                ? "bg-[#D9D9D9] text-black"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => setSelected("dataScience")}
          >
            Bachelor of Engineering in <span className="text-[#C41E3A]">Data Science</span>
          </button>
          <button
            className={`col-span-1 py-3 text-left font-medium px-3 text-xl ${
              selected === "financialEngineering"
                ? "bg-[#D9D9D9] text-black"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setSelected("financialEngineering")}
          >
            Bachelor of Engineering in <span className="text-[#C41E3A]">Financial Engineering</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl py-6">

        {/* Overview */}
        <section className="mb-5">
          <h2 className="text-xl font-extrabold mb-2 text-[#3A3B5C]">Program Overview</h2>
          <p className="font-raleway text-[#2E2E2E]">{program.overview}</p>
        </section>

        {/* Curriculum */}
        <section className="mb-8">
          <h2 className="text-xl font-extrabold mb-2 text-[#3A3B5C] font-raleway">Curriculum Structure</h2>
          {/* Year Tab */}
          <div className="bg-white">
            <div className="w-full grid grid-cols-5">
              {Object.keys(program.curriculum).map((yearKey) => (
                <button
                  key={yearKey}
                  className={`py-3 font-medium px-2 text-base border border-gray-300 font-reddit_sans ${
                    selectedYear === yearKey ? "bg-[#D9D9D9] text-black" : "bg-gray-100 text-black"
                  }`}
                  onClick={() => setSelectedYear(yearKey as keyof Curriculum)}
                >
                  {yearLabels[yearKey] || yearKey.replace("year", "Year ")}
                  {selectedYear === yearKey && (
                    <motion.div
                      layoutId="underline"
                      className=""
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div >
          {/* Animated Curriculum Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedYear}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-2 divide-x-2 divide-gray-400 mt-5 "
              >
                {/* Column 1 - Semester 1 */}
                <div className="grid grid-rows-7 divide-y-2 divide-gray-400">
                  {/* Header */}
                  <div className="grid grid-cols-5 py-2 row-span-1 px-4 text-lg text-[#3A3B5C] bg-gray-50 items-center rounded-t-xl font-raleway">
                    <h3 className="font-semibold col-span-4">Semester 1</h3>
                    <h3 className="font-semibold col-span-1 text-center">Credit</h3>
                  </div>

                  {/* Courses */}
                  <ul className="overflow-y-auto row-span-5">
                    {yearData.semester1?.map((c) => (
                      <li
                        key={c.code}
                        className="grid grid-cols-5 border-b pt-5 pb-5 px-4 text-base font-medium text-[#767676] space-y-2 font-reddit_sans "
                      >
                        <div className="col-span-4 grid grid-cols-4 space-x-7">
                          <p className="col-span-1">{c.code}</p>
                          <p className="col-span-3">{c.name}</p>
                        </div>
                        <span className="col-span-1 text-center">
                          {c.credit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Total */}
                  <div className="grid grid-cols-5 py-2 px-4 text-base text-[#3A3B5C] bg-gray-50 row-span-1 items-center rounded-b-xl">
                    <h3 className="font-bold col-span-4 font-raleway">
                      Total Semester 1 ({yearLabels[selectedYear]})
                    </h3>
                    <h3 className="font-bold col-span-1 text-center font-reddit_sans">
                      {yearData.totalCredit}
                    </h3>
                  </div>
                </div>

                {/* Column 2 - Semester 2 */}
                <div className="grid grid-rows-7 divide-y-2 divide-gray-400">
                  {/* Header */}
                  <div className="grid grid-cols-5 py-2 px-4 text-lg text-[#3A3B5C] bg-gray-50 row-span-1 items-center font-raleway rounded-t-xl">
                    <h3 className="font-semibold col-span-4">Semester 2</h3>
                    <h3 className="font-semibold col-span-1 text-center">Credit</h3>
                  </div>

                  {/* Courses */}
                  <ul className="overflow-y-auto row-span-5">
                    {yearData.semester2?.map((c) => (
                      <li
                        key={c.code}
                        className="grid grid-cols-5 border-b pt-5 pb-5 px-4 text-base font-medium text-[#767676] font-reddit_sans space-y-2"
                      >
                        <div className="col-span-4 grid grid-cols-4">
                          <p className="col-span-1">{c.code}</p>
                          <p className="col-span-3">{c.name}</p>
                        </div>
                        <span className="col-span-1 text-gray-600 text-center">
                          {c.credit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Total */}
                  <div className="grid grid-cols-5 py-2 px-4 text-base text-[#3A3B5C] bg-gray-50 row-span-1 items-center rounded-b-xl">
                    <h3 className="font-semibold col-span-4 font-raleway">
                      Total Semester 2 ({yearLabels[selectedYear]})
                    </h3>
                    <h3 className="font-semibold col-span-1 text-center font-reddit_sans">
                      {yearData.totalCredit2}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Career Opportunities*/}
        <section className="mb-8">
          <h2 className="text-xl font-extrabold mb-8 text-[#3A3B5C] font-raleway">Career Opportunities</h2>
          {program.career_opportunities.map((opportunity, idx) => (
            <div
              key={idx}
              className="space-y-5"
            >
              <p className="text-[#2E2E2E] font-raleway text-base">
                {opportunity.description}
              </p>

              <ul className="font-raleway">
                <p className="text-black">Data Science career paths may include:</p>
                {opportunity.career_path.map((career, index) => (
                  <li 
                    key={index}
                    className="list-disc list-inside tracking-wide text-base/10 text-[#2E2E2E] pl-3">
                    <span className="font-bold">{career.title}</span> : <span>{career.description}</span>
                  </li>
                ))}

              </ul>
            </div>
          ))}
        </section>

        {/* Learning Outcomes */}
        <section className="mb-5">
          <h2 className="text-xl font-extrabold mb-8 text-[#3A3B5C] font-raleway">Learning Outcomes</h2>
          <p className="text-[#2E2E2E] font-raleway">Upon completing the program, students will be able to:</p>
          {program.learningOutcomes.map((outcome, index) => (
           <div
            key={index}
            className="py-4 text-base font-raleway"
           >
            <p className="text-[#3A3B5C] mb-3 font-semibold">{outcome.title}:</p>
            <ul>
              {outcome.learning_description.map((description, index) => (
                <li
                  key={index}
                  className="list-disc list-inside tracking-wide text-base/7 text-[#2E2E2E] pl-3"
                >
                  {description.text}
                </li>
              ))}
            </ul>
           </div>
          ))}
        </section>
        <a 
          href=""
          className="border text-[#C41E3A] font-raleway"
        >
         Learn More about the Admission Process <i className="fa-solid fa-arrow-right-long pl-3" ></i>
        </a>
      </div>
    </div>
  );
}
