import React from "react";

import ContactLink from "./ContactLink";

import { GetInTouchProps } from "../lib/interfaces";

import { GetInTouchText as GetInTouchTextConstant } from "../constants/Index";

import { toUpperCase } from "../utils/toUpperCase";

import CircularText from "./CircularText";


function GetInTouch({ lang }: GetInTouchProps) {
  const getInTouchText =
    GetInTouchTextConstant[lang as keyof typeof GetInTouchTextConstant] ||
    GetInTouchTextConstant["en"];

  return (
    <section id="GetInTouch" className="GetInTouch">
      <div className="coverContainer">
        <div className="inner-padding">
          <div className="name">{toUpperCase(getInTouchText.name)}</div>
          <div className="textContainer">
            <p className="title">{getInTouchText.title}</p>
            <p>{getInTouchText.label}</p>
          </div>
          <div className="details">
            <div className="links">
              <div className="contacts">
                {getInTouchText.contacts.map((contact, index) => (
                  <div className="contact" key={`contact-${index}`}>
                    <ContactLink {...contact} />
                  </div>
                ))}
              </div>
              <div className="socials">
                {getInTouchText.socials.map((social, index) => (
                  <div className="social" key={`social-${index}`}>
                    <ContactLink {...social} />
                  </div>
                ))}
              </div>
            </div>
            <div className="circle">
            <CircularText color="#fef073" icon={getInTouchText.circle.icon}>{getInTouchText.circle.text}</CircularText>
         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
