import { body, heading } from '@/lib/fonts';
import '@/styles/globals.scss';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
