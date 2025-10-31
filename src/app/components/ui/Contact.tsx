'use client';

import { Mail, MapPin, Phone, Clock, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

function renderTextWithFont(
  text: string,
  language: 'en' | 'kh',
  type: 'heading' | 'body'
) {
  if (language === 'en') {
    return (
      <span
        className={
          type === 'heading' ? 'font-playfair_display' : 'font-raleway'
        }
      >
        {text}
      </span>
    );
  } else {
    const parts = text.split(/([^\u1780-\u17FF]+)/);
    return (
      <>
        {parts.map((part, i) => {
          const isKhmer = /[\u1780-\u17FF]/.test(part);
          const fontClass = isKhmer
            ? type === 'heading'
              ? 'font-preahvihear'
              : 'font-kantumruy_pro'
            : type === 'heading'
              ? 'font-playfair_display'
              : 'font-raleway';
          return (
            <span key={i} className={fontClass}>
              {part}
            </span>
          );
        })}
      </>
    );
  }
}

export default function Contact() {
  const { language } = useLanguage();

  return (
    <div className="w-full py-10 px-6 md:px-20 lg:px-25">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-[clamp(1.5rem,2vw,2rem)] font-bold text-black">
          {renderTextWithFont(
            language === 'en' ? 'Contact Us' : 'ទំនាក់ទំនង',
            language,
            'heading'
          )}
        </h1>
        <p className="text-[clamp(0.75rem,1.5vw,1rem)] text-[#2E2E2E]">
          {renderTextWithFont(
            language === 'en'
              ? 'Get in touch with our department for inquiries about programs, research opportunities, or general questions.'
              : 'ទំនាក់ទំនងផ្នែករបស់យើងសម្រាប់សំណួរអំពីកម្មវិធី, ឱកាសស្រាវជ្រាវ, ឬសំណួរទូទៅ។',
            language,
            'body'
          )}
        </p>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-6 lg:px-20 py-5 lg:py-16 grid lg:grid-cols-1 xl:grid-cols-3 lg:gap-12 w-full space-y-5 lg:space-y-0">
        {/* Left: Contact Form */}
        <div className="col-span-2">
          <h2 className="text-[clamp(1.25rem,2vw,1.75rem)] font-semibold text-black">
            {renderTextWithFont(
              language === 'en' ? 'Get in Touch' : 'ទំនាក់ទំនងមកយើង',
              language,
              'heading'
            )}
          </h2>
          <form className="space-y-6 mt-5 lg:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <div>
                <label className="text-black text-[clamp(1rem,1.5vw,1.125rem)] font-semibold">
                  {renderTextWithFont(
                    language === 'en' ? 'First Name' : 'នាម',
                    language,
                    'body'
                  )}
                </label>
                <input
                  type="text"
                  placeholder={
                    language === 'en' ? 'Enter your first name' : 'បញ្ចូលនាម'
                  }
                  className="w-full border bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 text-gray-800"
                />
              </div>
              <div>
                <label className="text-black text-[clamp(1rem,1.5vw,1.125rem)] font-semibold">
                  {renderTextWithFont(
                    language === 'en' ? 'Last Name' : 'គោត្តនាម',
                    language,
                    'body'
                  )}
                </label>
                <input
                  type="text"
                  placeholder={
                    language === 'en'
                      ? 'Enter your last name'
                      : 'បញ្ចូលគោត្តនាម'
                  }
                  className="w-full border bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 text-gray-800"
                />
              </div>
            </div>

            <div>
              <label className="text-black text-[clamp(1rem,1.5vw,1.125rem)] font-semibold">
                {renderTextWithFont(
                  language === 'en' ? 'Email' : 'អ៊ីម៉ែល',
                  language,
                  'body'
                )}
              </label>
              <input
                type="email"
                placeholder={
                  language === 'en'
                    ? 'Enter your email'
                    : 'បញ្ចូលអ៊ីម៉ែលរបស់អ្នក'
                }
                className="w-full border bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 text-gray-800"
              />
            </div>

            <div>
              <label className="text-black text-[clamp(1rem,1.5vw,1.125rem)] font-semibold">
                {renderTextWithFont(
                  language === 'en' ? 'Subject' : 'ប្រធានបទ',
                  language,
                  'body'
                )}
              </label>
              <input
                type="text"
                placeholder={
                  language === 'en' ? 'Enter subject' : 'បញ្ចូលប្រធានបទ'
                }
                className="w-full border bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 text-gray-800"
              />
            </div>

            <div>
              <label className="text-black text-[clamp(1rem,1.5vw,1.125rem)] font-semibold">
                {renderTextWithFont(
                  language === 'en' ? 'Message' : 'សារ',
                  language,
                  'body'
                )}
              </label>
              <textarea
                placeholder={
                  language === 'en' ? 'Enter your message' : 'បញ្ចូលសាររបស់អ្នក'
                }
                className="w-full border bg-gray-100 rounded-lg p-3 h-60 focus:ring-2 focus:ring-indigo-500 text-gray-800"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3A3B5C] text-white py-3 rounded-lg font-semibold hover:bg-[#585a8d] transition text-[clamp(1rem,1.5vw,1.125rem)]"
            >
              {renderTextWithFont(
                language === 'en' ? 'Send Message' : 'ផ្ញើសារ',
                language,
                'body'
              )}
            </button>
          </form>
        </div>

        {/* Right: Contact Information */}
        <div className="col-span-1 space-y-6">
          <h2 className="text-[clamp(1.25rem,2vw,1.75rem)] font-semibold text-black">
            {renderTextWithFont(
              language === 'en' ? 'Contact Information' : 'ព័ត៌មានទំនាក់ទំនង',
              language,
              'heading'
            )}
          </h2>

          <div className="space-y-6 bg-white shadow-2xl rounded-xl p-6 border border-[#C41E3A] mt-5 lg:mt-10 border-l-8">
            <div className="flex items-start space-x-2">
              <MapPin className="text-[#C41E3A]" size={40} />
              <div className="flex flex-col">
                <h4 className="text-[clamp(0.75rem,1.5vw,1rem)] text-[#2E2E2E] font-medium">
                  {renderTextWithFont(
                    language === 'en' ? 'Address' : 'អាសយដ្ឋាន',
                    language,
                    'body'
                  )}
                </h4>
                <p className="text-[clamp(0.625rem,1.5vw,0.875rem)] text-gray-600">
                  {language === 'en'
                    ? 'Room F103, Building F, Russian Blvd Phnom Penh, Cambodia'
                    : 'បន្ទប់ F103, អាគារ F, មហាវិថីសហព័ន្ធរុស្ស៊ី, រាជធានីភ្នំពេញ, ព្រះរាជាណាចក្រកម្ពុជា'}
                </p>
              </div>
            </div>

            {/* Other info (Phone, Email, Hours) */}
            <div className="flex items-start space-x-2">
              <Phone className="text-[#C41E3A] mt-1" size={25} />
              <div className="flex flex-col">
                <h4 className="text-[clamp(0.75rem,1.5vw,1rem)] text-[#2E2E2E] font-medium">
                  {renderTextWithFont(
                    language === 'en' ? 'Phone' : 'ទូរស័ព្ទ',
                    language,
                    'body'
                  )}
                </h4>
                <p className="text-[clamp(0.625rem,1.5vw,0.875rem)] text-gray-600">
                  (+855) 12 999 310
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Mail className="text-[#C41E3A] mt-0.5" size={25} />
              <div className="flex flex-col">
                <h4 className="text-[clamp(0.75rem,1.5vw,1rem)] text-[#2E2E2E] font-medium">
                  {renderTextWithFont(
                    language === 'en' ? 'Email' : 'អ៊ីម៉ែល',
                    language,
                    'body'
                  )}
                </h4>
                <p className="text-[clamp(0.625rem,1.5vw,0.875rem)] text-gray-600">
                  <a href="mailto:ams@itc.edu.kh">ams@itc.edu.kh</a>
                  <br />
                  <a href="mailto:phauk.sokkhey@itc.edu.kh">
                    phauk.sokkhey@itc.edu.kh
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Clock className="text-[#C41E3A] mt-0.5" size={25} />
              <div className="flex flex-col">
                <h4 className="text-[clamp(0.75rem,1.5vw,1rem)] text-[#2E2E2E] font-medium">
                  {renderTextWithFont(
                    language === 'en' ? 'Office Hours' : 'ម៉ោងធ្វើការ',
                    language,
                    'body'
                  )}
                </h4>
                <p className="text-[clamp(0.625rem,1.5vw,0.875rem)] text-gray-600 whitespace-pre-line">
                  {renderTextWithFont(
                    language === 'en'
                      ? 'Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: 10:00 AM - 2:00 PM'
                      : 'ថ្ងៃចន្ទ - ថ្ងៃសុក្រ: ៩:០០ ព្រឹក - ៥:០០ ល្ងាច\nថ្ងៃសៅរ៍: ១០:០០ ព្រឹក - ២:០០ រសៀល',
                    language,
                    'body'
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Visit Section */}
          <div className="bg-gray-100 rounded-xl py-6 shadow-2xl border border-[#3A3B5C] border-l-8 mt-6 w-full">
            <div className="px-5 w-full">
              <h3 className="text-[clamp(1rem,2vw,1.25rem)] font-medium mb-5 text-black inline-flex items-center gap-2">
                <Building size={25} />
                {renderTextWithFont(
                  language === 'en'
                    ? 'Visit Our Department'
                    : 'មកកាន់ដេប៉ាតឺម៉ង់របស់យើង',
                  language,
                  'heading'
                )}
              </h3>
              <p className="mb-4 text-[clamp(0.625rem,1.5vw,0.875rem)] text-gray-600">
                {renderTextWithFont(
                  language === 'en'
                    ? 'Our department office is located in Room F103, Building F of the Institute of Technology of Cambodia. Visitors are welcome during regular office hours.'
                    : 'ការិយាល័យរបស់យើងស្ថិតនៅបន្ទប់ F103 អគារ F នៃវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា។ ពួកយើងសូមស្វាគមន៍អ្នកទស្សនារៀងរាល់ម៉ោងធ្វើការធម្មតា។',
                  language,
                  'body'
                )}
              </p>
            </div>
            <div className="px-2 w-full">
              <div className="w-full h-auto bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
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
