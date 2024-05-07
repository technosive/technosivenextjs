import { Metadata } from "next";
import React from "react";

const BackendevMetadata = {
  url: "https://technosive.co.uk/careers/hybrid-backend-developer",
  title: "Careers at Technosive",
  description:
    "Discover rewarding careers at Technosive. Explore job openings, our vibrant culture, and join a team committed to innovation and growth. Apply now!",
  imgUrl: "https://technosive.co.uk/images/career/backend-developer.webp",
  imgAltText: "Careers at Technosive Image",
  keywords: [
    "Hybrid Backend Developer",
    "Java",
    "Node.js",
    "Technosive",
    "digital transformation",
    "web applications",
    "clean code",
    "performance optimization",
    "Next.js",
    "TypeScript",
    "RESTful APIs",
    "server-side rendering",
    "backend development",
    "web development",
    "MVC",
    "relational databases",
    "non-relational databases",
    "problem-solving",
    "collaborative team",
    "remote work",
    "work-life balance",
    "competitive salary",
    "professional growth",
    "digital innovation",
    "apply now",
    "careers",
    "global company",
    "business success",
  ],
};

const social = {
  title: BackendevMetadata.title,
  description: BackendevMetadata.description,
  images: [
    {
      url: BackendevMetadata.imgUrl,
      alt: BackendevMetadata.imgAltText,
    },
  ],
};

export const metadata: Metadata = {
  title: BackendevMetadata.title,
  description: BackendevMetadata.description,
  keywords: BackendevMetadata.keywords,
  alternates: {
    canonical: BackendevMetadata.url,
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
    "Design, develop, and implement secure and scalable backend services using Java and Node.js.",
    "Build and maintain RESTful APIs for seamless communication between front-end and backend systems.",
    "Utilize Next.js for server-side rendering and enhance application performance.",
    "Write clean, maintainable, and well-documented code using TypeScript.",
    "Collaborate with front-end developers and other engineers to ensure a cohesive development process",
    "Troubleshoot and debug complex backend issues efficiently.",
    "Stay up-to-date with the latest backend technologies and best practices.",
    "Participate in code reviews and contribute to improving code quality.",
  ];

  const QUALIFICATIONS = [
    "3-5 years of experience in backend development with Java and/or Node.js.",
    "Strong understanding of web development principles and architectures (REST APIs, MVC).",
    "Proficiency in TypeScript and its advantages over JavaScript.",
    "Experience with Next.js and its server-side rendering capabilities.",
    "Experience with relational and non-relational databases (bonus points for experience with specific databases we use).",
    "Excellent problem-solving and analytical skills.",
    "Ability to work independently and as part of a collaborative team.",
    "Strong communication and interpersonal skills.",
  ];

  const BENEFITS = [
    "Enjoy the flexibility of working remotely while also having the option to collaborate in person at our office.",
    "Maintain a healthy work-life balance.",
    "Competitive salary package.",
    "Opportunity to work on challenging and impactful projects.",
    "Collaborative and supportive work environment.",
  ];
  return (
    <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-10/12">
            <div>
              <div>
                <h1 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Job Title: Hybrid Backend Developer (Java/Node JS)
                </h1>

                {/* <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Job Location:
                </h1>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Dubai, UAE and Riyadh, Saudi Arabia
                </p> */}

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
                  Do you thrive in building the unseen magic that powers web
                  applications? Are you passionate about clean code, performance
                  optimization, and staying ahead of the curve? If so, then we
                  want to hear from you!
                  <br /> <br /> We're seeking a talented and experienced Backend
                  Developer to join our growing team in a hybrid work
                  environment. You'll play a key role in designing, developing,
                  and maintaining the robust backend systems that power our
                  applications.
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
                  <br />
                  <br />
                  <p>
                    Applications accepted till{" "}
                    <span className="font-bold text-black dark:text-white">
                      15 April, 2024.
                    </span>
                  </p>
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
