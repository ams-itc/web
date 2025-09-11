"use client";

export default function AcademicSupportStaffSection() {

    const staffData = {
        head: {
            name: "Dr. Phauk Sokkhey",
            position: "Head of Department",
            degrees: "PHD MATHEMATICS",
            expert: "Algorithm and Computational Theory",
            image: "/staff/sokkhey.jpg",
        },
        actingHead: {
            name: "Dr. Lin Mongkulsery",
            position: "Acting Head",
            degrees: "PHD MATHEMATICS",
            expert: "Algorithm and Computational Theory",
            image: "/staff/mongkulserey.jpg",
        },
        professors: [
            {
            name: "Dr. John Doe",
            position: "Professor",
            degrees: "PHD MATHEMATICS",
            expert: "Algorithm and Computational Theory",
            image: "/staff/vanda.jpg",
            },
            {
            name: "Dr. Jane Smith",
            position: "Professor",
            degrees: "PHD MATHEMATICS",
            expert: "Algorithm and Computational Theory",
            image: "/staff/vanda.jpg",
            },
            {
            name: "Dr. Jane Smith",
            position: "Professor",
            degrees: "PHD MATHEMATICS",
            expert: "Algorithm and Computational Theory",
            image: "/staff/vanda.jpg",
            },
            {
            name: "Dr. Jane Smith",
            position: "Professor",
            degrees: "PHD MATHEMATICS",
            expert: "Algorithm and Computational Theory",
            image: "/staff/vanda.jpg",
            },
        ],
        assistants: [
            {
            name: "Mr. Sam Vanda",
            position: "Assistant",
            degrees: "PHD MATHEMATICS",
            expert: "Algorithm and Computational Theory",
            image: "/staff/vanda.jpg",
            },
            // {
            // name: "Ms. Sok Nary",
            // position: "Assistant",
            // degrees: "PHD MATHEMATICS",
            // expert: "Algorithm and Computational Theory",
            // image: "/staff/nary.png",
            // },
        ],
    };

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-playfair_display">
                Academic & Support Staff
                </h2>

                {/* Head of Department */}
                <div className="relative flex justify-center mb-16">
                    <div className="border-4 border-gray-300 h-fit w-72 rounded-2xl shadow-lg bg-white">
                        <img 
                            src={staffData.head.image} 
                            alt={staffData.head.name}
                            className="w-full rounded-t-2xl object-cover" />
                        <div className="text-center h-fit pb-10 pt-3">
                            <h3 className="text-black font-semibold text-lg">{staffData.head.name}</h3>
                            <p className="text-sm text-gray-600">{staffData.head.position}</p>
                            <p className="text-sm text-gray-600">{staffData.head.degrees}</p>
                            <p className="text-sm text-gray-600">{staffData.head.expert}</p>
                        </div>
                    </div>

                    {/* Line down */}
                    <div className="absolute top-full left-1/2 w-1 h-16 bg-gray-400"></div>

                </div>

                {/* Acting Head */}
                <div className="relative flex justify-center">
                    <div className="border-4 border-gray-300 h-fit w-72 rounded-2xl shadow-lg bg-white">
                        <img 
                            src={staffData.actingHead.image} 
                            alt={staffData.actingHead.name}
                            className="w-full rounded-t-2xl object-cover" />
                        <div className="text-center h-fit pb-10 pt-3">
                            <h3 className="text-black font-semibold text-lg">{staffData.actingHead.name}</h3>
                            <p className="text-sm text-gray-600">{staffData.actingHead.position}</p>
                            <p className="text-sm text-gray-600">{staffData.actingHead.degrees}</p>
                            <p className="text-sm text-gray-600">{staffData.actingHead.expert}</p>
                        </div>
                    </div>

                    {/* Line down */}
                    <div className="absolute top-full left-1/2 w-1 h-115 bg-gray-400"></div>
                    
                </div>

                {/* Assistants */}
                <div className="flex justify-end mb-30">
                    {staffData.assistants.map((assistant, index) => (
                        <div key={index} className="border-4 border-gray-300 h-fit w-70 rounded-2xl shadow-lg bg-white">
                            <img
                                    src={assistant.image}
                                    alt={assistant.name}
                                    className="w-fit rounded-t-2xl mx-auto object-cover"
                                />
                            <div className="text-center h-fit pb-10 pt-3">
                                <h3 className="text-black font-semibold text-lg">{assistant.name}</h3>
                                <p className="text-sm text-gray-600">{assistant.position}</p>
                                <p className="text-sm text-gray-600">{assistant.degrees}</p>
                                <p className="text-sm text-gray-600">{assistant.expert}</p>
                            </div>
                        </div>
                    ))}

                    {/* Horizontal Line */}
                    <div className="absolute top-455 left-1/2 w-75 h-1 bg-gray-400"></div>

                </div>



                {/* Professors */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

                    {/* Horizontal Line */}
                    <div className="absolute top-521 left-90 w-220 h-1 bg-gray-400"></div>

                    {/* Line down */}
                    <div className="absolute top-521 left-90 w-1 h-21 bg-gray-400"></div>

                    {/* Line down */}
                    <div className="absolute top-521 left-162 w-1 h-21 bg-gray-400"></div>

                    {/* Line down */}
                    <div className="absolute top-521 left-238 w-1 h-21 bg-gray-400"></div>

                    {/* Line down */}
                    <div className="absolute top-521 left-309 w-1 h-21 bg-gray-400"></div>

                    {staffData.professors.map((professor, index) => (
                        <div key={index} className="border-4 border-gray-300 h-fit w-70 rounded-2xl shadow-lg bg-white">
                            <img
                                    src={professor.image}
                                    alt={professor.name}
                                    className="w-fit rounded-t-2xl mx-auto object-cover"
                                />
                            <div className="text-center h-fit pb-10 pt-3">
                                <h3 className="text-black font-semibold text-lg">{professor.name}</h3>
                                <p className="text-sm text-gray-600">{professor.position}</p>
                                <p className="text-sm text-gray-600">{professor.degrees}</p>
                                <p className="text-sm text-gray-600">{professor.expert}</p>
                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </section>
    );
}