import React from "react";

import { images } from "../constants/Index";

import { IntroductionProps } from "../lib/interfaces";

import { IntroductionText } from "../constants/Index";

function Introduction({ lang }: IntroductionProps) {
  const introductionText = IntroductionText[lang] || IntroductionText["en"];

  return (
    <section id="IntroductionSection" className="IntroductionSection">
      <div id="servicesContainer" className="servicesContainer">
        <div
          id="container-introduction"
          className="container container-introduction"
        >
          <div className="inner-padding inner-padding-introduction">
            <p className="name">{introductionText.ourServices.name}</p>

            <div className="running-text">
              {introductionText.ourServices.runningText}
            </div>

            <div className="details">
              <p className="title">{introductionText.ourServices.title}</p>
              <div className="imgContainer">
                {introductionText.ourServices.icon}
              </div>
            </div>
          </div>
        </div>
        <div id="figures" data-anchor="container-two" className="figures">
          <div data-anchor="figures" className="triangleImg figureImg">
            {introductionText.ourServices.bgImages.triangleImg}
          </div>
          <div data-anchor="figures" className="squareImg figureImg">
            {introductionText.ourServices.bgImages.squareImg}
          </div>
          <div data-anchor="figures" className="circleImg figureImg">
            {introductionText.ourServices.bgImages.circleImg}
          </div>
        </div>
      </div>

      <div className="secondSection">
        <div className="fastLinks">
          <div id="lastProjectContainer" className="lastProjectContainer">
            <div id="container-last-project" className="container">
              <div className="inner-padding">
                <p className="name"></p>

                <div className="running-text">
                  {introductionText.ourLastProject.runningText}
                </div>

                <div className="details">
                  <div className="imgContainer">
                    {introductionText.ourLastProject.icon}
                  </div>
                  <p className="title">
                    {introductionText.ourLastProject.title}
                  </p>
                </div>
              </div>
            </div>
            <div data-anchor="lastProjectContainer" className="clickText">
              Click
            </div>
          </div>

          <div id="aboutUsContainer" className="aboutUsContainer">
            <div id="container-one" className="container">
              <div className="inner-padding ">
                <p className="name"></p>

                <div className="running-text">
                  {introductionText.aboutUs.runningText}
                </div>

                <div className="details">
                  <div className="imgContainer">
                    {introductionText.aboutUs.icon}
                  </div>
                  <p className="title">{introductionText.aboutUs.title}</p>
                </div>
              </div>
            </div>
            <div data-anchor="aboutUsContainer" className="clickText">
              Click
            </div>
          </div>
        </div>

        <div id="contactUsContainer" className="contactUsContainer">
          <div id="container-one" className="container">
            <div className="inner-padding ">
              <p className="name"></p>

              <div className="running-text">
                {introductionText.contactUs.runningText}
              </div>

              <div className="details">
                <div className="imgContainer">
                  {introductionText.contactUs.icon}
                </div>
                <p className="title">{introductionText.contactUs.title}</p>
              </div>
            </div>
          </div>
          <div data-anchor="lastProjectContainer" className="clickText">
            Click
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
