import { Metadata } from "next";
import React from "react";

const BackendevMetadata = {
  url: "https://technosive.co.uk/careers/python-developer",
  title: "Careers at Technosive",
  description:
    "Discover rewarding careers at Technosive. Explore job openings, our vibrant culture, and join a team committed to innovation and growth. Apply now!",
  imgUrl: "https://technosive.co.uk/images/career/python-developer.webp",
  imgAltText: "Careers at Technosive Image",
  keywords: [
    "Technosive",
    "Python Developer",
    "3-5 Years Experience",
    "hybrid role",
    "scalable applications",
    "collaborative development team",
    "remote work flexibility",
    "Python programming language",
    "Django",
    "Flask",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "relational databases",
    "NoSQL databases",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "DevOps practices",
    "CI/CD pipelines",
    "cloud platforms",
    "AWS",
    "Azure",
    "GCP",
    "problem-solving skills",
    "communication skills",
    "high-quality software solutions",
    "challenging projects",
    "rewarding projects",
    "competitive salary",
    "benefits package",
    "remote work",
    "motivated Python developer",
    "collaborative setting",
    "apply now",
    "careers",
    "Technosive",
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
};

const page = () => {
  const RESPONSIBILITIES = [
    "Design, develop, and maintain highly scalable and secure Python applications.",
    "Write clean, well-documented, and efficient code using best practices.",
    "Collaborate with designers and product managers to translate requirements into technical solutions.",
    "Conduct unit tests, integration tests, and participate in code reviews.",
    "Troubleshoot and debug complex technical issues.",
    "Stay up-to-date on the latest Python technologies and frameworks.",
    "Continuously improve development processes and tools.",
  ];

  const QUALIFICATIONS = [
    "Bachelor's degree in Computer Science, Engineering, or related field.",
    "3-5 years of proven experience as a Python Developer, with a strong understanding of Python programming language and its ecosystem.",
    "Proficiency in Python frameworks such as Django, Flask, or similar frameworks.",
    "Experience with front-end technologies such as HTML, CSS, JavaScript, and frameworks like React or Angular is a plus.",
    "Knowledge of relational databases (e.g., PostgreSQL, MySQL) and NoSQL databases (e.g., MongoDB, Redis)",
    "Familiarity with DevOps practices, CI/CD pipelines, and cloud platforms (e.g., AWS, Azure, GCP).",
    "Strong problem-solving skills, attention to detail, and ability to work effectively in a fast-paced environment.",
    "Positive attitude, with a proactive and collaborative approach to work.",
    "Excellent communication and collaboration skills, with the ability to work both independently and as part of a team.",
    "Proven track record of delivering high-quality software solutions on time and within budget.",
  ];

  const BONUS = [
    "Experience with cloud platforms (e.g., AWS, Azure, GCP).",
    "Experience with DevOps methodologies.",
    "Experience with web development frameworks (e.g., Django, Flask).",
    "Experience with data science or machine learning libraries (e.g., NumPy, Pandas, TensorFlow) .",
  ];
  return (
    <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-10/12">
            <div>
              <div>
                <h1 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Job Title: Python Developer - Hybrid
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
                  Do you have a passion for building innovative and scalable
                  applications using Python? Are you eager to contribute to a
                  collaborative and fast-paced development team, with the
                  flexibility of a hybrid work environment? If so, we want to
                  hear from you!
                  <br /> <br /> We are searching for a talented and experienced
                  Python Developer to join our growing team. In this hybrid
                  role, you will play a key role in designing, developing, and
                  maintaining our Python-based applications, with the ability to
                  work both in-office and remotely. You will work closely with
                  other developers, designers, and product managers to bring our
                  vision to life.
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
                  Bonus Points:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {BONUS.map((item, index) => {
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
                  We offer a competitive salary and benefits package, as well as
                  the opportunity to work on challenging and rewarding projects
                  in a hybrid work environment. If you are a highly motivated
                  and skilled Python developer who thrives in a collaborative
                  setting and enjoys the flexibility of remote work, we
                  encourage you to apply{" "}
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
