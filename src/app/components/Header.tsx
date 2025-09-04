import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Left side with Logo + Department Name */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png" // replace with your logo path in public folder
            alt="ITC Logo"
            width={50}
            height={50}
          />
          <div>
            <h1 className="text-lg font-bold">Department of</h1>
            <h2 className="text-lg font-bold">Applied Mathematics and Statistics</h2>
          </div>
        </div>

        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
}
