import React, { useRef, useState } from "react";
import Testimonial from "./Testimonial";
const testimonials = [
  {
    name: "Jack F",
    role: "Ex Blackrock PM",
    comment:
      "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
  },
  {
    name: "Shiv S",
    role: "Co-Founder Magik Labs",
    comment:
      "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
  },
  {
    name: "Yash P",
    role: "Research, 3poch Crypto Hedge Fund",
    comment:
      "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
  },
];
function Testimonials() {
  const sliderRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier based on sensitivity
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };
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
        {testimonials.map(({ name, role, comment }) => (
          <Testimonial name={name} role={role} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
