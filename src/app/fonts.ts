import { Inter } from 'next/font/google';

export const Inter_Font = Inter({
  preload: true,
  adjustFontFallback: true,
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
  style: ['normal'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});
