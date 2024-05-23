import { Metadata } from "next";
import AzureDevops from ".";

const SMetadata = {
  url: "https://technosive.co.uk/services/ai-machine-learning",
  title: "Protect Your Business with Technosive's Azure Security Solutions",
  description:
    "Safeguard your digital infrastructure with Technosive’s comprehensive Azure Security services. Our expert team provides robust identity management, real-time threat detection, compliance solutions, and data protection to shield your business from cyber threats. Trust us for advanced security tools and holistic protection strategies.",
  keywords: [
    "Technosive",
    "Azure Security",
    "cyber threats",
    "identity management",
    "access control",
    "threat detection",
    "threat response",
    "proactive monitoring",
    "compliance",
    "governance",
    "data protection",
    "encryption",
    "backup solutions",
    "disaster recovery",
    "advanced security tools",
    "security experts",
    "risk assessment",
    "security implementation",
    "ongoing management",
    "Technosive security solutions",
  ],
  imgUrl: "https://technosive.co.uk/images/logo/TechnosiveOG.webp",
  imgAltText: "Technosive",
};

const social = {
  title: SMetadata.title,
  description: SMetadata.description,
  images: [
    {
      url: SMetadata.imgUrl,
      alt: SMetadata.imgAltText,
    },
  ],
  url: SMetadata.url,
};

export const metadata: Metadata = {
  title: SMetadata.title,
  description: SMetadata.description,
  alternates: {
    canonical: SMetadata.url,
  },

  keywords: SMetadata.keywords,
  openGraph: social,
  twitter: social,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const AppModernization = () => {
  return (
    <>
      <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
        <div className="container">
          <AzureDevops />
        </div>
      </section>
    </>
  );
};

export default AppModernization;
