"use clients";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define interface for section data
interface InnovationSection {
  title: string;
  images: string[];
  description: string;
}

// Static data
const innovationSections: InnovationSection[] = [
  {
    title: "Outstanding Student Spotlight",
    images: [
      "/innovations/image1.png",
      "/innovations/image2.png",
      "/innovations/image3.png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "Where Innovation Meets Learning",
    images: [
      "/innovations/image1.png",
      "/innovations/image2.png",
      "/innovations/image3.png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "World-Class Mentorship",
    images: [
      "/innovations/image1.png",
      "/innovations/image2.png",
      "/innovations/image3.png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "Real-World Adventures",
    images: [
      "/innovations/image1.png",
      "/innovations/image2.png",
      "/innovations/image3.png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];

export default function Studentactivity() {
    
    return (
    <div className="w-full">
        <h1 className="text-3xl font-playfair_display text-black">Student’s Achievement</h1>
        <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full"/>
        <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3"/>

        <div className="max-w-5xl mt-10 space-y-12">
            {innovationSections.map((section, idx) => (
                <div key={idx} className="space-y-6">
                {/* Title */}
                <h1 className="text-2xl text-black font-semibold font-raleway">
                    {section.title}
                </h1>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    className="mx-auto mt-5"
                >
                    {section.images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center rounded-2xl border h-100">
                        <img
                            src={img}
                            alt={`slide-${index}`}
                            className="rounded-2xl"
                        />
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>

                {/* Description */}
                <div className="space-y-3">
                    <p className="text-black font-raleway text-base mt-5">
                    {section.description}
                    </p>
                </div>
                </div>
            ))}
        </div>
    </div>
    )
};