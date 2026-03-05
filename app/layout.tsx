import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/landing/Navbar";
import { ToastContainer } from "react-toastify";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnipHub - Share and Discover Code Snippets",
  description:
    "SnipHub lets you create, organize, and share code snippets — privately for yourself or publicly to help the community. Stop losing code and start saving your best snippets.",
  openGraph: {
    type: "website",
    url: "https://sniphub-three.vercel.app/",
    title: "SnipHub - Share and Discover Code Snippets",
    description:
      "Save, tag, and reuse your best code snippets. Built for developers who hate digging through old repos and notes.",
    images: [
      {
        url: "https://sniphub-three.vercel.app/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnipHub - Share and Discover Code Snippets",
    description:
      "Save, tag, and reuse your best code snippets. Built for developers who hate digging through old repos and notes.",
    images: ["https://sniphub-three.vercel.app/sniphub.png"],
  },
  verification: {
    google: "FMTylXgcgY0f-SmSmgXSEqfazdQMmvXQAqJgSA66H5c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-71H399LMYJ"></Script>
      <Script>
        { 
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-71H399LMYJ');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full max-w-[100vw] min-h-screen bg-gradient-to-b from-[#020202] via-[#090b0a] to-[#010101] text-white antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          hideProgressBar
          closeOnClick
          pauseOnHover
          theme="dark"
          toastStyle={{
            background: "#0d1117",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#e5e7eb",
          }}
        />
      </body>
    </html>
  );
}
