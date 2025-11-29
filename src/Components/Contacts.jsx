import React from "react";
import { Target, Cpu, Layers, Rocket } from "lucide-react";

const Contacts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE — About You (Non-repetitive) */}
        <div>
          <h3 className="text-3xl font-extrabold mb-6">Why Reach Out?</h3>

          <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
            I specialize in building <strong>high-performance systems</strong>,{" "}
            <strong>deep learning engines</strong>, and{" "}
            <strong>backend architectures</strong>. Whether it’s system-level
            engineering, ML infrastructure, or full-stack development — I enjoy
            working on complex, meaningful problems.
          </p>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-purple-600" />
              <span>Low-level engineering (C++, CUDA, Rust)</span>
            </div>

            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Deep Learning systems & model internals</span>
            </div>

            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-green-600" />
              <span>Backend development & scalable APIs</span>
            </div>

            <div className="flex items-center gap-3">
              <Rocket className="w-5 h-5 text-pink-600" />
              <span>
                Open to internships, collaborations & research projects
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <div>
          <h3 className="text-3xl font-extrabold mb-6">Get in Touch</h3>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Message recorded locally — connect backend API to make it functional."
              );
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                placeholder="Name"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <textarea
              required
              placeholder="Write your message..."
              rows={5}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:scale-105 transition"
            >
              Send Message
            </button>

            <p className="text-sm text-gray-500 mt-3">
              Prefer email?
              <a
                href="mailto:ansham.maurya.microsoft@gmail.com"
                className="text-blue-600 hover:underline"
              >
                ansham.maurya.microsoft@gmail.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
