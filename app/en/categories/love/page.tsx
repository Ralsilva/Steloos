import Link from 'next/link'
import EnglishLayout from '../../../en/layout'

export default function LoveCategory() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page banner */}
      <div className="bg-[#F59E0B] text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading">Category: Love</h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Stories that teach about love, compassion, and care.
        </p>
      </div>

      {/* Stories list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { id: 1, title: "The Little Star that Lit the Way", desc: "A story about a little star that comes down to Earth to help a girl who's afraid of the dark." },
          { id: 5, title: "The Magic Hug", desc: "A story about the power of hugs and how they can transmit love and comfort." },
          { id: 8, title: "The Most Valuable Gift", desc: "A story about a little bear who discovers that the most valuable gifts come from the heart." },
          { id: 10, title: "The Love of All Mothers", desc: "A story about how maternal love is present in all species of nature." },
          { id: 12, title: "The Heart of the Forest", desc: "A story about a tree that shares its love with all the animals in the forest." },
          { id: 15, title: "Grandma's Heart", desc: "A story about how true love transcends physical distances and creates connections that cannot be broken." },
          { id: 18, title: "The Girl and the Injured Bird", desc: "A story about compassion and caring for animals." },
          { id: 25, title: "The Special Gift", desc: "A story about how the most valuable gifts are those given with love." },
          { id: 33, title: "The Love Letter", desc: "A story about a special letter that conveys deep feelings." },
          { id: 40, title: "Love in Colors", desc: "A story about how love has the power to transform the world, bringing color and joy to lives that have become gray." }
        ].map((story) => (
          <div key={story.id} className="story-card">
            <div className="story-card-image" style={{ backgroundColor: '#F59E0B' }}></div>
            <div className="story-card-content">
              <h3 className="font-semibold mb-2">{story.title}</h3>
              <p className="text-[#666666] text-sm mb-4">
                {story.desc}
              </p>
              <Link
                href={`/en/stories/${story.id}`}
                className="read-more text-[#F59E0B] hover:text-[#D97706]"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Back to categories */}
      <div className="mt-8">
        <Link
          href="/en/categories"
          className="text-[#F59E0B] hover:text-[#D97706] flex items-center"
        >
          ← Back to all categories
        </Link>
      </div>
    </div>
  )
}
