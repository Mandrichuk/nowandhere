import React, { useState, useEffect } from "react";
import { InputProps } from "../lib/interfaces";
import { InputAlertText } from "../constants/Index";

function Textarea({
  lang,
  error,
  placeholder,
  field,
  devastation,
  getValue,
}: InputProps) {
  const inputAlertTextData = InputAlertText[lang] || InputAlertText["en"];
  const [text, setText] = useState("");

  function changeText(e: React.ChangeEvent<HTMLTextAreaElement>) {
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
    <div id={`input-${field}`} className="TextareaContainer">
      <div className="cover">
        <textarea
          placeholder={`${placeholder}...`}
          onChange={changeText}
        />
        {error && <label>{inputAlertTextData.alert}</label>}
      </div>
    </div>
  );
}

export default Textarea;
