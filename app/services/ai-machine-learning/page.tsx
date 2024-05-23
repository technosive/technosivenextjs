import { Metadata } from "next";
import { default as AI_ML } from ".";

const SMetadata = {
  url: "https://technosive.co.uk/services/ai-machine-learning",
  title: "Transform Your Business with Technosive's Cutting-Edge AI Solutions",
  description:
    "Discover how Technosive can revolutionize your business with bespoke AI and Machine Learning services. Our expert team develops custom solutions, from predictive analytics to intelligent automation, ensuring your data remains secure and compliant. Partner with us to unlock new opportunities and efficiencies, using the latest technologies and best practices.",
  keywords: [
    "Technosive",
    "AI solutions",
    "Machine Learning",
    "predictive analytics",
    "intelligent automation",
    "custom AI solutions",
    "private AI solutions",
    "secure data",
    "industry compliance",
    "business transformation",
    "Technosive",
    "expert AI team",
    "innovative technology",
    "actionable insights",
    "decision-making improvement",
    "bespoke AI services",
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
          <AI_ML />
        </div>
      </section>
    </>
  );
};

export default AppModernization;
