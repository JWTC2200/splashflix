import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Splashflix",
  description: "Netflix like site using Unspash images",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-w-screen min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
