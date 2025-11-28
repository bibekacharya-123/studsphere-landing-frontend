import { notFound } from 'next/navigation'
import JobDetailHeader from "@/components/job-details/job-detail-header"
import JobDetailContent from "@/components/job-details/job-detail-content"
import { getJobById } from "@/lib/jobs-data"

export default async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const jobId = parseInt(id, 10)

  const job = getJobById(jobId)

  if (!job) {
    notFound()
  }

  return (
    <main className="w-full bg-gray-50 min-h-screen">
      <JobDetailHeader job={job} />
      <JobDetailContent job={job} />
    </main>
  )
}
