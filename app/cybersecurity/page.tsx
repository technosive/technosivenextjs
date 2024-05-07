import { Metadata } from "next";
import Cyber_security from ".";

const cyberMetadata = {
  url: "https://technosive.co.uk/services/cybersecurity",
  title: "Cybersecurity | Technosive",
  description:
    "Enhance digital defenses with cybersecurity. Guard against threats, secure networks, and implement best practices for robust protection.",
  keywords: [
    "Technosive",
    "Cybersecurity",
    "Network security",
    "Information security",
    "Data protection",
    "Cyber threats",
    "Cyber defense",
    "Cyber attacks",
    "Security measures",
    "Firewall protection",
    "Antivirus solutions",
    "Secure networks",
    "DEVSECOPS",
    "Penetration Testing",
    "Red Team",
    "ISO27001",
    "NIST Security",
    "DAST",
    "SAST",
    "CSPM",
    "CNAPP",
    "CWPP",
    "Kubernetes Security",
    "Container Security",
    "Digital security",
    "Endpoint security",
    "Incident response",
    "Security protocols",
    "Risk assessment",
    "Vulnerability management",
    "Security awareness",
    "Cybersecurity best practices",
    "Threat intelligence",
  ],
  imgUrl: "https://technosive.co.uk/images/logo/TechnosiveOG.webp",
  imgAltText: "Technosive",
};

const social = {
  title: cyberMetadata.title,
  description: cyberMetadata.description,
  images: [
    {
      url: cyberMetadata.imgUrl,
      alt: cyberMetadata.imgAltText,
    },
  ],
};

export const metadata: Metadata = {
  title: cyberMetadata.title,
  description: cyberMetadata.description,
  keywords: cyberMetadata.keywords,
  alternates: {
    canonical: cyberMetadata.url,
  },

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

const Cybersecurity = () => {
  return (
    <>
      <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
        <div className="container">
          <Cyber_security />
        </div>
      </section>
    </>
  );
};

export default Cybersecurity;
