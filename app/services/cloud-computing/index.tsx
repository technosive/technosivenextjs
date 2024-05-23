import Title from "@/components/Common/Section Title Common/Title";
import Link from "next/link";
import React from "react";
import cyberData from "./cloudCompData";
import SingleCloudComp from "./singleCyberData";

const Cloud_Computing = () => {
  return (
    <div className="relative space-y-24 overflow-hidden pb-4 pt-4">
      <Title title="Cloud Computing" center />
      {cyberData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <SingleCloudComp item={item} />
          </React.Fragment>
        );
      })}
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 ">
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

export default Cloud_Computing;
