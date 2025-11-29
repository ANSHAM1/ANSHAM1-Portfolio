import React from "react";
import { Code, Brain, Github, BookOpen } from "lucide-react";

const stats = [
  {
    icon: <Code className="w-6 h-6" />,
    value: "20+",
    label: "Projects Built",
    sub: "CNN - CUDA, SentinalAI, MERN apps",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    value: "10+",
    label: "ML/DL Models Implemented",
    sub: "ANN, CNN, RNN, LSTM, Transformers",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Github className="w-6 h-6" />,
    value: "500+",
    label: "GitHub Contributions",
    sub: "Consistent coding streak",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    value: "7+",
    label: "Tech Stacks Mastered",
    sub: "C++, CUDA, Rust, MERN, Java, Python",
    color: "from-orange-500 to-red-500",
  },
];

const Stats = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="relative group">
              {/* Glow Background */}
              <div
                className={`absolute -inset-1 rounded-2xl blur opacity-20 bg-gradient-to-r ${s.color} group-hover:opacity-50 transition`}
              />

              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg text-white mb-4 bg-gradient-to-r ${s.color} shadow`}
                >
                  {s.icon}
                </div>

                {/* Value & Label */}
                <h3 className="text-3xl font-extrabold">{s.value}</h3>
                <p className="text-sm text-gray-800 font-semibold">{s.label}</p>

                {/* Sub Text */}
                <p className="mt-1 text-xs text-gray-500">{s.sub}</p>

                {/* Background Icon (large & faded) */}
                <div className="absolute right-3 bottom-3 opacity-10">
                  <div className="text-5xl">{s.icon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
