"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Calendar, User, Tag, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  category: string
  tags: string[]
  image: string
  slug: string
}

interface BlogCardProps {
  post: BlogPost
  locale: string
}

export function BlogCard({ post, locale }: BlogCardProps) {
  const t = useTranslations('blog')
  
  // Ensure locale is valid, fallback to 'en' if undefined or invalid
  const validLocale = locale && ['en', 'fr', 'it'].includes(locale) ? locale : 'en'

  return (
    <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
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
      
      <CardContent className="p-6 space-y-4">
        {/* Meta Information */}
                 <div className="flex items-center gap-4 text-sm text-muted-foreground">
           <div className="flex items-center gap-1">
             <Calendar className="w-4 h-4" />
             <span>{new Date(post.publishedAt).toLocaleDateString(validLocale)}</span>
           </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
                 <Link
           href={`/${validLocale}/blog/${post.slug}`}
           className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200 group/link"
         >
          {t('readMore')}
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </CardFooter>
    </Card>
  )
}
