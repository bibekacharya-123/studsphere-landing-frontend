import Image from "next/image"
import { Company } from "@/lib/companies-data"

interface GallerySectionProps {
  company: Company
}

export default function GallerySection({ company }: GallerySectionProps) {
  return (
    <div className="space-y-12">
      {/* Life at Company Gallery */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Life at {company.name}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {company.lifeAtCompany?.map((item) => (
            <div key={item.id} className="group relative h-48 sm:h-56 bg-gray-200 rounded-lg overflow-hidden cursor-pointer">
              <Image
                src={item.image || "/placeholder.svg?height=240&width=400"}
                alt="Life at company"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Company Events Gallery */}
      {company.eventsGallery && company.eventsGallery.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-6">Company Events & Activities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {company.eventsGallery.map((event) => (
              <div key={event.id} className="group relative h-40 sm:h-44 bg-gray-200 rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={event.image || "/placeholder.svg?height=180&width=300"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-sm p-3">{event.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
