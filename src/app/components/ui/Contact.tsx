import { Mail, MapPin, Phone, Clock, Building } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full py-10 px-25">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-black text-center font-playfair_display">Contact Us</h1>
        <p className="text-lg text-[#2E2E2E] text-center font-raleway">Get in touch with our department for inquiries about programs, research opportunities, or general questions.</p>
      </div>

        {/* Form Section */}
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 w-full ">
        {/* Left: Contact Form */}
        <div className="col-span-2">
          <h2 className="text-3xl font-semibold text-black font-playfair_display">Get in Touch</h2>
          <form className="space-y-10 mt-10">
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
              className="w-full border bg-gray-100 rounded-lg p-3 h-60 focus:ring-2 focus:ring-indigo-500 text-gray-800"
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
        <div className="col-span-1 space-y-4">
          <h2 className="text-3xl font-semibold text-black font-playfair_display">Contact Information</h2>
          <div className="space-y-6 bg-white shadow-2xl rounded-xl p-6 border border-[#C41E3A] mt-10 border-l-8">
            <div className="flex items-start space-x-2">
              <MapPin className="text-[#C41E3A]"  size={40}/>
              <div className="flex flex-col">
                <h4 className="text-lg text-[#2E2E2E] font-medium">Address</h4>
                <p className="text-xs text-gray-600">
                    Room F103, Building F, Russian Blvd Phnom Penh, Cambodia 855, Phnom Penh, Cambodia
                </p>
              </div>

            </div>
            <div className="flex items-start space-x-2">
              <Phone className=" text-[#C41E3A] content-start mt-1" size={25}/>
              <div className="flex flex-col">
                <h4 className="text-lg text-[#2E2E2E] font-medium">Phone</h4>
                <p className="text-xs text-gray-600">
                    (+855) 12 999 310
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Mail className=" text-[#C41E3A] content-start mt-0.5" size={25}/>
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
              <Clock className="text-[#C41E3A] content-start mt-0.5" size={25}/>
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

          {/* Visit Section */}
            <div className="bg-gray-100 rounded-xl py-6 shadow-2xl border border-[#3A3B5C] border-l-8">
                <div className="px-5">
                    <h3 className="text-xl font-medium mb-5 text-black inline-flex"><span className="content-center"><Building className="mr-5" size={25}/> </span>Visit Our Department</h3>
                    <p className="mb-4 text-sm text-gray-600">
                        Our department office is located in Room F103 Building F of
                        Institute of Technology of Cambodia. Visitors are welcome during
                        regular office hours.
                    </p>
                </div>
                <div className="px-2">
                    <div className="w-full h-auto bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
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
      </div>

      

    </div>
  );
}
