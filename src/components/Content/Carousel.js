import React, { useEffect, useState } from "react";
import Card from "./CarouselCard/Card";
function Carousel({ data }) {
  const [currCard, setCurrCard] = useState(0);
  function nextCard() {
    if (currCard === data.length) {
      setCurrCard(0);
    } else {
      setCurrCard((prevCard) => prevCard + 1);
    }
  }
  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      nextCard();
    }, 1000);

    return () => {
      clearInterval(autoPlayTimer);
    };
  }, [currCard]);

  return (
    <div className="flex gap-[14px] border-2 border-[red] w-[407px] overflow-hidden ">
      {data.map((res) => (
        <Card {...res} />
      ))}
    </div>
  );
}

export default Carousel;
