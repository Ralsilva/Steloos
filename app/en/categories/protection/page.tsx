import Link from 'next/link'

export default function ProtectionCategory() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page banner */}
      <div className="bg-[#8B5CF6] text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading">Category: Protection</h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Stories that teach about protection, care, and safety.
        </p>
      </div>

      {/* Stories list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { id: 3, title: "The Little Hope Sower", desc: "A story about a boy who helps his village find hope in difficult times." },
          { id: 41, title: "The Invisible Shields", desc: "A story about invisible shields of love that protect children from fears and life's challenges." }
        ].map((story) => (
          <div key={story.id} className="story-card">
            <div className="story-card-image" style={{ backgroundColor: '#8B5CF6' }}></div>
            <div className="story-card-content">
              <h3 className="font-semibold mb-2">{story.title}</h3>
              <p className="text-[#666666] text-sm mb-4">
                {story.desc}
              </p>
              <Link
                href={`/en/stories/${story.id}`}
                className="read-more text-[#8B5CF6] hover:text-[#7C3AED]"
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
          className="text-[#8B5CF6] hover:text-[#7C3AED] flex items-center"
        >
          ← Back to all categories
        </Link>
      </div>
    </div>
  )
}
