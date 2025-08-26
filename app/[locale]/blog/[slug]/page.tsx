import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { locale: 'en', slug: 'importance-of-regular-dental-checkups' },
    { locale: 'en', slug: 'understanding-different-types-of-braces' },
    { locale: 'en', slug: 'truth-about-teeth-whitening' },
    { locale: 'en', slug: 'preventing-gum-disease' },
    { locale: 'fr', slug: 'importance-of-regular-dental-checkups' },
    { locale: 'fr', slug: 'understanding-different-types-of-braces' },
    { locale: 'fr', slug: 'truth-about-teeth-whitening' },
    { locale: 'fr', slug: 'preventing-gum-disease' },
    { locale: 'it', slug: 'importance-of-regular-dental-checkups' },
    { locale: 'it', slug: 'understanding-different-types-of-braces' },
    { locale: 'it', slug: 'truth-about-teeth-whitening' },
    { locale: 'it', slug: 'preventing-gum-disease' }
  ]
}

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>
}

// Sample blog data
const sampleBlogPosts = [
  {
    id: '1',
    title: 'The Importance of Regular Dental Check-ups',
    excerpt: 'Regular dental check-ups are essential for maintaining good oral health.',
    content: `
      <h2>Why Regular Check-ups Matter</h2>
      <p>Regular dental check-ups are the foundation of good oral health. They allow your dentist to catch problems early, before they become more serious and expensive to treat.</p>
      
      <h3>What Happens During a Check-up?</h3>
      <ul>
        <li>Professional cleaning to remove plaque and tartar</li>
        <li>Comprehensive examination of teeth, gums, and mouth</li>
        <li>X-rays to detect hidden problems</li>
        <li>Oral cancer screening</li>
        <li>Discussion of any concerns or questions</li>
      </ul>
    `,
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
    content: `
      <h2>Types of Braces Available</h2>
      <p>Modern orthodontics offers several options for straightening teeth, each with its own advantages and considerations.</p>
      
      <h3>Traditional Metal Braces</h3>
      <p>Metal braces are the most common type and are highly effective for complex cases.</p>
      
      <h3>Ceramic Braces</h3>
      <p>Ceramic braces work the same way as metal braces but use clear or tooth-colored brackets.</p>
    `,
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
    content: `
      <h2>Professional vs. At-Home Whitening</h2>
      <p>There are two main approaches to teeth whitening: professional treatments and at-home kits.</p>
      
      <h3>Professional Whitening</h3>
      <p>Professional whitening treatments use higher concentrations of whitening agents.</p>
      
      <h3>At-Home Options</h3>
      <p>At-home whitening kits include over-the-counter products and custom-fitted trays.</p>
    `,
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
    content: `
      <h2>What is Gum Disease?</h2>
      <p>Gum disease, also known as periodontal disease, is an infection of the tissues that surround and support your teeth.</p>
      
      <h3>Prevention Tips</h3>
      <ul>
        <li>Brush your teeth twice daily with fluoride toothpaste</li>
        <li>Floss daily to remove plaque between teeth</li>
        <li>Use an antiseptic mouthwash</li>
        <li>Visit your dentist regularly for check-ups and cleanings</li>
      </ul>
    `,
    author: 'Dr. David Thompson',
    publishedAt: '2023-12-28',
    category: 'Oral Health',
    tags: ['gum disease', 'prevention', 'oral hygiene'],
    image: '/male-orthodontist-headshot.png',
    slug: 'preventing-gum-disease'
  }
]

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params
  
  // Find the blog post
  const post = sampleBlogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href={`/${locale}/blog`} className="text-blue-600 hover:underline">
            Back to Blog
           </Link>
        </div>
      </div>
    )
  }

  // Get related posts
  const relatedPosts = sampleBlogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
        <div className="mb-8">
          <Link href={`/${locale}/blog`}>
            <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
        </Link>
      </div>

        <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        {/* Header */}
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                         <div className="flex items-center gap-2">
               <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString(locale)}</span>
             </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-foreground"
          />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                                 <Link
                   key={relatedPost.id}
                    href={`/${locale}/blog/${relatedPost.slug}`}
                   className="group block"
                 >
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
        </article>
      </div>
    </main>
  )
}
