import Title from "@/components/Common/Section Title Common/Title";
import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";
import React from "react";
import { CareerData } from "./CareerData";
import SingleCareer from "./SingleCareer";

const CareerMetadata = {
  url: "https://technosive.co.uk/careers",
  title: "Careers | Technosive",
  description:
    "Discover rewarding careers at Technosive. Explore job openings, our vibrant culture, and join a team committed to innovation and growth. Apply now!",
  imgUrl: "https://technosive.co.uk/images/career/career-main.webp",
  imgAltText: "Career at Technosive Image",
  keywords: [
    "Technosive",
    "job opportunities",
    "employment",
    "job openings",
    "company culture",
    "work environment",
    "professional growth",
    "career development",
    "innovation",
    "teamwork",
    "job vacancies",
    "company values",
    "apply for jobs",
    "career advancement",
    "workplace experience",
    "join our team",
    "job application",
    "career paths",
    "company benefits",
  ],
};

const social = {
  title: CareerMetadata.title,
  description: CareerMetadata.description,
  images: [
    {
      url: CareerMetadata.imgUrl,
      alt: CareerMetadata.imgAltText,
    },
  ],
  url: CareerMetadata.url,
};

export const metadata: Metadata = {
  title: CareerMetadata.title,
  description: CareerMetadata.description,
  keywords: CareerMetadata.keywords,
  alternates: {
    canonical: CareerMetadata.url,
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
const Careers = () => {
  return (
    <section className="bg-gray-light pb-[120px]  pt-[110px] dark:bg-bg-color-dark  sm:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="">
              <SectionTitle
                title="Join our Team"
                paragraph="Join Technosive's innovative team in software development, cybersecurity, and more. Be part of a dynamic workplace that values your skills and growth."
                // paragraph="Unfortunately, we have no openings. Connect on LinkedIn to get notified on our latest opportunities."
                center
                mb="0"
              />
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
              {CareerData.map((item) => {
                return <SingleCareer key={item.id} item={item} />;
              })}
            </div>
            {/* <p className="text-body-color">
              Unfortunately there are no job opportunities
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
