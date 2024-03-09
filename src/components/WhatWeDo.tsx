import React from "react";

import { WhatWeDoProps } from "../lib/interfaces";

import { WhatWeDoText as WhatWeDoTextConstant } from "../constants/Index";

import { toUpperCase } from "../utils/toUpperCase";
import italicText from "../utils/italicText";

import CircularText from "./CircularText";

function WhatWeDo({ lang }: WhatWeDoProps) {
  const WhatWeDoText = WhatWeDoTextConstant[lang] || WhatWeDoTextConstant["en"];

  return (
    <section id="WhatWeDo" className="WhatWeDo container">
      <div className="coverContainer">
        <div className="inner-padding">
          <p className="name">{toUpperCase(WhatWeDoText.name)}</p>
          <div className="mainSection">
            <h2
              className="title"
              dangerouslySetInnerHTML={{
                __html: italicText(WhatWeDoText.title),
              }}
            />

            <div className="circle">
              <CircularText color="#8985E0" icon={WhatWeDoText.circle.icon} link="Services">
                {WhatWeDoText.circle.text}
              </CircularText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
