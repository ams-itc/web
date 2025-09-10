"use client";

import { CalendarDays, ArrowRight, Award, Users2, BookMarkedIcon } from "lucide-react";

interface NewsItem {
  id: number;
  category: string;
  icon: typeof Award | typeof Users2 | typeof BookMarkedIcon;
  categoryColor: "#3A3B5C" | "#C41E3A" | "#D9D9D9";
  date: string;
  title: string;
  description: string;
  image: string;
  imageLayout: "grid" | "full";
}

export default function NewsEvents() {
  const newsData: NewsItem[] = [
    {
      id: 1,
      category: "Events",
      icon: Users2,
      categoryColor: "#3A3B5C",
      date: "July 12, 2025",
      title: "AMS 1st Generation Thesis Defense – A Historic Milestone",
      description:
        "On July 9–10, 2025, we mark a proud and unforgettable moment for the Department of Applied Mathematics and Statistics (AMS) at ITC...",
      image: "/newsAndevents/news1.png",
      imageLayout: "grid",
    },
    {
      id: 2,
      category: "Awards",
      icon: Award,
      categoryColor: "#C41E3A",
      date: "July 11, 2025",
      title: "Internship Program Announcement – 2025 DGIST Summer Research",
      description:
        "We are proud to announce that Mr. PNV Limseng, a Year 4 student from AMS, has been selected to participate in the 2025 Summer Research Internship...",
      image: "/newsAndevents/news2.png",
      imageLayout: "full",
    },
    {
      id: 3,
      category: "Programs",
      icon: BookMarkedIcon,
      categoryColor: "#D9D9D9",
      date: "July 12, 2025",
      title: "Master Program in Data Science (M-DAS) 2025 Announcement",
      description:
        "The Graduate School (GSI) of ITC and AMS are now accepting applications for the Master’s Program in Data Science (M-DAS) for 2025...",
      image: "/newsAndevents/news3.png",
      imageLayout: "full",
    },
  ];

  const UpcomingEvents = [
    {
        id: 1,
        title: "Sharing Sessions",
        speaker: "AMS Alumni",
        date: "August 12, 2025",
        time: "9:00 AM",
        location: "SF1, Building F",
    },
    {
        id: 2,
        title: "Seminar on AI in Public Health",
        speaker: "Dr. Phauk Sokkhey, ITC",
        date: "August 27, 2025",
        time: "9:00 AM",
        location: "Innovation Centre, CADT",
    },
    {
        id: 3,
        title: "Master of Engineering in Data Science M-DAS Roadshow",
        speaker: "Dr. Lin Mongkulsery",
        date: "July 12, 2025",
        time: "9:00 AM",
        location: "SF1, Building F",
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-30">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 font-playfair_display">Latest News & Events</h2>
          <p className="text-gray-500 mt-2 font-raleway">
            Stay updated with the latest news, events, and achievements from our department.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-x-15">
          {/* Left: Recent News */}
          <div className="md:col-span-2 space-y-10">
            <h1 className="text-3xl text-black font-playfair_display">Recent News</h1>
            {newsData.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden grid grid-cols-3 h-auto"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-fit object-cover col-span-1"
                />
                <div className="p-6 col-span-2 h-full relative flex flex-col">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span
                    style={{ backgroundColor: news.categoryColor }}
                    className={`${
                        news.categoryColor.toLowerCase().includes("d9d9d9") ? "text-black" : "text-white"
                    } px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1`}
                    >
                        {news.icon && <news.icon className="inline-block mr-1" size={15} />}
                      {news.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDays size={16} /> {news.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{news.description}</p>

                  <div className="mt-auto">
                    <a
                      href="#"
                      className="text-[#C41E3A] font-medium text-sm inline-flex items-center gap-1 hover:underline"
                    >
                      Read Full Article <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Upcoming Events */}
          <div className="space-y-6">
            <h1 className="text-3xl text-black font-playfair_display">Upcoming Events</h1>
            {UpcomingEvents.map((event) => (
            <div 
                key={event.id}
                className="space-y-4 hover:shadow-lg transition"
            >
                <div className="bg-white shadow rounded-2xl p-4 border-1 border-gray-200">
                    <h1 className="text-base text-black mb-5">{event.title}</h1>
                    <div className="text-sm text-gray-600 space-y-2 mt-2">
                        <h2 className="text-sm mb-3">{event.speaker}</h2>
                        <span className="inline-flex gap-1 items-center">
                            <CalendarDays size={16} /> {event.date}
                        </span>
                        <p className="text-sm">{event.time}</p>
                        <p className="text-sm">{event.location}</p>
                    </div>
                </div>
            </div>
            ))}

            {/* Newsletter */}
            <div className="bg-[#3A3B5C] text-white rounded-2xl p-6 space-y-4">
                <h4 className="font-semibold mb-2">Stay Connected</h4>
                <p className="text-sm text-white mb-4">
                    Subscribe to our newsletter for the latest updates and events
                </p>
                <button className="w-full bg-white text-[#3A3B5C] py-2 rounded-2xl font-sm hover:bg-gray-200 hover:text-[#4f507d] transition font-semibold">
                    Subscribe
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
