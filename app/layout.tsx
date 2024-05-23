"use client";

import CookieBanner from "@/components/CookieBanner/CookieBanner";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "node_modules/react-modal-video/css/modal-video.css";
import { useEffect, useState } from "react";
import "../styles/index.css";
import Loading from "./loading";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showChildren, setShowChildren] = useState(false);
  const [cookieBanner, setCookieBanner] = useState(false);

  useEffect(() => {
    const fakeLoadingTimeout = setTimeout(() => {
      setShowChildren(true);
    }, 750);
    const cookieTimeout = setTimeout(() => {
      setCookieBanner(true);
    }, 3200);
    return () => {
      clearTimeout(fakeLoadingTimeout);
      clearTimeout(cookieTimeout);
    };
  }, [children]);

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="7pJ9AOhyY4Ln67j1g5_kYF2tyC8yxjtTwR76LFWWj58"
        />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-9M37LG3Q45" />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {showChildren ? (
            <>
              <NextTopLoader />
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </>
          ) : (
            <Loading />
          )}
          {cookieBanner ? <CookieBanner /> : null}
        </Providers>
      </body>
    </html>
  );
}
