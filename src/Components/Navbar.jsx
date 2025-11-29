import React from "react";
import { Download, Github, Linkedin } from "lucide-react";

const Navbar = ({ scrollY }) => {
  return (
    <nav
      className={`fixed top-4 left-0 right-0 mx-auto max-w-7xl px-6 z-40 transition-all duration-400 ${
        scrollY > 80 ? "bg-white/80 backdrop-blur-md shadow rounded-sm" : ""
      }`}
    >
      <div className="flex items-center justify-between py-4">
        {/* Left Side — Branding */}
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg blur opacity-25 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:opacity-40 transition" />
            <div className="relative px-4 py-2 bg-white rounded-lg">
              <h1 className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ANSHAM MAURYA
              </h1>
              <p className="text-xs text-gray-600 mt-1 font-semibold">
                Software Engineer | Deep Learning Engineer | Web Developer
              </p>
            </div>
          </div>
        </div>

        {/* Right Side — Buttons */}
        <div className="flex items-center gap-4">
          {/* Resume */}
          <a
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition"
            href="/resume.pdf"
          >
            <Download className="w-4 h-4" /> Resume
          </a>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { Icon: Github, link: "https://github.com/ANSHAM1" },
              {
                Icon: Linkedin,
                link: "https://www.linkedin.com/in/ansham-maurya-69ab80297/",
              },
            ].map(({ Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border flex items-center justify-center shadow hover:scale-105 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
