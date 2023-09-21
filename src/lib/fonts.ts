import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const heading = localFont({
  src: './fonts/CalSans-SemiBold.woff2',
  weight: '500',
  style: 'semibold',
  display: 'swap',
  variable: '--font-heading',
});

export const body = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});
