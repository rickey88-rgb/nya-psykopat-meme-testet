import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.officialpsychopathtest.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Psykopattestet',
  description: 'Mörkt, brutalt och viralt meme-test med demonisk estetik.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-02EZD0WF80" />
    </html>
  );
}