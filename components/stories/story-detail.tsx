'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslation } from 'next-i18next'

interface StoryDetailProps {
  id: string
  language: string
}

type Story = {
  id: string
  title: string
  excerpt: string
  content: string
  categoryId: string
  categoryName: string
  ageRange: string
  imageUrl?: string
}

export default function StoryDetail({ id, language }: StoryDetailProps) {
  const { t } = useTranslation()
  const [story, setStory] = useState<Story | null>(null)
  const [relatedStories, setRelatedStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchStory = async () => {
      try {
        // Fetch story details
        const storyResponse = await fetch(`/api/stories/${id}?lang=${language}`)
        const storyData = await storyResponse.json()
        setStory(storyData)
        
        // Fetch related stories
        const relatedResponse = await fetch(`/api/stories/related/${id}?lang=${language}`)
        const relatedData = await relatedResponse.json()
        setRelatedStories(relatedData)
      } catch (error) {
        console.error('Error fetching story:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchStory()
  }, [id, language])
  
  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    )
  }
  
  if (!story) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">{t('stories.notFound')}</h2>
        <p className="mb-6">{t('stories.storyNotFoundMessage')}</p>
        <Button asChild>
          <Link href={language === 'en' ? '/stories' : '/estorias'}>
            {t('common.backToStories')}
          </Link>
        </Button>
      </div>
    )
  }
  
  return (
    <div>
      <div className="mb-6">
        <Link 
          href={language === 'en' ? '/stories' : '/estorias'} 
          className="text-primary hover:underline flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('common.backToStories')}
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="h-64 relative">
          {story.imageUrl ? (
            <Image 
              src={story.imageUrl} 
              alt={story.title} 
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-400">No image</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <Badge className="mb-2">{story.categoryName}</Badge>
            <h1 className="text-3xl font-bold mb-2">{story.title}</h1>
            <p className="text-gray-600">{t('stories.recommendedAge', { age: story.ageRange })}</p>
          </div>
          
          <div className="prose max-w-none">
            {story.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      
      {relatedStories.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">{t('stories.relatedStories')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStories.slice(0, 3).map(relatedStory => (
              <Link
                key={relatedStory.id}
                href={language === 'en' ? `/story/${relatedStory.id}` : `/estoria/${relatedStory.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col h-full"
              >
                <div className="h-40 overflow-hidden bg-gray-100">
                  {relatedStory.imageUrl ? (
                    <Image 
                      src={relatedStory.imageUrl} 
                      alt={relatedStory.title} 
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{relatedStory.title}</h3>
                  <p className="text-gray-600 text-sm">{relatedStory.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}