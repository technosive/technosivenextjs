import Title from "@/components/Common/Section Title Common/Title";
import React from "react";
import SingleSoftwareCard from "./singleSoftwareData";
import SoftwareData from "./softwareData";

const Software_Dev = () => {
  return (
    <div className="relative space-y-24 overflow-hidden pb-4 pt-4">
      <Title title="Software Development" center />
      {SoftwareData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <SingleSoftwareCard item={item} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Software_Dev;
