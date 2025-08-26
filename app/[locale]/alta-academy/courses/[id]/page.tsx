import { AltaAcademyCourseDetail } from "@/components/alta-academy-course-detail"

interface AltaAcademyCourseDetailPageProps {
  params: Promise<{ locale: string; id: string }>
}

export default async function AltaAcademyCourseDetailPage({ params }: AltaAcademyCourseDetailPageProps) {
  const { locale, id } = await params

  return (
    <main className="min-h-screen">
      <AltaAcademyCourseDetail courseId={id} />
    </main>
  )
}
