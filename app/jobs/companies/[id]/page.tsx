import { notFound } from "next/navigation"
import CompanyDetailHeader from "@/components/company-details/company-detail-header"
import CompanyDetailTabs from "@/components/company-details/company-detail-tabs"
import { getCompanyById } from "@/lib/companies-data"

export default function CompanyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Get the company ID from params
  const { id } = params
  const companyId = Number.parseInt(id, 10)

  // Fetch company data
  const company = getCompanyById(companyId)

  // If company not found, show 404
  if (!company) {
    notFound()
  }

  return (
    <main className="w-full bg-gray-50 min-h-screen">
      <CompanyDetailHeader company={company} />
      <CompanyDetailTabs company={company} />
    </main>
  )
}
