import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.officialpsychopathtest.com'),
  title: 'Psykopattestet',
  description: 'Mörkt, brutalt och viralt meme-test med demonisk estetik.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
