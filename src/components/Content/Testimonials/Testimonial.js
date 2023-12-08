import React from "react";

function Testimonial({ name, role, comment }) {
  return (
    <div className="  bg-white text-dark flex flex-col snap-center rounded-lg font-Inter p-3 sm:p-5 gap-2 sm:gap-5">
      <div className="flex items-center gap-2 ">
        <h1 className=" font-semibold text-sm sm:text-base">{name}</h1>
        <span className=" text-[8px] sm:text-[13px] font-medium text-[#96979A]">
          {role}
        </span>
      </div>
      <p className=" font-medium text-sm sm:text-base leading-[19.2px] w-[313px] line-clamp-3">
        {comment}
      </p>
    </div>
  );
}

export default Testimonial;
