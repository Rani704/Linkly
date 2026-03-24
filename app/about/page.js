import React from "react";

const About = () => {
  return (
    <main className="bg-purple-50 pt-24 ">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r text-black py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Linkly
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-purple-400">
          Simplifying the way you manage and share links — no login required.
        </p>
      </section>

      {/* ABOUT PROJECT */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          What is Linkly?
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Linkly is a modern URL shortener designed to make sharing links easier,
          faster, and more efficient. It allows users to convert long URLs into
          short, manageable links instantly — without requiring any login or signup.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">⚡ Fast</h3>
            <p className="text-gray-600">
              Generate short links instantly with high performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🔒 Secure</h3>
            <p className="text-gray-600">
              Your links are protected and reliable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🎯 Easy to Use</h3>
            <p className="text-gray-600">
              Clean UI designed for a smooth and simple experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🚀 No Login Required</h3>
            <p className="text-gray-600">
              Start shortening links instantly without creating an account.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT DEVELOPER */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            About the Developer
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            I am a passionate developer currently exploring modern web technologies.
            I have experience working with React and completed an internship at Amazon,
            where I strengthened my frontend development skills.
          </p>

          <p className="text-gray-600 text-lg mt-4">
            This project is part of my journey to build scalable and user-friendly
            applications using Next.js and modern UI practices.
          </p>

        </div>
      </section>

    </main>
  );
};

export default About;