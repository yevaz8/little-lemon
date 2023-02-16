import { useEffect, useState } from "react";
export const useWidth = () => {
  const [hideImage, setHideImage] = useState(window.innerWidth > 750);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 750) {
        setHideImage(false);
      } else {
        setHideImage(true);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return [hideImage];
};
