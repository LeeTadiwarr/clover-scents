import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clover Scents",
  description:
    "Clover Scents - Where fragrance meets elegance. Discover handcrafted perfumes for everyday sophistication and memorable evenings.",
  metadataBase: new URL("https://clover-scents.vercel.app"),
  openGraph: {
    title: "Clover Scents",
    description:
      "Where fragrance meets elegance. Discover rich florals, warm amber blends, and fresh signature scents.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clover Scents",
    description:
      "Where fragrance meets elegance. Handcrafted perfumes designed for presence and signature style.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
