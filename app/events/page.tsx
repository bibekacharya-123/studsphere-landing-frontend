import React from 'react';
import Link from 'next/link';

export default function JobsLaunchingSoon() {
  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center p-8 rounded-xl shadow-2xl bg-black bg-opacity-40">
        <h1 className="text-5xl font-extrabold mb-4 animate-bounce">Studsphere for Jobs</h1>
        <h2 className="text-3xl font-bold mb-6">Launching Soon 🚀</h2>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          We are working hard to bring you the best job opportunities and career resources. Stay tuned for updates and get ready to launch your career with Studsphere!
        </p>
        <Link href="/" className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-blue-100 transition">Back to Home</Link>
      </div>
      <div className="mt-12 flex gap-4">
        <span className="text-2xl animate-pulse">✨</span>
        <span className="text-2xl animate-pulse">💼</span>
        <span className="text-2xl animate-pulse">🌟</span>
      </div>
    </div>
  );
}
