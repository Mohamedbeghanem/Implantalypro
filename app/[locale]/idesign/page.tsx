import { IDesignHero } from "@/components/idesign-hero"
import { IDesignServices } from "@/components/idesign-services"
import { IDesignPortfolio } from "@/components/idesign-portfolio"
import { IDesignTechnology } from "@/components/idesign-technology"
import { IDesignProcess } from "@/components/idesign-process"

interface IDesignPageProps {
  params: Promise<{ locale: string }>
}

export default async function IDesignPage({ params }: IDesignPageProps) {
  const { locale } = await params

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <IDesignHero />
      
      {/* Services Section */}
      <IDesignServices />
      
      {/* Technology Section */}
      <IDesignTechnology locale={locale} />
      
      {/* Process Section */}
      <IDesignProcess locale={locale} />
      
      {/* Portfolio Section */}
      <IDesignPortfolio locale={locale} />
    </main>
  )
}
