import type { Metadata } from "next";
import { Inter, Instrument_Serif, Geist_Mono } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tripp Drummond — Building on YouTube with AI",
  description:
    "A corporate professional documenting the journey from 0 to 100k on YouTube with AI. Learnings, experiments, and wins — shared in public.",
  openGraph: {
    title: "Tripp Drummond — Building on YouTube with AI",
    description:
      "0 → 100k, in public. AI workflows, video craft, and the road to $10k/mo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
