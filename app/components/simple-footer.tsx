export default function SimpleFooter() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} STELOOS - Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}