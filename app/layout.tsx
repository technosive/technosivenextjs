"use client";

import CookieBanner from "@/components/CookieBanner/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
import ScrollToTop from "@/components/ScrollToTop";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";

const Header = dynamic(() => import('@/components/Header'))
const Footer = dynamic(() => import('@/components/Footer'))

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="7pJ9AOhyY4Ln67j1g5_kYF2tyC8yxjtTwR76LFWWj58" />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-9M37LG3Q45" />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
        <CookieBanner />
      </body>
    </html>
  );
}

