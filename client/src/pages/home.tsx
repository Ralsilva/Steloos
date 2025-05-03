import Hero from "@/components/home/hero";
import SearchBar from "@/components/home/search-bar";
import CategorySelector from "@/components/home/category-selector";
import FeaturedStories from "@/components/home/featured-stories";
import NewestStories from "@/components/home/newest-stories";
import FeaturedIllustration from "@/components/home/featured-illustration";
import Testimonials from "@/components/home/testimonials";
import Newsletter from "@/components/home/newsletter";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Hero />
      <SearchBar />
      <CategorySelector />
      <FeaturedStories />
      <NewestStories />
      <FeaturedIllustration />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
