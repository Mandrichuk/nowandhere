import React, { useState, useEffect, useRef } from "react";
import CircleType from "circletype";

import { CircularTextProps } from "../lib/types";

function CircularText({ children, icon, color }: CircularTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const rotate = new CircleType(textElement).radius(40);
      const handleScroll = () => {
        if (textElement) {
          textElement.style.transform = `rotate(${window.scrollY * 0.10}deg)`;
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="CiricularTextContainer">
      <div className="circular-text">
        <p className="text" ref={textRef}>
          {children}
        </p>
        <div className="arrow" style={{ fill: color }}>{icon}</div>
      </div>
    </div>
  );
}

export default CircularText;
