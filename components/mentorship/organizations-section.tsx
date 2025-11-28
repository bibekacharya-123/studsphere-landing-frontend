"use client"

import Image from "next/image"

export function OrganizationsSection() {
  const logos = Array(12).fill(null)

  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
          Proven Success With 20,000+ Top Organizations
        </h2>

        <div className="relative overflow-hidden bg-white rounded-lg">
          <div className="flex gap-8 sm:gap-12 md:gap-16 animate-scroll">
            {logos.map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src="/studsphere-education-logo.png"
                  alt="Studsphere Education"
                  width={120}
                  height={80}
                  className="w-24 sm:w-28 md:w-32 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
