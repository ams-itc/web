import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full bg-white h-100px border-b-1 border-gray-300 shadow-sm top-0 z-50">
      <div className="flex items-center justify-between w-full px-6 py-2">
        {/* Left side with Logo + Department Name */}
        <div className="flex items-center space-x-2 w-1/3">
          <img
            src="/Institute_of_Technology_of_Cambodia_logo-removebg-preview.png" // place your logo inside the "public" folder
            alt="ITC Logo"
            className="h-25 w-25 object-contain border-r-1 border-gray-500 m-0 pr-2"
          />
          <img
            src="/ams_logo.JPG" // place your logo inside the "public" folder
            alt="AMS Logo"
            className=" w-30 object-contain pl-1"
          />
          <div className="w-3xs">
            <h2 className="text-lg font-bold text-black font-playfair_display">
              Department of Applied Mathematics and Statistics
            </h2>
          </div>
        </div>

        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
}
