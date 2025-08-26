import { AltaAcademyCourses } from "@/components/alta-academy-courses"

interface AltaAcademyCoursesPageProps {
  params: Promise<{ locale: string }>
}

export default async function AltaAcademyCoursesPage({ params }: AltaAcademyCoursesPageProps) {
  const { locale } = await params

  return (
    <main className="min-h-screen">
      <AltaAcademyCourses />
    </main>
  )
}
