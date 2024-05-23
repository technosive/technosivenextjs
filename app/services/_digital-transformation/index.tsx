import Title from "@/components/Common/Section Title Common/Title";
import React from "react";
import DigitalData from "./digitalData";
import SingleDG from "./singleDg";

const Digital_Transformation = () => {
  return (
    <div className="overflow-hiddenpb-4 relative space-y-24 pt-4">
      <Title title="Digital Transformation" center />
      {DigitalData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <SingleDG item={item} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Digital_Transformation;
