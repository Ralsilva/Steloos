import React from 'react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner da página */}
      <div className="bg-[#6366F1] text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading">About STELOOS</h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Learn about our history, mission, and the values that inspire our stories.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 font-heading text-[#6366F1]">Our History</h2>
            <p className="mb-4 text-[#333333]">
              STELOOS is a project dedicated to creating and sharing children's stories that promote spiritual values, peace, love, and wisdom.
            </p>
            <p className="mb-4 text-[#333333]">
              Our mission is to inspire children through narratives that cultivate positive values and promote spiritual and emotional development.
            </p>
            <p className="mb-4 text-[#333333]">
              Founded in 2023, STELOOS was born from the desire to offer quality content that helps children develop a deeper understanding of themselves and the world around them.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 font-heading text-[#6366F1]">Our Vision</h2>
            <p className="mb-4 text-[#333333]">
              We believe that stories have the power to shape young minds and plant seeds of wisdom that will flourish throughout life. 
              Through carefully crafted narratives, we seek to create a world where children grow up with values of compassion, 
              respect for nature, and understanding of the interconnectedness of all things.
            </p>
            <p className="mb-4 text-[#333333]">
              Our goal is for each story to be a journey of discovery, where children can find inspiration, comfort, and wisdom.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 font-heading text-[#6366F1]">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#FF9D5C] mr-3 text-xl">♥</span>
                <div>
                  <h3 className="font-semibold text-[#333333]">Love and Compassion</h3>
                  <p className="text-[#666666]">For all beings and for nature</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9D5C] mr-3 text-xl">☮</span>
                <div>
                  <h3 className="font-semibold text-[#333333]">Peace</h3>
                  <p className="text-[#666666]">Inner peace and harmony with the world</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9D5C] mr-3 text-xl">✨</span>
                <div>
                  <h3 className="font-semibold text-[#333333]">Wisdom</h3>
                  <p className="text-[#666666]">Discernment and knowledge</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9D5C] mr-3 text-xl">🌱</span>
                <div>
                  <h3 className="font-semibold text-[#333333]">Respect</h3>
                  <p className="text-[#666666]">For nature and the environment</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9D5C] mr-3 text-xl">🤲</span>
                <div>
                  <h3 className="font-semibold text-[#333333]">Kindness</h3>
                  <p className="text-[#666666]">Generosity and altruism</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#FF9D5C] text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 font-heading">Join Us</h2>
            <p className="mb-4 opacity-90">
              Want to be part of this journey? Sign up to receive our new stories.
            </p>
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full px-4 py-2 rounded-md mb-2 text-[#333333]"
            />
            <button className="w-full bg-white text-[#FF9D5C] px-4 py-2 rounded-md font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
