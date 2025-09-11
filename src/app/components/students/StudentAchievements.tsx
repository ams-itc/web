"use clients";

export default function Studentachievements() {

    const OutstandingStudent = [
        {
            title: "Ms.",
            name: "Luy Lyhor",
            major: "UX/UI Design",
            graduation: "2025",
            description:
            "Ms. Sara Chen specializes in distributed systems and cloud computing architecture. She has extensive industry experience and maintains active collaboration with tech companies.",
            awards: [
            "Google Research Internship",
            "Outstanding Graduation Student Award",
            "Data Science Competition Winner"
            ],
            researchInterests: ["Data Science", "Statistics", "Analytics"],
            imagepath: "/outstandingstudents/lyhor.jpg"
        },
        {
            title: "Ms.",
            name: "Luy Lyhor",
            major: "UX/UI Design",
            graduation: "2025",
            description:
            "Ms. Sara Chen specializes in distributed systems and cloud computing architecture. She has extensive industry experience and maintains active collaboration with tech companies.",
            awards: [
            "Google Research Internship",
            "Outstanding Graduation Student Award",
            "Data Science Competition Winner"
            ],
            researchInterests: ["Data Science", "Statistics", "Analytics"],
            imagepath: "/outstandingstudents/lyhor.jpg"
        },
        {
            title: "Ms.",
            name: "Luy Lyhor",
            major: "UX/UI Design",
            graduation: "2025",
            description:
            "Ms. Sara Chen specializes in distributed systems and cloud computing architecture. She has extensive industry experience and maintains active collaboration with tech companies.",
            awards: [
            "Google Research Internship",
            "Outstanding Graduation Student Award",
            "Data Science Competition Winner"
            ],
            researchInterests: ["Data Science", "Statistics", "Analytics"],
            imagepath: "/outstandingstudents/lyhor.jpg"
        },
        {
            title: "Ms.",
            name: "Luy Lyhor",
            major: "UX/UI Design",
            graduation: "2025",
            description:
            "Ms. Sara Chen specializes in distributed systems and cloud computing architecture. She has extensive industry experience and maintains active collaboration with tech companies.",
            awards: [
            "Google Research Internship",
            "Outstanding Graduation Student Award",
            "Data Science Competition Winner"
            ],
            researchInterests: ["Data Science", "Statistics", "Analytics"],
            imagepath: "/outstandingstudents/lyhor.jpg"
        },
    ]

    const Awards = [
        {
            title: "ENSIIE Scholarship Awardees ",
            icon: <i className="fa-solid fa-medal"></i>,
            "scholarshipAwardees": [
                { 
                    "name": "Mr. LY Chhaythean", 
                    "class": "Class of 2027" 
                },
                { 
                    "name": "Mr. NGEN Tina", 
                    "class": "Class of 2027" 
                },
                { 
                    "name": "Ms. SOPHON Rachana", 
                    "class": "Class of 2027" 
                },
                { 
                    "name": "Ms. NEANG Vanna", 
                    "class": "Class of 2027" 
                },
                { 
                    "name": "Ms. SONGSEANG Pisey", 
                    "class": "Class of 2027" 
                }
            ],
            filepath: "/awards/ensiee.JPG",
        },
        {
            title: "XYZ Competition Winners",
            icon: <i className="fa-solid fa-trophy"></i>,
            "competitionWinners": [
                { 
                    "team": "Team AAA", 
                    "members": ["Member 1", "Member 2", "Member 3"] 
                },
                { 
                    "team": "Team BBB", 
                    "members": ["Member 1", "Member 2", "Member 3"] 
                },
                { 
                    "team": "Team CCC", 
                    "members": ["Member 1", "Member 2", "Member 3"] 
                },
                { 
                    "team": "Team DDD",
                    "members": ["Member 1", "Member 2", "Member 3"] 
                },
                { 
                    "team": "Team EEE",
                    "members": ["Member 1", "Member 2", "Member 3"] 
                }
            ],
            filepath: "/awards/ensiee.JPG",
        }

    ]
        

    
    return (
    <div className="w-full">
        <h1 className="text-3xl font-playfair_display text-black">Student’s Achievement</h1>
        <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full"/>
        <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3"/>
        {/* Description */}
        <div className="space-y-3">
            <p className="text-black font-raleway text-base mt-8">
                We are incredibly proud of our students and the extraordinary achievements they continue to accomplish. Every fellowship earned, 
                every publication authored, and every career milestone represents not just individual excellence, but countless hours of dedication, 
                resilience, and the pursuit of knowledge that inspires us all. From our students who have secured prestigious fellowships and 
                published in top-tier journals, to those landing dream positions at leading technology companies or pioneering groundbreaking research, 
                each success story reflects the transformative journey of growth and discovery that defines our academic community. 
                We celebrate these victories not just as individual triumphs, but as a testament to the collaborative spirit and unwavering support that characterizes our department family.
            </p>
            <p className="text-black font-raleway text-base mb-8">
                If you aspire to similar achievements, we want you to know that our doors are wide open, and our resources are here for you. 
                Our faculty members are dedicated mentors who invest deeply in student success, offering personalized guidance, research opportunities, 
                and connections that can help turn your academic goals into reality. We provide comprehensive support through research funding assistance, 
                fellowship application workshops, industry networking events, and one-on-one career counseling to help you navigate your path to success. 
                The achievements showcased below represent just a glimpse of what's possible when talent meets opportunity and dedicated support. 
                Whether you're an incoming student with ambitious dreams or a current student ready to take the next step, we're here to provide the guidance, 
                resources, and encouragement you need to achieve your own remarkable success story.
            </p>
        </div>
        
        {/* Outstanding Student Spotlight */}
        <h1 className="text-2xl text-black font-medium">Oustanding Student Spotlight</h1>

        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-5 gap-x-3 my-5">
            {OutstandingStudent.map((student, index) => (
                <div 
                    key={index}
                    className="border rounded-xl shadow bg-white mx-auto min-w-[500px]"
                >
                    <div className="w-fit rounded-t-xl">
                        <img 
                            src={student.imagepath} 
                            alt={student.name + " image"} 
                            className="rounded-t-xl"    
                        />
                    </div>
                    <div className=" relative px-6 py-3">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="font-semibold text-lg text-black">{student.title + " " + student.name}</h2>
                            <p className="text-gray-500 text-sm">{student.major}, Class of {student.graduation}</p>
                        </div>
                        <p className="text-gray-700 mb-4 text-sm">{student.description}</p>

                        <h3 className="font-semibold text-base mb-2 text-black">AWARDS & ACHIEVEMENTS</h3>
                        <ul className="list-disc list-inside mb-4 text-gray-700 text-sm">
                            {student.awards.map((award, index) => (
                            <li key={index}>{award}</li>
                            ))}
                        </ul>

                        <h3 className="font-semibold text-base text-black mb-2">RESEARCH INTEREST</h3>
                        <div className="flex gap-2 flex-wrap">
                            {student.researchInterests.map((interest, index) => (
                            <span key={index} className="bg-pink-100 text-pink-600 text-xs font-medium px-2 py-1 rounded-full">
                                {interest.toUpperCase()}
                            </span>
                            ))}
                        </div>
                    </div>

                </div>
            ))}
        </div>

        {/* Recent Awards and Recognitions */}
        <h1 className="text-2xl text-black font-medium mt-10">
        Recent Awards and Recognitions
        </h1>

        {/* card */}
        <div className="space-y-5 py-5">
        {Awards.map((award, index) => (
            <div
            key={index}
            className="border-2 border-gray-300 rounded-2xl shadow grid grid-cols-3 max-w-[800px] h-fit"
            >
            {/* Left image */}
            <div className="col-span-1">
                <img
                src={award.filepath}
                alt={`${award.title} image`}
                className="rounded-l-xl w-full h-full object-cover"
                />
            </div>

            {/* Right content */}
            <div className="col-span-2 px-5 py-4">
                <h1 className="text-xl font-semibold text-[#C41E3A] mb-3">
                {award.title}
                </h1>

                {/* Scholarship Awardees */}
                {award.scholarshipAwardees && award.scholarshipAwardees.map((awardee, i) => (
                <div key={i} className="grid grid-cols-5 items-center">
                    <div className="col-span-1 flex justify-center">
                        <span className="text-[#C41E3A] text-lg">{award.icon}</span>
                    </div>
                    <div className="col-span-3">
                        <p className="text-black font-raleway text-sm py-2">{awardee.name}</p>
                    </div>
                    <div className="col-span-1 text-right">
                        <p className="text-gray-500 text-xs py-2">{awardee.class}</p>
                    </div>
                </div>
                ))}

                {/* Competition Winners */}
                {award.competitionWinners && award.competitionWinners.map((team, i) => (
                <div key={i} className="grid grid-cols-5 items-center">
                    <div className="col-span-1 flex justify-center">
                        <span className="text-[#C41E3A] text-lg">{award.icon}</span>
                    </div>
                    <div className="col-span-4 flex">
                    <p 
                        className="text-black font-raleway text-sm py-2"
                    >
                        {team.team} : [{team.members.join(", ")}]
                    </p>
                    </div>
                    
                </div>
                ))}
            </div>
            </div>
        ))}
        </div>
    </div>
    )
};