import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://reelfuelkit.com";

const title = "Reel Fuel Kit — Hooks, Prompts & 5000+ Reels Bundle";
const description =
  "Get Reel Fuel Kit with viral-style hooks, ChatGPT prompts, captions, content ideas, and 5000+ ready-to-edit video assets for Instagram Reels and YouTube Shorts.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Reel Fuel Kit",
    "content hooks",
    "ChatGPT prompts",
    "reels bundle",
    "reels",
    "shorts",
    "creator kit",
    "captions",
    "video assets",
    "content ideas",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Reel Fuel Kit",
    title,
    description,
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Reel Fuel Kit" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
