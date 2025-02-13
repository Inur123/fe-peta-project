// src/app/layout.tsx
import React from 'react';
import './globals.css';

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
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className="bg-gray-100">
        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
          {`
            AOS.init({
              duration: 1000,
              offset: 100,
              once: true,
            });
          `}
        </script>
      </body>
    </html>
  );
}