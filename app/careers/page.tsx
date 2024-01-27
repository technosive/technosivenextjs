import Title from "@/components/Common/Section Title Common/Title";
import React from "react";
import SingleCareer from "./SingleCareer";
import { CareerData } from "./CareerData";
import { Metadata } from "next";

const CareerMetadata = {
  url: "https://technosive.co.uk/careers",
  title: "Careers at Technosive",
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
};

export const metadata: Metadata = {
  metadataBase: new URL(CareerMetadata.url),
  title: CareerMetadata.title,
  description: CareerMetadata.description,
  keywords: CareerMetadata.keywords,
  alternates: {
    canonical: CareerMetadata.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: social,
  twitter: social,
};
const Careers = () => {
  return (
    <section className="min-h-screen pb-[120px] pt-[110px] sm:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-10/12">
            <div>
              <div>
                <Title title="Careers at Technosive" center />

                {CareerData.map((item) => {
                  return <SingleCareer key={item.id} item={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
