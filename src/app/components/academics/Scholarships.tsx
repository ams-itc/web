import { motion } from "framer-motion";

export default function Scholarships() {

    const scholarships = [
        {
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
        {
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
                email: "amp@abc.edu.kh",
                phone: "012 345 678",
            },
        },
        {
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
                email: "amp@abc.edu.kh",
                phone: "012 345 678",
            },
        },
    ];

    return (
        <div className="mb-10">
            <h1 className="text-3xl font-playfair_display text-black font-semibold">
                Scholarships
            </h1>
            <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
            <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

            <p className="pt-8 text-[#2E2E2E] font-raleway">
                We believe that financial barriers should not stand in the way of a quality education. 
                Our department is committed to helping students achieve their academic goals through a variety of scholarship opportunities and financial aid options
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
                            {sch.type}
                        </span>

                        {/* Title and amount */}
                        <h3 className="text-xl font-bold text-[#3A3B5C] pb-3 font-reddit_sans">
                            {sch.title}
                        </h3>
                        <p className="text-[#C41E3A] font-bold text-lg font-reddit_sans">{sch.amount}</p>
                        <p className="text-[#2E2E2E] text-sm mt-2">{sch.description}</p>

                        {/* Duration & recipients */}
                        <div className="grid grid-cols-2 gap-4 text-sm mt-10">
                            <div className="bg-[#767676]/10 rounded-md p-2 w-full">
                                <p className="font-medium text-gray-900">Duration</p>
                                <p className="font-medium text-gray-900 py-3">{sch.duration}</p>
                            </div>
                            <div className="bg-[#767676]/10 rounded-md p-2 w-full">
                                <p className="font-medium text-gray-900">Recipients</p>
                                <p className="font-medium text-gray-900 py-3">{sch.recipients}</p>
                            </div>
                        </div>

                        {/* Deadlines */}
                        <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                            <div className="bg-[#767676]/10 rounded-md p-2 w-full">
                                <p className="font-medium text-gray-900">
                                    Application Deadline
                                </p>
                                <p className="font-medium text-gray-900 py-3">{sch.deadline}</p>
                            </div>
                            <div className="bg-[#767676]/10 rounded-md p-2 w-full">
                                <p className="font-medium text-gray-900">
                                    Notification Date
                                </p>
                                <p className="font-medium text-gray-900 py-3">{sch.notification}</p>
                            </div>
                        </div>

                        {/* Eligibility */}
                        <div className="mt-4 text-sm bg-[#767676]/10 p-3 rounded-md mb-5">
                            <p className="font-semibold text-gray-900 mb-2">
                            Eligibility Requirements
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 px-5">
                            {sch.requirements.map((req, idx) => (
                                <li key={idx} className="font-medium">{req}</li>
                            ))}
                            </ul>
                        </div>
                        <hr className="border-1 border-[#767676]/10"/>

                        <div className="mt-4 grid grid-cols-2 gap-2">
                            {/* Contact */}
                            <div className="mt-4 text-xs">
                                <p className="font-semibold text-[#3A3B5C] mb-1 text-base">
                                CONTACT FOR APPLICATION
                                </p>
                                <p className="text-[#2E2E2E] py-2">{sch.contact.office}</p>
                                <p className="text-[#C41E3A]">{sch.contact.email}</p>
                                <p className="text-[#2E2E2E] py-2">Phone Number: {sch.contact.phone}</p>
                            </div>

                            {/* Buttons */}
                            <div className="mt-5 space-y-3 content-center">
                                <button className="flex-1 border border-[#3A3B5C] bg-[#3A3B5C] px-4 py-2 rounded-md text-white hover:bG-[#3A3B5C]/50 text-sm w-full">
                                Download the Detail Document
                                </button>
                                <button className="flex-1 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 text-sm w-full">
                                Apply Now
                                </button>
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    )
}