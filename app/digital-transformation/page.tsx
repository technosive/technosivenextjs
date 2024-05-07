import { Metadata } from "next";
import Digital_Transformation from ".";

const digitalTransMetadata = {
  url: "https://technosive.co.uk/services/digital-transformation",
  title: "Digital Transformation | Technosive",
  description:
    "Embrace growth through digital transformation. Innovate, optimize processes, and adapt to the evolving digital landscape for business success.",
  keywords: [
    "Technosive",
    "Digital Transformation",
    "Digital transformation strategy",
    "Digital innovation",
    "Technology adoption",
    "Business modernization",
    "IT transformation",
    "Digitalization",
    "Organizational change",
    "Data-driven culture",
    "Cloud computing",
    "Automation solutions",
    "Smart Building",
    "Smart City",
    "Asset Tracking and Monitoring",
    "Smart Utility Metering",
    "Smart water solutions",
    "Smart Security Solutions",
    "Smart Marina",
    "Smart Security Monitoring",
    "Digital disruption",
    "Emerging technologies",
    "Customer experience optimization",
    "Agile transformation",
    "Digital leadership",
    "IoT (Internet of Things)",
    "Industry 4.0",
    "Digital capabilities",
    "E-commerce integration",
    "Cybersecurity in digital transformation",
    "Mobile technology evolution",
    "Smart technologies",
    "AI (Artificial Intelligence) integration",
    "Big data analytics",
    "Enterprise digitization",
  ],
  imgUrl: "https://technosive.co.uk/images/logo/TechnosiveOG.webp",
  imgAltText: "Technosive",
};

const social = {
  title: digitalTransMetadata.title,
  description: digitalTransMetadata.description,
  images: [
    {
      url: digitalTransMetadata.imgUrl,
      alt: digitalTransMetadata.imgAltText,
    },
  ],
};

export const metadata: Metadata = {
  title: digitalTransMetadata.title,
  description: digitalTransMetadata.description,
  keywords: digitalTransMetadata.keywords,
  alternates: {
    canonical: digitalTransMetadata.url,
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

const DigitalTransformation = () => {
  return (
    <>
      <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
        <div className="container">
          <Digital_Transformation />
        </div>
      </section>
    </>
  );
};

export default DigitalTransformation;
