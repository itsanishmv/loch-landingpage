import React, { useRef, useState } from "react";
import Testimonial from "./Testimonial";
import useClickandDrag from "../../../hooks/useClickandDrag";
import { testimonials } from "../../../Data.js/Data";
function Testimonials() {
  const sliderRef = useRef(null);
  const { handleMouseMove, handleMouseUp, handleMouseDown } = useClickandDrag(
    sliderRef.current
  );
  return (
    <div className=" flex flex-col items-end text-white w-full px-16 ">
      <h1 className="w-full border-b border-[#E5E5E680] flex justify-end font-Inter text-[25px] pb-5">
        Testimonials
      </h1>
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="flex mt-10 gap-5 overflow-hidden cursor-grabbing w-full "
      >
        {testimonials?.map(({ name, role, comment }) => (
          <Testimonial name={name} role={role} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
