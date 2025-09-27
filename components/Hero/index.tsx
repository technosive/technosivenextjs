"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [textAnimation] = useTypewriter({
    words: ["Cybersecurity", "Digital Protection", "Threat Defense", "Security Compliance"],
    loop: true,
    typeSpeed: 90,
    delaySpeed: 600,
  });

  return (
    <>
      <section
        id="home"
        className="relative z-10 flex h-[100vh] items-center justify-center overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[900px]"
                data-wow-delay=".2s"
              >
                <div className="mb-5 flex flex-col text-center text-3xl font-bold leading-tight  text-black  dark:text-white sm:gap-x-4 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:ml-16 lg:flex-row">
                  <h1 className="">Your Partner for</h1>
                  <h1 className="text-primary">
                    {textAnimation}
                    <Cursor cursorStyle="|" />
                  </h1>
                </div>
                <p className="mb-12 text-center text-sm !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  We are dedicated to providing comprehensive cybersecurity solutions that protect your digital assets and safeguard your business. With expertise in cutting-edge security technologies, we empower organizations to defend against evolving threats and ensure robust protection across their entire digital infrastructure.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://calendly.com/abdul-salamguk/30min"
                    target="_blank"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Consult for Free 💁
                  </Link>
                  <Link
                    href="https://wa.me/447448969009"
                    target="_blank"
                    className="flex flex-row items-center justify-center  rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Get in Touch{" "}
                    <FaWhatsapp className="ml-3 text-xl text-[#25d267]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Security shield pattern */}
            <path
              d="M225 50C225 50 150 80 150 150V250C150 320 225 400 225 400C225 400 300 320 300 250V150C300 80 225 50 225 50Z"
              fill="url(#paint0_linear_25:217)"
              opacity="0.3"
            />
            {/* Network nodes pattern */}
            <circle cx="100" cy="150" r="8" fill="url(#paint1_radial_25:217)" />
            <circle cx="200" cy="100" r="12" fill="url(#paint2_radial_25:217)" />
            <circle cx="350" cy="200" r="10" fill="url(#paint1_radial_25:217)" />
            <circle cx="300" cy="350" r="15" fill="url(#paint2_radial_25:217)" />
            <circle cx="150" cy="300" r="9" fill="url(#paint1_radial_25:217)" />
            
            {/* Connection lines */}
            <line x1="100" y1="150" x2="200" y2="100" stroke="url(#paint3_linear_25:217)" strokeWidth="2" opacity="0.5"/>
            <line x1="200" y1="100" x2="350" y2="200" stroke="url(#paint3_linear_25:217)" strokeWidth="2" opacity="0.5"/>
            <line x1="350" y1="200" x2="300" y2="350" stroke="url(#paint3_linear_25:217)" strokeWidth="2" opacity="0.5"/>
            <line x1="300" y1="350" x2="150" y2="300" stroke="url(#paint3_linear_25:217)" strokeWidth="2" opacity="0.5"/>
            <line x1="150" y1="300" x2="100" y2="150" stroke="url(#paint3_linear_25:217)" strokeWidth="2" opacity="0.5"/>
            
            {/* Digital protection waves */}
            <path
              d="M50 400Q100 350 150 400T250 400Q300 350 350 400T450 400"
              stroke="url(#paint4_linear_25:217)"
              strokeWidth="3"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M30 450Q80 400 130 450T230 450Q280 400 330 450T430 450"
              stroke="url(#paint4_linear_25:217)"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="225"
                y1="50"
                x2="225"
                y2="400"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(100 150) rotate(90) scale(8)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.8" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(200 100) rotate(90) scale(12)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.6" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Firewall protection lines */}
            <path
              d="M0 100L50 80L100 120L150 60L200 100L250 40L300 90L350 50L364 80"
              stroke="url(#paint0_linear_25:218)"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M0 130L50 110L100 150L150 90L200 130L250 70L300 120L350 80L364 110"
              stroke="url(#paint1_linear_25:218)"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M0 160L50 140L100 180L150 120L200 160L250 100L300 150L350 110L364 140"
              stroke="url(#paint2_linear_25:218)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.3"
            />
            
            {/* Security nodes */}
            <circle cx="50" cy="80" r="6" fill="url(#paint3_radial_25:218)" />
            <circle cx="100" cy="120" r="8" fill="url(#paint4_radial_25:218)" />
            <circle cx="150" cy="60" r="5" fill="url(#paint3_radial_25:218)" />
            <circle cx="200" cy="100" r="7" fill="url(#paint4_radial_25:218)" />
            <circle cx="250" cy="40" r="6" fill="url(#paint3_radial_25:218)" />
            <circle cx="300" cy="90" r="8" fill="url(#paint4_radial_25:218)" />
            <circle cx="350" cy="50" r="5" fill="url(#paint3_radial_25:218)" />
            
            {/* Digital shield outline */}
            <path
              d="M182 20C182 20 150 35 150 70V120C150 155 182 190 182 190C182 190 214 155 214 120V70C214 35 182 20 182 20Z"
              stroke="url(#paint5_linear_25:218)"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />
            
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="0"
                y1="100"
                x2="364"
                y2="100"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.8" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="0"
                y1="130"
                x2="364"
                y2="130"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.6" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="0"
                y1="160"
                x2="364"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.4" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient
                id="paint3_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(50 80) rotate(90) scale(6)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.7" />
              </radialGradient>
              <radialGradient
                id="paint4_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(100 120) rotate(90) scale(8)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.5" />
              </radialGradient>
              <linearGradient
                id="paint5_linear_25:218"
                x1="182"
                y1="20"
                x2="182"
                y2="190"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
