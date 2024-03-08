import React from "react";

import { ButtonProps } from "../lib/interfaces";
import { ContactFormText } from "../constants/Index";

function ButtonSubmit({ children, icon, lang, ref }: ButtonProps) {
  const contactFormText =
    ContactFormText[lang as keyof typeof ContactFormText] ||
    ContactFormText["en"];

  return (
    <div className="buttonContainer">
      <div className="coverContainer">
        <div className="innerPadding">
          <div className="details">
            <div className="icon">{icon}</div>
            <div className="text">
              <p>{children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonSubmit;
