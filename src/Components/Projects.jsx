import React from "react";
import { Github, Download } from "lucide-react";

const projects = [
  {
    title: "TorchLessCUDA — Deep Learning Engine",
    description:
      "A full deep learning engine built from scratch in C++ and CUDA, including tensor operations, GPU kernels, convolution layers, and optimized memory handling.",
    tech: ["C++", "CUDA", "GPU Kernels"],
    gradient: "from-blue-600 to-cyan-600",
    github: "https://github.com/ANSHAM1/TOrchLessCUDA",
    download : "https://github.com/ANSHAM1/TOrchLessCUDA/releases/tag/v1.0"
  },
  {
    title: "Modelise — Universal AI Model Hosting Platform",
    description:
      "A platform to host and deploy any AI/ML model through a single unified API. Supports GPT, Claude, Gemini, and custom model execution for developers.",
    tech: ["Node.js", "Next.js", "Docker", "AI Providers"],
    gradient: "from-green-600 to-teal-500",
    github: "https://github.com/ANSHAM1/Modelise",
    download: "--",
  },
  {
    title: "SentinelAI NIDS — Network Intrusion Detection",
    description:
      "A Real Time network intrusion detection system. Uses ML models (XGBoost + LSTM) with rust async packet processing for real-time anomaly detection.",
    tech: ["Rust", "Async", "Networking", "ML", "DL"],
    gradient: "from-purple-600 to-indigo-600",
    github: "https://github.com/ANSHAM1/SentinelAI_Nids",
    download: "https://github.com/ANSHAM1/SentinelAI_Nids/releases/tag/v1.0.0",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold">Top Projects</h2>
          <p className="text-gray-300 mt-2 max-w-2xl">
            Low-level DL engines, AI infrastructure, and high-performance systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-30 group-hover:opacity-60 transition`}
              />

              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-black/20 to-transparent p-6 rounded-2xl h-full flex flex-col justify-between">
                
                <div>
                  <h3 className="text-2xl font-extrabold mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{p.description}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-white/10 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between mt-auto">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-900 font-semibold hover:scale-105 transition"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>

                  {p.download && (
                    <a
                      href={p.download}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
