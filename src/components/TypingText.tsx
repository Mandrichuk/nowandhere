import React, { useState, useEffect, useRef } from "react";
import { TypingAnimationProps } from "../lib/types";

const TypingText: React.FC<TypingAnimationProps> = ({ children }) => {
  const [visibleChars, setVisibleChars] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervalId = setInterval(() => {
        setVisibleChars((prevChars) => {
          if (prevChars >= children.length) {
            clearInterval(intervalId);
            return prevChars;
          }
          return prevChars + 1;
        });
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [isVisible, children]);

  return (
    <div ref={containerRef} className="typing-animation">
      <span>{children.substring(0, visibleChars)}</span>
    </div>
  );
};

export default TypingText;
