import Title from "@/components/Common/Section Title Common/Title";
import React from "react";
import AppModernData from "./AppModernData";
import { default as SingleAppMod } from "./singleAppModern";

const App_Modern = () => {
  return (
    <div className="relative space-y-24 overflow-hidden  pb-4 pt-4">
      <Title title="Application Modernization" center />
      {AppModernData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <SingleAppMod item={item} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default App_Modern;
