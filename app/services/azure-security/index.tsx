import Title from "@/components/Common/Section Title Common/Title";
import Link from "next/link";
import React from "react";
import SData from "./SData";
import SingleCard from "./singleCard";

const AzureDevops = () => {
  return (
    <div className="relative space-y-24 overflow-hidden  pb-4 pt-4">
      <Title title="Azure Security" center />
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 ">
        <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
          Protect Your Business with Azure Security Solutions
        </h3>
        <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          In today’s era of increasing cyber threats, ensuring the security of
          your digital infrastructure is crucial. Technosive offers
          comprehensive Azure Security services to protect your business from
          vulnerabilities and cyber-attacks.
        </p>
      </div>
      {SData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <SingleCard item={item} />
          </React.Fragment>
        );
      })}

      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 ">
        <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
          Why Choose Technosive for Azure Security?
        </h3>
        <p className="mb-2 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          <span className="text-primary">Advanced Security Tools: &nbsp;</span>
          We leverage the latest Azure security technologies to provide
          comprehensive protection.
        </p>
        <p className="mb-2 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          <span className="text-primary">Expert Guidance: &nbsp;</span>Our
          security experts stay ahead of the latest threats and regulatory
          changes to keep your business secure.
        </p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          <span className="text-primary">Holistic Approach: &nbsp;</span>
          We offer end-to-end security solutions, from risk assessment to
          implementation and ongoing management.
        </p>

        <h3 className="font-xl mb-4 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
          Get in Touch Today
        </h3>
        <p className="mb-2 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Are you ready to revolutionize your business with our comprehensive
          solutions? Contact us today to schedule a free consultation and
          discover how{" "}
          <Link
            href="https://outlook.office365.com/owa/calendar/AbdulSalamsCalendar@technosive.co.uk/bookings/"
            target="_blank"
            className="text-primary underline"
          >
            Technosive
          </Link>{" "}
          can help you achieve your vision.
          <br /> <br />{" "}
          <span className="text-black dark:text-white">Email:</span>{" "}
          <Link
            href="mailto:info@technosive.com"
            className="text-primary underline"
            target="_blank"
          >
            info@technosive.com
          </Link>{" "}
          <br /> <span className="text-black dark:text-white">Address:</span>{" "}
          71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
          <br />
          <br />
          Let Technosive be the catalyst for your business’s innovation and
          success. Together, we can achieve extraordinary outcomes.
        </p>
      </div>
    </div>
  );
};

export default AzureDevops;
