import { AltaAcademyCourseDetail } from "@/components/alta-academy-course-detail"

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { locale: 'en', id: '1' },
    { locale: 'en', id: '2' },
    { locale: 'en', id: '3' },
    { locale: 'fr', id: '1' },
    { locale: 'fr', id: '2' },
    { locale: 'fr', id: '3' },
    { locale: 'it', id: '1' },
    { locale: 'it', id: '2' },
    { locale: 'it', id: '3' }
  ]
}

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
