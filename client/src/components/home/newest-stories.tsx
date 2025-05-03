import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import { getCategoryInfo } from "@/lib/data";
import { useTranslation } from "react-i18next";

export default function NewestStories() {
  const { t } = useTranslation();
  const { data: stories, isLoading } = useQuery({
    queryKey: ['/api/stories/newest'],
  }) as { data: any[], isLoading: boolean };

  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-text">{t('home.newest.title')}</h2>
        <Link href="/estorias" className="text-primary font-medium hover:underline flex items-center">
          {t('home.newest.viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-soft overflow-hidden flex">
              <Skeleton className="w-24 h-full" />
              <div className="p-4 flex-1">
                <Skeleton className="h-5 w-16 mb-2" />
                <Skeleton className="h-6 w-full mb-1" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))
        ) : (
          stories?.map((story) => {
            const categoryInfo = getCategoryInfo(story.categoryId);
            
            return (
              <Link 
                key={story.id}
                href={`/estoria/${story.id}`}
                className="story-card bg-white rounded-xl shadow-soft overflow-hidden flex hover-bounce"
              >
                <img 
                  src={story.imageUrl} 
                  alt={story.title} 
                  className="w-24 h-full object-cover"
                />
                <div className="p-4">
                  <span className={`inline-block px-2 py-1 text-xs font-medium ${categoryInfo.color} text-white rounded-full mb-2`}>
                    {story.categoryName}
                  </span>
                  <h3 className="font-heading font-bold text-lg mb-1">{story.title}</h3>
                  <p className="text-gray-600 text-sm">{story.excerpt}</p>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </section>
  );
}
