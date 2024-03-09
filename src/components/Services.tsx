import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { ServicesProps } from "../lib/interfaces";
import { DescriptionProps, StatementProps } from "../lib/types";
import { OurServicesText as OurServicesConstant } from "../constants/Index";
import { toUpperCase } from "../utils/toUpperCase";
import italicText from "../utils/italicText";
import { useWindowWidth } from "../utils/useWindowWidth";

function Services({ lang }: ServicesProps) {
  const servicesText =
    OurServicesConstant[lang as keyof typeof OurServicesConstant] ||
    OurServicesConstant["en"];

  return (
    <section id="Services" className="Services">
      <div className="coverContainer">
        {servicesText.services.map((service, index) => (
          <div className="wrapper" key={`wrapper-${index}`}>
            <Description {...service} key={`description-${index}`} />
            <Statement {...service} key={`statement-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Description({
  title,
  article,
  icon,
  clarification,
}: DescriptionProps) {
  const windowWidth = useWindowWidth();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const descrptionVw = {
    1920: 0,
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;
      if (!element) return;

      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const shouldBeVisible = top < windowHeight * 0.75;

      setIsVisible(shouldBeVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function getVw() {
    if (windowWidth < 410) {
      return "+24vw";
    } else if (windowWidth < 420) {
      return "+18vw";
    } else if (windowWidth < 950) {
      return "+21vw";
    } else if (windowWidth < 1100) {
      return "+25vw";
    } else if (windowWidth < 1400) {
      return "+23vw";
    } else if (windowWidth < 1800) {
      return "+18vw";
    } else if (windowWidth < 2000) {
      return "+18.5vw";
    } else if (windowWidth < 2500) {
      return "+14.5vw";
    }
    return "+5vw";
  }

  const initialX = isVisible ? 0 : getVw();

  return (
    <motion.div
      className="description"
      initial={{ x: initialX }}
      animate={{ x: isVisible ? 0 : getVw() }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      ref={containerRef}
    >
      <div className="inner-padding">
        <div className="icon">{icon}</div>
        <div className="text">
          <h2 className="title">{title}</h2>
          <p className="article">{article}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Statement({
  title,
  article,
  icon,
  clarification,
  statement,
}: StatementProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;
      if (!element) return;

      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const shouldBeVisible = top < windowHeight * 0.75;

      setIsVisible(shouldBeVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function getVw() {
    if (windowWidth < 410) {
      return "-24vw";
    } else if (windowWidth < 420) {
      return "-21vw";
    } else if (windowWidth < 950) {
      return "-25vw";
    } else if (windowWidth < 1100) {
      return "-25vw";
    } else if (windowWidth < 1400) {
      return "-23.5vw";
    } else if (windowWidth < 1800) {
      return "-18vw";
    } else if (windowWidth < 2000) {
      return "-15vw";
    } else if (windowWidth < 2500) {
      return "-14.5vw";
    }
    return "-5vw";
  }

  const initialX = isVisible ? 0 : getVw();

  return (
    <>
      {windowWidth > 850 ? (
        <motion.div
          className="statement"
          initial={{ x: initialX }}
          animate={{ x: isVisible ? 0 : getVw() }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          ref={containerRef}
        >
          <div className="inner-padding">
            <div className="icon">{icon}</div>
            <p className="clarification">{clarification}</p>
            <h3
              className="title"
              dangerouslySetInnerHTML={{
                __html: italicText(statement),
              }}
            />
          </div>
        </motion.div>
      ) : (
        <div className="statement">
          <div className="inner-padding">
            <div className="icon">{icon}</div>
            <p className="clarification">{clarification}</p>
            <h3
              className="title"
              dangerouslySetInnerHTML={{
                __html: italicText(statement),
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
