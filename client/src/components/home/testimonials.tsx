import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ['/api/testimonials'],
  });

  return (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 text-center text-text">
        {t('home.testimonials.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-soft">
              <div className="flex items-center mb-4">
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-20 w-full mb-4" />
              <div className="flex items-center">
                <div className="font-medium w-full">
                  <Skeleton className="h-5 w-1/3 mb-1" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            </div>
          ))
        ) : (
          testimonials?.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-soft">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="font-medium">
                  <p className="text-text">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.relation}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
