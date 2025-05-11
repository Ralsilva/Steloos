import EnglishLayout from '../../../en/layout'

export default function NatureCategory() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page banner */}
      <div className="bg-[#22C55E] text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading">Category: Nature</h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Stories that teach about nature, environment, and respect for animals.
        </p>
      </div>

      {/* Stories list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="story-card">
            <div className="story-card-image" style={{ backgroundColor: '#22C55E' }}></div>
            <div className="story-card-content">
              <h3 className="font-semibold mb-2">Nature Story {i}</h3>
              <p className="text-[#666666] text-sm mb-4">
                A story about nature and environment that teaches important values to children...
              </p>
              <a
                href={`/en/stories/${i}`}
                className="read-more text-[#22C55E] hover:text-[#16A34A]"
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
          className="text-[#22C55E] hover:text-[#16A34A] flex items-center"
        >
          ← Back to all categories
        </a>
      </div>
    </div>
  )
}
