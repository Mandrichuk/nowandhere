import React, { useState, useEffect } from "react";

import { InputProps } from "../lib/interfaces";

import { InputAlertText } from "../constants/Index";

function Input({
  lang,
  error,
  type,
  placeholder,
  field,
  devastation,
  getValue,
}: InputProps) {
  const inputAlertTextData = InputAlertText[lang] || InputAlertText["en"];
  const [text, setText] = useState("");

  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  useEffect(() => {
    getValue(field, text);
  }, [text]);

  useEffect(() => {
    if (devastation) {
      setText("");
    }
  }, [devastation]);


  return (
    <div id={`input-${field}`} className="InputContainer">
      <div className={`cover ${error && text.length <= 0 && "error"}`}>
        <input
          type={type}
          placeholder={`${placeholder}...`}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Input;
