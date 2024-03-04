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
            <h1 className="title" dangerouslySetInnerHTML={titleWithStyle} />
            <p className="article">{whoWeAreText.article}</p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
