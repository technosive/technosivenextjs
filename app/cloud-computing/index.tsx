import Title from "@/components/Common/Section Title Common/Title";
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
    </div>
  );
};

export default Cloud_Computing;
