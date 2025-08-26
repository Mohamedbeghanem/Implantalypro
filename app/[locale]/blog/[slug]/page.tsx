"use client"

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

// Sample blog data - in a real app, this would come from a CMS or database
const sampleBlogPosts = [
  {
    id: '1',
    title: 'The Importance of Regular Dental Check-ups',
    excerpt: 'Regular dental check-ups are essential for maintaining good oral health. Learn why you should visit your dentist every six months and what to expect during your appointment.',
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
      
      <h3>Benefits of Regular Visits</h3>
      <p>Regular dental visits can help prevent cavities, gum disease, and other oral health issues. They also give you the opportunity to learn about proper oral hygiene techniques.</p>
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
    excerpt: 'From traditional metal braces to invisible aligners, there are many options for straightening your teeth. Discover which type might be right for you.',
    content: `
      <h2>Types of Braces Available</h2>
      <p>Modern orthodontics offers several options for straightening teeth, each with its own advantages and considerations.</p>
      
      <h3>Traditional Metal Braces</h3>
      <p>Metal braces are the most common type and are highly effective for complex cases. They consist of metal brackets attached to each tooth with wires that are periodically adjusted.</p>
      
      <h3>Ceramic Braces</h3>
      <p>Ceramic braces work the same way as metal braces but use clear or tooth-colored brackets that are less noticeable.</p>
      
      <h3>Invisible Aligners</h3>
      <p>Clear aligners like Invisalign are removable, nearly invisible, and can be taken out for eating and cleaning.</p>
      
      <h3>Lingual Braces</h3>
      <p>Lingual braces are attached to the back of your teeth, making them completely hidden from view.</p>
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
    excerpt: 'Teeth whitening is one of the most popular cosmetic dental procedures. Learn about the different methods and what to expect from professional whitening treatments.',
    content: `
      <h2>Professional vs. At-Home Whitening</h2>
      <p>There are two main approaches to teeth whitening: professional treatments performed by your dentist and at-home kits.</p>
      
      <h3>Professional Whitening</h3>
      <p>Professional whitening treatments use higher concentrations of whitening agents and are supervised by dental professionals. They typically provide faster, more dramatic results.</p>
      
      <h3>At-Home Options</h3>
      <p>At-home whitening kits include over-the-counter products and custom-fitted trays provided by your dentist. These are more affordable but may take longer to show results.</p>
      
      <h3>What to Expect</h3>
      <p>Most people experience some sensitivity during and after whitening treatments. This is usually temporary and can be managed with desensitizing products.</p>
      
      <h3>Maintaining Results</h3>
      <p>To maintain your whitened smile, avoid foods and drinks that can stain your teeth, such as coffee, tea, and red wine.</p>
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
    excerpt: 'Gum disease is a common but preventable condition that can lead to serious oral health problems. Learn how to protect your gums and maintain healthy teeth.',
    content: `
      <h2>What is Gum Disease?</h2>
      <p>Gum disease, also known as periodontal disease, is an infection of the tissues that surround and support your teeth. It's caused by bacteria in plaque that builds up on your teeth.</p>
      
      <h3>Stages of Gum Disease</h3>
      <ul>
        <li><strong>Gingivitis:</strong> The earliest stage, characterized by red, swollen gums that may bleed when brushed</li>
        <li><strong>Periodontitis:</strong> Advanced gum disease that can cause bone loss and tooth loss</li>
      </ul>
      
      <h3>Prevention Tips</h3>
      <ul>
        <li>Brush your teeth twice daily with fluoride toothpaste</li>
        <li>Floss daily to remove plaque between teeth</li>
        <li>Use an antiseptic mouthwash</li>
        <li>Visit your dentist regularly for check-ups and cleanings</li>
        <li>Quit smoking, as it increases your risk of gum disease</li>
      </ul>
      
      <h3>Warning Signs</h3>
      <p>Be aware of these signs of gum disease: red, swollen, or tender gums; bleeding when brushing or flossing; persistent bad breath; loose teeth; and receding gums.</p>
    `,
    author: 'Dr. David Thompson',
    publishedAt: '2023-12-28',
    category: 'Oral Health',
    tags: ['gum disease', 'prevention', 'oral hygiene'],
    image: '/male-orthodontist-headshot.png',
    slug: 'preventing-gum-disease-complete-guide'
  },
  {
    id: '5',
    title: 'Dental Implants: What You Need to Know',
    excerpt: 'Dental implants are a permanent solution for missing teeth. Discover the benefits, process, and what to expect from this advanced dental procedure.',
    content: `
      <h2>What are Dental Implants?</h2>
      <p>Dental implants are artificial tooth roots that are surgically placed into your jawbone. They provide a strong foundation for replacement teeth that look, feel, and function like natural teeth.</p>
      
      <h3>Benefits of Dental Implants</h3>
      <ul>
        <li>Look and feel like natural teeth</li>
        <li>Improve speech and chewing ability</li>
        <li>Prevent bone loss in the jaw</li>
        <li>Don't require adjacent teeth to be modified</li>
        <li>Are permanent and durable</li>
      </ul>
      
      <h3>The Implant Process</h3>
      <p>The dental implant process typically involves several steps over a few months:</p>
      <ol>
        <li>Initial consultation and treatment planning</li>
        <li>Surgical placement of the implant</li>
        <li>Healing period (osseointegration)</li>
        <li>Placement of the abutment</li>
        <li>Attachment of the crown</li>
      </ol>
      
      <h3>Are You a Candidate?</h3>
      <p>Most people with missing teeth are candidates for dental implants. However, you need sufficient bone density and healthy gums. Your dentist will evaluate your specific situation.</p>
    `,
    author: 'Dr. Lisa Wang',
    publishedAt: '2023-12-20',
    category: 'Restorative Dentistry',
    tags: ['dental implants', 'missing teeth', 'restorative dentistry'],
    image: '/modern-dental-office.png',
    slug: 'dental-implants-what-you-need-to-know'
  },
  {
    id: '6',
    title: 'The Connection Between Oral Health and Overall Health',
    excerpt: 'Your oral health is more connected to your overall health than you might think. Learn about the links between dental health and systemic diseases.',
    content: `
      <h2>The Mouth-Body Connection</h2>
      <p>Research has shown that oral health is closely linked to overall health. The mouth can be a window to the rest of your body, and problems in your mouth can affect other parts of your body.</p>
      
      <h3>Health Conditions Linked to Oral Health</h3>
      <ul>
        <li><strong>Heart Disease:</strong> Gum disease may increase the risk of heart disease and stroke</li>
        <li><strong>Diabetes:</strong> People with diabetes are more prone to gum disease, and gum disease can make diabetes harder to control</li>
        <li><strong>Pregnancy Complications:</strong> Gum disease has been linked to premature birth and low birth weight</li>
        <li><strong>Respiratory Infections:</strong> Bacteria from the mouth can be inhaled into the lungs</li>
      </ul>
      
      <h3>Maintaining Good Oral Health</h3>
      <p>To protect both your oral and overall health:</p>
      <ul>
        <li>Practice good oral hygiene</li>
        <li>Visit your dentist regularly</li>
        <li>Eat a balanced diet</li>
        <li>Avoid tobacco products</li>
        <li>Manage chronic conditions like diabetes</li>
      </ul>
      
      <h3>When to See Your Dentist</h3>
      <p>Don't ignore oral health problems. See your dentist if you experience persistent bad breath, bleeding gums, tooth pain, or other oral health concerns.</p>
    `,
    author: 'Dr. Robert Kim',
    publishedAt: '2023-12-15',
    category: 'Oral Health',
    tags: ['oral health', 'overall health', 'systemic health'],
    image: '/professional-female-dentist.png',
    slug: 'connection-between-oral-health-and-overall-health'
  }
]

