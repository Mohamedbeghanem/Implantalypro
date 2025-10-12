"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from '@/hooks/use-translations'
import { Calendar, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Sample latest blog posts
const latestPosts = [
  {
    id: '1',
    title: 'The Importance of Regular Dental Check-ups',
    excerpt: 'Regular dental check-ups are essential for maintaining good oral health. Learn why you should visit your dentist every six months.',
    publishedAt: '2024-01-15',
    category: 'Preventive Care',
    image: '/modern-dental-office.png',
    slug: 'importance-of-regular-dental-checkups'
  },
  {
    id: '2',
    title: 'Understanding Different Types of Braces',
    excerpt: 'From traditional metal braces to invisible aligners, discover which type might be right for you and your smile goals.',
    publishedAt: '2024-01-10',
    category: 'Orthodontics',
    image: '/professional-female-dentist.png',
    slug: 'understanding-different-types-of-braces'
  },
  {
    id: '3',
    title: 'The Truth About Teeth Whitening',
    excerpt: 'Learn about the different methods and what to expect from professional whitening treatments for a brighter smile.',
    publishedAt: '2024-01-05',
    category: 'Cosmetic Dentistry',
    image: '/professional-female-oral-surgeon.png',
    slug: 'truth-about-teeth-whitening'
  }
]

export function LatestBlogPosts() {
  const { t, currentLanguage } = useTranslations()

  return (
    <section className="py-16 bg-gradient-to-br from-green-50/50 via-white to-blue-50/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString(currentLanguage)}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link 
                  href={`/${currentLanguage}/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group/link"
                >
                  {t('blog.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href={`/${currentLanguage}/blog`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group"
          >
            {t('blog.viewAll')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
