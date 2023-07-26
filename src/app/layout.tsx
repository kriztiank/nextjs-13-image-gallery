import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container, SSRProvider } from '@/components/bootstrap'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS 13 Image Gallery',
  description: 'NextJS 13 basic app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <div>This div is shared across layouts</div> */}
        <SSRProvider>
          <main>
            <Container className='py-4'>{children}</Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  )
}
