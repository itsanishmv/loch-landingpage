import React from "react";

function Card({ icon, title, checkbox, id }) {
  return (
    <div
      className={`bg-white text-dark h-[171px] min-w-[189px]  rounded-lg p-[14px] ${
        !checkbox && "bg-gradient-to-t from-blue to-white"
      } `}
    >
      <div className="flex justify-between  items-start">
        <img
          className=" stroke-dark  w-[28px] h-[28px]"
          src={icon}
          alt="icons"
        />
        {checkbox ? (
          <input type="checkbox" />
        ) : (
          <span className=" text-[9px] font-medium">Save</span>
        )}
      </div>

      <h3
        className={`${
          id === 1 ? " text-sm  " : " text-xs"
        } mt-[14px] leading-[16.8px] `}
      >
        {title}
      </h3>
      {!checkbox ? (
        <input
          className=" outline-none border border-lightgrey w-full py-[8.4px] px-[11.2px] rounded-lg mt-[15.5px]"
          type="text"
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Card;
