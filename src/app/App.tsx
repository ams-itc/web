import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import HomePage from './pages/home/page';

const App: React.FC = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router>
                <Routes>
                    {/* Index Page */}
                    <Route path="/" element={<HomePage />} />
                </Routes>

                {/* Toast notifications */}
                <Toaster richColors />
            </Router>
        </ThemeProvider>
    );
};

export default App;