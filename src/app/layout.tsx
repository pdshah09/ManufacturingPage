import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Estate CRM | Qvoo – Manage Leads & Close Deals Faster",
  description:
    "Real Estate CRM Qvoo is designed for agents, brokers, and developers to simplify lead management, property listings, and client communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
