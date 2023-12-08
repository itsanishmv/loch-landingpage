import React from "react";
import Carousel from "./Carousel";
function Content({ flip, isCarousel, carouselData, img, icon, title, body }) {
  return (
    <div
      className={`${
        flip && "flex-row-reverse"
      } text-white font-Inter flex sm:justify-between justify-center items-center flex-wrap container mx-auto max-sm:gap-4 w-full  `}
    >
      <div
        className={`max-sm:text-center max-sm:items-center flex flex-col w-[322px] gap-4 sm:ml-16  ${
          flip && "sm:text-right text-center sm:items-end sm:mr-16"
        }`}
      >
        <img
          className="h-[32px] w-[32px] fill-white"
          src={icon}
          alt="bell-icon"
        />
        <h1
          style={{ textShadow: "0px 4px 4px 0px #00000040" }}
          className=" drop-shadow-text-drop-shadow text-[31px] font-medium  leading-[37.2px]"
        >
          {title}
        </h1>
        <h5 className=" font-medium text-base text-text-background leading-[19.2px] font-Inter ">
          {body}
        </h5>
      </div>
      {isCarousel ? (
        <div className=" ">
          <Carousel data={carouselData} />
        </div>
      ) : (
        <img className=" sm:ml-16" src={img} alt={img} />
      )}
    </div>
  );
}

export default Content;
