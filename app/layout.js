import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Linkly - Your trusted URL shortener",
  description: "Linkly helps you shorten and manage your URLs with ease. Create custom short links, track analytics, and share your links effortlessly. Try Linkly today and experience the power of efficient URL management.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-purple-50`}
    >

      <body className="min-h-full flex flex-col">
      <Navbar />
      {children}</body>
    </html>
  );
}
