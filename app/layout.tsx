import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '$RATECUTS - When Powell Cuts, We Moon',
  description: 'The ultimate meme token for rate cut enthusiasts. Join the arcade revolution!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="inter">{children}</body>
    </html>
  );
}
