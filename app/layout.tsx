import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Second Tour — Vos clients oublient leur prochaine révision",
  description:
    "Rappelez-les à votre place. Un rappel automatique pour les garages, avec une offre de retour à usage unique.",
  openGraph: {
    title: "Second Tour — Vos clients oublient leur prochaine révision",
    description: "Rappelez-les à votre place.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={bricolage.variable}>
      <body>{children}</body>
    </html>
  );
}
