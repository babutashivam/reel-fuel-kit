import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://reelfuelkit.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Reel Fuel Kit — Hooks, Prompts & Content Shortcuts for Creators",
  description:
    "Get early access to Reel Fuel Kit, a digital creator kit with hooks, ChatGPT prompts, captions, video assets, and content ideas for reels and shorts.",
  keywords: [
    "Reel Fuel Kit",
    "content hooks",
    "ChatGPT prompts",
    "reels",
    "shorts",
    "creator kit",
    "captions",
    "content ideas",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Reel Fuel Kit",
    title: "Reel Fuel Kit — Hooks, Prompts & Content Shortcuts for Creators",
    description:
      "Get early access to Reel Fuel Kit, a digital creator kit with hooks, ChatGPT prompts, captions, video assets, and content ideas for reels and shorts.",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Reel Fuel Kit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reel Fuel Kit — Hooks, Prompts & Content Shortcuts for Creators",
    description:
      "Get early access to Reel Fuel Kit, a digital creator kit with hooks, ChatGPT prompts, captions, video assets, and content ideas for reels and shorts.",
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
