import { Metadata } from "next";
import Resource_Augmentation from ".";

const resourceMetadata = {
  url: "https://technosive.co.uk/services/resource-augmentation",
  title: "Boost Your Team with Technosive's Resource Augmentation Services",
  description:
    "Enhance your team's capabilities with Technosive’s resource augmentation services. We provide skilled professionals to fill gaps and support your projects, ensuring seamless integration and increased productivity. Leverage our expertise to scale your operations efficiently and meet your business goals.",
  keywords: [
    "Technosive",
    "Resource Augmentation",
    "Staff Augmentation",
    "Team extension",
    "Human resources outsourcing",
    "Staffing solutions",
    "Talent augmentation",
    "Skills enhancement",
    "Workforce optimization",
    "Consultants",
    "Subject Matter Expert",
    "SME",
    "SAP S/4HANA",
    "Firewall",
    "Network",
    "Infrastructure",
    "Temporary staffing",
    "Contract staffing",
    "Project-based staffing",
    "Extended team model",
    "Outsourced staffing",
    "Capacity augmentation",
    "Flexible staffing solutions",
    "On-demand workforce",
    "Strategic staffing",
    "Skill augmentation services",
    "Technical staffing",
    "Professional services augmentation",
    "IT resource augmentation",
    "Global talent pool",
    "Staffing flexibility",
    "Resource scalability",
    "Managed staffing services",
  ],
  imgUrl: "https://technosive.co.uk/images/logo/TechnosiveOG.webp",
  imgAltText: "Technosive",
};

const social = {
  title: resourceMetadata.title,
  description: resourceMetadata.description,
  images: [
    {
      url: resourceMetadata.imgUrl,
      alt: resourceMetadata.imgAltText,
    },
  ],
  url: resourceMetadata.url,
};

export const metadata: Metadata = {
  title: resourceMetadata.title,
  description: resourceMetadata.description,
  keywords: resourceMetadata.keywords,
  alternates: {
    canonical: resourceMetadata.url,
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

const ResourceAug = () => {
  return (
    <>
      <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
        <div className="container">
          <Resource_Augmentation />
        </div>
      </section>
    </>
  );
};

export default ResourceAug;
