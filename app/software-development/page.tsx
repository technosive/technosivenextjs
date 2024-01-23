import { Metadata } from "next";
import React from "react";
import Software_Dev from ".";

const softwareMetadata = {
  url: "https://technosive.co.uk/services/software-development",
  title: "Software Development | Technosive",
  description:
    "Elevate possibilities through Software Development. Tailored solutions, agile practices, and innovation to drive your digital vision forward.",
  keywords: [
    "Technosive",
    "Software Development",
    "Custom software development",
    "Web application development",
    "Mobile app development",
    "Agile software development",
    "Full-stack development",
    "Front-end development",
    "SDLC",
    "Software Development Life Cycle",
    "Back-end development",
    "Software engineering",
    "Programming languages",
    "Secure by Design",
    "Quick Delivery of Software",
    "Rapid Deployment",
    "SWIFT Development",
    "Android Studio",
    "Flutter",
    "Code optimization",
    "Software architecture",
    "DevOps",
    "Continuous integration",
    "Software testing",
    "Quality assurance",
    "User interface (UI) design",
    "User experience (UX) design",
    "Responsive web design",
    "Cross-platform development",
    "Cloud-based software",
    "API development",
    "Database management",
    "Open-source development",
    "Scalable software solutions",
    "Software maintenance",
    "Application lifecycle management",
  ],
  imgUrl: "https://technosive.co.uk/images/logo/Technosive.webp",
  imgAltText: "Technosive",
};

const social = {
  title: softwareMetadata.title,
  description: softwareMetadata.description,
  images: [
    {
      url: softwareMetadata.imgUrl,
      alt: softwareMetadata.imgAltText,
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(softwareMetadata.url),
  title: softwareMetadata.title,
  description: softwareMetadata.description,
  keywords: softwareMetadata.keywords,
  alternates: {
    canonical: softwareMetadata.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: social,
  twitter: social,
};

const SoftwareDev = () => {
  return (
    <>
      <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
        <div className="container">
          <Software_Dev />
        </div>
      </section>
    </>
  );
};

export default SoftwareDev;
