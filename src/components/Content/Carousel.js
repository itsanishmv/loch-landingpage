import React, { useEffect, useState } from "react";
import Card from "./CarouselCard/Card";

function Carousel({ data }) {
  return (
    <div className="relative flex gap-[14px] w-screen sm:w-[350px] overflow-hidden before:content-['']  before:absolute  before:bg-gradient-to-r before:from-dark before:to-[#0000000A] before:h-full before:w-1/4 before:opacity-[0.8] before:z-20 before:left-0  after:content-[''] after:bg-gradient-to-l after:from-dark  after:to-[#0000000A] after:absolute after:h-full after:w-1/3 after:z-20 after:right-0  ">
      <div className={`flex gap-[14px] animate-slide-animation`}>
        {data?.map((res, index) => (
          <Card key={index} {...res} index={index} />
        ))}
      </div>
      <div className={` flex gap-[14px]   animate-slide-animation`}>
        {data?.map((res, index) => (
          <Card key={index} {...res} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
