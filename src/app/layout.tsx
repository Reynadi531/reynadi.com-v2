import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Reynadi',
    template: '%s | Reynadi',
  },
  description: 'Software, DevOps, and Site Reliability Engineer',
  metadataBase: new URL('https://reynadi.com'),
  alternates: {
    canonical: '/',
    languages: {
      id: '/',
    },
  },
  openGraph: {
    url: 'https://reynadi.com',
    title: 'Reynadi',
    description: 'Software, DevOps, and Site Reliability Engineer',
    images: [
      {
        url: 'https://cdn.statically.io/og/theme=dark/Reynadi.jpg',
        alt: 'Reynadi',
      },
    ],
    siteName: 'Reynadi',
  },
  twitter: {
    creator: '@reynadi17',
    description: 'Software, DevOps, and Site Reliability Engineer',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
