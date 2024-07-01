import { Nunito } from 'next/font/google';

export const IBM_PLEX_SANS = Nunito({
  preload: true,
  adjustFontFallback: true,
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
});
