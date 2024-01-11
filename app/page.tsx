
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutSectionOne = dynamic(() => import('@/components/About/AboutSectionOne'))
const AboutSectionTwo = dynamic(() => import('@/components/About/AboutSectionTwo'))
const Blog = dynamic(() => import('@/components/Blog'))
const Brands = dynamic(() => import('@/components/Brands'))
const Contact = dynamic(() => import('@/components/Contact'))
const Features = dynamic(() => import('@/components/Features'))
const Hero = dynamic(() => import('@/components/Hero'))
const Pricing = dynamic(() => import('@/components/Pricing'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const Video = dynamic(() => import('@/components/Video'))
const ScrollUp = dynamic(() => import('@/components/Common/ScrollUp'))

export const metadata: Metadata = {
  title: "Technosive | Your Partner for Innovation & Transformation",
  description: "This is Home for Technosive Website",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollUp />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
