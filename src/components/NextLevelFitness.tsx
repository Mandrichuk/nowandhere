import React from "react";

import { ProjectProps } from "../lib/interfaces";

import { nextLevelFitnessText } from "../constants/Index";

import TypingText from "./TypingText";

function NextLevelFitness({ lang }: ProjectProps) {
  const NextLevelFitnessText =
    nextLevelFitnessText[lang] || nextLevelFitnessText["en"];

  return (
    <section id="NextLevelFitness" className="NextLevelFitness">
      <a
        href={`${NextLevelFitnessText.projLink}`}
        target="_blank"
        className="coverContainer"
      >
        <div className="inner-padding">
          <div className="project">
            <div className="number">{NextLevelFitnessText.number}</div>
            <div className="projectDetails">
              <div className="logo">
                <img
                  src={`${NextLevelFitnessText.logo}`}
                  alt="lastProjectLogo"
                />
              </div>
              <div className="text">
                <h2 id="name" className="name">
                  {NextLevelFitnessText.name}
                </h2>
              </div>
            </div>
            <div className="launch">
              <span
                onClick={() =>
                  window.open(`${NextLevelFitnessText.launch}`, "_blank")
                }
              >
                <TypingText>{NextLevelFitnessText.launch}</TypingText>
              </span>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}

export default NextLevelFitness;
