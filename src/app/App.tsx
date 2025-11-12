'use client';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import AppRouter from './AppRouter';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { reportWebVitals } from './reportWebVitals';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    reportWebVitals(console.log);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SpeedInsights /> {/* ✅ Vite-compatible */}
      <AppRouter />
      <Toaster richColors />
    </ThemeProvider>
  );
}
