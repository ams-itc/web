import React from "react";

interface InitialImageProps {
  imagePath: string;
  text: string;
}

const InitialImage: React.FC<InitialImageProps> = ({ imagePath, text }) => {
  return (
    <div className="w-full relative">
      <img src={imagePath} alt={text} className="w-full h-auto object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white font-bold font-playfair_display text-center">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-snug md:leading-normal">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InitialImage;
