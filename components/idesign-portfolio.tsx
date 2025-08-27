import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLocale } from 'next-intl'

export function IDesignPortfolio() {
  const locale = useLocale()
  
  const portfolioItems = [
    {
      title: "Full Arch Implant Design",
      description: "Complete smile transformation with All-on-4 implant design",
      category: "Full Arch",
      image: "/placeholder-0rbi0.png"
    },
    {
      title: "Single Tooth Implant",
      description: "Precise single tooth replacement with natural aesthetics",
      category: "Single Tooth",
      image: "/placeholder-diwq6.png"
    },
    {
      title: "Smile Makeover",
      description: "Comprehensive smile design with multiple restorations",
      category: "Cosmetic",
      image: "/placeholder-kk841.png"
    },
    {
      title: "Implant Bridge Design",
      description: "Multi-unit restoration with optimal function and beauty",
      category: "Bridge",
      image: "/placeholder-0rbi0.png"
    },
    {
      title: "Surgical Guide Design",
      description: "3D-printed surgical guides for precise implant placement",
      category: "Surgical",
      image: "/placeholder-diwq6.png"
    },
    {
      title: "Virtual Smile Preview",
      description: "Before and after visualization of treatment outcomes",
      category: "Preview",
      image: "/placeholder-kk841.png"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Our Design Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest 3D dental designs and treatment visualizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {item.category}
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/${locale}/idesign/portfolio/${index + 1}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href={`/${locale}/idesign/portfolio`}>
              View Full Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
