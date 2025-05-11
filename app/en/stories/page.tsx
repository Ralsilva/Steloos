import React from 'react'
import Link from 'next/link'

export default function Stories() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner da página */}
      <div className="bg-[#6366F1] text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading">Stories</h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Explore our collection of stories for children, created to inspire positive values and stimulate imagination.
        </p>
      </div>

      {/* Barra de pesquisa */}
      <div className="search-bar mb-8">
        <input
          type="text"
          className="search-input"
          placeholder="Search stories..."
        />
      </div>

      {/* Filtros */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button className="bg-white text-[#6366F1] border border-[#6366F1] px-4 py-2 rounded-md hover:bg-[#6366F1] hover:text-white transition-colors">
          All
        </button>
        <button className="bg-white text-[#FF9D5C] border border-[#FF9D5C] px-4 py-2 rounded-md hover:bg-[#FF9D5C] hover:text-white transition-colors">
          Most Recent
        </button>
        <button className="bg-white text-[#10B981] border border-[#10B981] px-4 py-2 rounded-md hover:bg-[#10B981] hover:text-white transition-colors">
          Most Popular
        </button>
      </div>

      {/* Lista de estórias */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Available stories */}
        {[
          { id: 1, title: "The Little Star that Lit the Way", desc: "A story about a little star that comes down to Earth to help a girl who's afraid of the dark.", category: "Love", time: "5 min" },
          { id: 2, title: "The Lake of Tranquility", desc: "A story about a magical lake where animals find peace and harmony.", category: "Peace", time: "6 min" },
          { id: 3, title: "The Little Hope Sower", desc: "A story about a boy who helps his village find hope in difficult times.", category: "Protection", time: "4 min" },
          { id: 4, title: "The Wise Owl", desc: "A story about an owl that shares its wisdom with the forest animals.", category: "Wisdom", time: "7 min" },
          { id: 5, title: "The Magic Hug", desc: "A story about the power of hugs and how they can transmit love and comfort.", category: "Love", time: "5 min" },
          { id: 6, title: "The Boy Who Helped Everyone", desc: "A story about a boy who discovers the joy of helping others.", category: "Kindness", time: "6 min" }
        ].map((story) => (
          <div key={story.id} className="story-card hover:shadow-md transition-shadow">
            <div className="story-card-image"></div>
            <div className="story-card-content">
              <h3 className="font-semibold mb-2">{story.title}</h3>
              <p className="text-[#666666] text-sm mb-4">
                {story.desc}
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/en/stories/${story.id}`}
                  className="read-more"
                >
                  Read more →
                </Link>
                <span className="text-xs text-[#666666]">{story.time} read</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#6366F1] text-white">1</a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#6366F1] border border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-colors">2</a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#6366F1] border border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-colors">3</a>
          <span className="w-10 h-10 flex items-center justify-center">...</span>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-[#6366F1] border border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-colors">10</a>
        </div>
      </div>
    </div>
  )
}
