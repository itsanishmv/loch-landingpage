import React from "react";
import Content from "../Content/Content";
import Testimonials from "../Content/Testimonials/Testimonials";
function ContentSection() {
  const arr = [
    {
      id: 1,
      icon: "./Bell.svg",
      title: "We’ll be sending  notifications to you here",
      checkbox: false,
    },
    {
      id: 2,
      icon: "./hamburgerMenu.svg",
      title: "Notify me when any wallets move more than",
      checkbox: true,
    },
    {
      id: 3,
      icon: "./clock.svg",
      title: "Notify me when any wallet dormant for",
      checkbox: true,
    },
  ];
  const contentConfig = [
    {
      flip: false,
      isCarousel: true,
      carouselData: arr,
      title: "Get notified when a highly correlated whale makes a move",
      body: "Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.",
      icon: "./Bell.svg",
    },
    {
      flip: true,
      isCarousel: false,
      img: "./Cohorts.svg",
      title: "Watch what the whales are doing",
      body: "All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.",
      icon: "./Eye.svg",
    },
  ];
  return (
    <div
      style={{
        background:
          "radial-gradient(130% 100% at 0% 100%, rgba(31, 169, 17, 0.810119) 27.21%, #2F15D0 74.58%, #19191A 100%)",
      }}
      className=" w-3/5 flex flex-col gap-[4.5rem] py-[86px] "
    >
      {contentConfig?.map((data) => (
        <Content {...data} />
      ))}
      <Testimonials />
    </div>
  );
}

export default ContentSection;
