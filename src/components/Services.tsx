import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { ServicesProps } from "../lib/interfaces";
import { DescriptionProps } from "../lib/types";

import { toUpperCase } from "../utils/toUpperCase";
import italicText from "../utils/italicText";

import { OurServicesText as OurServicesConstant } from "../constants/Index";

function Services({ lang }: ServicesProps) {
  const servicesText =
    OurServicesConstant[lang as keyof typeof OurServicesConstant] ||
    OurServicesConstant["en"];

  return (
    <section id="Services" className="Services">
      {servicesText.services.map((service, index) => (
        <div className="wrapper" key={index}>
          <Description {...service} />
          <div className="statement">
            <div className="inner-padding">
              <div className="icon">{service.icon}</div>
              <p className="clarification">{service.clarification}</p>
              <h3
                className="title"
                dangerouslySetInnerHTML={{
                  __html: italicText(service.statement),
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function Description({
  title,
  article,
  icon,
  clarification,
}: DescriptionProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
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

  return (
    <motion.div
      className="description"
      initial={{ x: isVisible ? 0 : "+25vw" }}
      animate={{ x: isVisible ? 0 : "+25vw" }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      ref={containerRef}
    >
      <div className="inner-padding">
        <div className="icon">{icon}</div>
        <div className="text">
          <p className="title">{title}</p>
          <p className="article">{article}</p>
          <p className="clarification">{clarification}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
