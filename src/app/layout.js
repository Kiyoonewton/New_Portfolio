import '../scss/global.scss';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  metadataBase: new URL('https://kiyoo.live'), // Replace with your actual domain
  title: 'Kiyoonewton - Portfolio',
  description: 'Developed by Isaac Kolawole',
  openGraph: {
    title: 'Kiyoonewton - Portfolio',
    description: 'Developed by Isaac Kolawole',
    images: [
      {
        url: 'https://res.cloudinary.com/dhndm0bzx/image/upload/v1748412497/logo_il4t3i.webp', // relative path works now because metadataBase is defined
        width: 1200,
        height: 630,
        alt: 'Kiyoonewton Portfolio OG Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiyoonewton - Portfolio',
    description: 'Developed by Isaac Kolawole',
    images: ['https://res.cloudinary.com/dhndm0bzx/image/upload/v1748412497/logo_il4t3i.webp'],
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,
	user-scalable=no" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
