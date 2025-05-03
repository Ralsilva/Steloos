import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { categoryInfo } from "@/lib/data";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "react-i18next";

export default function CategorySelector() {
  const { t } = useTranslation();
  const { data: categories, isLoading } = useQuery({
    queryKey: ['/api/categories'],
  }) as { data: any[], isLoading: boolean };

  if (isLoading) {
    return (
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 text-text">{t('home.categories.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-soft overflow-hidden">
              <Skeleton className="h-24 w-full" />
              <div className="p-4 text-center">
                <Skeleton className="h-6 w-24 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 text-text">{t('home.categories.title')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories?.map((category) => {
          const { icon, color } = categoryInfo[category.id] || { icon: "star", color: "bg-primary" };
          
          return (
            <Link 
              key={category.id} 
              href={`/categorias?categoria=${category.id}`}
              className="category-card bg-white rounded-xl shadow-soft overflow-hidden transition-transform hover:transform hover:scale-105 hover:shadow-md"
            >
              <div className={`h-24 ${color} flex items-center justify-center`}>
                <i className={`fas fa-${icon} text-white text-4xl`}></i>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading font-bold text-lg">{category.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
