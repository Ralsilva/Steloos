import type { Metadata } from 'next'
import './globals.css'
import './styles.css'
import './direct-styles.css'

export const metadata: Metadata = {
  title: 'STELOOS - Estórias de Luz para Crianças',
  description: 'Estórias infantis sobre paz, amor, sabedoria e valores espirituais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Comic+Neue:wght@300;400;700&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                  document.body.classList.add('dark-mode');
                  document.body.style.backgroundColor = 'hsl(220, 40%, 13%)';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.body.classList.remove('dark-mode');
                  document.body.style.backgroundColor = '';
                }
              } catch (e) {
                console.error('Error applying theme:', e);
              }
            })();
          `
        }} />
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  )
}


