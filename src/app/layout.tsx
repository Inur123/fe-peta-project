// src/app/layout.tsx
import React from 'react';
import './globals.css';
import { Inter } from "next/font/google";
import AOSInitializer from './components/AOSInitializer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Liputan6-like News Portal</title>
     
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className="bg-gray-100">
        {children}
        <AOSInitializer /> {/* Inisialisasi AOS di sini */}
      </body>
    </html>
  );
}