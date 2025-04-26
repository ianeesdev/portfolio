"use client";

import { useState, useEffect } from "react";

// Custom hook to track scroll position
export const useScrollObserver = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    // Throttle the scroll event to improve performance
    let timer = null;
    const throttledScroll = () => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          handleScroll();
        }, 100); // Adjust the throttle delay as needed
      }
    };

    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timer) clearTimeout(timer);
    };
  }, [lastScrollY]);

  return { scrollY, scrollDirection };
};

// Custom hook to check if element is in viewport
export const useElementOnScreen = (options) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isVisible];
};
