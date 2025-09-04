import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from './pages/navbar/page';

const App: React.FC = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router>
                <Navbar />
                <Routes>
                </Routes>
                {/* Toast notifications */}
                <Toaster richColors />
            </Router>
        </ThemeProvider>
    );
};

export default App;