import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Technosive Your Partner for Innovation & Transformation",
  description: "This is About Page for Technosive",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="A premier solutions provider harnessing in-house expertise in hardware, SaaS, and Big Data. With the power of the Orion IoT communications network, we deliver end-to-end, state-of-the-art solutions for our clients."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
