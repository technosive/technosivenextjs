import { Metadata } from "next";
import React from "react";

const FemaleTechMetadata = {
  url: "https://technosive.co.uk/careers/business-development-manager",
  title: "Careers at Technosive",
  description:
    "Discover rewarding careers at Technosive. Explore job openings, our vibrant culture, and join a team committed to innovation and growth. Apply now!",
  imgUrl: "https://technosive.co.uk/images/career/business-development.webp",
  imgAltText: "Careers at Technosive Image",
  keywords: [
    "Technosive",
    "Business Development Manager",
    "Digital Transformation",
    "Dubai",
    "Riyadh",
    "UAE",
    "Saudi Arabia",
    "Technosive",
    "Global Leader",
    "Digital Solutions",
    "Innovation",
    "Sales Growth",
    "Strategic Insights",
    "Female Candidates Preferred",
    "Diversity and Inclusion",
    "Technology Solutions",
    "Market Trends",
    "Customer Experience",
    "Industry Events",
    "Professional Growth",
    "Career Opportunity",
    "Cloud Computing",
    "Artificial Intelligence",
    "Data Analytics",
    "IoT",
    "Customer-Centric",
    "Target-Driven",
    "Dynamic Environment",
    "Adaptability",
    "Microsoft Office Suite",
    "CRM Software",
    "Salesforce",
    "HubSpot",
    "Global Company",
    "Competitive Compensation",
    "Benefits",
    "Opportunities for Professional Development",
    "Motivated Self-Starter",
    "Digital Innovation",
    "Apply Now",
    "Join Us",
    "Job Opportunity",
    "Tech Industry",
    "Leadership",
    "Networking",
    "Strategic Partnerships",
    "Contract Negotiations",
    "Brand Visibility",
    "Lead Generation",
    "Business Success",
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
  url: FemaleTechMetadata.url,
};

export const metadata: Metadata = {
  title: FemaleTechMetadata.title,
  description: FemaleTechMetadata.description,
  keywords: FemaleTechMetadata.keywords,
  alternates: {
    canonical: FemaleTechMetadata.url,
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

const page = () => {
  const RESPONSIBILITIES = [
    "Develop and implement a strategic business development plan to drive sales and revenue growth for digital transformation solutions and services in Dubai and Riyadh.",
    "Identify and engage with potential clients to understand their business needs, challenges, and objectives, and position our solutions effectively to address their requirements.",
    "Build and maintain strong relationships with key stakeholders, including C-level executives, decision-makers, and influencers, in Dubai and Riyadh.",
    "Collaborate closely with internal teams, including sales, marketing, and product development, to ensure alignment and support in delivering exceptional customer experiences.",
    "Stay abreast of industry trends, market dynamics, and competitive landscape in Dubai and Riyadh to identify new opportunities and drive innovation.",
    "Represent the company at industry events, conferences, and networking forums in Dubai and Riyadh to enhance brand visibility and generate leads.",
    "Prepare and present proposals, presentations, and contract negotiations to secure new business opportunities and partnerships.",
    "Monitor and analyse sales performance, pipeline activity, and market trends to inform strategic decision-making and optimize sales effectiveness in Dubai and Riyadh.",
  ];

  const QUALIFICATIONS = [
    "Bachelor’s degree in business administration, Marketing, or related field; MBA preferred.",
    "Proven track record of success in business development, with a focus on digital transformation solutions and services.",
    "Strong understanding of digital technologies, including cloud computing, artificial intelligence, data analytics, and IoT.",
    "Excellent communication and interpersonal skills, with the ability to build rapport and credibility with diverse stakeholders.",
    "Strategic thinker with a customer-centric mindset and the ability to identify and capitalize on market opportunities.",
    "Highly motivated and target-driven, with a passion for driving results and exceeding sales targets.",
    "Experience working in a fast-paced, dynamic environment, with the ability to adapt to change and navigate ambiguity.",
    "Proficiency in Microsoft Office Suite and CRM software (e.g., Salesforce, HubSpot).",
  ];

  return (
    <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-10/12">
            <div>
              <div>
                <h1 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Job Title: Business Development Manager (Digital
                  Transformation)
                </h1>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Job Location:
                </h1>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Dubai, UAE and Riyadh, Saudi Arabia
                </p>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Company Overview:
                </h1>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Technosive is a global leader in digital transformation
                  solutions and services, with a presence in the UK, UAE, India,
                  and Saudi Arabia. Our mission is to empower businesses to
                  thrive in the digital age by leveraging innovative
                  technologies and strategic insights. We are dedicated to
                  delivering tailored solutions that drive growth, efficiency,
                  and competitiveness for our clients across various industries.
                </p>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Job Description:
                </h1>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  We are seeking a dynamic and results-oriented Business
                  Development Manager to join our team in Dubai, UAE, and
                  Riyadh, Saudi Arabia, to drive the growth of our digital
                  transformation solutions and services. The ideal candidate
                  will have a strong background in business development, with a
                  focus on digital technologies and solutions. Female candidates
                  are preferred for this role as part of our commitment to
                  diversity and inclusion.
                </p>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Responsibilities:
                </h1>
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
                  How to apply:
                </h1>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Join our team and be part of a global company that is shaping
                  the future of digital transformation. We offer competitive
                  compensation, benefits, and opportunities for professional
                  growth and development. If you are a motivated self-starter
                  with a passion for driving business success through digital
                  innovation, we want to hear from you! Apply now by submitting
                  your resume and cover letter outlining your relevant
                  experience and qualifications to{" "}
                  <a
                    href="mailto:careers@technosive.co.uk"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    careers@technosive.co.uk
                  </a>
                  . Female candidates are strongly encouraged to apply. <br />{" "}
                  <br />
                  Technosive is an equal opportunity employer committed to
                  diversity and inclusion. We celebrate diversity and are
                  committed to creating an inclusive environment for all
                  employees.
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
