"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="py-24 bg-slate-100 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-4">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Have a project in mind? We'd love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg space-y-6 transition-colors duration-300"
        >

          <div>
            <label className="block mb-2 font-medium text-black dark:text-white">
              Name
            </label>

            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-black dark:text-white">
              Email
            </label>

            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-black dark:text-white">
              Message
            </label>

            <textarea
              required
              rows={5}
              placeholder="Write your message..."
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>

          {submitted && (
            <p className="text-green-500 text-center font-semibold">
              ✅ Thank you! Your message has been sent.
            </p>
          )}

        </form>

      </div>
    </section>
  );
}