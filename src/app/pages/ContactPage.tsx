import { Mail, MapPin, Phone, Clock, ArrowRight, Building } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-72 bg-gray-800">
        <img
          src="/contact_top_image.jpg" // replace with your actual image path
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-7xl font-bold text-white font-playfair_display">Contact</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
        {/* Left: Contact Form */}
        <div className="col-span-2">
          <h2 className="text-3xl font-semibold text-black font-playfair_display">Get in Touch</h2>
          <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full"/>
          <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3"/>
          <form className="space-y-4 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div>
                    <label htmlFor="fname" className="text-black text-lg font-semibold">First Name</label><br />
                    <input
                        type="text"
                        placeholder="Enter you first Name"
                        className="w-full border bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 text-gray-800"
                    />
                </div>
                <div>
                    <label htmlFor="fname" className="text-black text-lg font-semibold">Last Name</label><br />
                    <input
                        type="text"
                        placeholder="Enter your last Name"
                        className="w-full border bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 text-gray-800"
                    />
                </div>
            </div>
            <label htmlFor="fname" className="text-black text-lg font-semibold">Email</label><br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 text-gray-800"
            />
            <label htmlFor="fname" className="text-black text-lg font-semibold">Subject</label><br />
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full border bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 text-gray-800"
            />
            <label htmlFor="fname" className="text-black text-lg font-semibold">Message</label><br />
            <textarea
              placeholder="Enter your message"
              className="w-full border bg-gray-100 rounded-lg p-3 h-40 focus:ring-2 focus:ring-indigo-500 text-gray-800"
            />
            <button
              type="submit"
              className="w-full bg-[#3A3B5C] text-white py-3 rounded-lg font-semibold hover:bg-[#585a8d] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Information */}
        <div className="col-span-1">
          <h2 className="text-3xl font-semibold text-black font-playfair_display">Contact Information</h2>
          <hr className="border-[1.5px] border-[#3A3B5C] mt-1.5 w-full"/>
          <hr className="border-[1.5px] border-[#C41E3A] mt-1 w-2/3"/>
          <div className="space-y-6 bg-white shadow-2xl rounded-xl p-6 border border-[#C41E3A] mt-10 border-l-8">
            <div className="flex items-start space-x-2">
              <MapPin className="w-6 h-6 text-[#C41E3A]" />
              <div className="flex flex-col">
                <h4 className="text-lg text-[#2E2E2E] font-medium">Address</h4>
                <p className="text-xs text-gray-600">
                    Room F103, Building F, Russian Blvd Phnom Penh, Cambodia 855, Phnom Penh, Cambodia
                </p>
              </div>

            </div>
            <div className="flex items-start space-x-2">
              <Phone className="w-5.5 h-5.5 text-[#C41E3A] content-start mt-1" />
              <div className="flex flex-col">
                <h4 className="text-lg text-[#2E2E2E] font-medium">Phone</h4>
                <p className="text-xs text-gray-600">
                    (+855) 12 999 310
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Mail className="w-6 h-6 text-[#C41E3A] content-start mt-0.5" />
              <div className="flex flex-col">
                <h4 className="text-lg text-[#2E2E2E] font-medium">Email</h4>
                <p className="text-xs text-gray-600">
                    <a href="mailto:ams@itc.edu.kh">ams@itc.edu.kh</a>
                    <br />
                    <a href="mailto:phauk.sokkhey@itc.edu.kh">phauk.sokkhey@itc.edu.kh</a>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Clock className="w-6 h-6 text-[#C41E3A] content-start mt-0.5"/>
              <div className="flex flex-col">
                <h4 className="text-lg text-[#2E2E2E] font-medium">Office Hours</h4>
                <p className="text-xs text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Collaborate with Us */}
          <div className="mt-8 bg-[#3A3B5C] text-white rounded-xl p-6 shadow-md flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2 font-raleway">Collaborate with Us</h3>
            <p className="mb-4 text-sm text-center font-raleway">
              Interested in research collaboration or partnership opportunities? We welcome connections with industry, government, and academic institutions.
            </p>
            <div className="flex justify-center ">
                <button className="bg-white text-indigo-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                    <p className="inline-flex font-raleway font-bold">Contact RcDA Lab <span><ArrowRight className="w-10"/></span> </p>
                </button>
            </div>

          </div>
        </div>
      </div>

      {/* Visit Section */}
      <div className="container mx-auto px-6 lg:px-20 pb-16">
        <div className="bg-gray-100 rounded-xl py-6 px-15 shadow-2xl border border-[#3A3B5C] border-l-8">
          <h3 className="text-2xl font-semibold mb-2 text-black inline-flex"><span className="content-center"><Building className="mr-5"/> </span>Visit Our Department</h3>
          <p className="mb-4 text-sm text-gray-800">
            Our department office is located in Room F103 Building F of
            Institute of Technology of Cambodia. Visitors are welcome during
            regular office hours.
          </p>
          <div className="w-full h-90 bg-gray-300 flex items-center justify-center rounded-lg">
            {/* Placeholder for Map */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6309290619924!2d104.89793907627153!3d11.570933688615233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095135c2ad598d%3A0xb2d48d6f11032091!2sDepartment%20of%20Applied%20Mathematics%20and%20Statistics%20(AMS)!5e0!3m2!1sen!2skh!4v1733729142000!5m2!1sen!2skh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
