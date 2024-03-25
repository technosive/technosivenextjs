import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AccuKnoxLogo from "../../../public/images/brands/AccuKnox/accuknox-logo-light.webp";

const accuknoxMetadata = {
  url: "https://technosive.co.uk/partners/accuknox",
  title: "Partners with AccuKnox | Technosive",
  description:
    "Technosive partners with AccuKnox for top-tier cloud security solutions, including CNAPP platform, Kubernetes security, and expert consultation.",
  keywords: [
    "Technosive",
    "Partnership",
    "AccuKnox",
    "Cloud-native security solutions",
    "Cloud environment",
    "Cloud workloads",
    "CNAPP (Cloud Native Application Protection Platform)",
    "Kubernetes",
    "Virtual Machines (VMs)",
    "Bare Metal Servers",
    "IoT/Edge devices",
    "5G assets",
    "Agentless Multi-Cloud Security",
    "CWPP (Cloud Workload Protection Platform)",
    "Kubernetes Security Posture Management (KSPM)",
    "Container and VM Forensics",
    "Public Cloud Security (Azure, GCP, AWS, Oracle Cloud)",
    "Private Cloud Security (OpenShift, VMWare Tanzu, Bare Metal)",
    "5G Security",
    "IoT/Edge Security",
    "Zero-Trust security strategy",
    "Threat detection and prevention",
    "Consultation",
    "Security experts",
    "Integration",
  ],
  imgUrl: "https://technosive.co.uk/images/brands/AccuKnox/opengraph.webp",
  imgAltText: "Technosive",
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: accuknoxMetadata.title,
    description: accuknoxMetadata.description,
    alternates: {
      canonical: accuknoxMetadata.url,
    },
    keywords: accuknoxMetadata.keywords,
    openGraph: {
      title: accuknoxMetadata.title,
      description: accuknoxMetadata.description,
      images: [
        {
          url: accuknoxMetadata.imgUrl,
          width: 1200,
          height: 630,
          alt: accuknoxMetadata.imgAltText,
        },
      ],
    },
  };
}

const AccuKnox = () => {
  const ACCUKNOX_DELIVERIES: string[] = [
    "Kubernetes",
    "Virtual Machines (VM)",
    "Bare Metal Servers",
    "IoT/Edge devices",
    "5G Assests",
  ];

  const ACCUKNOX_SOLUTIONS = [
    "Agentless Multi-Cloud Security: Protects your workloads across any cloud environment, including public, private, and hybrid clouds.",

    "Cloud Workload Protection Platform (CWPP): Delivers comprehensive security for your cloud workloads, combining vulnerability management, CI/CD pipeline security, and runtime security.",

    "Kubernetes Security Posture Management (KSPM): Provides continuous monitoring and management of your Kubernetes security posture.",

    "Container and VM Forensics: Enables faster investigation and remediation of security incidents.",

    "Public Cloud Security (Azure, GCP, AWS, Oracle Cloud): Secures your workloads on leading public cloud platforms.",

    "Private Cloud Security (OpenShift, VMWare Tanzu, Bare Metal): Provides robust security for your private cloud deployments.",

    "5G Security: Protects your 5G infrastructure from evolving threats.",

    "IoT/Edge Security: Secures your Internet of Things (IoT) and edge devices.",
  ];

  const PARTNERING_BENEFITS = [
    "Implement a Zero-Trust security strategy",
    "Design and deploy a customized AccuKnox solution",
    "Integrate AccuKnox with your existing security tools",
    "Leverage AccuKnox's advanced threat detection and prevention capabilities",
  ];

  return (
    <>
      <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <div>
                  <Image
                    alt="Accuknox"
                    src={AccuKnoxLogo}
                    unoptimized
                    width="200"
                    height="100"
                    className="mb-8"
                  />
                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Technosive is thrilled to announce our partnership with
                    AccuKnox!
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive is excited to announce a new partnership with
                    AccuKnox, a leading provider of cloud-native security
                    solutions! This partnership allows us to offer our clients
                    AccuKnox's comprehensive Cloud Native Application Protection
                    Platform (CNAPP) to secure their applications, networks, and
                    data across their entire cloud environment.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    What is AccuKnox?
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <Link
                      href="https://www.accuknox.com"
                      target="_blank"
                      className="text-primary underline"
                    >
                      AccuKnox
                    </Link>{" "}
                    delivers a high-performance, Zero Trust runtime container
                    security solution. Built on open-source technologies,
                    AccuKnox offers unparalleled protection for your cloud
                    workloads, including:
                  </p>

                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {ACCUKNOX_DELIVERIES.map((item, index) => {
                      return (
                        <li
                          className="mb-2 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                          key={index}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Accuknox Products and Solutions
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    AccuKnox's CNAPP platform provides a variety of solutions to
                    address your cloud security needs. These solutions include:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {ACCUKNOX_SOLUTIONS.map((item, index) => {
                      return (
                        <li
                          className="mb-2 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                          key={index}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Benefits of Partnering with Technosive for AccuKnox
                    Solutions
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    By partnering with Technosive for AccuKnox solutions, you
                    gain access to our team of security experts who can help
                    you:
                  </p>

                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {PARTNERING_BENEFITS.map((item, index) => {
                      return (
                        <li
                          className="mb-2 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                          key={index}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Ready to Secure Your Cloud Environment?
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Contact{" "}
                    <Link
                      href="https://outlook.office365.com/book/AbdulSalamsCalendar@technosive.co.uk/"
                      target="_blank"
                      className="text-primary underline"
                    >
                      Technosive
                    </Link>{" "}
                    today for a free consultation to discuss how AccuKnox can
                    help you achieve your cloud security goals
                  </p>
                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Let's build a more secure cloud together!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccuKnox;
