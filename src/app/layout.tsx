import type { Metadata, Viewport } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nobinobi.vercel.app"),
  title: "のびのび - 毎日のストレッチを習慣に",
  description:
    "ストレッチが続かない？おまかせ提案で考えずに始められる！60種類のストレッチ×7部位。マイメニューも作れるストレッチ習慣化アプリ。",
  keywords: [
    "ストレッチ",
    "習慣化",
    "柔軟体操",
    "肩こり",
    "腰痛",
    "デスクワーク",
    "健康",
    "ルーティン",
    "タイマー",
    "毎日",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "のびのび",
  },
  openGraph: {
    title: "のびのび - 毎日のストレッチを習慣に",
    description:
      "おまかせ提案で考えずに始められる！60種類のストレッチ×7部位。連続記録で習慣化。",
    url: "https://nobinobi.vercel.app",
    siteName: "のびのび",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "のびのび - 毎日のストレッチを習慣に",
    description:
      "おまかせ提案で考えずに始められる！60種類のストレッチ×7部位。",
  },
  alternates: {
    canonical: "https://nobinobi.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className={`${zenMaru.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "のびのび",
              description:
                "毎日のストレッチを習慣にするアプリ。おまかせ提案で考えずに始められる。60種類のストレッチ×7部位。",
              url: "https://nobinobi.vercel.app",
              applicationCategory: "HealthApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "JPY",
              },
              inLanguage: "ja",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
