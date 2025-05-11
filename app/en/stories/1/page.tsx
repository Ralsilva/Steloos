import EnglishLayout from '../../../en/layout'

export default function StoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation back */}
        <div className="mb-6">
          <a 
            href="/en/stories" 
            className="text-[#6366F1] hover:text-[#4F46E5] flex items-center"
          >
            ← Back to stories
          </a>
        </div>

        {/* Story header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 font-heading text-[#333333]">The Little Star that Lit the Way</h1>
          <div className="flex items-center text-sm text-[#666666] mb-4">
            <span className="mr-4">Category: 
              <a href="/en/categories/love" className="text-[#F59E0B] ml-1 hover:underline">
                Love
              </a>
            </span>
            <span>5 min read</span>
          </div>
        </div>

        {/* Story image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] h-64 w-full"></div>
        </div>

        {/* Story content */}
        <div className="prose max-w-none mb-8">
          <p>
            Once upon a time, there was a little star named Lumi. She lived in the sky with thousands of other stars, but always felt a bit different. While other stars shined together in constellations, Lumi preferred to shine alone, observing the world below.
          </p>
          <p>
            Every night, Lumi watched a small village where a girl named Sophie lived. Sophie was afraid of the dark and always looked out her window before going to sleep, searching for Lumi in the sky. The little star shined with all her might so Sophie could see her and feel safe.
          </p>
          <p>
            One day, a big storm covered the sky with dark clouds. Lumi knew Sophie would be afraid because she wouldn't be able to see her star friend. Determined to help, Lumi decided to do something no star had ever done before: descend to Earth.
          </p>
          <p>
            She came down as a small ray of light through the clouds and landed on Sophie's windowsill. The girl was amazed to see her star friend so close! Lumi explained that she had come down to ensure Sophie wouldn't be afraid during the storm.
          </p>
          <p>
            "But now you're not in the sky with the other stars anymore," said Sophie, concerned.
          </p>
          <p>
            "Sometimes we need to leave our comfort zone to help those we love," replied Lumi with a bright smile.
          </p>
          <p>
            Sophie learned that true love means being present when someone needs you, even if it means leaving your comfort zone. And Lumi discovered that her true purpose was to light the way for those she loved.
          </p>
          <p>
            After the storm passed, Lumi returned to the sky, but whenever Sophie looked up, the little star twinkled in a special way, like a secret code between friends. And Sophie was never afraid of the dark again, because she knew that true love always finds a way to shine, even on the darkest nights.
          </p>
        </div>

        {/* Moral of the story */}
        <div className="bg-[#FFF8F5] border-l-4 border-[#FF9D5C] p-4 mb-8">
          <h3 className="font-semibold text-[#333333] mb-2">Moral of the Story:</h3>
          <p className="text-[#666666]">
            True love means being present for those we love, even when it requires sacrifices. Just as Lumi left the sky to comfort Sophie, we should be willing to step out of our comfort zone to help others.
          </p>
        </div>

        {/* Share */}
        <div className="mb-8">
          <h3 className="font-semibold text-[#333333] mb-2">Share this story:</h3>
          <div className="flex space-x-4">
            <button className="bg-[#1877F2] text-white px-4 py-2 rounded-md">Facebook</button>
            <button className="bg-[#1DA1F2] text-white px-4 py-2 rounded-md">Twitter</button>
            <button className="bg-[#25D366] text-white px-4 py-2 rounded-md">WhatsApp</button>
          </div>
        </div>

        {/* More stories */}
        <div>
          <h3 className="font-semibold text-[#333333] mb-4 text-xl">More stories you might like:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[2, 3, 4].map((i) => (
              <div key={i} className="story-card">
                <div className="story-card-image"></div>
                <div className="story-card-content">
                  <h3 className="font-semibold mb-2">Story Title {i}</h3>
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
        </div>
      </div>
    </div>
  )
}
