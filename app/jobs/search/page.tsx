import { JobSearchPageSections } from "@/components/pages/jobs/job-search-sections"
import { getAllJobs } from "@/lib/jobs-data"

interface SearchPageProps {
  searchParams: Promise<{
    keywords?: string
    location?: string
    jobType?: string
  }>
}

export default async function JobSearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams
  const allJobs = getAllJobs()

  return (
    <main className="w-full bg-gray-50 min-h-screen">
      <JobSearchPageSections
        jobs={allJobs}
        searchParams={{
          keywords: params.keywords || "",
          location: params.location || "",
          jobType: params.jobType || "",
        }}
      />
    </main>
  )
}
