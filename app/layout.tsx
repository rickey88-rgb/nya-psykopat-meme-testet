import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.officialpsychopathtest.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Official Psychopath Test',
  description: 'Take the Official Psychopath Test. 30 questions. 3 minutes. Instant result.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-02EZD0WF80" />
    </html>
  );
}