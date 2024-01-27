import React from "react";
import { Metadata } from "next";

const FemaleTechMetadata = {
  url: "https://technosive.co.uk/careers/female-technical-field-sales-representative",
  title: "Careers at Technosive",
  description:
    "Discover rewarding careers at Technosive. Explore job openings, our vibrant culture, and join a team committed to innovation and growth. Apply now!",
  imgUrl: "https://technosive.co.uk/images/career/female-tech.webp",
  imgAltText: "Career at Technosive Image",
  keywords: [
    "Technical Field Sales Representative",
    "Dubai, UAE",
    "technology solutions",
    "innovative products",
    "cutting-edge",
    "sales targets",
    "business opportunities",
    "market research",
    "client relationship management",
    "trusted advisor",
    "product demonstrations",
    "technical product knowledge",
    "industry trends",
    "travel management",
    "sales reporting",
    "analysis",
    "qualifications",
    "Bachelor's degree",
    "engineering",
    "computer science",
    "UAE",
    "Middle East",
    "communication skills",
    "Arabic fluency",
    "travel",
    "self-motivated",
    "results-oriented",
    "competitive salary",
    "commission structure",
    "health benefits",
    "career advancement",
    "collaborative work environment",
  ],
};

const social = {
  title: FemaleTechMetadata.title,
  description: FemaleTechMetadata.description,
  images: [
    {
      url: FemaleTechMetadata.imgUrl,
      alt: FemaleTechMetadata.imgAltText,
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(FemaleTechMetadata.url),
  title: FemaleTechMetadata.title,
  description: FemaleTechMetadata.description,
  keywords: FemaleTechMetadata.keywords,
  alternates: {
    canonical: FemaleTechMetadata.url,
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
const page = () => {
  const RESPONSIBILITIES = [
    "Develop and execute a strategic sales plan to achieve and exceed sales targets.",
    "Identify new business opportunities and markets for our technical solutions. ",
    " Conduct market research to stay updated on industry trends and competitor activities.",
  ];

  const CLIENT_RELATIONSHIP_MANAGEMENT = [
    " Build and maintain strong relationships with existing clients. ",
    "Act as a trusted advisor to clients, understanding their technical needs, and offering appropriate solutions.",
    "Provide product demonstrations and presentations to clients.",
  ];

  const TECHNICAL_PRODUCT_KNOWLEDGE = [
    " Possess in-depth knowledge of our technical products and solutions. ",
    "Stay updated on industry-specific technologies and advancements.",
    "Collaborate with technical teams to ensure a deep understanding of product features and benefits.",
  ];

  const TRAVEL_MANAGEMENT = [
    "Travel to neighbouring countries to meet client, attend industry events, and explore business opportunities",
    "Plan and coordinate travel itineraries efficiently",
  ];

  const SALES_REPORTING_AND_ANALYSIS = [
    "Prepare regular sales reports, detailing achievements, challenges, and future strategies.",
    "Analyse sales data to identify trends and areas for improvement.",
  ];

  const QUALIFICATIONS = [
    "Bachelor's degree in a technical field (Engineering, Computer Science, etc.) or equivalent work experience.",
    "Proven experience in technical field sales, preferably in the UAE or Middle East region.",
    "Strong understanding of technical products and solutions.",
    "Excellent communication and presentation skills. (Fluency in Arabic preferred)",
    "Ability to build and maintain strong client relationships.",
    " Willingness to travel frequently to neighbouring countries.",
    "Self-motivated and results-oriented.",
  ];

  const BENEFITS = [
    "Competitive salary and commission structures",
    "Health and wellness benefits",
    "Opportunities for career advancement",
    "Dynamic and collaborative work environment",
  ];

  return (
    <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-10/12">
            <div>
              <div>
                <h1 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Job Title: Female Technical Field Sales Representative -
                  Dubai, UAE
                </h1>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Company Overview:
                </h1>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Technosive is a leading technology solutions ons provider,
                  committed to delivering innovative and cu ng-edge products to
                  clients across the Middle East. With a strong presence in
                  Dubai, UAE, we are expanding our team and inviting dynamic and
                  experienced female candidates to join us as Technical Field
                  Sales Representatives. The ideal candidates will play a
                  crucial role in driving sales and building relationships with
                  clients in Dubai and neighbouring countries.
                </p>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Job Location:
                </h1>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Dubai, UAE (Frequent travel to neighbouring countries
                  required)
                </p>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Responsibilities:
                </h1>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Sales Strategy and Execution:
                </p>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {RESPONSIBILITIES.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="mb-1 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Client Relationship Management:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {CLIENT_RELATIONSHIP_MANAGEMENT.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="mb-1 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Technical Product Knowledge:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {TECHNICAL_PRODUCT_KNOWLEDGE.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="mb-1 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Travel Management:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {TRAVEL_MANAGEMENT.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="mb-1 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Sales Reporting and Analysis:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {SALES_REPORTING_AND_ANALYSIS.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="mb-1 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Qualifications:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {QUALIFICATIONS.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="mb-1 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Benefits:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {BENEFITS.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="mb-1 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  How to apply:
                </h1>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Interested female candidates are invited to submit their
                  resume and a cover letter detailing their relevant experience
                  to{" "}
                  <a
                    href="mailto:careers@technosive.co.uk"
                    className="text-primary underline"
                  >
                    careers@technosive.co.uk
                  </a>
                  . Please include &ldquo;Female Technical Field Sales
                  Representative Application&rdquo; in the subject line. The
                  application deadline is{" "}
                  <strong className="text-black dark:text-white">
                    11 February 2024
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
