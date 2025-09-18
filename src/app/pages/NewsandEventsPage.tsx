import React, { useState } from "react";
import InitialImage from "../components/ui/InitialImage";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Search,
  ChevronDown,
  Filter,
} from "lucide-react";

// News Card Component
interface NewsOneProps {
  title: string;
  date: string;
  description: string;
  category: string;
  readMoreLink?: string;
}

// for event
interface EventCardProps {
  type: string;
  date: string;
  time: string;
  location: string;
  title: string;
  description: string;
  saveSpotText: string;
}

// card type one: for news
const NewsCard: React.FC<NewsOneProps> = ({
  title,
  date,
  description,
  category,
  readMoreLink = "#",
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Image placeholder */}
      <div className="w-full h-32 bg-gray-300"></div>

      {/* Content */}
      <div className="p-4">
        {/* Category badge */}
        <div className="flex items-center mb-3">
          <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-gray-400 text-xs ml-2 flex items-center">
            <svg
              className="w-3 h-3 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3">
          {description}
        </p>

        {/* Read more link */}
        <a
          href={readMoreLink}
          className="text-red-600 text-xs font-medium hover:text-red-700 transition-colors duration-200 inline-flex items-center"
        >
          Read Full Article
          <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

// card type two: for event
const EventCard: React.FC<EventCardProps> = ({
  type,
  date,
  time,
  location,
  title,
  description,
  saveSpotText,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600 font-medium">{type}</span>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
        </div>
      </div>

      {/* Time and Location */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          {time}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Save Spot Link */}
      <div className="flex items-center">
        <button className="text-red-500 hover:text-red-600 font-medium text-sm flex items-center transition-colors duration-200">
          {saveSpotText}
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

// Main Recent News Component
interface ListNewsCardProps {
  newsItems: NewsOneProps[];
  showCount?: 4 | 8;
  title?: string;
}

// list card of type one: for news
const ListNewsCard: React.FC<ListNewsCardProps> = ({
  newsItems,
  showCount = 4,
  title = "Recent News",
}) => {
  const displayedItems = newsItems.slice(0, showCount);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 font-playfair_display">
          {title}
        </h2>
        <div className="mt-2 h-px bg-gray-300"></div>
      </div>

      {/* News Grid */}
      <div
        className={`grid gap-6 ${
          showCount === 8
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {displayedItems.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

// list card of type two: for event
const ListEventCard: React.FC = () => {
  const events: EventCardProps[] = [
    {
      type: "Sharing Sessions",
      date: "August 17, 2025",
      time: "9:00 AM",
      location: "S1, Building F",
      title: "AMS Alumni",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      saveSpotText: "Save your spot",
    },
    {
      type: "Sharing Sessions",
      date: "August 22, 2025",
      time: "6:00 AM",
      location: "S1, Building C",
      title: "AMS Alumni",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      saveSpotText: "Save your spot",
    },
    {
      type: "Sharing Sessions",
      date: "August 25, 2025",
      time: "9:00 AM",
      location: "S1, Building A",
      title: "AMS Alumni",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      saveSpotText: "Save your spot",
    },
    {
      type: "Sharing Sessions",
      date: "August 31, 2025",
      time: "8:00 AM",
      location: "S1, Building F",
      title: "AMS Alumni",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      saveSpotText: "Save your spot",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl text-gray-900 font-playfair_display">
          Upcoming Events
        </h2>
        <div className="w-20 h-1 bg-red-500 mt-2"></div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    "All Categories",
    "News",
    "Events",
    "Scholarship",
    "Research",
    "Academic",
    "Technology",
    "Science",
    "Business",
    "Health",
  ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-2 ">
      <div className="flex flex-col sm:flex-row gap-2 bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Search Input */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search news, events or scholarship..."
            className="w-full pl-10 pr-4 py-3 border-0 rounded-l-lg sm:rounded-r-none rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Category Dropdown */}
        <div className="relative sm:border-l border-gray-200">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full sm:w-auto px-4 py-3 flex items-center justify-between gap-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-r-lg sm:rounded-l-none rounded-l-lg transition-colors duration-200 min-w-[160px]"
          >
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="whitespace-nowrap">{selectedCategory}</span>
            </div>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 w-full sm:w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto scrollbar-hidden">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
                    selectedCategory === category
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Optional: Display current search state */}
      {searchQuery && (
        <div className="mt-3 text-sm text-gray-600">
          Searching for "{searchQuery}" in {selectedCategory}
        </div>
      )}

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default function NewsAndEventsPage() {
  const sampleNews: NewsOneProps[] = [
    {
      title: "AMS 1st Generation Thesis Defense – A Historic Milestone",
      date: "July 15, 2024",
      description:
        "On July 16, 2024, we mark a pivotal and unprecedented moment in the Department of Applied Mathematics and Stochastic Analysis at the Faculty of Technology of Cambodia as we celebrate the Thesis Defense Day of our 1st Generation of Data Science Students.",
      category: "Academic",
      readMoreLink: "#",
    },
    {
      title: "AMS 1st Generation Thesis Defense – A Historic Milestone",
      date: "July 15, 2024",
      description:
        "On July 16, 2024, we mark a pivotal and unprecedented moment in the Department of Applied Mathematics and Stochastic Analysis at the Faculty of Technology of Cambodia as we celebrate the Thesis Defense Day of our 1st Generation of Data Science Students.",
      category: "Academic",
      readMoreLink: "#",
    },
    {
      title: "AMS 1st Generation Thesis Defense – A Historic Milestone",
      date: "July 15, 2024",
      description:
        "On July 16, 2024, we mark a pivotal and unprecedented moment in the Department of Applied Mathematics and Stochastic Analysis at the Faculty of Technology of Cambodia as we celebrate the Thesis Defense Day of our 1st Generation of Data Science Students.",
      category: "Academic",
      readMoreLink: "#",
    },
    {
      title: "AMS 1st Generation Thesis Defense – A Historic Milestone",
      date: "Aug 12, 2024",
      description:
        "On July 16, 2024, we mark a pivotal and unprecedented moment in the Department of Applied Mathematics and Stochastic Analysis at the Faculty of Technology of Cambodia as we celebrate the Thesis Defense Day of our 1st Generation of Data Science Students.",
      category: "Academic",
      readMoreLink: "#",
    },
    {
      title: "AMS 1st Generation Thesis Defense – A Historic Milestone",
      date: "July 19, 2024",
      description:
        "On July 16, 2024, we mark a pivotal and unprecedented moment in the Department of Applied Mathematics and Stochastic Analysis at the Faculty of Technology of Cambodia as we celebrate the Thesis Defense Day of our 1st Generation of Data Science Students.",
      category: "Research",
      readMoreLink: "#",
    },
    {
      title: "AMS 1st Generation Thesis Defense – A Historic Milestone",
      date: "July 18, 2024",
      description:
        "On July 16, 2024, we mark a pivotal and unprecedented moment in the Department of Applied Mathematics and Stochastic Analysis at the Faculty of Technology of Cambodia as we celebrate the Thesis Defense Day of our 1st Generation of Data Science Students.",
      category: "Research",
      readMoreLink: "#",
    },
    {
      title: "AMS 1st Generation Thesis Defense – A Historic Milestone",
      date: "July 17, 2024",
      description:
        "On July 16, 2024, we mark a pivotal and unprecedented moment in the Department of Applied Mathematics and Stochastic Analysis at the Faculty of Technology of Cambodia as we celebrate the Thesis Defense Day of our 1st Generation of Data Science Students.",
      category: "Academic",
      readMoreLink: "#",
    },
    {
      title: "AMS 1st Generation Thesis Defense – A Historic Milestone",
      date: "Aug 10, 2024",
      description:
        "On July 16, 2024, we mark a pivotal and unprecedented moment in the Department of Applied Mathematics and Stochastic Analysis at the Faculty of Technology of Cambodia as we celebrate the Thesis Defense Day of our 1st Generation of Data Science Students.",
      category: "Research",
      readMoreLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Initial Image Section */}
      <InitialImage imagePath="./src/assets/image.png" text="News & Events" />

      {/* Spacer */}
      <div className="py-8"></div>
      
      {/* Search Component */}
      <SearchComponent />

      {/* 4 cards */}
      <ListNewsCard
        newsItems={sampleNews}
        showCount={4}
        title="Featured News"
      />

      {/* Spacer */}
      <div className="py-4"></div>

      {/* Upcoming Events */}
      <ListEventCard />

      {/* Spacer */}
      <div className="py-4"></div>

      {/* 8 cards */}
      <ListNewsCard newsItems={sampleNews} showCount={8} />
    </div>
  );
}
