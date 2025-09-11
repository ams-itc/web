"use client";

import AcademicSupportStaffSection from "../components/facultyandresearch/AcademicandSupportStaff";
import InitialImage from "../components/ui/InitialImage";

export default function FacultyandResearchPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Initial Image Section */}
            <InitialImage imagePath="./src/assets/image.png" text="Faculty and Research" />

            {/* Academic & Support Staff Section */}
            <AcademicSupportStaffSection />

        </div>
    )
}