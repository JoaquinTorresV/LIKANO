import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Likano AI - Agencia de IA para Inmobiliarias",
  description:
    "Sistemas de automatización, chatbots, asistentes de llamada, CRM automatizado y más para el sector inmobiliario.",
  icons: {
    icon: "/logo.jpg",
  },
  openGraph: {
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Likano AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
