import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solvist.io"),
  applicationName: "Solvist",
  title: {
    default: "Solvist — Ningún lead sin respuesta. Ningún cliente sin seguimiento.",
    template: "%s | Solvist",
  },
  description:
    "Solvist responde, califica y agenda cada lead en menos de 2 minutos, 24/7. Tu agente comercial de IA para instaladores solares en Puerto Rico.",
  keywords: [
    "Solvist",
    "agente IA",
    "WhatsApp Business",
    "instaladores solares",
    "Puerto Rico",
    "automatización comercial",
    "lead response",
    "CRM solar",
    "Marta IA",
    "nokvu",
  ],
  authors: [{ name: "nokvu", url: "https://nokvu.com" }],
  creator: "nokvu",
  publisher: "nokvu",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Solvist — Ningún lead sin respuesta. Ningún cliente sin seguimiento.",
    description:
      "Tu agente comercial de IA responde, califica y agenda cada lead en <2 minutos, 24/7. Para instaladores solares en Puerto Rico.",
    url: "/",
    siteName: "Solvist",
    locale: "es_PR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Solvist — IA comercial para instaladores solares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvist — Ningún lead sin respuesta",
    description:
      "Agente comercial de IA que responde, califica y agenda en <2 min. 24/7.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {children}
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Solvist",
              url: "https://solvist.io",
              logo: "https://solvist.io/logo.svg",
              description:
                "Agente comercial de IA para instaladores solares. Responde, califica y agenda cada lead en menos de 2 minutos, 24/7.",
              parentOrganization: {
                "@type": "Organization",
                name: "Nokvu",
                url: "https://nokvu.com",
              },
              areaServed: {
                "@type": "Country",
                name: "Puerto Rico",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact.solvist@gmail.com",
                contactType: "sales",
                availableLanguage: ["es", "en"],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Solvist",
              url: "https://solvist.io",
              inLanguage: "es",
              publisher: {
                "@type": "Organization",
                name: "Solvist",
              },
            },
          ]}
        />
      </body>
    </html>
  );
}
