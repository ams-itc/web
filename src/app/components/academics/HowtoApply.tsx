import { useState } from "react";

/* -------------------- 1. INTERFACES -------------------- */
interface ApplicationPoint {
  title?: string;
  description?: string | string[];
  list_heading?: string;
  list?: string[];
  conclusion?: string;
}

interface ApplicationSection {
  title: string;
  description?: string | string[];
  points?: string[] | ApplicationPoint[];
}

type ProgramLevel = "Bachelor's Degree" | "Master's Degree";

interface ApplicationGuide {
  programLevel: ProgramLevel;
  sections: ApplicationSection[]; // replace with your real Section interface
}

/* -------------------- 2. STATIC DATA -------------------- */

const applicationGuide: Record<ProgramLevel, ApplicationGuide> = {
  "Master's Degree": {
    programLevel: "Master's Degree",
    sections: 
      [
        {
          title: "Admission Requirements",
          points: [
            "All prospective students must successfully complete online and pass our university entrance examination to gain admission to the first year of any bachelor’s degree program. Our university operates with a unique admission system where we do not accept transfer students from other institutions, meaning all students must begin their academic journey from Year 1, regardless of their previous educational background."
          ]
        },
        {
          title: "The Application Journey",
          points: [
            {
              title: "Entrance Examination",
              description: "Your path to joining our department begins with the university entrance examination, which serves as the sole gateway to our programs. This comprehensive assessment is mandatory for all applicants, and your performance will determine both your admission status and your likelihood of being placed in your preferred academic department."
            },
            {
              title: "Foundation Program and Department Selection",
              description: "Upon successful completion of the entrance examination, you’ll enter our comprehensive two-year Foundation program starting with Year 1. During your first semester, you’ll engage with core foundational courses while participating in the crucial department selection process.",
              list_heading: "The Selection Process:",
              list: [
                "During Semester 1 of Year 1, you’ll receive notification to access your student portal",
                "You must rank ALL available majors at the university in order of preference",
                "Rank requirements may be met through completion, community, sequentially through all options",
                "Submit your completed rankings through the portal, both prior to the specified deadline",
                "This ranking system ensures every student receives a department placement, but your final assignment considers not only your entrance examination performance. Students with higher rank scores receive priority in securing places in their top-ranked departments. If your selected department is highly competitive and your entrance score doesn’t meet the threshold, the system will automatically consider your subsequent choice until a placement is made."
              ],
              conclusion: "This ranking system ensures every student receives a department placement, but your final assignment considers not only your entrance examination performance. Students with higher rank scores receive priority in securing places in their top-ranked departments. If your selected department is highly competitive and your entrance score doesn’t meet the threshold, the system will automatically consider your subsequent choice until a placement is made."
            },
            {
              title: "Department Assignment and Foundation Completion",
              description: "The university announces department assignments at the conclusion of Semester 1, Year 1, marking a significant milestone in your academic career. Once assigned to your department, you’ll continue with specialized foundational coursework throughout the remainder of Year 1 and all of Year 2.",
              list_heading: "What Happens Next:",
              list: [
                "Receive your department assignment after Semester 1 ends",
                "Begin department-specific coursework while completing foundation requirements",
                "Complete full two years of foundation study before advancing to specialized programs",
                "Build essential knowledge and skills tailored to your assigned field",
                "Those foundation years are carefully designed to prepare you for success in your chosen discipline, providing both broad academic skills and field-specific preparation."
              ]
            },
          ]  
        },
        {
          title: "Department Change Opportunity",
          description: "We understand that academic interests can evolve during your foundation years. For students who wish to reconsider their department placement, our university provides one exceptional opportunity to request a change, though this option requires outstanding academic achievement.",
          points: [
            {
              title: "Eligibility and Requirements:",
              description: "The department change process is available exclusively at the end of Year 2, with strict eligibility criteria designed to ensure only the most academically prepared students can successfully transition between departments.",
              list_heading: "Requirements for Department Change:",
              list : [
                "Must complete all Year 1 and Year 2 foundation requirements",
                "Must rank within the top 5% of students in your current department",
                "Request must be submitted at the end of Year 2 only",
                "Academic performance will be thoroughly evaluated"
              ]
            },
            {
              title: "The Change Process",
              description: 
              [
                "Students meeting these demanding eligibility criteria may submit a formal department change request through official university administrative channels. However, meeting the academic requirements does not guarantee approval.",
                "The evaluation process considers multiple factors including your academic record, availability of spaces in your desired department, and the receiving department's capacity to accommodate additional students. This process is highly selective, and students should view this as an exceptional opportunity rather than a standard pathway. The university's decision on department change requests is final and based on both academic merit and practical considerations."
              ],
            }
          ]
        },
        {
          title: "Essential Consideration for Applicants",
          points: [
            {
              title: "Understanding Our System",
              description: "Our admission approach emphasizes fresh starts and equal opportunity. Every student begins the same foundational journey, ensuring all graduates share common knowledge and institutional standards that reflect our academic values.",
              list_heading: "Important Reminders:",
              list: [
                "No transfer credits accepted from other universities",
                "All students start from Year 1 regardless of previous education",
                "Entrance examination is your single pathway to admission",
                "Department rankings require careful research and consideration"
              ]
            },
            {
              title: "Making Informed Decisions",
              description: 
              [
                "When completing your department rankings, invest significant time in research and consultation. This decision will shape your entire university experience and future career trajectory.",
                "We strongly encourage you to speak with current students, faculty members, and career advisors to understand the realities of different programs. Consider factors such as curriculum content, career prospects, department culture, and your genuine interests rather than external pressures or perceived prestige.",
              ]
            },
            {
              title: "Academic Excellence Strategy",
              description: 
              [
                "Maintaining exceptional academic performance throughout your foundation years serves multiple purposes beyond personal learning and growth. Strong grades provide insurance should you wish to pursue a department change and demonstrate your commitment to academic success.",
                "The top 5% threshold for department changes is intentionally demanding, requiring consistent dedication, effective study strategies, and genuine engagement with your coursework. Students should approach their foundation years with both immediate learning goals and longer-term strategic thinking.",
              ]
            }
          ]
        },
        {
          title: "Ready to Begin Your Journey?",
          points: [
            "Understanding Our System: Our admission approach emphasizes fresh starts and equal opportunity. Every student begins the same foundational journey, ensuring all graduates share common knowledge and institutional standards that reflect our academic values.",
            "Important Reminders:",
            "- No transfer credits accepted from other universities",
            "- All students start from Year 1 regardless of previous education",
            "- Entrance examination is your single pathway to admission",
            "- Department rankings require careful research and consideration",
            "Making Informed Decisions: When completing your department rankings, invest significant time in research and consultation. This decision will shape your entire university experience and future career trajectory. We strongly encourage you to speak with current students, faculty members, and career advisors to understand the realities of different programs. Consider factors such as curriculum content, career prospects, department culture, and faculty expertise.",
            "Academic Excellence Strategy: Maintaining exceptional academic performance throughout your foundation years serves multiple purposes beyond personal learning and growth. Strong academic grades and superior skills will position you to pursue a department change and demonstrate your commitment to academic success. The top 5% threshold for department changes is intentionally demanding, requiring consistent dedication, effective study strategies, and genuine engagement with your coursework. Students should approach their foundation years with both immediate learning goals and long-term strategic thinking."
          ]
        },
        {
          title: "Ready to Begin Your Journey?",
          description: [
            "Your path to joining our department starts with comprehensive preparation for the entrance examination and thoughtful consideration of your academic interests. Take time to explore all available programs, understand the competitive landscape of different departments, and prepare yourself for the commitment that higher education at our institution requires.",
            "We encourage prospective students to view the application process not just as a series of requirements to meet, but as the beginning of an educational journey that will shape your future career and personal growth. Our faculty and staff are committed to supporting every student's success from the moment they enter our doors.",
            "We look forward to welcoming you to our academic community and supporting your educational aspirations throughout your time with us."
          ]
        }
      ]
  },
  "Bachelor's Degree": {
    programLevel: "Master's Degree",
    sections: 
      [
        {
          title: "Admission Requirements",
          points: [
            "All prospective students must successfully complete online and pass our university entrance examination to gain admission to the first year of any bachelor’s degree program. Our university operates with a unique admission system where we do not accept transfer students from other institutions, meaning all students must begin their academic journey from Year 1, regardless of their previous educational background."
          ]
        },
        {
          title: "The Application Journey",
          points: [
            {
              title: "Entrance Examination",
              description: "Your path to joining our department begins with the university entrance examination, which serves as the sole gateway to our programs. This comprehensive assessment is mandatory for all applicants, and your performance will determine both your admission status and your likelihood of being placed in your preferred academic department."
            },
            {
              title: "Foundation Program and Department Selection",
              description: "Upon successful completion of the entrance examination, you’ll enter our comprehensive two-year Foundation program starting with Year 1. During your first semester, you’ll engage with core foundational courses while participating in the crucial department selection process.",
              list_heading: "The Selection Process:",
              list: [
                "During Semester 1 of Year 1, you'll receive notification to access your student portal",
                "You must rank ALL available majors at the university in order of preference",
                "Ranking 1 represents your most desired program, continuing sequentially through all options",
                "Submit your completed rankings through the student portal by the specified deadline",
              ],
              conclusion: "This ranking system ensures every student receives a department placement, but your final assignment considers not only your entrance examination performance. Students with higher rank scores receive priority in securing places in their top-ranked departments. If your selected department is highly competitive and your entrance score doesn’t meet the threshold, the system will automatically consider your subsequent choice until a placement is made."
            },
            {
              title: "Department Assignment and Foundation Completion",
              description: "The university announces department assignments at the conclusion of Semester 1, Year 1, marking a significant milestone in your academic career. Once assigned to your department, you’ll continue with specialized foundational coursework throughout the remainder of Year 1 and all of Year 2.",
              list_heading: "What Happens Next:",
              list: [
                "Receive your department assignment after Semester 1 ends",
                "Begin department-specific coursework while completing foundation requirements",
                "Complete full two years of foundation study before advancing to specialized programs",
                "Build essential knowledge and skills tailored to your assigned field",
                "Those foundation years are carefully designed to prepare you for success in your chosen discipline, providing both broad academic skills and field-specific preparation."
              ]
            },
          ]  
        },
        {
          title: "Department Change Opportunity",
          description: "We understand that academic interests can evolve during your foundation years. For students who wish to reconsider their department placement, our university provides one exceptional opportunity to request a change, though this option requires outstanding academic achievement.",
          points: [
            {
              title: "Eligibility and Requirements:",
              description: "The department change process is available exclusively at the end of Year 2, with strict eligibility criteria designed to ensure only the most academically prepared students can successfully transition between departments.",
              list_heading: "Requirements for Department Change:",
              list : [
                "Must complete all Year 1 and Year 2 foundation requirements",
                "Must rank within the top 5% of students in your current department",
                "Request must be submitted at the end of Year 2 only",
                "Academic performance will be thoroughly evaluated"
              ]
            },
            {
              title: "The Change Process",
              description: 
              [
                "Students meeting these demanding eligibility criteria may submit a formal department change request through official university administrative channels. However, meeting the academic requirements does not guarantee approval.",
                "The evaluation process considers multiple factors including your academic record, availability of spaces in your desired department, and the receiving department's capacity to accommodate additional students. This process is highly selective, and students should view this as an exceptional opportunity rather than a standard pathway. The university's decision on department change requests is final and based on both academic merit and practical considerations."
              ],
            }
          ]
        },
        {
          title: "Essential Consideration for Applicants",
          points: [
            {
              title: "Understanding Our System",
              description: "Our admission approach emphasizes fresh starts and equal opportunity. Every student begins the same foundational journey, ensuring all graduates share common knowledge and institutional standards that reflect our academic values.",
              list_heading: "Important Reminders:",
              list: [
                "No transfer credits accepted from other universities",
                "All students start from Year 1 regardless of previous education",
                "Entrance examination is your single pathway to admission",
                "Department rankings require careful research and consideration"
              ]
            },
            {
              title: "Making Informed Decisions",
              description: 
              [
                "When completing your department rankings, invest significant time in research and consultation. This decision will shape your entire university experience and future career trajectory.",
                "We strongly encourage you to speak with current students, faculty members, and career advisors to understand the realities of different programs. Consider factors such as curriculum content, career prospects, department culture, and your genuine interests rather than external pressures or perceived prestige.",
              ]
            },
            {
              title: "Academic Excellence Strategy",
              description: 
              [
                "Maintaining exceptional academic performance throughout your foundation years serves multiple purposes beyond personal learning and growth. Strong grades provide insurance should you wish to pursue a department change and demonstrate your commitment to academic success.",
                "The top 5% threshold for department changes is intentionally demanding, requiring consistent dedication, effective study strategies, and genuine engagement with your coursework. Students should approach their foundation years with both immediate learning goals and longer-term strategic thinking.",
              ]
            }
          ]
        },
        {
          title: "Ready to Begin Your Journey?",
          points: [
            "Understanding Our System: Our admission approach emphasizes fresh starts and equal opportunity. Every student begins the same foundational journey, ensuring all graduates share common knowledge and institutional standards that reflect our academic values.",
            "Important Reminders:",
            "- No transfer credits accepted from other universities",
            "- All students start from Year 1 regardless of previous education",
            "- Entrance examination is your single pathway to admission",
            "- Department rankings require careful research and consideration",
            "Making Informed Decisions: When completing your department rankings, invest significant time in research and consultation. This decision will shape your entire university experience and future career trajectory. We strongly encourage you to speak with current students, faculty members, and career advisors to understand the realities of different programs. Consider factors such as curriculum content, career prospects, department culture, and faculty expertise.",
            "Academic Excellence Strategy: Maintaining exceptional academic performance throughout your foundation years serves multiple purposes beyond personal learning and growth. Strong academic grades and superior skills will position you to pursue a department change and demonstrate your commitment to academic success. The top 5% threshold for department changes is intentionally demanding, requiring consistent dedication, effective study strategies, and genuine engagement with your coursework. Students should approach their foundation years with both immediate learning goals and long-term strategic thinking."
          ]
        },
        {
          title: "Ready to Begin Your Journey?",
          description: [
            "Your path to joining our department starts with comprehensive preparation for the entrance examination and thoughtful consideration of your academic interests. Take time to explore all available programs, understand the competitive landscape of different departments, and prepare yourself for the commitment that higher education at our institution requires.",
            "We encourage prospective students to view the application process not just as a series of requirements to meet, but as the beginning of an educational journey that will shape your future career and personal growth. Our faculty and staff are committed to supporting every student's success from the moment they enter our doors.",
            "We look forward to welcoming you to our academic community and supporting your educational aspirations throughout your time with us."
          ]
        }
      ]
  },
};

