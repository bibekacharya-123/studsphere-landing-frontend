import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AdsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Ribbon Container */}
      <div className="relative bg-linear-to-r from-blue-600 to-blue-800 text-white py-6 px-4 shadow-lg md:mx-24 rounded-3xl mt-8">
        {/* Ribbon edges/cuts
        <div className="absolute left-0 top-0 w-0 h-0 border-t-[48px] border-t-transparent border-r-[20px] border-r-blue-900 border-b-[48px] border-b-transparent"></div>
        <div className="absolute right-0 top-0 w-0 h-0 border-t-[48px] border-t-transparent border-l-[20px] border-l-blue-900 border-b-[48px] border-b-transparent"></div> */}

        {/* Ribbon content */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Know your chances for admission
            </h2>
            <p className="text-blue-100 text-sm md:text-base">
              Get personalized insights into your college admission prospects
            </p>
          </div>

          <Link href='/colleges/predictor'>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200 shrink-0"
          >
            Check my chances
          </Button>
          </Link>
        </div>

        {/* Ribbon shadow/depth effect
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-700 to-blue-900"></div> */}
      </div>
    </section>
  )
}
