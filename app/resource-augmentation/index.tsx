import Title from "@/components/Common/Section Title Common/Title";
import React from "react";
import cyberData from "./resourceAugData";
import { default as SingleResourceAug } from "./singleResouceAug";

const Resource_Augmentation = () => {
  return (
    <div className="relative space-y-24 overflow-hidden pb-4 pt-4">
      <Title title="Resource Augmentation" center />
      {cyberData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <SingleResourceAug item={item} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Resource_Augmentation;
