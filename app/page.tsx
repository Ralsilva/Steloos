import { redirect } from 'next/navigation'

export default function Home() {
  // Redireciona para a versão em português
  redirect('/pt-BR')
}

