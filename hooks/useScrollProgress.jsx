import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);
  
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.screenY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion((currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);

    // clear event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
