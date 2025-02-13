// src/components/Header.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Ambil path saat ini

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fungsi untuk menentukan apakah link sedang aktif
  const isActive = (path: string) => pathname === path;

  return (
    <header
      className="bg-blackish shadow-md"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'black',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
        <Link href="/" passHref>
      <div className="flex items-center cursor-pointer">
        <img
          src="/images/peta-logo.png"
          alt="Peta Project Logo"
          className="h-12 mr-2"
        />
        <div className="flex items-center font-sub">
          <div className="text-3xl font-bold text-[#be2c13] mr-2">Peta</div>
          <div className="text-3xl font-bold text-white mr-2">Project</div>
        </div>
      </div>
    </Link>

          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <button
              id="menuBtn"
              className="text-white hover:text-red-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {/* Ikon Hamburger */}
              <svg
                id="hamburgerIcon"
                className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              {/* Ikon Close */}
              <svg
                id="closeIcon"
                className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className={`text-gray-300 hover:text-red-600 ${
                isActive('/') ? 'text-red-600' : ''
              }`}
            >
              Beranda
            </Link>
            <Link
              href="/berita"
              className={`text-gray-300 hover:text-red-600 ${
                isActive('/berita') ? 'text-red-600' : ''
              }`}
            >
              Berita
            </Link>
            <Link
              href="/opini"
              className={`text-gray-300 hover:text-red-600 ${
                isActive('/opini') ? 'text-red-600' : ''
              }`}
            >
              Opini
            </Link>
            <Link
              href="/podcast"
              className={`text-gray-300 hover:text-red-600 ${
                isActive('/podcast') ? 'text-red-600' : ''
              }`}
            >
              Podcast
            </Link>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        id="mobileMenu"
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-blackish p-4`}
      >
        <Link
          href="/"
          className={`block text-gray-300 hover:text-red-600 py-2 ${
            isActive('/') ? 'text-red-600' : ''
          }`}
        >
          Beranda
        </Link>
        <Link
          href="/berita"
          className={`block text-gray-300 hover:text-red-600 py-2 ${
            isActive('/berita') ? 'text-red-600' : ''
          }`}
        >
          Berita
        </Link>
        <Link
          href="/opini"
          className={`block text-gray-300 hover:text-red-600 py-2 ${
            isActive('/opini') ? 'text-red-600' : ''
          }`}
        >
          Opini
        </Link>
        <Link
          href="/podcast"
          className={`block text-gray-300 hover:text-red-600 py-2 ${
            isActive('/podcast') ? 'text-red-600' : ''
          }`}
        >
          Podcast
        </Link>
      </div>
    </header>
  );
};

export default Header;