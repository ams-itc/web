'use client';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import AppRouter from './AppRouter';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SpeedInsights />
      <AppRouter />
      <Toaster richColors />
    </ThemeProvider>
  );
}
