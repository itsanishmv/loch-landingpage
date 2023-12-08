import React from "react";
import Content from "../Content/Content";
import Testimonials from "../Content/Testimonials/Testimonials";
import { contentConfig } from "../../Data.js/Data";
function ContentSection() {
  return (
    <div
      style={{
        background:
          "radial-gradient(130% 100% at 0% 100%, rgba(31, 169, 17, 0.810119) 27.21%, #2F15D0 74.58%, #19191A 100%)",
      }}
      className="w-full sm:w-3/5 flex flex-col  justify-center gap-[4.5rem] sm:py-[86px] py-10 "
    >
      {contentConfig?.map((data) => (
        <Content {...data} />
      ))}
      <Testimonials />
    </div>
  );
}

export default ContentSection;
