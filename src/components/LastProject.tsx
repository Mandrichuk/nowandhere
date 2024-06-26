import React from "react";

import { ProjectProps } from "../lib/interfaces";

import { LastProjectText } from "../constants/Index";

import TypingText from "./TypingText";

function LastProject({ lang }: ProjectProps) {
  const lastProjectText = LastProjectText[lang] || LastProjectText["en"];

  return (
    <section id="LastProject" className="LastProject">
      <a
        href={`${lastProjectText.projLink}`}
        target="_blank"
        className="coverContainer"
      >
        <div className="inner-padding">
          <div className="project">
            <div className="number">{lastProjectText.number}</div>
            <div className="projectDetails">
              <div className="text">
                <p className="title">{lastProjectText.title}</p>
                <h2 id="name" className="name">
                  {lastProjectText.name}
                </h2>
                <p data-anchor="name" className="description">
                  {lastProjectText.description}
                </p>
              </div>
              <div className="logo">
                <img src={`${lastProjectText.logo}`} alt="lastProjectLogo" />
              </div>
            </div>
            <div className="launch">
              <span
                onClick={() =>
                  window.open(`${lastProjectText.launch}`, "_blank")
                }
              > 
                <TypingText>{lastProjectText.launch}</TypingText>
              </span>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}

export default LastProject;
