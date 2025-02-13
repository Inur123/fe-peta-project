// src/components/Layout.tsx
"use client";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Peta Project',
    description: 'Podcast dan Talkshow tentang isu-isu terkini.',
    icons: {
      icon: 'images/peta-logo.png', // Path ke file favicon
      shortcut: 'images/peta-logo.png', // Shortcut icon (opsional)
      apple: 'images/peta-logo.png', // Apple touch icon (opsional)
    },
  };
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8" style={{ marginTop: '80px' }}>
        {/* Bagian atas (Gambar Utama dan Breaking News) */}
        
        {/* Bagian utama (Main Content dan Sidebar) */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Konten Utama */}
         
          <div className="w-full lg:w-2/3">
            {children}
          </div>
          <Sidebar />
          {/* Sidebar */}
        
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;