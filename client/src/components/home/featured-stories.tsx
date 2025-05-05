import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getCategoryInfo } from "@/lib/data";
import { useTranslation } from "react-i18next";

export default function FeaturedStories() {
  const { t, i18n } = useTranslation();
  const { data: stories, isLoading } = useQuery({
    queryKey: ['/api/stories/featured', i18n.language],
    queryFn: async () => {
      const language = i18n.language === 'en' ? 'en' : 'pt-BR';
      const response = await fetch(`/api/stories/featured?lang=${language}`);
      return response.json();
    }
  }) as { data: any[], isLoading: boolean };

  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-text">{t('home.featured.title')}</h2>
        <Link href="/estorias" className="text-primary font-medium hover:underline flex items-center">
          {t('home.featured.viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-soft overflow-hidden">
              <Skeleton className="w-full h-48" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-7 w-full mb-2" />
                <Skeleton className="h-20 w-full mb-4" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>
          ))
        ) : (
          stories?.map((story) => {
            const categoryInfo = getCategoryInfo(story.categoryId);
            
            return (
              <div key={story.id} className="story-card bg-white rounded-xl shadow-soft overflow-hidden hover-bounce">
                <img 
                  src={story.imageUrl} 
                  alt={story.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`inline-block px-3 py-1 text-xs font-medium ${categoryInfo.color} text-white rounded-full`}>
                      {story.categoryName}
                    </span>
                    <span className="text-sm text-gray-500">{t('stories.ageRange')}: {story.ageRange}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <Button
                    asChild
                    variant="link"
                    className="inline-block text-secondary font-bold hover:text-accent transition-colors p-0"
                  >
                    <Link href={`/estoria/${story.id}`}>
                      {t('common.readMore')} <ArrowRight className="ml-1 h-4 w-4 inline" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
