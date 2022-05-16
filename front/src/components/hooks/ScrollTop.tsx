import React from "react";

export const ScrollTop = () => {
  // this function is when you pressed the button this function will enable you to scroll to the top of the page
  const ScrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return { ScrollToTop };
};
