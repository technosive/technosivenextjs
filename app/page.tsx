import { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutSectionOne = dynamic(
  () => import("@/components/About/AboutSectionOne"),
);
const AboutSectionTwo = dynamic(
  () => import("@/components/About/AboutSectionTwo"),
);
const Blog = dynamic(() => import("@/components/Blog"));
const Brands = dynamic(() => import("@/components/Brands"));
const Contact = dynamic(() => import("@/components/Contact"));
const Features = dynamic(() => import("@/components/Features"));
const Hero = dynamic(() => import("@/components/Hero"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Video = dynamic(() => import("@/components/Video"));
const ScrollUp = dynamic(() => import("@/components/Common/ScrollUp"));

const homeMetada = {
  url: "https://technosive.co.uk",
  title: "Technosive | Your Partner for Innovation & Transformation",
  description:
    "Technosive: Your partner in progress, specializing in pioneering solutions for innovation and transformative change.",
  imgUrl: "https://technosive.co.uk/images/logo/TechnosiveOG.webp",
  imgAltText: "Technosive",
  keywords: [
    "Innovation",
    "Technology",
    "Technosive",
    "Digital Transformation",
    "Software development",
    "Software design",
    "Cybersecurity",
    "Application Modernization",
    "Cloud Computing",
    "Resource Augmentation",
    "Security",
    "IOT",
    "Digital Landscape",
    "Consulting",
    "IoT Integration",
    "Software Development",
    "Cybersecurity",
    "Application Modernization",
    "Cloud Computing",
    "Resource Augmentation",
    "Smart IoT Solutions",
    "Smart Building Management",
    "Smart Asset Tracking",
    "Smart Water Solutions",
    "Smart Utility Solutions",
    "Smart Community Management",
    "Smart Security Solutions",
    "Connected Care Solutions",
    "Smart Marina Solutions",
    "Smart Leisure Utility Solutions",
    "Smart Wearable Solutions",
    "Management Team",
    "Mid Management",
    "Customer Engagement Team",
    "Customer Testimonials",
    "Founder",
    "Smart Hospitals",
    "Healthcare",
    "Design Skills",
    "Coding Speed",
    "Contact Us",
    "Subscribe",
    "Privacy Policy",
    "Anti-Slavery Policy",
    "Support",
    "Terms of Use",
    "Copyright",
  ],
};
const social = {
  title: homeMetada.title,
  description: homeMetada.description,
  images: [
    {
      url: homeMetada.imgUrl,
      alt: homeMetada.imgAltText,
    },
  ],
  url: homeMetada.url,
};
export const metadata: Metadata = {
  title: homeMetada.title,
  description: homeMetada.description,
  keywords: homeMetada.keywords,
  alternates: {
    canonical: homeMetada.url,
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

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Brands />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      <Contact />
      <ScrollUp />
    </>
  );
}
