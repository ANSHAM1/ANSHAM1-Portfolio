import React from "react";
import {
  Zap,
  Download,
  Mail,
  Cpu,
  Brain,
  Layers,
  Code2,
  ArrowRight,
} from "lucide-react";

const Hero = ({ isLoaded }) => {
  return (
    <header className="min-h-screen flex items-center pt-28 pb-8">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Availability Badge */}
            <div className="inline-block">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg blur opacity-25 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" />
                <div className="relative px-4 py-2 bg-white rounded-lg border border-gray-200">
                  <p className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Available for project collaborations
                  </p>
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="block text-gray-900">Building Intelligent</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Systems & AI Solutions
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-600 max-w-xl">
              I engineer scalable backend systems, custom deep-learning models,
              and high-performance C++/CUDA tools. Passionate about ML
              infrastructure, systems programming, and impactful full-stack
              products.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap pt-2">
              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap pt-2">
                {/* Resume Dropdown */}
                <div className="relative group">
                  <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold flex items-center gap-2 shadow hover:scale-105 transition">
                    Resumes <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                    <a
                      href="resume/SE_Role_Resume.pdf"
                      className="block px-4 py-3 text-sm hover:bg-gray-100 font-medium text-gray-800"
                    >
                      Software Engineer Resume
                    </a>
                    <a
                      href="resume/AI_Role_Resume.pdf"
                      className="block px-4 py-3 text-sm hover:bg-gray-100 font-medium text-gray-800"
                    >
                      DL Engineer Resume
                    </a>
                    <a
                      href="resume/WD_Role_Resume.pdf"
                      className="block px-4 py-3 text-sm hover:bg-gray-100 font-medium text-gray-800"
                    >
                      Web Developer Resume
                    </a>
                  </div>
                </div>

                {/* Contact Button */}
                <button className="px-6 py-3 rounded-full border font-bold hover:bg-gray-900 hover:text-white transition">
                  <Mail className="w-4 h-4 inline-block mr-2" />
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Strength Cards */}
            <div className="grid grid-cols-2 gap-4 pt-6 max-w-md">
              {[
                {
                  icon: <Cpu className="w-5 h-5" />,
                  label: "Systems Engineering",
                },
                {
                  icon: <Brain className="w-5 h-5" />,
                  label: "Deep Learning (LSTM, CNN, Transformers)",
                },
                {
                  icon: <Layers className="w-5 h-5" />,
                  label: "Full Stack MERN",
                },
                {
                  icon: <Code2 className="w-5 h-5" />,
                  label: "C++ / CUDA / Rust",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3"
                >
                  <div className="text-blue-600">{s.icon}</div>
                  <p className="text-sm font-semibold text-gray-700 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — PROFILE IMAGE */}
          <div
            className={`relative transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative mx-auto w-full max-w-md">
              {/* Glow Background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 blur-lg animate-pulse" />

              {/* Image Container */}
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="images/personal_image.png"
                    alt="Ansham Maurya"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Decorative Orbs */}
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full opacity-70 blur-xl bg-yellow-400 animate-bounce" />
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-60 blur-xl bg-cyan-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
