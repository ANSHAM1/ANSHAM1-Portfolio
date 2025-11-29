import React from "react";
import { Target } from "lucide-react";

const skills = [
  {
    name: "C++ (Advanced)",
    desc: "Templates, metaprogramming, CUDA, ML systems",
    icon: "⚙️",
    color: "from-blue-600 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    name: "Rust (Async & Systems)",
    desc: "Networking, async runtime, NIDS (Sentinel AI)",
    icon: "🦀",
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
  },
  {
    name: "MERN Stack",
    desc: "React, Next.js, Node, Express, MongoDB",
    icon: "⚛️",
    color: "from-blue-500 to-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    name: "Deep Learning",
    desc: "ANN, CNN, RNN, LSTM, Transformers",
    icon: "🤖",
    color: "from-pink-500 to-rose-400",
    bg: "bg-rose-50",
  },
  {
    name: "Custom DL Systems",
    desc: "Custom ANN/CNN kernels in C++/CUDA",
    icon: "🧠",
    color: "from-purple-600 to-pink-500",
    bg: "bg-purple-50",
  },
  {
    name: "Python",
    desc: "ML tooling, scripts, automation",
    icon: "🐍",
    color: "from-yellow-500 to-orange-400",
    bg: "bg-yellow-50",
  },
  {
    name: "Databases",
    desc: "MongoDB, SQL, relational design",
    icon: "💾",
    color: "from-indigo-500 to-purple-400",
    bg: "bg-purple-50",
  },
  {
    name: "System Design",
    desc: "Scalable backend architecture & patterns",
    icon: "🏛️",
    color: "from-teal-500 to-blue-400",
    bg: "bg-cyan-50",
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white shadow-sm">
            <Target className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">
              EXPERTISE
            </span>
          </div>

          <h2 className="text-4xl font-black mt-6">
            Skills & Technologies
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A blend of low-level performance engineering, full-stack development,
            and machine learning systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="relative group">
              
              {/* Gradient Border */}
              <div
                className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${skill.color} opacity-30 group-hover:opacity-70 transition`}
              ></div>

              {/* Card */}
              <div
                className={`relative p-8 rounded-2xl border bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 ${skill.bg}`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{skill.icon}</div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
