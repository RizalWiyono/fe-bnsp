import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harley Davidson",
  description: "Harley Davidson",
   icons: {
    icon: 'https://www.pngall.com/wp-content/uploads/2016/03/Harley-Davidson-Logo-PNG.png',
    shortcut: 'https://www.pngall.com/wp-content/uploads/2016/03/Harley-Davidson-Logo-PNG.png',
    apple: 'https://www.pngall.com/wp-content/uploads/2016/03/Harley-Davidson-Logo-PNG.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://www.pngall.com/wp-content/uploads/2016/03/Harley-Davidson-Logo-PNG.png',
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
