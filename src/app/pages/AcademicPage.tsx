"use client";

import BachelorDegree from "../components/academics/BachelorDegree";
import HowtoApply from "../components/academics/HowtoApply";
import MasterDegree from "../components/academics/MasterDegree";
import Scholarships from "../components/academics/Scholarships";
import InitialImage from "../components/ui/InitialImage";

export default function AcademictPage() {

    return (
        <div className="min-h-screen bg-white">
            {/* Initial Image Section */}
            <InitialImage imagePath="/image.png" text="Academics" />

            <div className="w-full grid grid-cols-5 gap-x-2">
                {/* Sidebar Navigation */}
                <nav className="col-span-1 px-10 py-3 sticky top-0 h-screen overflow-y-auto">
                    <div className="py-8 border-b border-gray-300">
                        <a href="/academics/#bachelor-degree" className="text-base text-black font-raleway">
                        Bachelor's Degree
                        </a>
                    </div>
                    <div className="py-8 border-b border-gray-300">
                        <a href="/academics/#master-degree" className="text-base text-black font-raleway">
                        Master’s Degree
                        </a>
                    </div>
                    <div className="py-8 border-b border-gray-300">
                        <a href="/academics/#how-to-apply" className="text-base text-black font-raleway">
                        How to Apply
                        </a>
                    </div>
                    <div className="py-8 border-b border-gray-300">
                        <a href="/academics/#scholarship" className="text-base text-black font-raleway">
                        Scholarships
                        </a>
                    </div>
                    <div className="py-8">
                        <a href="/academics/#academic-calendar" className="text-base text-black font-raleway">
                        Academic Calendar
                        </a>
                    </div>
                </nav>

                {/* Content Sections */}
                <section className="col-span-4 px-10 py-8">
                    <div id="bachelor-degree">
                        <BachelorDegree />
                    </div>
                    <div id="master-degree">
                        <MasterDegree />
                    </div>
                    <div id="how-to-apply">
                        <HowtoApply />
                    </div>
                    <div id="scholarship">
                        <Scholarships />
                    </div>
                </section>
            </div>
        </div>
    )
}