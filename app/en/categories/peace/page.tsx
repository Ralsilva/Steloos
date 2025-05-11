import EnglishLayout from '../../../en/layout'

export default function PeaceCategory() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page banner */}
      <div className="bg-[#3B82F6] text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading">Category: Peace</h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Stories that teach about peace, tranquility, and harmony.
        </p>
      </div>

      {/* Stories list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { id: 2, title: "The Lake of Tranquility", desc: "A story about a magical lake where animals find peace and harmony." },
          { id: 8, title: "The Peace Tree", desc: "A story about an ancient tree that helps resolve conflicts in the forest." },
          { id: 14, title: "The Silent Garden", desc: "A story about a special garden where everyone finds inner calm." },
          { id: 21, title: "The Peacemaking Clouds", desc: "A story about clouds that bring peace to a village in conflict." },
          { id: 27, title: "The Melody of Peace", desc: "A story about a special music that calms troubled hearts." },
          { id: 36, title: "The Little Mediator", desc: "A story about a boy who learns to resolve conflicts between friends." }
        ].map((story) => (
          <div key={story.id} className="story-card">
            <div className="story-card-image" style={{ backgroundColor: '#3B82F6' }}></div>
            <div className="story-card-content">
              <h3 className="font-semibold mb-2">{story.title}</h3>
              <p className="text-[#666666] text-sm mb-4">
                {story.desc}
              </p>
              <a
                href={`/en/stories/${story.id}`}
                className="read-more text-[#3B82F6] hover:text-[#2563EB]"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Back to categories */}
      <div className="mt-8">
        <a
          href="/en/categories"
          className="text-[#3B82F6] hover:text-[#2563EB] flex items-center"
        >
          ← Back to all categories
        </a>
      </div>
    </div>
  )
}
