"use client"

import RecommendedJobsGrid from "@/components/jobs/recommended-jobs-grid"

interface RecommendedJobsSectionsProps {
  jobs: any[]
}

export function RecommendedJobsPageSections({ jobs }: RecommendedJobsSectionsProps) {
  return <RecommendedJobsGrid jobs={jobs} />
}
