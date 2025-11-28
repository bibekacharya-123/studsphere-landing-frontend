"use client"

export function JoinBusinessesSection() {
  const logos = Array(12).fill(0)

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Join 7 Lakh+ Businesses</h2>
            <p className="text-gray-600 text-lg">who choose Studsphere for their hiring needs</p>
          </div>

          {/* Right side - Logo Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {logos.map((_, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col items-center gap-2">
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                      {/* Studsphere logo */}
                      <rect x="2" y="2" width="8" height="8" fill="#2563EB" rx="1" />
                      <rect x="11" y="4" width="1" height="6" fill="#2563EB" />
                      <rect x="14" y="4" width="1" height="6" fill="#2563EB" />
                      <rect x="17" y="2" width="8" height="8" fill="#2563EB" rx="1" />
                    </svg>
                    <span className="text-xs font-medium text-gray-900">Studsphere</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
