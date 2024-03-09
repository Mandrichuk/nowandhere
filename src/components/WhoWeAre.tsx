import React from "react";

import { WhoWeAreProps } from "../lib/interfaces";

import { WhoWeAreText } from "../constants/Index";

function WhoWeAre({ lang }: WhoWeAreProps) {
  const whoWeAreText =
    WhoWeAreText[lang as keyof typeof WhoWeAreText] || WhoWeAreText["en"];
  const titleWithStyle = {
    __html: whoWeAreText.title,
  };

  return (
    <section id="WhoWeAre" className="WhoWeAre">
      <div className="coverContainer">
        <div className="inner-padding">
          <div className="wrapper">
            <h2 className="title" dangerouslySetInnerHTML={titleWithStyle} />
            <h3 className="article">{whoWeAreText.article}</h3>
            <p className="details">{whoWeAreText.details}</p>
          </div>
        </div>
        <div className="allCircles">
          <div className="firstCircleLine circleLine">
            {whoWeAreText.imagesFirstLine.map((image, index) => (
              <div className="circle" key={`circle-${index}`}>
                {image}
              </div>
            ))}
          </div>
          <div className="secondCircleLine circleLine">
            {whoWeAreText.imagesSecondLine.map((image, index) => (
              <div className="circle" key={`circle-${index}`}>
                {image}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
