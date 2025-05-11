import React from 'react'

export default function CategoriesContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner da página */}
      <div className="bg-[#6366F1] text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading">Categories</h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Explore our stories by category and discover stories that inspire positive values.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="category-card category-amor p-6">
          <h2 className="text-xl font-semibold mb-2">Love</h2>
          <p className="text-white opacity-90 mb-4">Stories about love and compassion</p>
          <a
            href="/en/categories/love"
            className="bg-white text-[#F59E0B] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            View stories →
          </a>
        </div>

        <div className="category-card category-paz p-6">
          <h2 className="text-xl font-semibold mb-2">Peace</h2>
          <p className="text-white opacity-90 mb-4">Stories about peace and harmony</p>
          <a
            href="/en/categories/peace"
            className="bg-white text-[#F97316] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            View stories →
          </a>
        </div>

        <div className="category-card category-sabedoria p-6">
          <h2 className="text-xl font-semibold mb-2">Wisdom</h2>
          <p className="text-white opacity-90 mb-4">Stories about wisdom and knowledge</p>
          <a
            href="/en/categories/wisdom"
            className="bg-white text-[#8B5CF6] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            View stories →
          </a>
        </div>

        <div className="category-card category-bondade p-6">
          <h2 className="text-xl font-semibold mb-2">Kindness</h2>
          <p className="text-white opacity-90 mb-4">Stories about kindness and generosity</p>
          <a
            href="/en/categories/kindness"
            className="bg-white text-[#10B981] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            View stories →
          </a>
        </div>

        <div className="category-card category-fe p-6">
          <h2 className="text-xl font-semibold mb-2">Protection</h2>
          <p className="text-white opacity-90 mb-4">Stories about protection, care, and safety</p>
          <a
            href="/en/categories/protection"
            className="bg-white text-[#3B82F6] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            View stories →
          </a>
        </div>

        <div className="category-card category-natureza p-6">
          <h2 className="text-xl font-semibold mb-2">Nature</h2>
          <p className="text-white opacity-90 mb-4">Stories about nature and the environment</p>
          <a
            href="/en/categories/nature"
            className="bg-white text-[#22C55E] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            View stories →
          </a>
        </div>

        <div className="category-card category-familia p-6">
          <h2 className="text-xl font-semibold mb-2">Family</h2>
          <p className="text-white opacity-90 mb-4">Stories about family and relationships</p>
          <a
            href="/en/categories/family"
            className="bg-white text-[#EC4899] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            View stories →
          </a>
        </div>

        <div className="category-card category-amizade p-6">
          <h2 className="text-xl font-semibold mb-2">Friendship</h2>
          <p className="text-white opacity-90 mb-4">Stories about friendship and companionship</p>
          <a
            href="/en/categories/friendship"
            className="bg-white text-[#6366F1] px-4 py-2 rounded-md inline-block hover:bg-opacity-90 transition-colors"
          >
            View stories →
          </a>
        </div>
      </div>
    </div>
  )
}
