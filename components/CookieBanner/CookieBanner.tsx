'use client';

import { getLocalStorage, getLocalStoragePopUp, setLocalStorage } from '@/lib/storageHelper';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CookieBanner() {

    const [cookieConsent, setCookieConsent] = useState(getLocalStorage("cookie_consent", false));
    const [popUp, setPopUp] = useState(getLocalStoragePopUp("cookie_consent", true));


    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });
        setLocalStorage("cookie_consent", cookieConsent)

    }, [cookieConsent]);

    return (
        <div className={`mb-4 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                      ${!popUp ? "hidden" : "flex"} px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-gray-700 text-white
                          rounded-lg shadow z-[99]`}>

            <div className='text-center text-sm sm:text-base'>
                <Link href="/privacy-policy"><p>We use <span className=' font-bold text-primary'>cookies</span> on our site.</p></Link>
            </div>


            <div className='flex gap-2'>

                <button className='text-sm px-5 py-2 text-white rounded-md ' onClick={() => setPopUp(false)}>Decline</button>

                <button className='text-sm bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => { setCookieConsent(true); setPopUp(false) }}>Allow Cookies</button>
            </div>
        </div>
    )
}