export default function AcademicPrograms() {
  return (
    <section className="bg-white px-8 md:px-20 py-10">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-5">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 font-playfair_display">
          Academic Programs
        </h2>
        <p className="text-gray-600 text-base font-raleway leading-relaxed">
          Explore your passion and build your future with our diverse range of academic
          programs. Whether you're a prospective student seeking a new challenge or a current
          student looking to specialize, our curriculum is designed to provide you with the
          knowledge and skills needed to thrive in an ever-evolving world.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="border-2 border-blue-500 rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 font-raleway">
              Bachelor of Engineering{" "}
              <span className="text-[#C41E3A]">Data Science</span>
            </h3>
            <p className="text-gray-600 mt-4">
              Dive into the world of big data, machine learning, AI, data analytics and business
              analytics. Equip yourself with the skills to solve real-world problems using
              data-driven insights.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
              <li>Core mathematical concepts</li>
              <li>Computational Methods</li>
              <li>Real-world application</li>
              <li>Research opportunities</li>
            </ul>
          </div>
          <div className="mt-6 flex items-center justify-between text-sm border-t-1 border-gray-400 pt-2">
            <span className="text-gray-500">Duration: 5 Years</span>
            <a
              href="#"
              className="text-[#C41E3A] font-semibold hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border-2 border-red-500 rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 font-raleway">
              Bachelor of Engineering{" "}
              <span className="text-[#C41E3A]">Financial Engineering</span>
            </h3>
            <p className="text-gray-600 mt-4">
              Combine mathematics, statistics, and finance to design and manage complex
              financial systems. Prepare for careers in quantitative finance, risk management,
              fintech innovation, and actuarial science.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
              <li>Applied Statistics & Numerical methods</li>
              <li>Financial economic & risk management</li>
              <li>Real-world application</li>
              <li>Research opportunities</li>
            </ul>
          </div>
          <div className="mt-6 flex items-center justify-between text-sm border-t-1 border-gray-400 pt-2">
            <span className="text-gray-500">Duration: 5 Years</span>
            <a
              href="#"
              className="text-[#C41E3A] font-semibold hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border-2 border-indigo-900 rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 font-raleway">
              Master of Engineering{" "}
              <span className="text-[#C41E3A]">Data Science</span>
            </h3>
            <p className="text-gray-600 mt-4">
              Uses real-world problems and scenarios to prepare graduates for roles as
              strategic thought leaders who leverage predictive modeling to support data
              decision-making.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
              <li>Statistical theory</li>
              <li>Data science methods</li>
              <li>Machine learning</li>
              <li>Thesis research</li>
            </ul>
          </div>
          
          <div className="mt-6 flex items-center justify-between text-sm border-t-1 border-gray-400 pt-2">
            <span className="text-gray-500">Duration: 1–2 Years</span>
            <a
              href="#"
              className="text-[#C41E3A] font-semibold hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom button */}
      <div className="flex justify-center mt-10">
        <button className="px-8 py-3 bg-[#3A3B5C] text-white font-semibold rounded-md shadow hover:bg-[#62649d] transition font-raleway">
          Learn More
        </button>
      </div>
    </section>
  );
}
