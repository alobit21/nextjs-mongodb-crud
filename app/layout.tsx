import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >

<h1 className="flex justify-center text-sky-700 text-4xl font-bold mt-4 ">NEXTJS-MONGODB CRUD OPERATIONS</h1>

        <div className="max-w-3xl mx-auto p-4 ">
        <Navbar/>
        <div className="mt-8  ">{children}</div>
        </div>
      </body>
    </html>
  );
}
