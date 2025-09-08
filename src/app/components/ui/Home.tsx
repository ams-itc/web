export default function Home() {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-center gap-36 px-20 py-16 mt-15 min-h-[80vh]">
      {/* Left side: text */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-bold leading-tight text-gray-900 font-playfair_display">
          Learning Today, <br /> Leading Tomorrow
        </h1>
        <p className="text-lg text-gray-600 font-raleway">
          Through world-class instruction and hands-on research opportunities,
          we prepare students at every level to excel in data-driven fields and
          contribute meaningfully to science, technology, and society.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-[#3A3B5C] rounded-md shadow hover:bg-[#62649d] transition font-raleway text-white font-semibold">
            Explore Our Programs →
          </button>
          <button className="px-6 py-3 border border-[#C41E3A] rounded-md hover:bg-red-50 transition font-raleway text-[#C41E3A] font-semibold">
            Meet the Faculty
          </button>
        </div>
      </div>

      {/* Right side: image */}
      <div className="mt-10 md:mt-0">
        <img
          src="/campus.jpg" // put inside public/campus.jpg
          alt="AMS Building"
          className="rounded-lg shadow-xl/50 max-w-md"
        />
      </div>
    </section>
  );
}