export default function BlogPostPage() {
  const params = useParams()
  const { slug, locale } = params
  const t = useTranslations('blog')
  
  // Ensure locale is valid, fallback to 'en' if undefined or invalid
  const validLocale = locale && ['en', 'fr', 'it'].includes(locale as string) ? locale as string : 'en'

  // Find the blog post by slug
  const post = sampleBlogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
                     <Link href={`/${validLocale}/blog`} className="text-primary hover:underline">
             Back to blog
           </Link>
        </div>
      </div>
    )
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = sampleBlogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <article className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-green-50/50">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                 <Link
           href={`/${validLocale}/blog`}
           className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
         >
          <ArrowLeft className="w-4 h-4" />
          {t('backToBlog')}
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          {/* Category Badge */}
          <div className="mb-4">
            <Badge variant="secondary" className="text-sm">
              {post.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                         <div className="flex items-center gap-2">
               <Calendar className="w-4 h-4" />
                               <span>{new Date(post.publishedAt).toLocaleDateString(validLocale)}</span>
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

        {/* Share Section */}
        <Separator className="my-12" />
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{t('share')}:</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">{t('relatedPosts')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                                 <Link
                   key={relatedPost.id}
                   href={`/${validLocale}/blog/${relatedPost.slug}`}
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
      </div>
    </article>
  )
}
