import Title from "@/components/Common/Section Title Common/Title";
import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";

const privacyMetadata = {
  url: "https://technosive.co.uk/privacy-policy",
  title: "Privacy Policy | Technosive",
  description:
    "Our Privacy Policy: Safeguarding your data is our priority. Learn how we collect, use, and protect your information. Your privacy matters to us.",
  imgUrl: "https://technosive.co.uk/images/logo/Technosive.webp",
  imgAltText: "Technosive",
  keywords: [
    "Technosive",
    "Privacy Policy",
    "Data Protection",
    "Information Security",
    "Privacy Matters",
    "Legal Processing",
    "Rights Management",
  ],
};
const social = {
  title: privacyMetadata.title,
  description: privacyMetadata.description,
  images: [
    {
      url: privacyMetadata.imgUrl,
      alt: privacyMetadata.imgAltText,
    },
  ],
};
export const metadata: Metadata = {
  metadataBase: new URL(privacyMetadata.url),
  title: privacyMetadata.title,
  description: privacyMetadata.description,
  keywords: privacyMetadata.keywords,
  alternates: {
    canonical: privacyMetadata.url,
  },

  openGraph: social,
  twitter: social,
};

const PrivacyPolicy = () => {
  const HOW_WE_USE_YOUR_INFORMATION = [
    "Contact: To respond to your inquiries or requests for information",

    "Newsletter: To send you our newsletter containing company updates, industry news, and promotional offers (with your explicit consent).",

    "Website Improvements: To analyse website traffic and user behaviour to improve the usability and functionality of our website",

    "Personalized Content and Marketing: To provide you with relevant content and marketing materials based on your interests (with your consent).",

    "Legal Compliance: To comply with applicable laws and regulations, such as court orders or subpoenas.",
  ];

  const LEGAL_BASIS_FOR_PROCESSING = [
    "Consent: For sending you marketing materials, such as our newsletter.",

    "Contract: To fulfil our contractual obligations with you, such as responding to your inquiries.",

    "Legitimate Interest: For website analytics and personalized content, as long as our interests are not overridden by your privacy rights.",
  ];

  const DATA_SHARING_AND_DISCLOSURE = [
    "Service Providers: We may share your information providers who help us operate our website or deliver our services, such as email service providers or web hosting companies. These service providers are contractually obligated to protect your information and are prohibited from using it for any other purpose.",

    "LegalWe may disclose your information if required by law, such as in response to a court order or subpoena.",

    "Merger or Acquisition: If we are involved in a merger, acquisition, or other business transaction, your information may be transferred as part of the assets transferred.",
  ];

  const YOUR_RIGHTS = [
    "Access: You have the right to access your personal information and request a copy from us.",

    "Rectification: You have the right to request that we correct any inaccuracies in your personal information. ",

    "Erasure: You have the right to request that we erase your personal information.",

    "Restriction of Processing: You have the right to request that we restrict the of your personal information.",

    "Portability: You have the right to request that we provide you with your personal information in a portable format.",

    "Objection: You have the right to object to the processing of your personal  for marketing purposes or on grounds related to your particular situation.",
  ];

  return (
    <>
      <section className="pb-[120px] pt-[110px] sm:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <div>
                  <Title title="Privacy Policy" center />

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Introduction:
                  </h3>
                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {` This Privacy Policy outlines how Technosive ("we," "us," or
                    "our") collects, uses, and protects your personal
                    information when you visit our website or subscribe to our
                    newsletter, in full compliance with the UK Data Protection
                    Act 2018 and the General Data Protection Regulation (GDPR).`}
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Information We Collect:
                  </h3>
                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We collect the following personal information from you:
                  </p>

                  <h3 className="mb-4 text-base leading-tight text-black dark:text-white  sm:leading-tight lg:text-xl lg:leading-tight  xl:leading-tight">
                    Required Information:
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Contact Information: Name and email address.
                    </li>
                    <li className="mb-2 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Website Analytics: Device information, browsing activity,
                      IP address (anonymized unless required for legitimate
                      interests).
                    </li>
                  </ul>

                  <h3 className="mb-4 text-base leading-tight text-black dark:text-white  sm:leading-tight lg:text-xl lg:leading-tight  xl:leading-tight">
                    Optional Information:
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Phone number.
                    </li>
                    <li className="mb-2 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Organization name.
                    </li>
                    <li className="mb-2 ml-[1em] list-outside text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Newsletter Subscription: Email address
                    </li>
                  </ul>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    How We Use Your Information:
                  </h3>
                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We use your personal information for the following purposes:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {HOW_WE_USE_YOUR_INFORMATION.map((item, index) => {
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
                    Legal Basis for Processing:
                  </h3>
                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We rely on the following legal bases to process your
                    personal information:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {LEGAL_BASIS_FOR_PROCESSING.map((item, index) => {
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
                    Data Sharing and Disclosure:
                  </h3>
                  <p className="mb-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We will not share or disclose your personal information with
                    any third parties without your consent, except in the
                    following limited circumstances:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {DATA_SHARING_AND_DISCLOSURE.map((item, index) => {
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
                    Data Security:
                  </h3>

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We have implemented appropriate technical and organizational
                    measures to protect your personal information from
                    unauthorized access, disclosure, alteration, or destruction.
                    These measures include encryption, secure storage, and
                    access controls. However, no website or internet
                    transmission is completely secure, so we cannot guarantee
                    the absolute security of your information.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Data Retention:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We will retain your personal information for as long as
                    necessary to fulfil the purposes for which it was collected
                    and to comply with applicable laws and regulations. This
                    will typically be for [your retention period, e.g., 5 years]
                    after your last interaction with us or until you withdraw
                    your consent, whichever is earlier.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Your Rights:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    You have the following rights regarding your personal
                    information under UK and EU data protection law:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    {YOUR_RIGHTS.map((item, index) => {
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
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    You can exercise any of these rights by contacting us at{" "}
                    <a
                      href="mailto:info@technosive.co.uk."
                      className="text-primary underline"
                    >
                      info@technosive.co.uk.
                    </a>{" "}
                    We will respond to your request within 15 working days.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Newsletter Subscription:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    When you submit your email address to subscribe to our
                    newsletter, we will use this information to send you
                    updates, promotions, and other relevant content. You can
                    opt-out of receiving these communications at any time by
                    following the unsubscribe instructions included in each
                    email.
                  </p>

                  <div id="cookie-policy">
                    <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                      Cookies and Tracking Technologies:
                    </h3>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      We may use cookies and other tracking technologies to
                      collect information about your use of our website, such as
                      session cookies and persistent cookies. You can control
                      the use of cookies by adjusting your browser settings.
                      However, disabling cookies may limit your ability to use
                      certain features of our website.
                    </p>
                  </div>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Changes to this Privacy Policy:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We may update this Privacy Policy from time to time. We will
                    post any changes on this page, so please review this Privacy
                    Policy periodically for updates. The effective date of the
                    latest version will be indicated at the top.
                  </p>

                  <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Contact Us:
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or your personal information, you can
                    contact us at{" "}
                    <a
                      href="mailto:info@technosive.co.uk."
                      className="text-primary underline"
                    >
                      info@technosive.co.uk.
                    </a>
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    By using our website and providing us with your information,
                    you consent to the terms of this Privacy Policy.
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

export default PrivacyPolicy;
