import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Trustee {
  name: string;
  title: string;
  image: string;
  quote: string;
}

const trustees: Trustee[] = [
  {
    name: "Asst. Prof. Dr. LIN Mongkulsery",
    title: "Acting Head of Department",
    image: "/staff/mongkulserey.jpg", // replace with your actual image path
    quote:
      "I believe that the greatest gift I can give my students is not just knowledge, but the confidence to seek it for themselves. My goal is to light a spark of curiosity that will guide them long after they leave my classroom.",
  },
  {
    name: "Asst. Prof. Dr. PHAUK Sokhhey",
    title: "Head of Department",
    image: "/staff/sokkhey.jpg", // replace with your actual image path
    quote:
      "I believe that the greatest gift I can give my students is not just knowledge, but the confidence to seek it for themselves. My goal is to light a spark of curiosity that will guide them long after they leave my classroom.",
  },
];

export default function BoardOfTrustees() {
  return (
    <div className="pt-10 w-full">
        <h1 className="text-3xl font-playfair_display text-black font-semibold">
          Board of Trustees
        </h1>
        <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full" />
        <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3" />

        {/* Trustees List */}
        <div className="pt-5 space-y-10">
          {trustees.map((trustee, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-between gap-x-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-shrink-0 md:w-1/3">
                <img
                  src={trustee.image}
                  alt={trustee.name}
                  className="rounded-md shadow-lg w-full h-72 object-cover "
                />
              </div>

              {/* Text */}
              <div
                className={`w-full md:w-2/3 ${
                  index % 2 === 1 ?  "text-left items-start": "text-right items-end"
                } flex flex-col`}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{trustee.name}</h3>
                <p className="text-gray-600 mb-6 text-xl">{trustee.title}</p>
                <div className="relative">
                  <FaQuoteLeft
                    className={`text-red-600 absolute text-xl "-left-6 top-0" `}
                  /><br/>
                  <p className={`text-gray-700 leading-relaxed ${
                    index % 2 === 1 ? "pr-30 pl-10" : "pl-30 pr-10"
                  }`}>{trustee.quote}</p><br />
                  <FaQuoteRight
                    className={`text-red-600 absolute text-xl right-0 bottom-0 `}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
