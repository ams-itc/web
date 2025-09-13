"use client";

import AboutAMS from "../components/about/AboutAMS";
import Accreditation from "../components/about/Accreditation";
import BoardOfTrustees from "../components/about/BoardofTrustees";
import IndustrialPartners from "../components/about/IndustrialPartners";
import InitialImage from "../components/ui/InitialImage";

export default function AboutPage() {

    return (
        <div className="min-h-screen bg-white">
            {/* Initial Image Section */}
            <InitialImage imagePath="/image.png" text="About Us" />

            <div className="w-full grid grid-cols-5 gap-x-2">
                {/* Sidebar Navigation */}
                <nav className="col-span-1 px-10 py-3 sticky top-0 h-screen overflow-y-auto">
                    <div className="py-8 border-b border-gray-300">
                        <a href="/about/#aboutAMS" className="text-base text-black font-raleway">
                        About AMS
                        </a>
                    </div>
                    <div className="py-8 border-b border-gray-300">
                        <a href="/about/#boardoftrustees" className="text-base text-black font-raleway">
                        Board of Trustees
                        </a>
                    </div>
                    <div className="py-8 border-b border-gray-300">
                        <a href="/about/#accreditation" className="text-base text-black font-raleway">
                        Accreditation
                        </a>
                    </div>
                    <div className="py-8 border-b border-gray-300">
                        <a href="/about/#industrialpartners" className="text-base text-black font-raleway">
                        Industrial Partners
                        </a>
                    </div>
                </nav>

                {/* Content Sections */}
                <section className="col-span-4 px-10 py-8">
                    <div id="aboutAMS">
                        <AboutAMS />
                    </div>
                    <div id="boardoftrustees">
                        <BoardOfTrustees />
                    </div>
                    <div id="accreditation">
                        <Accreditation />
                    </div>
                    <div id="industrialpartners">
                        <IndustrialPartners />
                    </div>
                </section>
            </div>
        </div>
    )
}