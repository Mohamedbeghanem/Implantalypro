import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'it' }
  ]
}

interface BlogPageProps {
  params: Promise<{ locale: string }>
}

// Sample blog data
const sampleBlogPosts = [
  {
    id: '1',
    title: 'The Importance of Regular Dental Check-ups',
    excerpt: 'Regular dental check-ups are essential for maintaining good oral health.',
    author: 'Dr. Sarah Johnson',
    publishedAt: '2024-01-15',
    category: 'Preventive Care',
    tags: ['dental check-ups', 'oral health', 'prevention'],
    image: '/modern-dental-office.png',
    slug: 'importance-of-regular-dental-checkups'
  },
  {
    id: '2',
    title: 'Understanding Different Types of Braces',
    excerpt: 'From traditional metal braces to invisible aligners, there are many options for straightening your teeth.',
    author: 'Dr. Michael Chen',
    publishedAt: '2024-01-10',
    category: 'Orthodontics',
    tags: ['braces', 'orthodontics', 'teeth straightening'],
    image: '/professional-female-dentist.png',
    slug: 'understanding-different-types-of-braces'
  },
  {
    id: '3',
    title: 'The Truth About Teeth Whitening',
    excerpt: 'Teeth whitening is one of the most popular cosmetic dental procedures.',
    author: 'Dr. Emily Rodriguez',
    publishedAt: '2024-01-05',
    category: 'Cosmetic Dentistry',
    tags: ['teeth whitening', 'cosmetic dentistry', 'smile enhancement'],
    image: '/professional-female-oral-surgeon.png',
    slug: 'truth-about-teeth-whitening'
  },
  {
    id: '4',
    title: 'Preventing Gum Disease: A Complete Guide',
    excerpt: 'Gum disease is a common but preventable condition that can lead to serious oral health problems.',
    author: 'Dr. David Thompson',
    publishedAt: '2023-12-28',
    category: 'Oral Health',
    tags: ['gum disease', 'prevention', 'oral hygiene'],
    image: '/male-orthodontist-headshot.png',
    slug: 'preventing-gum-disease'
  }
]

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Dental Health Blog
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Expert insights, tips, and the latest in dental care to help you maintain a healthy, beautiful smile.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleBlogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString(locale)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
