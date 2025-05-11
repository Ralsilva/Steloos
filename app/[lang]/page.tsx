import { Metadata } from 'next'

type Props = {
  params: { lang: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.lang === 'en' ? 'STELOOS - Light Stories for Children' : 'STELOOS - Estórias de Luz para Crianças',
  }
}

export default async function Home({ params }: Props) {
  const isEnglish = params.lang === 'en';

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">
          {isEnglish ? 'Welcome to STELOOS' : 'Bem-vindo ao STELOOS'}
        </h1>
        <p className="text-lg mb-6">
          {isEnglish
            ? 'Stories about peace, love, wisdom and spiritual values for children.'
            : 'Estórias sobre paz, amor, sabedoria e valores espirituais para crianças.'}
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href={`/${params.lang}/${isEnglish ? 'stories' : 'estorias'}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-center"
          >
            {isEnglish ? 'Explore Stories' : 'Explorar Estórias'}
          </a>
        </div>
      </section>
    </div>
  )
}




