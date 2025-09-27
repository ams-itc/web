import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

function renderTextWithFont(
  text: ReactNode, // <-- change from string to ReactNode
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

export default function Scholarships() {

    const scholarships = [
        {
            en: {
                title: "Academic Achievement Award",
                type: "MERIT-BASED",
                amount: "$4,000 per year",
                description:
                    "Recognizes outstanding academic performance and commitment to scholarly excellence within the department.",
                duration: "5 years",
                recipients: "20 per year",
                deadline: "December 10, 2025",
                notification: "January 10, 2026",
                requirements: [
                    "Minimum GPA of 3.5 in high school or university",
                    "Top 10% in the entrance exam score",
                    "Strong letters of recommendation",
                    "No academic probation history",
                ],
                contact: {
                    office: "Department Office: Building F, Room 103",
                    email: "amp@itc.edu.kh",
                    phone: "012 345 678",
                },
            },
            kh: {
                title: "រង្វាន់សមិទ្ធផលសិក្សា",
                type: "ផ្អែកលើសមត្ថភាព",
                amount: "៤,០០០ ដុល្លារ ក្នុងមួយឆ្នាំ",
                description:
                    "ទទួលស្គាល់សមិទ្ធផលសិក្សាដ៏លេចធ្លោ និងការប្តេជ្ញាចិត្តចំពោះភាពឆ្នើមវិទ្យាសាស្ត្រនៅក្នុងមហាវិទ្យាល័យ។",
                duration: "៥ ឆ្នាំ",
                recipients: "២០ នាក់ក្នុងមួយឆ្នាំ",
                deadline: "១០ ធ្នូ ២០២៥",
                notification: "១០ មករា ២០២៦",
                requirements: [
                    "មានពិន្ទុមធ្យមសរុប (GPA) អប្បបរមា ៣.៥ ក្នុងវិទ្យាល័យ ឬ សាកលវិទ្យាល័យ",
                    "ចំណាត់ថ្នាក់នៅក្នុង ១០% កំពូលនៃពិន្ទុប្រឡងចូល",
                    "មានលិខិតផ្ដល់អនុសាសន៍រឹងមាំ",
                    "មិនមានប្រវត្តិនៅក្រោមវិន័យសិក្សា",
                ],
                contact: {
                    office: "ការិយាល័យនាយកដ្ឋាន៖ អាគារ F បន្ទប់ 103",
                    email: "amp@itc.edu.kh",
                    phone: "012 345 678",
                },
            }
        },
        {
            en: {
                title: "Academic Achievement Award",
                type: "MERIT-BASED",
                amount: "$4,000 per year",
                description:
                    "Recognizes outstanding academic performance and commitment to scholarly excellence within the department.",
                duration: "5 years",
                recipients: "20 per year",
                deadline: "December 10, 2025",
                notification: "January 10, 2026",
                requirements: [
                    "Minimum GPA of 3.5 in high school or university",
                    "Top 10% in the entrance exam score",
                    "Strong letters of recommendation",
                    "No academic probation history",
                ],
                contact: {
                    office: "Department Office: Building F, Room 103",
                    email: "amp@itc.edu.kh",
                    phone: "012 345 678",
                },
            },
            kh: {
                title: "រង្វាន់សមិទ្ធផលសិក្សា",
                type: "ផ្អែកលើសមត្ថភាព",
                amount: "៤,០០០ ដុល្លារ ក្នុងមួយឆ្នាំ",
                description:
                    "ទទួលស្គាល់សមិទ្ធផលសិក្សាដ៏លេចធ្លោ និងការប្តេជ្ញាចិត្តចំពោះភាពឆ្នើមវិទ្យាសាស្ត្រនៅក្នុងមហាវិទ្យាល័យ។",
                duration: "៥ ឆ្នាំ",
                recipients: "២០ នាក់ក្នុងមួយឆ្នាំ",
                deadline: "១០ ធ្នូ ២០២៥",
                notification: "១០ មករា ២០២៦",
                requirements: [
                    "មានពិន្ទុមធ្យមសរុប (GPA) អប្បបរមា ៣.៥ ក្នុងវិទ្យាល័យ ឬ សាកលវិទ្យាល័យ",
                    "ចំណាត់ថ្នាក់នៅក្នុង ១០% កំពូលនៃពិន្ទុប្រឡងចូល",
                    "មានលិខិតផ្ដល់អនុសាសន៍រឹងមាំ",
                    "មិនមានប្រវត្តិនៅក្រោមវិន័យសិក្សា",
                ],
                contact: {
                    office: "ការិយាល័យនាយកដ្ឋាន៖ អាគារ F បន្ទប់ 103",
                    email: "amp@itc.edu.kh",
                    phone: "012 345 678",
                },
            }
        },
        {
            en: {
                title: "Academic Achievement Award",
                type: "MERIT-BASED",
                amount: "$4,000 per year",
                description:
                    "Recognizes outstanding academic performance and commitment to scholarly excellence within the department.",
                duration: "5 years",
                recipients: "20 per year",
                deadline: "December 10, 2025",
                notification: "January 10, 2026",
                requirements: [
                    "Minimum GPA of 3.5 in high school or university",
                    "Top 10% in the entrance exam score",
                    "Strong letters of recommendation",
                    "No academic probation history",
                ],
                contact: {
                    office: "Department Office: Building F, Room 103",
                    email: "amp@itc.edu.kh",
                    phone: "012 345 678",
                },
            },
            kh: {
                title: "រង្វាន់សមិទ្ធផលសិក្សា",
                type: "ផ្អែកលើសមត្ថភាព",
                amount: "៤,០០០ ដុល្លារ ក្នុងមួយឆ្នាំ",
                description:
                    "ទទួលស្គាល់សមិទ្ធផលសិក្សាដ៏លេចធ្លោ និងការប្តេជ្ញាចិត្តចំពោះភាពឆ្នើមវិទ្យាសាស្ត្រនៅក្នុងមហាវិទ្យាល័យ។",
                duration: "៥ ឆ្នាំ",
                recipients: "២០ នាក់ក្នុងមួយឆ្នាំ",
                deadline: "១០ ធ្នូ ២០២៥",
                notification: "១០ មករា ២០២៦",
                requirements: [
                    "មានពិន្ទុមធ្យមសរុប (GPA) អប្បបរមា ៣.៥ ក្នុងវិទ្យាល័យ ឬ សាកលវិទ្យាល័យ",
                    "ចំណាត់ថ្នាក់នៅក្នុង ១០% កំពូលនៃពិន្ទុប្រឡងចូល",
                    "មានលិខិតផ្ដល់អនុសាសន៍រឹងមាំ",
                    "មិនមានប្រវត្តិនៅក្រោមវិន័យសិក្សា",
                ],
                contact: {
                    office: "ការិយាល័យនាយកដ្ឋាន៖ អាគារ F បន្ទប់ 103",
                    email: "amp@itc.edu.kh",
                    phone: "012 345 678",
                },
            }
        },
    ];

    const { language } = useLanguage();

    return (
        <div className="mb-10">
            <h1 className="text-3xl font-playfair_display text-black font-semibold">
                { renderTextWithFont(
                language === "en" ? "Scholarships" : "អាហាររូបករណ៍",
                language,
                "heading"        
                )}
            </h1>
            <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
            <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

            <p className={`pt-8 text-[#2E2E2E] ${language === "en" ? "font-raleway" : "font-preahvihear"}`}>
                {
                    language === "en"
                    ? ( <>
                        We believe that financial barriers should not stand in the way of a quality education. 
                        Our department is committed to helping students achieve their academic goals through a variety of scholarship opportunities and financial aid options
                        </>
                    ) : (
                        <>
                        យើងជឿថា​ឧបសគ្គហិរញ្ញវត្ថុមិនគួរជាបញ្ហាដែលរារាំងការទទួលបានការអប់រំដែលមានគុណភាពទេ។ 
                        នាយកដ្ឋានរបស់យើងមានប្តេជ្ញាផ្តល់ជំនួយដល់និស្សិតក្នុងការសម្រេចគោលដៅសិក្សារបស់ពួកគេ តាមរយៈឱកាសអាហារូបករណ៍និងជម្រើសជំនួយហិរញ្ញវត្ថុជាច្រើន។
                        </> 
                    )
                }
            </p>
            <div className="grid gap-15 md:grid-cols-2 mt-5 font-redit_sans">
                {scholarships.map((sch, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between border-4 border-gray-200"
                    >
                        {/* Tag */}
                        <span className="inline-block bg-[#C41E3A] text-white text-sm px-3 py-1 rounded-full font-semibold w-fit mb-3">
                            {renderTextWithFont(
                                language === "en" ? `${sch.en.type}` : `${sch.kh.type}`,
                                language,
                                "body"
                            )}
                        </span>

                        {/* Title and amount */}
                        <h3 className="text-xl font-bold text-[#3A3B5C] pb-3 font-reddit_sans">
                            {renderTextWithFont(
                                language === "en" ? `${sch.en.title}` : `${sch.kh.title}`,
                                language,
                                "body"
                            )}
                        </h3>
                        <p className="text-[#C41E3A] font-bold text-lg font-reddit_sans">
                            {renderTextWithFont(
                                language === "en" ? `${sch.en.amount}` : `${sch.kh.amount}`,
                                language,
                                "body"
                            )}
                        </p>
                        <p className="text-[#2E2E2E] text-sm mt-2">
                            {renderTextWithFont(
                                language === "en" ? `${sch.en.description}` : `${sch.kh.description}`,
                                language,
                                "body"
                            )}
                        </p>

                        {/* Duration & recipients */}
                        <div className="grid grid-cols-2 gap-4 text-sm mt-10">
                            <div className="bg-[#767676]/10 rounded-md p-2 w-full">
                                <p className={`font-medium text-gray-900 ${language === "en" ? "font-reddit_sans" : "font-preahvihear"}`}>
                                    {
                                        language === "en"
                                        ? "Duration"
                                        : "រយៈពេល"
                                    }
                                </p>
                                <p className={`font-medium text-gray-900 py-3 ${language === "en" ? "font-reddit_sans" : "font-preahvihear"}`}>
                                                                        {
                                        language === "en"
                                        ? `${sch.en.duration}`
                                        : `${sch.kh.duration}`
                                    }
                                </p>
                            </div>
                            <div className="bg-[#767676]/10 rounded-md p-2 w-full">
                                <p className={`font-medium text-gray-900 ${language === "en" ? "font-reddit_sans" : "font-preahvihear"}`}>
                                    {
                                        language === "en"
                                        ? "Recipients"
                                        : "អ្នកទទួល"
                                    }
                                </p>
                                <p className={`font-medium text-gray-900 py-3 ${language === "en" ? "font-reddit_sans" : "font-preahvihear"}`}>
                                                                        {
                                        language === "en"
                                        ? `${sch.en.recipients}`
                                        : `${sch.kh.recipients}`
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Deadlines */}
                        <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                            <div className="bg-[#767676]/10 rounded-md p-2 w-full">
                                <p className={`font-medium text-gray-900 ${language === "en" ? "font-reddit_sans" : "font-preahvihear"}`}>
                                    {
                                        language === "en"
                                        ? "Application Deadline"
                                        : "ថ្ងៃផុតកំណត់នៃការដាក់ពាក្យ"
                                    }
                                </p>
                                <p className={`font-medium text-gray-900 py-3 ${language === "en" ? "font-reddit_sans" : "font-preahvihear"}`}>
                                    {
                                        language === "en"
                                        ? `${sch.en.deadline}`
                                        : `${sch.kh.deadline}`
                                    }
                                </p>
                            </div>
                            <div className="bg-[#767676]/10 rounded-md p-2 w-full">
                                <p className={`font-medium text-gray-900 ${language === "en" ? "font-reddit_sans" : "font-preahvihear"}`}>
                                    {
                                        language === "en"
                                        ? "Notification Date"
                                        : "កាលបរិច្ឆេទជូនដំណឹង"
                                    }
                                </p>
                                <p className={`font-medium text-gray-900 py-3 ${language === "en" ? "font-reddit_sans" : "font-preahvihear"}`}>
                                    {
                                        language === "en"
                                        ? `${sch.en.notification}`
                                        : `${sch.kh.notification}`
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Eligibility */}
                        <div className="mt-4 text-sm bg-[#767676]/10 p-3 rounded-md mb-5">
                            <p className={`font-semibold text-gray-900 mb-2 ${language === "en" ? "font-reddit_sans" : "font-preahvihear"}`}>
                                {
                                    language === "en"
                                    ? "Eligibility Requirements"
                                    : "តម្រូវការសិទ្ធិទទួលបាន"
                                }
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 px-5">
                                {(sch[language]?.requirements ?? []).map((req, idx) => (
                                    <li key={idx} className="font-medium">
                                    {req}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <hr className="border-1 border-[#767676]/10"/>

                        <div className="mt-4 grid grid-cols-2 gap-2">
                            {/* Contact */}
                            <div className="mt-4 text-xs">
                                <p className={`font-semibold text-[#3A3B5C] mb-1 text-base ${language === "en" ? "font-reddit_sans" : "font-preahvihear"}`}>
                                    {
                                        language === "en"
                                        ? "CONTACT FOR APPLICATION"
                                        : "ទំនាក់ទំនងសម្រាប់ការដាក់ពាក្យ"
                                    }
                                </p>
                                <p
                                    className={`text-[#2E2E2E] py-2 ${
                                        language === "en" ? "font-reddit_sans" : "font-preahvihear"
                                    }`}
                                    >
                                    {sch[language]?.contact.office}
                                </p>
                                <a
                                    href={`mailto:${sch[language]?.contact.email}`}
                                    className={`text-[#C41E3A] font-reddit_sans
                                    }`}
                                    >
                                    {sch[language]?.contact.email}
                                </a>
                                <p
                                    
                                    className={`text-[#2E2E2E] py-2 ${
                                        language === "en" ? "font-reddit_sans" : "font-preahvihear"
                                    }`}
                                    >
                                    {language === "en" ? "Phone Number:" : "លេខទូរស័ព្ទ៖"}{" "}
                                    {sch[language]?.contact.phone}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="mt-5 space-y-3 content-center">
                                <button
                                    className="flex-1 border border-[#3A3B5C] bg-[#3A3B5C] px-4 py-2 rounded-md text-white hover:bg-[#3A3B5C]/50 text-sm w-full"
                                    >
                                    <span className={language === "en" ? "font-reddit_sans" : "font-preahvihear"}>
                                        {language === "en"
                                        ? "Download the Detail Document"
                                        : "ទាញយកឯកសារលម្អិត"}
                                    </span>
                                </button>

                                <button
                                    className="flex-1 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 text-sm w-full"
                                    >
                                    <span className={language === "en" ? "font-reddit_sans" : "font-preahvihear"}>
                                        {language === "en" ? "Apply Now" : "ដាក់ពាក្យឥឡូវនេះ"}
                                    </span>
                                </button>
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    )
}