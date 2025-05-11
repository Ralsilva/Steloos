/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração básica para o Vercel
  images: {
    domains: ['localhost', 'vercel.app'],
  },
  // Desabilitar temporariamente a verificação de tipos TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
  // Desabilitar temporariamente a verificação de ESLint
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
