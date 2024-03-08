import React, { useState, useRef } from "react";
import { ContactFormProps } from "../lib/interfaces";
import { ContactFormText } from "../constants/Index";
import Input from "./Input";
import Textarea from "./Textarea";
import ButtonSubmit from "./Button";

function ContactForm({ lang }: ContactFormProps) {
  const contactFormText =
    ContactFormText[lang as keyof typeof ContactFormText] ||
    ContactFormText["en"];
  const [form, setForm] = useState({
    nameInput: "",
    emailInput: "",
    subjectInput: "",
    messageInput: "",
  });
  const [isSent, setIsSent] = useState<boolean>(false);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  function getValue(field: string, text: string) {
    setForm({ ...form, [field]: text });
  }

  function handleSubmit() {
    setIsSent(true);
    if (submitButtonRef.current) {
      submitButtonRef.current.click();
    }
  }

  return (
    <section id="ContactForm" className="contactForm">
      <div className="inputsGrid">
        <div className="name-input">
          <Input
            lang={lang}
            error={false}
            type={contactFormText.nameInput.type}
            placeholder={contactFormText.nameInput.placeholder}
            field={contactFormText.nameInput.field}
            getValue={getValue}
            devastation={false}
          />
        </div>
        <div className="email-input">
          <Input
            lang={lang}
            error={false}
            type={contactFormText.emailInput.type}
            placeholder={contactFormText.emailInput.placeholder}
            field={contactFormText.emailInput.field}
            getValue={getValue}
            devastation={false}
          />
        </div>
        <div className="subject-input">
          <Input
            lang={lang}
            error={false}
            type={contactFormText.subjectInput.type}
            placeholder={contactFormText.subjectInput.placeholder}
            field={contactFormText.subjectInput.field}
            getValue={getValue}
            devastation={false}
          />
        </div>
        <div className="message-textarea">
          <Textarea
            lang={lang}
            error={false}
            placeholder={contactFormText.textarea.placeholder}
            field={contactFormText.textarea.field}
            getValue={getValue}
            devastation={false}
          />
        </div>
        <div
          onClick={handleSubmit}
          className={`buttonSubmit ${isSent && "sent"}`}
        >
          <ButtonSubmit
            ref={submitButtonRef}
            lang={lang}
            icon={contactFormText.button.icon}
          >
            {contactFormText.button.text}
          </ButtonSubmit>
        </div>
        <div className={`thanksText ${isSent && "sent"}`}>
          <p>{contactFormText.button.thanks}</p>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
