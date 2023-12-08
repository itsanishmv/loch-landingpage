export const testimonials = [
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
const carouselJSON = [
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
export const contentConfig = [
  {
    flip: false,
    isCarousel: true,
    carouselData: carouselJSON,
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