/* -------------------- 3. COMPONENT -------------------- */
export default function HowtoApply() {
  const [selected, setSelected] = useState<ProgramLevel>("Bachelor's Degree");
  const application = applicationGuide[selected];


  return (
    <div className="w-full">
      <h1 className="text-3xl font-playfair_display text-black font-semibold">
        How to Apply
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
      {/* Application Degree Tabs */}
      <div className="bg-white shadow-md">
        <div className="w-full grid grid-cols-2">
          <button
            className={`col-span-1 py-3 text-left font-medium px-3 text-xl ${
              selected === "Bachelor's Degree"
                ? "bg-[#3A3B5C]/20 text-[#3A3B5C]"
                : "bg-[#D9D9D9]/50 text-[#3A3B5C]"
            }`}
            onClick={() => setSelected("Bachelor's Degree")}
          >
            Bachelor's Degree
          </button>
          <button
            className={`col-span-1 py-3 text-left font-medium px-3 text-xl ${
              selected === "Master's Degree"
                ? "bg-[#3A3B5C]/20 text-[#3A3B5C]"
                : "bg-[#D9D9D9]/50 text-[#3A3B5C]"
            }`}
            onClick={() => setSelected("Master's Degree")}
          >
            Master's Degree
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 max-w-full">
            <section>
              {application.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-3xl font-extrabold mb-4 text-[#3A3B5C] font-raleway">{section.title}</h2>
                  {section.description && (
                    Array.isArray(section.description) ? (
                      section.description.map((desc, idx) => (
                        <p key={idx} className="mb-2 text-[#2E2E2E] font-raleway">{desc}</p>
                      ))
                    ) : (
                      <p className="mb-2 text-[#2E2E2E] font-raleway">{section.description}</p>
                    )
                  )}
                  {section.points && (
                    <div className="">
                      {section.points.map((point, pIndex) => (
                        typeof point === "string" ? (
                          <p key={pIndex} className="mb-2 text-[#3A3B5C] font-raleway">{point}</p>
                        ) : (
                          <div key={pIndex} className="mb-4">
                            {point.title && (
                              <h3 className="text-xl font-semibold mb-2 text-[#3A3B5C] font-raleway">{point.title}</h3>
                            )}
                            {point.description && (
                              Array.isArray(point.description) ? (
                                point.description.map((desc, dIdx) => (
                                  <p key={dIdx} className="mb-2 text-[#2E2E2E] font-raleway">{desc}</p>
                                ))
                              ) : (
                                <p className="mb-2 text-[#2E2E2E] font-raleway">{point.description}</p>
                              )
                            )}
                            {point.list_heading && (
                              <p className="text-black font-raleway font-semibold">{point.list_heading} :</p>
                            )}
                            {point.list && (
                              <ul className="list-disc list-inside mb-2 text-[#2E2E2E] font-raleway">
                                {point.list.map((item, lIdx) => (
                                  <li 
                                    key={lIdx}
                                    className="py-2"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {point.conclusion && (
                              <p className="mb-2 text-[#2E2E2E] font-raleway">{point.conclusion}</p>
                            )}
                          </div>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>
        </div>
    </div>
  );
}
