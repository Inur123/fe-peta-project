// src/app/components/AOSInitializer.tsx
"use client"; // Pastikan ini adalah Client Component

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  return null; // Komponen ini tidak merender apa pun
};

export default AOSInitializer;