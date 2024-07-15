import { animateScroll } from "react-scroll";

export const scrollToTop = () => {
  animateScroll.scrollToTop({
    duration: 110, // Adjust duration for desired scrolling speed (milliseconds)
    behavior: "smooth",
    delay: 100 // Set a shorter delay (in milliseconds)
  });
};
