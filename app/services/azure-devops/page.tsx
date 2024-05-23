import { Metadata } from "next";
import AzureDevops from ".";

const SMetadata = {
  url: "https://technosive.co.uk/services/ai-machine-learning",
  title:
    "Accelerate Your Development Lifecycle with Technosive's Azure DevOps Services",
  description:
    "Enhance your development lifecycle with Technosive’s Azure DevOps services. Our certified experts provide tailored CI/CD solutions, automated workflows, and tools to foster collaboration, scalability, and efficiency. Achieve faster delivery, higher quality, and optimal resource utilization with our proven DevOps strategies.",
  keywords: [
    "Technosive",
    "Azure DevOps",
    "CI/CD",
    "continuous integration",
    "continuous deployment",
    "automated workflows",
    "development process optimization",
    "code integration",
    "testing",
    "deployment",
    "collaboration tools",
    "scalability",
    "flexibility",
    "certified DevOps engineers",
    "tailored DevOps solutions",
    "faster time-to-market",
    "enhanced productivity",
    "Technosive DevOps services",
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
