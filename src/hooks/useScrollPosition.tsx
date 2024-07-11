import { useEffect, useState } from "react";

// Initial scroll offset, considering the global window object if available
const initOffset = typeof window !== "undefined" ? window.scrollY : 0;

// Custom hook to track the scroll position of the viewport
const useScrollPosition = () => {
  // State variable to store the current scroll offset
  const [offset, setOffset] = useState(initOffset);

  // Function to handle scroll events and update the offset state
  const handleScroll = () => {
    // Get the current scroll position from the window object
    const position = window.scrollY;
    setOffset(position);
  };

  // useEffect hook to listen for scroll events and call handleScroll on update
  useEffect(() => {
    // Add event listener for scroll events on the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array: run effect only once on mount

  return { offset };
};

export default useScrollPosition;
