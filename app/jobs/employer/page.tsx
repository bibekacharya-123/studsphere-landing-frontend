import { EmployerNavbar } from "@/components/employer/employer-navbar"
import { EmployerPageSections } from "@/components/pages/employer/employer-sections"

export default function EmployerPage() {
  return (
    <main className="w-full">
      <EmployerNavbar />
      <EmployerPageSections />
    </main>
  )
}
