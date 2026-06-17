import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odoo Manufacturing | Simplify Your Production",
  description:
    "Run your entire production floor from one integrated platform. Work orders, quality checks, MES, and real-time capacity planning — all in Odoo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
