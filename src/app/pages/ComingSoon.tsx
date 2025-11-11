import { useEffect, useState, useMemo } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

export default function DepartmentLanding() {
  const targetDate = useMemo<Date>(() => {
    const d = new Date();
    d.setFullYear(2025, 11, 31);
    d.setHours(23, 59, 59, 0);
    return d;
  }, []);

  const [now, setNow] = useState<Date>(new Date());
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-slate-800 relative overflow-hidden">
      {/* Animated background */}
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
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              r="200"
              fill="#6366f1"
              opacity="0.05"
            />
            <motion.circle
              animate={{ cx: [750, 50, 750], cy: [50, 300, 50] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              r="300"
              fill="#22d3ee"
              opacity="0.05"
            />
          </g>
        </svg>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Department info */}
          <div className="flex flex-col gap-6 items-center lg:items-start">
            {/* Logos */}
            <div className="flex items-center gap-6 mb-4">
              <img src="/Institute_of_Technology_of_Cambodia_logo-removebg-preview.png" alt="ITC Logo" className="h-20 w-auto" />
              <img src="/ams_logo.JPG" alt="AMS Logo" className="h-16 w-auto" />
            </div>

            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-indigo-600 text-center lg:text-left"
            >
              Welcome to the AMS Department
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-xl text-center lg:text-left"
            >
              We train the next generation of data scientists and AI specialists.  
              Explore the world of predictive analytics, machine learning, 
              and intelligent systems with hands-on projects and innovative research.
            </motion.p>

            {/* Countdown until New Year */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mt-4"
            >
              <div className="bg-white border border-indigo-100 rounded-xl p-4 shadow-sm w-full">
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    ['Days', days],
                    ['Hours', hours],
                    ['Minutes', minutes],
                    ['Seconds', seconds],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="text-2xl font-bold text-indigo-600">
                        {String(value).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-slate-500">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Countdown to New Year 2026 (Cambodia Time)
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side: Animation */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-lg"
            >
              <div className="bg-white border border-indigo-100 rounded-3xl p-6 shadow-md">
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
                    className="absolute -bottom-6 left-6 bg-indigo-500 text-white rounded-full px-4 py-2 text-xs font-semibold shadow"
                  >
                    AI • Data Science
                  </motion.div>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-sm text-slate-500">Explore</div>
                  <div className="text-lg font-semibold text-indigo-600">
                    Machine Learning • Predictive Analytics • Smart Dashboards
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <footer className="mt-12 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} AMS Web DevNev — Built with ❤️ and coffee
        </footer>
      </div>
    </div>
  );
}
