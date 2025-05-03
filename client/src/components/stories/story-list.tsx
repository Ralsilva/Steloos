import { useQuery } from "@tanstack/react-query";
import StoryCard from "@/components/stories/story-card";
import { Skeleton } from "@/components/ui/skeleton";

interface StoryListProps {
  queryKey: string;
  title: string;
  emptyMessage?: string;
  variant?: "large" | "small";
}

export default function StoryList({ 
  queryKey, 
  title, 
  emptyMessage = "Nenhuma história encontrada.",
  variant = "large" 
}: StoryListProps) {
  const { data: stories, isLoading } = useQuery({
    queryKey: [queryKey],
  });

  const columns = variant === "large" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2";

  if (isLoading) {
    return (
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">{title}</h2>
        <div className={`grid ${columns} gap-6`}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-soft overflow-hidden">
              {variant === "large" ? (
                <>
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
                </>
              ) : (
                <div className="flex">
                  <Skeleton className="w-24 h-24" />
                  <div className="p-4 flex-1">
                    <Skeleton className="h-5 w-16 mb-2" />
                    <Skeleton className="h-6 w-full mb-1" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!stories || stories.length === 0) {
    return (
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">{title}</h2>
        <div className="bg-white rounded-xl p-8 text-center shadow-soft">
          <p className="text-gray-600">{emptyMessage}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">{title}</h2>
      <div className={`grid ${columns} gap-6`}>
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} variant={variant} />
        ))}
      </div>
    </section>
  );
}
