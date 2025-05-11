import React from 'react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner da página */}
      <div className="bg-[#6366F1] text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading">Contact</h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Get in touch with us for suggestions, feedback, or partnerships. We're always open to hearing from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 font-heading text-[#6366F1]">Contact Information</h2>

            <div className="flex items-start mb-6">
              <div className="bg-[#FFF2E6] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF9D5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#333333]">Email</h3>
                <a href="mailto:contact@steloos.com" className="text-[#FF9D5C] hover:underline">contact@steloos.com</a>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-[#FFF2E6] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF9D5C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#333333]">YouTube</h3>
                <a href="https://youtube.com/@Steloos" target="_blank" rel="noopener noreferrer" className="text-[#FF9D5C] hover:underline">Steloos on YouTube</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#FFF2E6] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF9D5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#333333]">Office Hours</h3>
                <p className="text-[#666666]">Monday to Friday: 9am to 6pm</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FF9D5C] text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">How can I contribute a story?</h3>
                <p className="opacity-90">Contact us through the form on the right.</p>
              </div>
              <div>
                <h3 className="font-semibold">Are the stories free?</h3>
                <p className="opacity-90">Yes, all stories are free to read online.</p>
              </div>
              <div>
                <h3 className="font-semibold">Can I use the stories in my classroom?</h3>
                <p className="opacity-90">Yes, our content can be used for educational purposes.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6 font-heading text-[#6366F1]">Send a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-[#333333]">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D5C]"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#333333]">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D5C]"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium mb-1 text-[#333333]">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D5C]"
                placeholder="Message subject"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#333333]">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9D5C]"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#FF9D5C] text-white px-6 py-3 rounded-md hover:bg-[#F08C4B] transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
