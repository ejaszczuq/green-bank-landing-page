import { animateScroll } from "react-scroll";

export const scrollToTop = (duration: number, delay: number) => {
  animateScroll.scrollToTop({
    behavior: "smooth",
    duration,
    delay
  });
};
