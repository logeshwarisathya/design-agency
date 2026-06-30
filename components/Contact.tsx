"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Simulate successful submission
    setSubmitted(true);

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-slate-950"
    >
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#6EC1D1] mb-4">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Have a project in mind? We'd love to hear from you.
        </p>

        <div className="relative group">

          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#6EC1D1] via-cyan-400 to-[#6EC1D1] blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <form
            onSubmit={handleSubmit}
            className="relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl space-y-6 transition-all duration-500 hover:-translate-y-2"
          >

            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-black dark:text-white">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-xl px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6EC1D1]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-black dark:text-white">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-xl px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6EC1D1]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium text-black dark:text-white">
                Message
              </label>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-xl px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6EC1D1]"
              />
            </div>

            <button
              type="submit"
              className="relative overflow-hidden w-full bg-[#6EC1D1] text-black py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(110,193,209,0.5)]"
            >
              <span className="relative z-10">Send Message</span>

              <div className="absolute inset-0 -translate-x-full bg-white/30 skew-x-12 transition-transform duration-700 hover:translate-x-full"></div>
            </button>

            {submitted && (
              <p className="text-[#6EC1D1] text-center font-semibold animate-bounce">
  ✅ Thank you! Your message has been sent.
</p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}