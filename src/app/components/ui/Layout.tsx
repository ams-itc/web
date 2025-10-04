import Header from '../Header';
import React from 'react';
import Footer from '../Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-white flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
