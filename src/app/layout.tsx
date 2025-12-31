import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Graphext - Explore Your Text Data Like Never Before",
  description:
    "Graphext helps teams explore customer support tickets, social media conversations, and survey responses — no coding required. Discover patterns, trends, and insights in minutes.",
  keywords: [
    "text analytics",
    "text data exploration",
    "customer feedback analysis",
    "survey analysis tool",
    "social media analytics",
    "NLP platform",
    "topic modeling",
    "sentiment analysis",
  ],
  openGraph: {
    title: "Graphext - Explore Your Text Data Like Never Before",
    description:
      "Discover patterns, trends, and insights in your text data in minutes. No coding required.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${garamond.variable}`}>
      <body className={`${GeistSans.className} bg-white text-gray-900 antialiased`}>{children}</body>
    </html>
  );
}
