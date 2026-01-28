import "./styles/globals.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Delta',
  description: 'Transforming grassroots challenges into groundbreaking solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
