import { Link } from "wouter";
import { Story } from "@shared/schema";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCategoryInfo } from "@/lib/data";

interface StoryCardProps {
  story: Story;
  variant?: "large" | "small";
}

export default function StoryCard({ story, variant = "large" }: StoryCardProps) {
  const categoryInfo = getCategoryInfo(story.categoryId);
  
  if (variant === "small") {
    return (
      <Link 
        href={`/historia/${story.id}`}
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
  }
  
  return (
    <div className="story-card bg-white rounded-xl shadow-soft overflow-hidden hover-bounce">
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
          <span className="text-sm text-gray-500">Idade: {story.ageRange}</span>
        </div>
        <h3 className="font-heading font-bold text-xl mb-2">{story.title}</h3>
        <p className="text-gray-600 mb-4">{story.excerpt}</p>
        <Button
          asChild
          variant="link"
          className="inline-block text-secondary font-bold hover:text-accent transition-colors p-0"
        >
          <Link href={`/historia/${story.id}`}>
            Ler história <ArrowRight className="ml-1 h-4 w-4 inline" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
