import Title from "@/components/Common/Section Title Common/Title";
import React from "react";
import cyberData from "./cyberData";
import SingleCyberData from "./singleCyberData";

const Cyber_security = () => {
  return (
    <div className="relative space-y-24 overflow-hidden pb-4 pt-4">
      <Title title="Cybersecurity" center />
      {cyberData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <SingleCyberData item={item} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Cyber_security;
