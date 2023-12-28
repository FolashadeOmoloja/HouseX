import type { Metadata } from 'next'
import { Inter,Patua_One, Sniglet, PT_Serif} from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const patua_one = Patua_One({
  subsets: ['latin'],
  weight: '400',
  style: ['normal']
})
const sniglet = Sniglet({
  subsets: ['latin'],
  weight: ['400', '800']
})


export const metadata: Metadata = {
  title: 'HouseX',
  description: 'A real estate marketplace for landlords and renters',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={patua_one.className}>
         <main >
             {children}
         </main>
      </body>
    </html>
  )
}
