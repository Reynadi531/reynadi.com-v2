import type { Metadata } from 'next';
import Script from 'next/script';

import './globals.css';

import { cn } from '@/utils/cn';

import { Inter_Font } from './fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Reynadi',
    default: 'Reynadi',
  },
  keywords: [
    'Reynadi',
    'Software Engineer',
    'DevOps',
    'Site Reliability Engineer',
    'Reynadi Andreas Priesley',
    'Reynadi AP',
    'Reynadi Andreas P',
  ],
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
      <html
        lang='en'
        className={cn(
          Inter_Font.variable,
          'bg-black text-white',
          'font-sans max-w-screen-md mx-auto p-4 w-full px-6'
        )}
      >
        <head>
          <Script
            src='https://app.rybbit.io/api/script.js'
            data-site-id='977'
            defer
          />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
