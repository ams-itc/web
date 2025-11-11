'use client';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import AppRouter from './AppRouter';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { reportWebVitals } from './reportWebVitals';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
  reportWebVitals(console.log); // logs metrics in console
}, []);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SpeedInsights />
      <AppRouter />
      <Toaster richColors />
    </ThemeProvider>
  );
}
