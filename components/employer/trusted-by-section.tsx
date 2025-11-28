"use client"

export function TrustedBySection() {
  return (
    <div className="w-full py-16 bg-white overflow-hidden">
      <div className="flex items-center gap-8 px-6">
        {/* Left text */}
        <div className="flex-shrink-0 whitespace-nowrap">
          <p className="text-gray-600 text-sm font-medium">
            Trusted by <span className="text-black font-bold text-base">2800+</span>
          </p>
          <p className="text-gray-600 text-sm font-medium">leading organizations</p>
        </div>

        {/* Scrolling logos container */}
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {/* Logo set - rendered twice for infinite scroll effect */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-12 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center justify-center flex-shrink-0">
                    <svg className="w-32 h-16" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Studsphere Logo */}
                      <g>
                        {/* Logo Icon - Blue Layers */}
                        <rect x="20" y="15" width="14" height="14" fill="#2563EB" rx="2" />
                        <rect x="20" y="32" width="14" height="14" fill="#3B82F6" rx="2" />
                        <rect x="20" y="49" width="14" height="14" fill="#60A5FA" rx="2" />

                        {/* Logo Text */}
                        <text
                          x="45"
                          y="52"
                          fontFamily="Arial, sans-serif"
                          fontSize="18"
                          fontWeight="bold"
                          fill="#1E40AF"
                        >
                          Studsphere
                        </text>
                      </g>
                    </svg>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
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
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
