import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono, Newsreader } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SiteMotion from "@/components/layout/SiteMotion";
import { site } from "@/content/site";
import { themeScript } from "@/lib/theme";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}, ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name}, ${site.title}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c14" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${interTight.variable} ${jetbrainsMono.variable} ${newsreader.variable}`}
    >
      <head>
        {/* Sets the saved theme before first paint, so a light-theme visitor never sees a dark flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#content"
          className="pill sr-only bg-bg focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-20 focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteMotion>
          <Header />
          <main id="content">{children}</main>
          <Footer />
        </SiteMotion>
      </body>
    </html>
  );
}
