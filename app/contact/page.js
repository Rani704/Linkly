"use client";

import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <main className="pt-24 bg-gray-50 min-h-screen">

      {/* SIMPLE HEADER */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
        <p className="text-gray-500 mt-2">
          Let’s connect — I’d love to hear from you.
        </p>
      </section>

      {/* FORM CARD */}
      <section className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md border">

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        {status && (
          <p className="mt-4 text-center text-gray-600">{status}</p>
        )}

      </section>

    </main>
  );
};

export default Contact;