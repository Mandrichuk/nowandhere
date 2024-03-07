import React from "react";

import { LogoProps } from "../lib/interfaces";
import { ColorizeSubstringProps } from "../lib/types";

import { LogoText } from "../constants/Index";

import { toUpperCase } from "../utils/toUpperCase";

function Logo({ lang }: LogoProps) {
  const nameProps: ColorizeSubstringProps = {
    text: LogoText.name,
    color: "red",
  };
  const titleWithStyle = {
    __html: LogoText.name,
  };

  return (
    <section id="Logo" className="Logo">
      <div
        id="logoName"
        className="name"
        dangerouslySetInnerHTML={titleWithStyle}
      />

      <div data-anchor="logoName" className="article">
        {toUpperCase(LogoText.article)}
      </div>
      <div data-anchor="logoName" className="label">
        {LogoText.label}
      </div>
    </section>
  );
}

export default Logo;
