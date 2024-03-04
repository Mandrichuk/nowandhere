import React from "react";

import { LastProjectProps } from "../lib/interfaces";

import { LastProjectText } from "../constants/Index";

function LastProject({ lang }: LastProjectProps) {
  const lastProjectText = LastProjectText[lang] || LastProjectText["en"];

  return (
    <section id="LastProject" className="LastProject">
      <div className="coverContainer">
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
              <a href={`${lastProjectText.launch}`}>{lastProjectText.launch}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LastProject;
