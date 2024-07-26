import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

import './globals.css';

import { cn } from '@/utils/cn';

import { Inter_Font } from './fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Reynadi',
    default: 'Reynadi',
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
    <>
      <Analytics />
      <html
        lang='en'
        className={cn(
          Inter_Font.variable,
          'bg-black text-white',
          'font-sans max-w-screen-md mx-auto p-4 w-full px-6'
        )}
      >
        <body>{children}</body>
      </html>
    </>
  );
}
