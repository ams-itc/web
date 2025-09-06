import { Users, BookOpen, GraduationCap, Building2, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-8 bg-gray-50 min-h-screen">
      {/* About AMS */}
      <section className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-4xl font-bold mb-4 text-[#2E2E2E] font-playfair_display">About AMS</h2>
        <p className="text-[#4d4d4d] font-raleway leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Users className="mx-auto h-10 w-10 text-red-600 mb-2" />
          <p className="text-2xl font-medium text-[#3A3B5C] font-inter">20+</p>
          <p className="text-gray-600">Faculty Members</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <BookOpen className="mx-auto h-10 w-10 text-red-600 mb-2" />
          <p className="text-2xl font-medium text-[#3A3B5C] font-inter">400+</p>
          <p className="font-medium text-[#767676] font-inter">Students Enrolled</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Building2 className="mx-auto h-10 w-10 text-red-600 mb-2" />
          <p className="text-2xl font-medium text-[#3A3B5C] font-inter">100+</p>
          <p className="font-medium text-[#767676] font-inter">Research Projects</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <GraduationCap className="mx-auto h-10 w-10 text-red-600 mb-2" />
          <p className="text-2xl font-medium text-[#3A3B5C] font-inter">80+</p>
          <p className="font-medium text-[#767676] font-inter">Graduated</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <Handshake className="mx-auto h-10 w-10 text-red-600 mb-2" />
          <p className="text-2xl font-medium text-[#3A3B5C] font-inter">50+</p>
          <p className="font-medium text-[#767676] font-inter">Industry Partners</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Text */}
        <div className="content-start">
          <h3 className="text-3xl font-bold mb-4 font-playfair_display text-[#2E2E2E]">Why Choose Us?</h3>
          <p className="text-gray-600 mb-6 font-raleway">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-raleway">
            <li>Excepteur sint occaecat cupidatat non proident.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation.</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
          </ul>
        </div>

        {/* Image */}
        <div className="content-center">
          <img
            src="/students.jpg" // store in public/students.jpg
            alt="Students working together"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
}
