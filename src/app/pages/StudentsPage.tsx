"use client";

import Alumini from "../components/students/Alumini";
import Studentachievements from "../components/students/StudentAchievements";
import Studentactivity from "../components/students/StudentActivity";
import StudentResource from "../components/students/StudentResource";
import InitialImage from "../components/ui/InitialImage";

export default function StudenttsPage() {

    return (
        <div className="min-h-screen bg-white">
            {/* Initial Image Section */}
            <InitialImage imagePath="./src/assets/image.png" text="Students" />

            <div className="w-full grid grid-cols-5 gap-x-2">
                <nav className="col-span-1 px-10 py-3 sticky top-0 h-screen overflow-y-auto">
                    <div className="py-8 border-b border-gray-300">
                        <a href="#achievement" className="text-base text-black font-raleway">Student’s Achievement</a>
                    </div>
                    <div className="py-8 border-b border-gray-300">
                        <a href="#activity" className="text-base text-black font-raleway">Student’s Life</a>
                    </div>
                    <div className="py-8 border-b border-gray-300">
                        <a href="#resource" className="text-base text-black font-raleway">Student’s Resources</a>
                    </div>
                    <div className="py-8">
                        <a href="#alumini" className="text-base text-black font-raleway">Alumni</a>
                    </div>
                </nav>

                <section className="col-span-4 px-10 py-4">
                    <div id="achievement"><Studentachievements /></div>
                    <div id="activity"><Studentactivity /></div>
                    <div id="resource"><StudentResource /></div>
                    <div id="alumini"><Alumini /> </div>
                </section>
            </div>


        </div>
    )
}