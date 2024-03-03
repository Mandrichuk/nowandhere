import React from "react";

import { WhatWeDoProps } from "../lib/interfaces";

import { WhatWeDoText as WhatWeDoTextConstant } from "../constants/Index";

import { toUpperCase } from "../utils/toUpperCase";
import italicText from "../utils/italicText";

function WhatWeDo({ lang }: WhatWeDoProps) {
  const WhatWeDoText = WhatWeDoTextConstant[lang] || WhatWeDoTextConstant["en"];

  return (
    <section id="WhatWeDo" className="WhatWeDo container">
      <div className="inner-padding">
        <p className="name">{toUpperCase(WhatWeDoText.name)}</p>
        <p
          className="title"
          dangerouslySetInnerHTML={{ __html: italicText(WhatWeDoText.title) }}
        />

        <div className="circle">
          <p className="text">{WhatWeDoText.circle.text}</p>
          <div className="icon">{WhatWeDoText.circle.icon}</div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
