'use client';

import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

interface SectionComingSoonProps {
  title?: string;
  subtitle?: string;
  lottieUrl?: string;
}

export default function SectionComingSoon({
  title = 'This Page is Coming Soon',
  subtitle = 'Our data science team is preparing valuable insights for this section.',
  lottieUrl = 'https://assets7.lottiefiles.com/packages/lf20_tfb3estd.json',
}: SectionComingSoonProps) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  // Fetch Lottie animation
  useEffect(() => {
    let cancelled = false;
    fetch(lottieUrl)
      .then((r) => r.json())
      .then((json) => !cancelled && setAnimationData(json))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [lottieUrl]);

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  }

  return (
    <div className="relative flex flex-col items-center justify-center py-16 px-4 bg-white text-slate-800 overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <circle className="fill-indigo-100" cx="100" cy="100" r="150" opacity="0.05">
            <animate attributeName="cx" values="100;700;100" dur="25s" repeatCount="indefinite" />
            <animate attributeName="cy" values="100;400;100" dur="25s" repeatCount="indefinite" />
          </circle>
          <circle className="fill-cyan-100" cx="700" cy="50" r="200" opacity="0.05">
            <animate attributeName="cx" values="700;100;700" dur="35s" repeatCount="indefinite" />
            <animate attributeName="cy" values="50;300;50" dur="35s" repeatCount="indefinite" />
          </circle>
        </svg>
      </motion.div>

      {/* Lottie Animation */}
      <motion.div
        className="w-72 h-72 mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {animationData ? (
          <Lottie animationData={animationData} loop style={{ width: '100%', height: '100%' }} />
        ) : (
          <div className="flex items-center justify-center text-slate-400">Loading animation…</div>
        )}
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-3xl font-playfair_display font-bold text-indigo-600 mb-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-slate-600 max-w-md text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {subtitle}
      </motion.p>

      {/* Email subscription */}
      <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 rounded-lg px-4 py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-indigo-500 transition"
        >
          Notify Me
        </motion.button>
      </form>

      {status === 'success' && <div className="text-green-600 mt-2">✅ We’ll notify you!</div>}
      {status === 'error' && <div className="text-rose-500 mt-2">Please enter a valid email.</div>}
    </div>
  );
}
