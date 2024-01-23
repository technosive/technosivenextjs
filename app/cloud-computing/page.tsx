import { Metadata } from "next";
import Cloud_Computing from ".";

const cloudMetadata = {
  url: "https://technosive.co.uk/services/cloud-computing",
  title: "Cloud Computing | Technosive",
  description:
    "Elevate your business with cloud computing. Harness scalable, secure, and flexible solutions for streamlined operations and innovation.",
  keywords: [
    "Technosive",
    "Cloud computing",
    "Cloud services",
    "Cloud infrastructure",
    "Public cloud",
    "Private cloud",
    "Hybrid cloud",
    "Cloud deployment",
    "Cloud solutions",
    "Cloud migration",
    "Scalable computing",
    "Cloud security",
    "Data storage in the cloud",
    "Cloud technology",
    "Cloud providers",
    "Virtualization",
    "IaaS",
    "PaaS",
    "SaaS",
    "Cloud architecture",
    "Cost-effective cloud",
  ],
  imgUrl: "https://technosive.co.uk/images/logo/Technosive.webp",
  imgAltText: "Technosive",
};

const social = {
  title: cloudMetadata.title,
  description: cloudMetadata.description,
  images: [
    {
      url: cloudMetadata.imgUrl,
      alt: cloudMetadata.imgAltText,
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(cloudMetadata.url),
  title: cloudMetadata.title,
  description: cloudMetadata.description,
  keywords: cloudMetadata.keywords,
  alternates: {
    canonical: cloudMetadata.url,
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

const CloudComputing = () => {
  return (
    <>
      <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
        <div className="container">
          <Cloud_Computing />
        </div>
      </section>
    </>
  );
};

export default CloudComputing;
