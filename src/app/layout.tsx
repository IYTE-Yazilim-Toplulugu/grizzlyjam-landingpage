import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grizzly Jam",
  description: "İzmir'in en büyük Game Jam'i Çok Yakında...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
