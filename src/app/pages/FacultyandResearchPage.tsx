"use client";

import AcademicSupportStaffSection from "../components/facultyandresearch/AcademicandSupportStaff";
import InitialImage from "../components/ui/InitialImage";
import ReDALabSection from "../components/facultyandresearch/ReDALab";
import PreviousCollaborationsSection from "../components/facultyandresearch/PreviousCollaboration";
import OngoingProjectsSection from "../components/facultyandresearch/OngoingProject";

export default function FacultyandResearchPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Initial Image Section */}
            <InitialImage imagePath="./src/assets/image.png" text="Faculty and Research" />
            <div className="w-full grid grid-cols-5 gap-x-2">
                {/* Sidebar Navigation */}
                <nav className="col-span-1 px-10 py-3 sticky top-0 h-screen overflow-y-auto">
                    <div className="py-8 border-b border-gray-300">
                        <a href="/academics/#academic-support-staff" className="text-base text-black font-raleway">
                            Academic & Support Staff
                        </a>
                    </div>
                    <div className="py-8 border-b border-gray-300">
                        <a href="/academics/#redalab" className="text-base text-black font-raleway">
                            ReDa Lab
                        </a>
                    </div>
                    <div className="py-8 border-b border-gray-300">
                        <a href="/academics/#how-to-apply" className="text-base text-black font-raleway">
                            Previous Collaborations
                        </a>
                    </div>
                    <div className="py-8 border-b border-gray-300">
                        <a href="/academics/#scholarship" className="text-base text-black font-raleway">
                            Ongoing Projects
                        </a>
                    </div>
                </nav>

                {/* Content Sections */}
                <section className="col-span-4 px-10 py-8 space-y-10">
                    <div id="academic-support-staff">
                        <AcademicSupportStaffSection />
                    </div>
                    <div id="redalab">
                        <ReDALabSection />
                    </div>
                    <div id="how-to-apply">
                        <PreviousCollaborationsSection />
                    </div>
                    <div id="scholarship">
                        <OngoingProjectsSection />
                    </div>
                </section>
            </div>
        </div>
    )
}