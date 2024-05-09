import Title from "@/components/Common/Section Title Common/Title";
import { Metadata } from "next";

const AntiSlaveryMetadata = {
  url: "https://technosive.co.uk/anti-slavery-policy",
  title: "Modern Anti-Slavery Policy | Technosive",
  description:
    "Technosive Limited: Committed to eradicating modern slavery and human trafficking. Our policy ensures compliance with the Modern Slavery Act 2015 for employees, contractors, suppliers, and business partners.",
  imgUrl: "https://technosive.co.uk/images/logo/TechnosiveOG.webp",
  imgAltText: "Technosive",
  keywords: [
    "Technosive Limited",
    "Modern Slavery",
    "Human Trafficking",
    "Eradication",
    "Compliance",
    "Policy",
    "Employees",
    "Contractors",
    "Suppliers",
    "Business Partners",
  ],
};
const social = {
  title: AntiSlaveryMetadata.title,
  description: AntiSlaveryMetadata.description,
  images: [
    {
      url: AntiSlaveryMetadata.imgUrl,
      alt: AntiSlaveryMetadata.imgAltText,
    },
  ],
  url: AntiSlaveryMetadata.url,
};
export const metadata: Metadata = {
  title: AntiSlaveryMetadata.title,
  description: AntiSlaveryMetadata.description,
  keywords: AntiSlaveryMetadata.keywords,

  openGraph: social,
  twitter: social,
  alternates: {
    canonical: AntiSlaveryMetadata.url,
  },
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

const AntiSlavery = () => {
  const ORGANIZATION_STRUCTURE_AND_BUSINESS_OPERATIONS = [
    "Digital Transformation: Embark on a seamless digital transformation with Smart IoT solutions, integrating intelligent technologies for real-time insights,efficiency, and innovative growth.",

    "Software Development: Craft tailored solutions to meet your unique needs.Our software development ensures scalability, efficiency, and innovation, empowering your business for success.",

    "Cyber Security: Guard your digital assets with robust cybersecurity solutions.Our expertise ensures proactive threat detection, risk mitigation, and resilient defense, providing a secure foundation for your digital landscape.",

    "Application Modernization: Revitalize your applications with modernization solutions, enhancing performance, scalability, and user experience to meet contemporary standards.",

    "Cloud Computing: Empower your business with Cloud Computing, ensuring seamless access to resources, enhanced collaboration, and optimal performance for your digital endeavors.",

    "Resource Augmentation: Enhance your team's capabilities with Resource Augmentation. Our professionals seamlessly integrate, providing expertise and scalability for project success.",
  ];

  return (
    <>
      <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <div>
                  <Title title="Modern Anti-Slavery Policy" center />

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Introduction:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive Limited (the “Company”) is committed to
                    preventing and eradicating modern slavery and human
                    trafficking in all its forms. This policy outlines the
                    Company’s approach to ensuring compliance with the Modern
                    Slavery Act 2015. The Company expects all employees,
                    contractors, suppliers, and business partners to adhere to
                    this policy.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Policy Statement:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    The Company recognizes that modern slavery and human
                    trafficking are grave violations of human rights and
                    criminal offenses. It is committed to upholding principles
                    of freedom, equality, and respect for human dignity.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    The Company is dedicated to preventing modern slavery and
                    human trafficking within its operations and supply chains.
                    It strives to ensure that its business activities and
                    relationships do not contribute to or support these illegal
                    practices.
                  </p>
                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Organizational Structure and Business Operations:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive Limited is a leading technology company with
                    offices in London, Navi Mumbai (India), and Dubai (UAE). The
                    Company specializes in providing advisory and professional
                    services in the following areas:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {ORGANIZATION_STRUCTURE_AND_BUSINESS_OPERATIONS.map(
                      (item, index) => {
                        return (
                          <li
                            className="mb-2 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"
                            key={index}
                          >
                            {item}
                          </li>
                        );
                      },
                    )}
                  </ul>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Supply Chain Management:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive Limited has established a robust supply chain
                    management process to ensure compliance with anti-slavery
                    and human trafficking laws.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    The Company maintains relationships with approximately 10
                    partner organizations, most of which are SMEs, and around 50
                    associates and contractors as part of its supply chain.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Partner organizations and associates are required to have
                    contractual agreements that include obligations to comply
                    with the Company’s Anti-Slavery and Human Trafficking
                    Policy. Technosive Limited also reserves the right to audit
                    these partners to verify policy enforcement.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Processes and Accreditations:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive Limited is actively working towards achieving
                    robust processes and industry accreditations to support its
                    commitment to quality, environmental responsibility,
                    information security, and ethical business practices. The
                    Company recognizes the importance of obtaining
                    certifications such as ISO 9001, ISO 14001, and ISO 27001
                    and is dedicated to implementing the necessary measures to
                    meet the requirements of these standards. By pursuing these
                    accreditations, Technosive Limited aims to strengthen its
                    practices and ensure the highest standards of excellence in
                    all aspects of its operations.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    These accreditations will be embedded in the Company’s
                    internal Quality Management System, which ensures consistent
                    control systems and quality procedures are followed to
                    provide excellent services.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Anti-Slavery and Human Trafficking Policies:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive Limited is committed to acting ethically and with
                    integrity in all its business relationships. The Company has
                    implemented and enforces effective systems and controls to
                    prevent slavery and human trafficking within its supply
                    chain and business operations.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    The Company conducts audits of suppliers to ensure adherence
                    to its requirements and to verify that the supply chain is
                    free from slavery and human trafficking.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Due Diligence Processes:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive Limited has implemented due diligence processes
                    to identify and mitigate risks associated with slavery and
                    human trafficking within its supply chain.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    These processes include the identification and assessment of
                    potential risk areas, mitigation, or resolution of
                    identified risks, ongoing monitoring of potential risk
                    areas, and protection of whistle-blowers who report
                    concerns.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Supplier Adherence to Values and Ethics:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive Limited maintains a zero-tolerance approach to
                    slavery and human trafficking, not only within its own
                    operations but also throughout its supply chain. The Company
                    acknowledges that many of its services are outsourced to
                    SMEs and recognizes the importance of ensuring that these
                    partners adhere to the same ethical standards.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    The Company holds its suppliers and partners accountable for
                    adhering to its values and ethics. It conducts regular
                    assessments and audits to ensure compliance with the Modern
                    Slavery Act 2015, thereby striving to create a responsible
                    and ethical supply chain that aligns with Technosive
                    Limited’s commitment to combating modern slavery and human
                    trafficking to ensure adherence to the Modern Slavery Act
                    2015.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Measuring Effectiveness and Steps Being Taken:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive Limited will continue to conduct regular audits
                    of suppliers and partners to ensure compliance. The Company
                    aims to audit at least 10% of its supply chain each year and
                    may engage directly with workers on sites to gain additional
                    insights.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Training:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive Limited provides regular training to its
                    colleagues to raise awareness of the risks of modern slavery
                    and human trafficking in its supply chains and business
                    operations.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    The Company also requires its partners to provide training
                    to their staff, suppliers, and providers within their
                    respective supply chains.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Reporting and Whistleblowing:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive Limited encourages all employees, contractors,
                    and stakeholders to report any concerns or suspicions
                    related to modern slavery and human trafficking promptly.
                    The Company provides channels for reporting such concerns,
                    ensuring confidentiality and protection against retaliation.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Review and Continuous Improvement:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Technosive Limited will review and update this policy
                    periodically to ensure its effectiveness, considering
                    changes in legislation, best practices, and emerging risks.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Approved by:
                    <span className="text-primary">
                      {" "}
                      Directors of Technosive Limited
                    </span>
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    This policy reflects Technosive Limited’s commitment to
                    combating modern slavery and human trafficking, promoting
                    ethical practices, and fostering transparency within its
                    operations and supply chains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AntiSlavery;
