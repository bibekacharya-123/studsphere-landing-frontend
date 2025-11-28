import { RecommendedJobsPageSections } from "@/components/pages/jobs/recommended-jobs-sections"
import { getAllJobs } from "@/lib/jobs-data"

export default function RecommendedJobsPage() {
  const allJobs = getAllJobs()

  return (
    <main className="w-full bg-gray-50 min-h-screen">
      <RecommendedJobsPageSections jobs={allJobs} />
    </main>
  )
}
