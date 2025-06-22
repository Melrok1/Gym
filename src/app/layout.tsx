import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'GymBeam App',
  description: 'GymBeam Interview Case Study'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body className="bg-white text-black">
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
