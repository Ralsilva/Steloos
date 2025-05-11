'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NotFoundEN() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(10)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/en')
    }, 10000)
    
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)
    
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF2E6] to-[#FFE4CC] px-4">
      <div className="max-w-3xl w-full text-center">
        <div className="mb-8 relative">
          <h1 className="text-9xl font-bold text-[#FF9D5C] drop-shadow-lg">404</h1>
          <div className="absolute -top-10 -right-10 transform rotate-12">
            <div className="bg-[#6366F1] text-white text-xl font-bold py-2 px-6 rounded-lg shadow-lg">
              Ooops!
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#333333] font-heading">
            Looks like you got lost among the stars!
          </h2>
          
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF9D5C" className="w-full h-full">
                <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
              </svg>
            </div>
            
            <p className="text-[#666666] text-lg mb-4">
              The page you're looking for seems to have traveled to another galaxy.
            </p>
            
            <p className="text-[#666666]">
              Don't worry! We'll take you back to the home page in <span className="font-bold text-[#FF9D5C]">{countdown}</span> seconds.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en" className="bg-[#FF9D5C] text-white px-6 py-3 rounded-md hover:bg-[#F08C4B] transition-colors">
              Return to Home Page
            </Link>
            <Link href="/en/stories" className="bg-[#6366F1] text-white px-6 py-3 rounded-md hover:bg-[#4F46E5] transition-colors">
              Explore Stories
            </Link>
          </div>
        </div>
        
        <div className="text-[#666666]">
          <p>
            In the meantime, how about reading one of our enchanting stories?
          </p>
        </div>
      </div>
    </div>
  )
}
