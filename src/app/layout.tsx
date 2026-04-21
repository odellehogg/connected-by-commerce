import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Connected × Commerce — Commerce-first retail media for growing UK brands.',
  description: 'A specialist retail media agency for growing UK consumer brands. Amazon, Tesco, Nectar360, Boots Media Group — done properly.',
  openGraph: {
    title: 'Connected × Commerce',
    description: 'A specialist retail media agency for growing UK consumer brands.',
    url: 'https://connectedbycommerce.co.uk',
    siteName: 'Connected × Commerce',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
