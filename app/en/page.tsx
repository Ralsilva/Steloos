export default function EnglishHome() {
  return (
    <div className="container mx-auto px-4">
      {/* Main banner */}
      <section className="hero-banner mt-8" style={{ minHeight: '400px' }}>
        <div className="max-w-xl relative z-10 flex flex-col justify-center h-full" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <h1 className="text-3xl font-bold mb-2 font-heading">
            STELOOS
          </h1>
          <h2 className="text-2xl font-bold mb-2 font-heading">
            The Little Star of Light!
          </h2>
          <h3 className="text-xl font-bold mb-4 font-heading">
            Light Stories for Children
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Sharing values of peace, love and wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/en/stories"
              className="btn btn-primary px-6 py-3 rounded-md text-center"
            >
              Explore Stories
            </a>
            <a
              href="/en/categories"
              className="btn btn-outline px-6 py-3 rounded-md text-center bg-white"
            >
              View Categories
            </a>
          </div>
        </div>
        <div className="absolute right-1/4 transform translate-x-1/4 bottom-0 hidden md:flex justify-center items-end">
          <img
            src="/assets/images/home-01.png"
            alt="Children reading stories"
            className="h-96 object-contain"
          />
        </div>
      </section>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search stories..."
        />
      </div>

      {/* Categories */}
      <section className="my-8">
        <h2 className="section-title">
          Explore by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/en/categories/love" className="category-card category-amor p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/amor.png" alt="Love" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Love</h3>
          </a>
          <a href="/en/categories/peace" className="category-card category-paz p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/paz.png" alt="Peace" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Peace</h3>
          </a>
          <a href="/en/categories/protection" className="category-card category-fe p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/fe.png" alt="Protection" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Protection</h3>
          </a>
          <a href="/en/categories/wisdom" className="category-card category-sabedoria p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/sabedoria.png" alt="Wisdom" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Wisdom</h3>
          </a>
          <a href="/en/categories/kindness" className="category-card category-bondade p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/bondade.png" alt="Kindness" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Kindness</h3>
          </a>
          <a href="/en/categories/nature" className="category-card category-natureza p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/natureza.png" alt="Nature" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Nature</h3>
          </a>
          <a href="/en/categories/family" className="category-card category-familia p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/familia.png" alt="Family" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Family</h3>
          </a>
          <a href="/en/categories/friendship" className="category-card category-amizade p-4 flex flex-col items-center justify-center text-center">
            <img src="/assets/images/categories/amizade.png" alt="Friendship" className="w-16 h-16 mb-2" />
            <h3 className="font-semibold">Friendship</h3>
          </a>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="featured-section">
        <h2 className="section-title">
          Featured Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder for featured stories */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="story-card">
              <div className="story-card-image"></div>
              <div className="story-card-content">
                <h3 className="font-semibold mb-2 text-[#333333]">
                  Story Title {i}
                </h3>
                <p className="text-[#666666] text-sm mb-4">
                  A brief description of the story that sparks the reader's interest...
                </p>
                <a
                  href={`/en/stories/${i}`}
                  className="read-more"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Stories */}
      <section className="recent-section">
        <h2 className="section-title">
          Recent Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[4, 5, 6].map((i) => (
            <div key={i} className="story-card">
              <div className="story-card-image"></div>
              <div className="story-card-content">
                <h3 className="font-semibold mb-2 text-[#333333]">
                  Story Title {i}
                </h3>
                <p className="text-[#666666] text-sm mb-4">
                  A brief description of the story that sparks the reader's interest...
                </p>
                <a
                  href={`/en/stories/${i}`}
                  className="read-more"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Imagination Section */}
      <section className="imagination-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="section-title">
              Stories that Ignite Imagination
            </h2>
            <p className="mb-4">
              Our stories are carefully written to inspire positive values and stimulate children's imagination.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-[#FF9D5C] mr-2">✓</span> Stories that teach important values
              </li>
              <li className="flex items-center">
                <span className="text-[#FF9D5C] mr-2">✓</span> Content suitable for all ages
              </li>
              <li className="flex items-center">
                <span className="text-[#FF9D5C] mr-2">✓</span> Enchanting illustrations
              </li>
            </ul>
            <a href="/en/about" className="btn btn-primary px-6 py-2 rounded-md text-center inline-block mt-4">
              Learn More
            </a>
          </div>
          <div className="hidden md:block">
            <img
              src="/assets/images/magic.jpg"
              alt="Child imagining magical worlds"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">
          What Families Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-[#666666] mb-4">
              "My children love STELOOS stories. They always ask for one more before bedtime!"
            </p>
            <p className="font-semibold">- Mary Smith</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-[#666666] mb-4">
              "The stories are wonderful and teach important values in a way that children understand."
            </p>
            <p className="font-semibold">- John Davis</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-[#666666] mb-4">
              "I recommend it to all parents who want to encourage good values in their children."
            </p>
            <p className="font-semibold">- Anna Wilson</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <h2 className="text-2xl font-bold mb-4 font-heading">
          Receive New Stories
        </h2>
        <p className="mb-4">
          Subscribe to receive our new stories directly in your email.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-md flex-grow"
          />
          <button className="bg-white text-[#FF9D5C] px-6 py-2 rounded-md font-medium">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  )
}
