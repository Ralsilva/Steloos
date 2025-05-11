'use client'

export default function GlobalError({
  error,
  reset,
}) {
  return (
    <html>
      <body>
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Algo deu errado!</h2>
          <p className="mb-4">Ocorreu um erro ao carregar o aplicativo.</p>
          <button
            onClick={() => reset()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  )
}