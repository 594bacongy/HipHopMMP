import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cultural Hip Hop | EDUC 218 Final Multimodal Project',
  description: 'An evolving digital research project exploring Hip Hop as a cultural movement of identity, expression, belonging, and social change. UMass Amherst.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0a0c] text-[#f5f5f5] antialiased">
        {children}
      </body>
    </html>
  );
}
