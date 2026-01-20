import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/landing/Navbar";
import { ToastContainer } from "react-toastify";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnipHUB - Share and Discover Code Snippets",
  description: "A platform to share, explore, and manage code snippets with ease.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full max-w-[100vw] min-h-screen bg-gradient-to-b from-[#020202] via-[#090b0a] to-[#010101] text-white antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Analytics />
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
