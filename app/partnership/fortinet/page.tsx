import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FortinetLogo from "../../../public/images/brands/Fortinet/fortinet-logo.svg";

const fortinetMetadata = {
  url: "https://technosive.co.uk/partners/fortinet",
  title: "Partners with Fortinet | Technosive",
  description:
    "Technosive partners with Fortinet® for tailored cybersecurity solutions, bolstering digital security with expert support and seamless integration.",
  keywords: [
    "Technosive",
    "Fortinet",
    "Partnership",
    "Cybersecurity solutions",
    "Next-Generation Firewalls (NGFWs)",
    "Intrusion Prevention Systems (IPS)",
    "Secure SD-WAN",
    "Endpoint Security",
    "Web Application Security",
    "Security assessments",
    "Solution design",
    "Implementation",
    "Integration",
    "Security Expertise",
    "Tailored Solutions",
    "Seamless Integration",
    "Ongoing Support",
    "Digital Assets",
    "Security posture",
  ],
  imgUrl: "https://technosive.co.uk/images/brands/fortinet/opengraph.webp",
  imgAltText: "Technosive",
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: fortinetMetadata.title,
    description: fortinetMetadata.description,
    alternates: {
      canonical: fortinetMetadata.url,
    },
    keywords: fortinetMetadata.keywords,
    openGraph: {
      title: fortinetMetadata.title,
      description: fortinetMetadata.description,
      images: [
        {
          url: fortinetMetadata.imgUrl,
          width: 1200,
          height: 630,
          alt: fortinetMetadata.imgAltText,
        },
      ],
    },
  };
}

const Fortinet = () => {
  const FORTINET_SOLUTIONS_EMCOMPASS = [
    "Next-Generation Firewalls (NGFWs)",

    "Intrusion Prevention Systems (IPS)",

    "Secure SD-WAN",

    "Endpoint Security",

    "Web Application Security",
  ];

  const FORTINET_SPECIALISTS = [
    "Security assessments and gap analysis",

    "Fortinet solution design and implementation",

    "Integration with existing security infrastructure",

    "Ongoing security management and support",
  ];

  const BENEFITS = [
    "Security Expertise: Our team holds industry-recognized Fortinet certifications and possesses in-depth knowledge of the Fortinet Security Fabric.",

    "Tailored Solutions: We design and implement Fortinet solutions that align perfectly with your security requirements.",

    "Seamless Integration: Our experts ensure smooth integration of Fortinet solutions with your existing security landscape.",

    "Ongoing Support: We provide continuous support to optimize your Fortinet security posture and address evolving threats.",
  ];

  return (
    <>
      <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <div>
                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Technosive Strengthens Security Posture with Fortinet
                    Partnership!
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive is proud to announce a strategic partnership with
                    Fortinet®, a global leader in broad, integrated, and
                    automated cybersecurity solutions. This collaboration
                    empowers us to deliver best-in-class Fortinet security
                    solutions to our clients, safeguarding their networks,
                    applications, and data across the entire digital
                    infrastructure.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Fortinet: The Security Fabric Leader
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <Link
                      href="https://www.fortinet.com/uk/products"
                      target="_blank"
                      className="text-primary underline"
                    >
                      Fortinet
                    </Link>{" "}
                    provides a unified Security Fabric platform that seamlessly
                    integrates industry-leading security technologies,
                    delivering comprehensive protection against evolving cyber
                    threats. Fortinet solutions encompass:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {FORTINET_SOLUTIONS_EMCOMPASS.map((item, index) => {
                      return (
                        <li
                          className="mb-2 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                          key={index}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Technosive x Fortinet: A Powerful Security Alliance
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Through this partnership, Technosive offers a comprehensive
                    suite of Fortinet security solutions designed to address
                    your specific needs. Our team of Fortinet security
                    specialists can assist you with:
                  </p>

                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {FORTINET_SPECIALISTS.map((item, index) => {
                      return (
                        <li
                          className="mb-2 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                          key={index}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Benefits of Partnering with Technosive for Fortinet
                    Solutions
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    By choosing Technosive as your Fortinet partner, you gain
                    access to:
                  </p>

                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {BENEFITS.map((item, index) => {
                      return (
                        <li
                          className="mb-2 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                          key={index}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Protect Your Digital Assets with Confidence
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Contact{" "}
                    <Link
                      href="https://outlook.office365.com/book/AbdulSalamsCalendar@technosive.co.uk/"
                      target="_blank"
                      className="text-primary underline"
                    >
                      Technosive
                    </Link>{" "}
                    today for a free consultation to explore how Fortinet
                    Security Fabric solutions, delivered by our expert team, can
                    fortify your organization's security posture.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Together, let's build a more secure digital world!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fortinet;
