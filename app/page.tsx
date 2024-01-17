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
  title: homeMetada.title,
  description: homeMetada.description,
  keywords: homeMetada.keywords,
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
