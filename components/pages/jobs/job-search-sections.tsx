"use client"

import JobSearchResults from "@/components/jobs/job-search-results"

interface JobSearchSectionsProps {
  jobs: any[]
  searchParams: {
    keywords?: string
    location?: string
    jobType?: string
  }
}

export function JobSearchPageSections({ jobs, searchParams }: JobSearchSectionsProps) {
  return <JobSearchResults jobs={jobs} searchParams={searchParams} />
}
