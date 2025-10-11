import { AltaAcademyContact } from "@/components/alta-academy-contact"

interface AltaAcademyContactPageProps {
  params: Promise<{ locale: string }>
}

export default async function AltaAcademyContactPage({ params }: AltaAcademyContactPageProps) {
  const { locale } = await params

  return (
    <main className="min-h-screen">
      <AltaAcademyContact />
    </main>
  )
}
