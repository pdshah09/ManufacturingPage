import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],     
  weight: '700',          
  display: 'swap',
  variable: '--font-caveat'
});

export const metadata: Metadata = {
  title: "Qvoo Manufacturing – The future of MRP",
  description: "MRP + MES + PLM + Quality + Shop Floor + Maintenance. All you need on one single platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={caveat.variable}>
      <body>
        <div id="wrapwrap">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
