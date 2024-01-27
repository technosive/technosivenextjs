import React from "react";
import { Metadata } from "next";

const FemaleTechMetadata = {
  url: "https://technosive.co.uk/careers/industrial-technician-industrial-automation",
  title: "Careers at Technosive",
  description:
    "Discover rewarding careers at Technosive. Explore job openings, our vibrant culture, and join a team committed to innovation and growth. Apply now!",
  imgUrl: "https://technosive.co.uk/images/career/industrial-technician.webp",
  imgAltText: "Career at Technosive Image",
  keywords: [
    "Technosive",
    "Industrial Technician",
    "Industrial Automation",
    "technology solutions",
    "innovative products",
    "Dubai, UAE",
    "maintenance",
    "troubleshooting",
    "PLCs",
    "HMIs",
    "automation components",
    "installation",
    "commissioning",
    "engineering team",
    "system upgrades",
    "modifications",
    "fault diagnosis",
    "repair",
    "documentation",
    "reporting",
    "safety compliance",
    "continuous improvement",
    "qualifications",
    "Diploma",
    "Electrical Engineering",
    "Automation",
    "SCADA systems",
    "industrial communication protocols",
    "electrical systems",
    "control panel wiring",
    "problem-solving",
    "analytical skills",
    "competitive salary",
    "health benefits",
    "professional development",
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
    "Perform routine maintenance and troubleshooting of industrial automation systems. ",
    " Diagnose and resolve issues with programmable logic controllers (PLCs), human-machine interfaces (HMIs), and other automation components. ",
  ];

  const INSTALLING_AND_COMMISSIONING = [
    "Install and commission new industrial automation equipment and systems.",
    "Collaborate with the engineering team to ensure seamless integration of automation solutions.",
  ];

  const SYSTEM_UPGRADES_AND_MODIFICATIONS = [
    "Upgrade and modify existing automation systems to enhance performance and efficiency.",
    "Implement software and hardware changes as required.",
  ];

  const FAULT_DIAGNOSIS_AND_REPAIR = [
    "Conduct thorough analysis to identify faults and malfunctions in automation systems.",
    "Carry out repairs and replacements of faulty components promptly.",
  ];

  const DOCUMENTATION_AND_REPORTING = [
    "Maintain accurate records of maintenance activities and updates on automation systems.",
    "Generate reports on system performance, issues, and resolutions.",
  ];

  const SAFETY_COMPLIANCE = [
    "Ensure all industrial automation activities comply with safety regulations and standards.",
    "Implement safety protocols and contribute to the development of safety procedures.",
  ];

  const CONTINUOUS_IMPROVEMENT = [
    "Participate in continuous improvement initiatives to enhance the reliability and efficiency of automation systems.",
    "Stay updated on advancements in industrial automation technologies.",
  ];

  const QUALIFICATIONS = [
    "Diploma or degree in Electrical Engineering, Automation, or a related field.",
    "Proven experience as an Industrial Technician with a focus on industrial automation.",
    "Proficiency in programming and troubleshooting PLCs (Siemens, Allen-Bradley, etc.).",
    "Familiarity with SCADA systems, HMIs, and industrial communication protocols.",
    "Strong understanding of electrical systems and control panel wiring",
    "Excellent problem-solving and analytical skills. ",
  ];

  const BENEFITS = [
    "Competitive salary",
    "Health and wellness benefits",
    "Professional development opportunities",
    "Collaborative and Innovative work environment",
  ];

  return (
    <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-10/12">
            <div>
              <div>
                <h1 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Job Title: Industrial Technician - Industrial Automation
                </h1>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Company Overview:
                </h1>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Technosive is a leading technology solutions provider,
                  committed to delivering innovative and cutting-edge products
                  to clients across the Middle East. With a strong presence in
                  Dubai, UAE, we are expanding our team and inviting dynamic and
                  experienced Industrial Technicians with expertise in
                  industrial automation to join our dynamic team. If you have a
                  passion for advancing industrial processes through automation.
                </p>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Job Location:
                </h1>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Dubai, UAE
                </p>

                <h1 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Responsibilities:
                </h1>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Industrial Automation Maintenance:
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
                  Installation and Commissioning:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {INSTALLING_AND_COMMISSIONING.map((item, index) => {
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
                  System Upgrades and Modifications:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {SYSTEM_UPGRADES_AND_MODIFICATIONS.map((item, index) => {
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
                  Fault Diagnosis and Repair:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {FAULT_DIAGNOSIS_AND_REPAIR.map((item, index) => {
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
                  Documentation and Reporting:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {DOCUMENTATION_AND_REPORTING.map((item, index) => {
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
                  Safety Compliance:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {SAFETY_COMPLIANCE.map((item, index) => {
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
                  Continuous Improvement:
                </h1>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  {CONTINUOUS_IMPROVEMENT.map((item, index) => {
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
                  Interested candidates are invited to submit their resume and a
                  cover letter detailing their relevant experience to{" "}
                  <a
                    href="mailto:careers@technosive.co.uk"
                    className="text-primary underline"
                  >
                    careers@technosive.co.uk
                  </a>
                  . Please include &ldquo;Industrial Technician Application -
                  Industrial Automation&rdquo; in the subject line. The
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
