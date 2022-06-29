import { useState, useEffect } from "react";

export const Scroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [is_scrolled, setScrooled] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return { is_scrolled, scrollY, setScrooled };
};
