"use client"

import { IDesignHero } from "@/components/idesign-hero"
import { IDesignServices } from "@/components/idesign-services"
import { IDesignPortfolio } from "@/components/idesign-portfolio"
import { IDesignTechnology } from "@/components/idesign-technology"
import { IDesignProcess } from "@/components/idesign-process"

export const dynamic = 'force-dynamic'

export default function IDesignPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <IDesignHero />
      
      {/* Services Section */}
      <IDesignServices />
      
      {/* Technology Section */}
      <IDesignTechnology />
      
      {/* Process Section */}
      <IDesignProcess />
      
      {/* Portfolio Section */}
      <IDesignPortfolio />
    </main>
  )
}
