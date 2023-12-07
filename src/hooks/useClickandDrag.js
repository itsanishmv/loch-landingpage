import React, { useState } from "react";

function useClickandDrag(sliderRef) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef?.offsetLeft);
    setScrollLeft(sliderRef?.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();

    const x = e.pageX - sliderRef?.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.scrollLeft = scrollLeft - walk;
  };
  return { handleMouseDown, handleMouseMove, handleMouseUp };
}

export default useClickandDrag;
