import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.baseline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "informatique Lomé",
    "réseau Togo",
    "caméra surveillance Lomé",
    "dépannage PC Togo",
    "vidéosurveillance Lomé",
    "installation WiFi Togo",
    "In-Tel Services",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    title: `${site.name} — ${site.baseline}`,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.baseline}`,
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  slogan: site.slogan,
  description: site.description,
  image: `${site.url}/logo.png`,
  url: site.url,
  email: site.email,
  telephone: site.phones[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 Av. du RPT, Face le Grand Collège du Plateau",
    addressLocality: "Lomé",
    addressCountry: "TG",
  },
  areaServed: "Lomé, Togo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
