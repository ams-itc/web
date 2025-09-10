"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const clubs = [
  {
    title: "LLM Application and Research Club",
    desc: "Explore new technology and research results around large language models and deploy them for solving real-world challenges, including building AI assistants, fine-tuning pre-trained models, developing and optimizing existing architecture of LLMs, as well as exploring theoretical properties of LLMs.",
    color: "border-[#3A3B5C]",
  },
  {
    title: "Computer Vision and AI Club",
    desc: "Dedicated to advancing research and solutions in computer vision, deep learning, and general artificial intelligence. It works on image recognition, object detection, scene understanding, medical imaging, and video analysis using state-of-the-art models such as CNNs, transformers, and generative networks. The unit also supports applications in agriculture, smart cities, and surveillance technology",
    color: "border-[#C41E3A]",
  },
  {
    title: "Data Science and Machine Learning Club",
    desc: "This unit concentrates on the development and application of statistical models, machine learning algorithms, and AI techniques to extract insights from data. Research areas include supervised and unsupervised learning, predictive modeling, anomaly detection, and model interpretability. The club is under unit collaborates with public and private sectors to solve problems using data science.",
    color: "border-[#3A3B5C]",
  },
  {
    title: "Data and Business Analytics Club",
    desc: "This club aims to harness data analytics, business intelligence, and decision science to drive strategic insights and performance improvement. It explores domains such as customer behavior analysis, financial forecasting, operations optimization, and marketing analytics. The unit builds dashboards, reporting systems, and analytical pipelines to support data-driven decision-making.",
    color: "border-[#C41E3A]",
  },
];

export default function ResearchClubs() {
  return (
    <section className="bg-white py-10 min-h-screen flex flex-col items-center gap-y-5">
      {/* Title */}
      <div className="text-center max-w-3xl px-30 space-y-4  min-w-screen">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair_display">
          Research and Data Analytics Lab
        </h2>
        <p className="text-gray-600 text-base font-raleway leading-relaxed">
          The Research and Data Analytics Lab (ReDA Lab), an interdisciplinary research center at the Institute of Technology of Cambodia (ITC), 
          is where theoretical knowledge meets practical application. Within the Department of Applied Mathematics and Statistics, 
          we are a leading force in using data science to solve real-world problems and drive innovation. 
          Our lab provides students with hands-on experience and a direct path to career readiness through five dynamic units. 
          Each unit offers a unique focus, from cutting-edge research to community-based projects, ensuring our members are well-equipped to excel in the evolving landscape of data.
        </p>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={1.2}
        centeredSlides
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        autoHeight={true}
        className="max-w-6xl mx-auto !h-auto relative pb-12"
      >
        {clubs.map((club, idx) => ( 
          <SwiperSlide key={idx} className="transition-transform duration-300 h-auto min-h-[400px] content-start">
            {({ isActive }) => (
              <div
                className={`p-6 rounded-xl font shadow-md border-2 bg-white flex flex-col justify-between transition-transform duration-300 h-auto min-h-[300px] mt-8 ${
                  club.color
                } ${isActive ? "scale-105 shadow-xl" : "scale-95 opacity-80"}`}
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {club.title}
                  </h3>
                  <p className="text-gray-600 mt-3 text-sm">{club.desc}</p>
                </div>
                <hr className="border-[0.25px] border-gray-300 mt-6"/>
                <div className=" flex justify-end">
                  <a
                    href="#"
                    className="text-[#C41E3A] text-sm font-semibold hover:underline mt-1"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
        {/* Collaborate with Us */}
        <div className=" bg-[#3A3B5C] text-white rounded-xl p-6 shadow-md flex flex-col items-center min-w-[1200px]">
        <   h3 className="text-2xl font-semibold mb-2 font-raleway">Collaborate with Us</h3>
            <p className="mb-4 text-sm text-center font-raleway">
              Interested in research collaboration or partnership opportunities? <br />
              We welcome connections with industry, government, and academic institutions.
            </p>
            <div className="flex justify-center ">
                <button className="bg-white text-indigo-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                    <p className="inline-flex font-raleway font-bold">Contact ReDA Lab <span><ArrowRight className="w-10"/></span> </p>
                </button>
            </div>
        </div>
    </section>
  );
}
