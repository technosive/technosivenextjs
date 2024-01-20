"use client";

import {
  getLocalStorage,
  getLocalStoragePopUp,
  setLocalStorage,
} from "@/lib/storageHelper";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(
    getLocalStorage("cookie_consent", false),
  );
  const [popUp, setPopUp] = useState(
    getLocalStoragePopUp("cookie_consent", true),
  );

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";
    if (typeof window.gtag !== "undefined") {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    }
    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0
                        mx-auto mb-4 max-w-max md:max-w-screen-sm 
                      ${
                        !popUp ? "hidden" : "flex"
                      } z-[99] flex-col items-center justify-between gap-4 rounded-lg bg-gray-700 px-3 py-3 text-white
                          shadow sm:flex-row md:px-4`}
    >
      <div className="text-center text-sm sm:text-base">
        <span>
          <p>
            We use{" "}
            <Link
              href="/privacy-policy"
              className=" font-bold text-primary hover:underline"
            >
              cookies
            </Link>{" "}
            on our site.
          </p>
        </span>
      </div>

      <div className="flex gap-2">
        <button
          className="rounded-md px-5 py-2 text-sm text-white hover:underline "
          onClick={() => setPopUp(false)}
        >
          Decline
        </button>

        <button
          className="rounded-lg bg-gray-900 px-5 py-2 text-sm text-white"
          onClick={() => {
            setCookieConsent(true);
            setPopUp(false);
          }}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
