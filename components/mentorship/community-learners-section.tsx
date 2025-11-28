export function CommunityLearnersSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-balance">
            Creating A Community Of
            <br />
            Life Long Learners.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance">
            There are many variations of passages of the Ipsum available, but the majority have suffered alteration in
            some form, by injected humour.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col items-center justify-center">
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                500<span className="text-4xl md:text-5xl">+</span>
              </div>
              <div className="text-sm font-semibold text-gray-700 tracking-wider">LEARNERS & COUNTING</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
