import { Metadata } from "next";
import App_Modern from ".";

const appModMetadata = {
  url: "https://technosive.co.uk/services/application-modernization",
  title: "Application Modernization | Technosive",
  description:
    "Revitalize your systems with application modernization. Upgrade legacy software, embrace cloud solutions, and boost efficiency for the digital era.",
  keywords: [
    "Technosive",
    "Modernization",
    "Upgrade",
    "Modernizing",
    "Migration",
    "Strategies",
    "Transformation",
    "Solutions",
    "Cloud",
    "Development",
    "Refactoring",
    "BestPractices",
    "Microservices",
    "DevOps",
    "Containerization",
    "Reengineering",
    "Framework",
    "Challenges",
    "Integration",
    "Hybrid",
    "Scalable",
  ],
  imgUrl: "https://technosive.co.uk/images/logo/TechnosiveOG.webp",
  imgAltText: "Technosive",
};

const social = {
  title: appModMetadata.title,
  description: appModMetadata.description,
  images: [
    {
      url: appModMetadata.imgUrl,
      alt: appModMetadata.imgAltText,
    },
  ],
};

export const metadata: Metadata = {
  title: appModMetadata.title,
  description: appModMetadata.description,
  alternates: {
    canonical: appModMetadata.url,
  },

  keywords: appModMetadata.keywords,
  openGraph: social,
  twitter: social,
};

const AppModernization = () => {
  return (
    <>
      <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
        <div className="container">
          <App_Modern />
        </div>
      </section>
    </>
  );
};

export default AppModernization;
