"use clients";

import { FaMountain } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

export default function AboutAMS() {
  const images = [
    {
      filepath: "/aboutams.png",
    },
    {
      filepath: "/aboutams.png",
    },
    {
      filepath: "/aboutams.png",
    },
  ];

  const describes = [
    {
        icon: <FaMountain />,
        title: "Missions",
        items: [
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
    },
    {
        icon: <FaEye />,
        title: "Visions",
        items: [
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
    },
    {
        icon: <FaHandsHelping />,
        title: "Core Values",
        items: [
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
    },
  ]

  return (
    <div className="w-full">
      <h1 className="text-3xl font-playfair_display text-black font-semibold">
        About AMS
      </h1>
      <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
      <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-5 pt-5 px-3">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.filepath}
            alt={`AMS image ${index + 1}`}
            className="rounded-2xl object-cover w-full h-full"
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="p-7">
        <p className="text-[#2E2E2E] text-base font-raleway leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Card */}
      <div className="pt-7">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-x-20">
            {describes.map((block, index) => (
            <div key={index} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 pb-5">
                    <span className="text-[#3A3B5C] text-5xl">{block.icon}</span>
                    <h2 className="text-3xl font-medium text-[#3A3B5C] font-reddit_sans">{block.title}</h2>
                </div>
                <ul className="space-y-3 text-gray-600 text-base leading-relaxed">
                {block.items.map((item, i) => (
                    <li key={i} className="list-disc list-inside font-raleway tracking-wide text-base/8">
                        {item}
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}
