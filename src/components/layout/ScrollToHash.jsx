import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const hash = location.hash;

    const scrollToSection = () => {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    requestAnimationFrame(scrollToSection);
  }, [location]);

  return null;
}

export default ScrollToHash;