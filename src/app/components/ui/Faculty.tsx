"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const facultyMembers = [
  {
    name: "Asst. Prof. Dr. PHAUK Sokkhey",
    position: "Head of Department",
    specialization: "Mathematics and Data Science",
    quote:
      "I believe that the greatest gift I can give my students is not just knowledge, but the confidence to seek it for themselves. My goal is to light a spark of curiosity that will guide them long after they leave my classroom.",
    image: "/faculty1.jpg",
    profileUrl: "#",
  },
  {
    name: "Dr. Chan Sophea",
    position: "Senior Lecturer",
    specialization: "Artificial Intelligence",
    quote:
      "Teaching AI is about preparing students to design solutions that shape the future responsibly and ethically.",
    image: "/faculty2.jpg",
    profileUrl: "#",
  },
  {
    name: "Prof. Lim Dara",
    position: "Professor",
    specialization: "Financial Engineering",
    quote:
      "Finance and engineering go hand in hand. I guide students to bridge technical models with real-world applications.",
    image: "/faculty3.jpg",
    profileUrl: "#",
  },
  {
    name: "Dr. Nary Sok",
    position: "Lecturer",
    specialization: "Data Analytics",
    quote:
      "Data tells powerful stories. I aim to equip students with the skills to interpret and use data effectively.",
    image: "/faculty4.jpg",
    profileUrl: "#",
  },
  {
    name: "Dr. Kim Rithy",
    position: "Assistant Professor",
    specialization: "Machine Learning",
    quote:
      "Machine learning is more than algorithms — it's about solving problems that matter in society.",
    image: "/faculty5.jpg",
    profileUrl: "#",
  },
];

export default function FacultySection() {
  const [current, setCurrent] = useState(0);
  const swiperRef = useRef(null);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % facultyMembers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Update Swiper slide when `current` changes
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(current);
    }
  }, [current]);

  return (
    <section className="bg-gray-50 px-8 md:px-20 py-10">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair_display">
          Meet Our Faculty Members
        </h2>
        <p className="text-gray-600 text-base font-raleway leading-relaxed">
          Our faculty are the heart of our department. Get to know the
          passionate educators and mentors who are committed to guiding you,
          challenging your thinking, and inspiring your academic journey.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="max-w-5xl mx-auto"
      >
        {facultyMembers.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-md rounded-xl p-8">
              {/* Faculty Image */}
              <div className="flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-lg shadow-lg w-[320px] h-[380px] object-cover"
                />
              </div>

              {/* Faculty Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 font-raleway">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gray-700">
                  {member.position}
                </p>
                <p className="italic text-gray-700">
                  Specializes in {member.specialization}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  “{member.quote}”
                </p>
                <a
                  href={member.profileUrl}
                  className="inline-flex items-center text-[#C41E3A] font-semibold hover:underline"
                >
                  View Full Profile <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className="px-8 py-3 border border-[#C41E3A] text-[#C41E3A] font-semibold rounded-md hover:bg-red-50 transition font-raleway">
          View All Faculty
        </button>
      </div>
    </section>
  );
}
