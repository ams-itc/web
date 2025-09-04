import React from 'react';
// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
// import Header from './components/Header';

const App: React.FC = () => {

    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => setScrolled(window.scrollY > 50);
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router>
                {/* <Header /> */}
                < Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
                {/* Toast notifications */}
                <Toaster richColors />
                
            </Router>
        </ThemeProvider>

    );
};

export default App;