"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface Staff {
  name: string;
    title: string;
    position: string;
    degrees: string;
    expert: string;
    image: string;
    division?: string;
    description?: string;
    education?: string[];
    tags?: string[];
    research?: string;
    email?: string;
    phone?: string;
    office?: string;
    officeHour?: string[];
    specialist?: string[];
}

export default function AcademicSupportStaffSection() {
    const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const staffData = {
        head: {
            title: "Dr",
            name: "Phauk Sokkhey",
            position: "Head of Department",
            degrees: "PHD MATHEMATICS",
            expert: "Algorithm and Computational Theory",
            image: "/staff/sokkhey.jpg",
            division: "Mathematics Division",
            description:
                "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
            education: [
                "PhD in Statistics - University of Chicago (2019)",
                "MS in Applied Mathematics - Northwestern (2016)",
                "BS in Computer Science - UIUC (2014)",
            ],
            tags: ["DATA SCIENCE", "STATISTICS", "ANALYTICS"],
            research:
                "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
            email: "abc@gmial.com",
            phone: "012345678",
            office: "Room 104",
            officeHour: ["Monday - Friday : 8:00 AM - 5:00 PM", "Appointment via Email or Phone Number"],
        },
        actingHead: {
            title: "Dr",
            name: "Lin Mongkulsery",
            position: "Acting Head",
            degrees: "PHD MATHEMATICS",
            expert: "Algorithm and Computational Theory",
            image: "/staff/mongkulserey.jpg",
            division: "Mathematics Division",
            description:
                "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
            education: [
                "PhD in Statistics - University of Chicago (2019)",
                "MS in Applied Mathematics - Northwestern (2016)",
                "BS in Computer Science - UIUC (2014)",
            ],
            tags: ["DATA SCIENCE", "STATISTICS", "ANALYTICS"],
            research:
                "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
            email: "",
            phone: "",
            office: "",
            officeHour: ["Monday - Friday : 8:00 AM - 5:00 PM", "Appointment via Email or Phone Number"],
        },
        professors: [
            {
                title: "Dr",
                name: "John Doe",
                position: "Professor",
                degrees: "PHD MATHEMATICS",
                expert: "Algorithm and Computational Theory",
                image: "/staff/vanda.jpg",
                division: "Mathematics Division",
                description:
                    "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
                education: [
                    "PhD in Statistics - University of Chicago (2019)",
                    "MS in Applied Mathematics - Northwestern (2016)",
                    "BS in Computer Science - UIUC (2014)",
                ],
                tags: ["DATA SCIENCE", "STATISTICS", "ANALYTICS"],
                research:
                    "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
                email: "",
                phone: "",
                office: "",
                officeHour: ["Monday - Friday : 8:00 AM - 5:00 PM", "Appointment via Email or Phone Number"],
            },
            {
                title: "Dr",
                name: "John Doe",
                position: "Professor",
                degrees: "PHD MATHEMATICS",
                expert: "Algorithm and Computational Theory",
                image: "/staff/vanda.jpg",
                division: "Mathematics Division",
                description:
                    "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
                education: [
                    "PhD in Statistics - University of Chicago (2019)",
                    "MS in Applied Mathematics - Northwestern (2016)",
                    "BS in Computer Science - UIUC (2014)",
                ],
                tags: ["DATA SCIENCE", "STATISTICS", "ANALYTICS"],
                research:
                    "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
                email: "",
                phone: "",
                office: "",
                officeHour: ["Monday - Friday : 8:00 AM - 5:00 PM", "Appointment via Email or Phone Number"],
            },
            {
                title: "Dr",
                name: "John Doe",
                position: "Professor",
                degrees: "PHD MATHEMATICS",
                expert: "Algorithm and Computational Theory",
                image: "/staff/vanda.jpg",
                division: "Mathematics Division",
                description:
                    "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
                education: [
                    "PhD in Statistics - University of Chicago (2019)",
                    "MS in Applied Mathematics - Northwestern (2016)",
                    "BS in Computer Science - UIUC (2014)",
                ],
                tags: ["DATA SCIENCE", "STATISTICS", "ANALYTICS"],
                research:
                    "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
                email: "",
                phone: "",
                office: "",
                officeHour: ["Monday - Friday : 8:00 AM - 5:00 PM", "Appointment via Email or Phone Number"],
            },
            {
                title: "Dr",
                name: "John Doe",
                position: "Professor",
                degrees: "PHD MATHEMATICS",
                expert: "Algorithm and Computational Theory",
                image: "/staff/vanda.jpg",
                division: "Mathematics Division",
                description:
                    "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
                education: [
                    "PhD in Statistics - University of Chicago (2019)",
                    "MS in Applied Mathematics - Northwestern (2016)",
                    "BS in Computer Science - UIUC (2014)",
                ],
                tags: ["DATA SCIENCE", "STATISTICS", "ANALYTICS"],
                research:
                    "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
                email: "",
                phone: "",
                office: "",
                officeHour: ["Monday - Friday : 8:00 AM - 5:00 PM", "Appointment via Email or Phone Number"],
            },
        ],
        assistants: [
            {
                title: "Mr",
                name: "Sam Vanda",
                position: "Assistant",
                degrees: "PHD MATHEMATICS",
                expert: "Algorithm and Computational Theory",
                image: "/staff/vanda.jpg",
                division: "Mathematics Division",
                description:
                    "Dr. LIN Mongkulsery specializes in distributed systems and cloud computing architecture. He has extensive industry experience and maintains active collaboration with tech companies.",
                education: [
                    "PhD in Statistics - University of Chicago (2019)",
                    "MS in Applied Mathematics - Northwestern (2016)",
                    "BS in Computer Science - UIUC (2014)",
                ],
                tags: ["DATA SCIENCE", "STATISTICS", "ANALYTICS"],
                research:
                    "Predictive modeling, statistical machine learning, data visualization, and healthcare analytics applications.",
                email: "",
                phone: "",
                office: "",
                officeHour: ["Monday - Friday : 8:00 AM - 5:00 PM", "Appointment via Email or Phone Number"],
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
  const handleOpenModal = (staff: Staff) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Remove the staff from DOM after the closing animation (300ms)
    setTimeout(() => setSelectedStaff(null), 0);
  };

    return (

        <section className="w-full">
            <h1 className="text-3xl font-playfair_display text-black font-semibold">
                Academic & Support Staff
            </h1>
            <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
            <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />
            <p className="mt-6 text-lg text-[#767676] font-raleway">
                Our department is home to a team of dedicated academic and support staff who are committed to excellence in education and research. 
                With a diverse range of expertise and a passion for fostering student success, our faculty members bring a wealth of knowledge and experience to the classroom. 
                From seasoned professors to enthusiastic assistants, each member of our team plays a vital role in creating a dynamic and supportive learning environment.
            </p>
            <div className="mt-5">
                <h1 className="text-xl font-raleway text-[#3A3B5C] font-bold">Organizational Chart</h1>
                <div className="space-y-10 pt-5">
                    {/* Administrator  */}
                    <div className="flex flex-row justify-around items-center">
                        {/* Head of department */}
                        <div className="rounded-2xl border-4 border-gray-200 bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                        {staffData.head && (
                            <StaffCard staff={staffData.head} onClick={() => handleOpenModal(staffData.head)} />
                        )}
                        </div>
                        {/* Acting Head of department */}
                        <div className="rounded-2xl border-4 border-gray-200 bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                            {staffData.actingHead && (
                            <>
                            {/* Image */}
                            <img
                                src={staffData.actingHead.image}
                                alt={staffData.actingHead.name}
                                className="w-full h-48 object-cover rounded-t-xl"
                            />

                            {/* Content */}
                            <div className="text-center px-4 pb-6 pt-4 font-raleway space-y-2">
                                <h3 className="text-lg font-bold text-[#3A3B5C]">{staffData.actingHead.title + ". " + staffData.actingHead.name}</h3>
                                <p className="text-sm text-[#C41E3A] font-semibold">{staffData.actingHead.position}</p>
                                <div className="px-2 border bg-[#C41E3A]/20 rounded-full w-fit mx-auto">
                                    <p className="text-xs text-[#C41E3A] font-semibold">{staffData.actingHead.degrees}</p>
                                </div>
                                <p className="text-xs text-black mt-2 font-inter">{staffData.actingHead.expert}</p>
                            </div>
                            </>
                            )}
                        </div>
                        {/* Assistant of department */}
                        <div className="rounded-2xl border-4 border-gray-200 bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                            {staffData.assistants.map((assistant, index) => (
                            <>
                            <div key={index}>
                                {/* Image */}
                                <img
                                    src={assistant.image}
                                    alt={assistant.name}
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />

                                {/* Content */}
                                <div className="text-center px-4 pb-6 pt-4 font-raleway space-y-2">
                                    <h3 className="text-lg font-bold text-[#3A3B5C]">{assistant.title + ". " + assistant.name}</h3>
                                    <p className="text-sm text-[#C41E3A] font-semibold">{assistant.position}</p>
                                    <div className="px-2 border bg-[#C41E3A]/20 rounded-full w-fit mx-auto">
                                        <p className="text-xs text-[#C41E3A] font-semibold">{assistant.degrees}</p>
                                    </div>
                                    <p className="text-xs text-black font-inter">{assistant.expert}</p>
                                </div>
                            </div>
                            </>
                            ))}
                        </div>
                    </div>
                    {/* Professors */}
                    <div className="grid grid-cols-4 gap-x-10">
                        {staffData.professors.map((professor, index) => (
                            <div 
                                key={index}
                                className="rounded-2xl border-4 border-gray-200 bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                            >
                                {/* Image */}
                                <img
                                    src={professor.image}
                                    alt={professor.name}
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />

                                {/* Content */}
                                <div className="text-center px-4 pb-6 pt-4 font-raleway space-y-2">
                                    <h3 className="text-lg font-bold text-[#3A3B5C]">{professor.title + ". " + professor.name}</h3>
                                    <p className="text-sm text-[#C41E3A] font-semibold">{professor.position}</p>
                                    <div className="px-2 border bg-[#C41E3A]/20 rounded-full w-fit mx-auto">
                                        <p className="text-xs text-[#C41E3A] font-semibold">{professor.degrees}</p>
                                    </div>
                                    <p className="text-xs text-black font-inter">{professor.expert}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Modal */}
                {selectedStaff && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Blurred Background */}
                    <div
                    className="absolute inset-0 bg-opacity-30 backdrop-blur-sm transition-opacity duration-300"
                    onClick={handleCloseModal}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full min-h-[500px] min-w-1/2 z-10 transform transition-all duration-300 scale-100 opacity-100">
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-8 z-20 text-white hover:text-[#C41E3A] font-bold text-xl"
                        onClick={handleCloseModal}
                    >
                        <X />

                    <span className="absolute -right-24 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Exit the page
                    </span>
                    </button>

                    {/* Staff Info */}
                    <div className="max-h-[800px] overflow-y-auto rounded-2xl bg-white shadow-lg scrollbar-hidden">
                        <div>
                            <div className="relative py-8 rounded-t-2xl">
                                {/* Background image */}
                                <img
                                    src="/staff/background.png"
                                    alt="background"
                                    className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                                />

                            {/* Overlay for dimming (optional) */}
                            <div className="absolute inset-0 bg-black/30 rounded-t-2xl"></div>

                                {/* Foreground profile image */}
                                <img
                                    src={selectedStaff.image}
                                    alt={selectedStaff.name}
                                    className="relative z-10 w-50 h-50 object-cover rounded-full mx-auto shadow-lg"
                                />
                            </div>
                            <div className="p-5 space-y-2">
                                <h2 className="text-2xl font-bold text-[#3A3B5C]">{selectedStaff.title + ". " + selectedStaff.name}</h2>
                                <p className="text-[#C41E3A] font-semibold">{selectedStaff.position}</p>
                                <p className="text-[#767676] text-xs">{selectedStaff.division}</p>
                                <p className="text-black text-sm">{selectedStaff.description}</p>
                                <p className="text-[#3A3B5C] text-sm font-semibold pt-3">EDUCATION & QUALIFICATIONS</p>
                                <ul>
                                    {selectedStaff.education?.map((edu, idx) => (
                                        <li key={idx} className="text-black text-sm list-disc list-inside font-medium">{edu}</li>
                                    ))}
                                </ul>
                                <div className="mt-2 flex flex-row space-x-2">
                                    {selectedStaff.tags?.map((tag, idx) => (
                                        <div className="px-2 py-1 border bg-[#C41E3A]/20 rounded-full w-fit" key={idx}>
                                            <p key={idx} className="text-xs text-[#C41E3A] font-medium">{tag}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="border w-full h-auto px-5 py-3 rounded-lg mt-4 bg-[#767676]/10">
                                    <h3 className="text-[#3A3B5C] font-bold text-sm">RESEARCH INTEREST</h3>
                                    <p className="text-xs text-black pt-3">{selectedStaff.research}</p>
                                </div>
                                <div className="w-full h-auto p-5 rounded-lg mt-4 bg-[#767676]/10">
                                    <div className="grid grid-cols-10 gap-x-4 gap-y-2">
                                        <p className="col-span-2 text-[#3A3B5C] font-semibold text-sm">EMAIL:</p>
                                        <p className="col-span-8 text-[#3A3B5C] font-medium text-sm">{selectedStaff.email}</p>

                                        <p className="col-span-2 text-[#3A3B5C] font-semibold text-sm">PHONE:</p>
                                        <p className="col-span-8 text-[#3A3B5C] font-medium text-sm">{selectedStaff.phone}</p>

                                        <p className="col-span-2 text-[#3A3B5C] font-semibold text-sm">OFFICE:</p>
                                        <p className="col-span-8 text-[#3A3B5C] font-medium text-sm">{selectedStaff.office}</p>
                                    </div>
                                </div>
                                <div className="border w-full h-auto p-5 rounded-lg mt-4 bg-[#767676]/10">
                                    <h3 className="text-[#3A3B5C] font-bold text-sm">OFFICE HOUR:</h3>
                                    {selectedStaff.officeHour?.map((hour, idx) => (
                                        <p key={idx} className="text-xs text-black pt-1">{hour}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                )}
            </div>
        </section>
    );
}

// StaffCard component
interface StaffCardProps {
  staff: Staff;
  onClick: () => void;
}

function StaffCard({ staff, onClick }: StaffCardProps) {
  return (
    <div
      className="rounded-2xl border-4 border-gray-200 bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      <img
        src={staff.image}
        alt={staff.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="text-center px-4 pb-6 pt-4 font-raleway space-y-2">
        <h3 className="text-lg font-bold text-[#3A3B5C]">{staff.title + ". " + staff.name}</h3>
        <p className="text-sm text-[#C41E3A] font-semibold">{staff.position}</p>
        <div className="px-2 border bg-[#C41E3A]/20 rounded-full w-fit mx-auto">
          <p className="text-xs text-[#C41E3A] font-semibold">{staff.degrees}</p>
        </div>
        <p className="text-xs text-black mt-2 font-inter">{staff.expert}</p>
      </div>
    </div>
  );
}