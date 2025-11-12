'use client';

import { useEffect, useState, useMemo } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { Facebook, Mail, Globe } from 'lucide-react';

export default function DepartmentLanding() {
  const [language, setLanguage] = useState<'en' | 'kh'>('en');

  const targetDate = useMemo(() => {
    const d = new Date();
    d.setFullYear(2025, 11, 31);
    d.setHours(23, 59, 59, 0);
    return d;
  }, []);

  const [now, setNow] = useState(new Date());
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const url = 'https://assets7.lottiefiles.com/packages/lf20_tfb3estd.json';
    fetch(url)
      .then((r) => r.json())
      .then(setAnimationData)
      .catch(() => {});
  }, []);

  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const text = {
    en: {
      title: 'AMS Department Website Coming Soon!',
      desc: "We're building something exciting for the world of Data Science and AI. Our new website will go live soon — stay tuned for updates!",
      launching: 'Launching on',
      launchingSoon: 'Launching Soon',
      footer: 'Built with ❤️ and coffee',
      stayTuned: 'Stay tuned for the AMS Department official site launch',
    },
    kh: {
      title: 'គេហទំព័ររបស់ដេប៉ាតឺម៉ង់ AMS នឹងដំណើរការឆាប់ៗនេះ!',
      desc: 'យើងកំពុងបង្កើតអ្វីមួយគួរឱ្យរំភើបសម្រាប់ពិភពវិទ្យាសាស្ត្រទិន្នន័យ និង AI។ គេហទំព័រថ្មីរបស់យើងនឹងដំណើរការឆាប់ៗនេះ — សូមរង់ចាំព័ត៌មានបន្ថែម!',
      launching: 'ចាប់ផ្ដើមនៅថ្ងៃ',
      launchingSoon: 'នឹងដំណើរការឆាប់ៗនេះ',
      footer: 'កើតឡើងដោយ ❤️ និងកាហ្វេ',
      stayTuned: 'សូមរង់ចាំការចេញផ្សាយគេហទំព័រផ្លូវការរបស់ដេប៉ាតឺម៉ង់ AMS',
    },
  };

  const primaryColor = '#0066cc';

  return (
    <div className="min-h-screen flex items-center justify-center font-kantumruy_pro bg-gradient-to-br from-indigo-50 via-white to-cyan-50 text-slate-800 relative overflow-hidden py-10 px-6 sm:px-10">
      
      {/* Floating background particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute inset-0"
      >
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g2" x1="0" x2="1">
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="url(#g2)" />
          <g>
            <motion.circle
              animate={{ cx: [50, 750, 50], cy: [100, 400, 100] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              r="220"
              fill="#6366f1"
              opacity="0.05"
            />
            <motion.circle
              animate={{ cx: [750, 50, 750], cy: [50, 300, 50] }}
              transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
              r="280"
              fill="#22d3ee"
              opacity="0.05"
            />
          </g>
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto">
        {/* Language toggle */}
        <div className="flex justify-end mb-6">
          <motion.button
            onClick={() => setLanguage(language === 'en' ? 'kh' : 'en')}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-white/70 backdrop-blur-sm hover:bg-indigo-100 text-[#0066cc] px-4 py-1.5 rounded-full text-sm font-medium shadow-sm transition"
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'ភាសាខ្មែរ' : 'English'}
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <div className="flex items-center gap-6 mb-4">
              <img
                src="/Institute_of_Technology_of_Cambodia_logo-removebg-preview.png"
                alt="ITC Logo"
                className="h-16 sm:h-20 w-auto"
              />
              <img src="/ams_logo.JPG" alt="AMS Logo" className="h-12 sm:h-16 w-auto rounded-lg" />
            </div>

            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{ color: primaryColor }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center md:text-left leading-snug"
            >
              {text[language].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl text-center md:text-left leading-relaxed"
            >
              {text[language].desc}
            </motion.p>

            {/* Countdown */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mt-4 w-full sm:w-auto"
            >
              <div className="bg-white/80 border border-indigo-100 rounded-xl p-4 shadow-sm w-full backdrop-blur-sm">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  {[
                    [language === 'en' ? 'Days' : 'ថ្ងៃ', days],
                    [language === 'en' ? 'Hours' : 'ម៉ោង', hours],
                    [language === 'en' ? 'Minutes' : 'នាទី', minutes],
                    [language === 'en' ? 'Seconds' : 'វិនាទី', seconds],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="text-2xl font-bold" style={{ color: primaryColor }}>
                        {String(value).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-slate-500">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {text[language].launching} {targetDate.toDateString()}
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex gap-5 text-slate-500 text-lg"
            >
              <a
                href="https://www.facebook.com/ams.itc.edu.kh"
                className="hover:text-indigo-600 transition"
              >
                <Facebook />
              </a>
              <a href="mailto:info@ams.edu.kh" className="hover:text-indigo-600 transition">
                <Mail />
              </a>
            </motion.div>
          </div>

          {/* Right side */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-md md:max-w-lg"
            >
              <div className="bg-white/80 border border-indigo-100 rounded-3xl p-6 shadow-md backdrop-blur-md">
                <div className="relative w-full h-80 flex items-center justify-center">
                  {animationData ? (
                    <Lottie
                      animationData={animationData}
                      loop={true}
                      style={{ width: '100%', height: '100%' }}
                    />
                  ) : (
                    <div className="flex items-center justify-center text-slate-400">
                      Loading animation…
                    </div>
                  )}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{ backgroundColor: primaryColor }}
                    className="absolute -bottom-6 left-6 text-white rounded-full px-4 py-2 text-xs font-semibold shadow"
                  >
                    AI • Data Science
                  </motion.div>
                </div>

                <div className="mt-10 text-center">
                  <div className="text-sm text-slate-500">{text[language].launchingSoon}</div>
                  <div className="text-lg font-semibold mt-1" style={{ color: primaryColor }}>
                    {text[language].stayTuned}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <footer className="mt-12 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} AMS Web DevNev — {text[language].footer}
        </footer>
      </div>
    </div>
  );
}
