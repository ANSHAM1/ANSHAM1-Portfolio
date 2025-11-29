import React, { useState, useEffect, useMemo } from "react";

import Navbar from "./Navbar";
import Stats from "./Stats";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Hero from "./Hero";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden text-gray-900">
      {/* Soft animated blobs + particles */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-16 left-8 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-12 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-18 animate-blob animation-delay-2000"></div>

        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400 opacity-20"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `float ${p.duration}s infinite ease-in-out`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Nav */}
      <Navbar scrollY={scrollY} />

      {/* Hero */}
      <Hero isLoaded={isLoaded}/>

      {/* Stats */}
      <Stats />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Testimonials & Contact */}
      <Contacts />

      {/* Footer */}
      <footer className="py-10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-lg font-extrabold tracking-wide">
            ANSHAM MAURYA
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Ansham Maurya — Built with ❤️ using
            React & Tailwind.
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://github.com/ANSHAM1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ansham-maurya-69ab80297/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
