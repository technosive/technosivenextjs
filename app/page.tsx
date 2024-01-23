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
  imgUrl: "https://technosive.co.uk/images/logo/Technosive.webp",
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
};
export const metadata: Metadata = {
  metadataBase: new URL(homeMetada.url),
  title: homeMetada.title,
  description: homeMetada.description,
  keywords: homeMetada.keywords,
  alternates: {
    canonical: homeMetada.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "7pJ9AOhyY4Ln67j1g5_kYF2tyC8yxjtTwR76LFWWj58",
  },
  openGraph: social,
  twitter: social,
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
      <ScrollUp />
    </>
  );
}
