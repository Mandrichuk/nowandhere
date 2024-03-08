import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import Input from "./Input";
import Textarea from "./Textarea";
import ButtonSubmit from "./Button";

import { ContactFormProps } from "../lib/interfaces";
import { ContactFormText } from "../constants/Index";

function ContactForm({ lang }: ContactFormProps) {
  const contactFormText =
    ContactFormText[lang as keyof typeof ContactFormText] ||
    ContactFormText["en"];
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isDevastation, setIsDevastation] = useState<boolean>(false);
  const [form, setForm] = useState({
    nameInput: "",
    emailInput: "",
    subjectInput: "",
    messageInput: "",
  });
  const [isSent, setIsSent] = useState<boolean>(false);

  function getValue(field: string, text: string) {
    setForm({ ...form, [field]: text });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      setIsLoading(true);

      emailjs
        .send(
          "service_1fkz6yv",
          "template_tfgxrc7",
          {
            from_name: form.nameInput,
            to_name: "nowandhere",
            from_email: form.emailInput,
            to_email: "andrew.mandrichuk2007@gmail.com",
            subject: form.subjectInput,
            message: form.messageInput,
          },
          "O_emiMG-zC22X_eF2"
        )
        .then(
          () => {
            setIsLoading(false);
            setIsError(false);
            setIsDevastation(true);
            setIsSent(true);

            setForm({
              nameInput: "",
              emailInput: "",
              subjectInput: "",
              messageInput: "",
            });
          },
          (error) => {
            setIsLoading(false);

            console.log(error);
            alert("Something went wrong.");
          }
        );
    }
  };

  function isFormValid() {
    if (
      form.nameInput &&
      form.emailInput &&
      form.subjectInput &&
      form.messageInput &&
      !isLoading
    ) {
      return true;
    }
    setIsError(true);
    return false;
  }

  return (
    <section id="ContactForm" className="contactForm">
      <div className="inputsGrid">
        <div className="name-input">
          <Input
            lang={lang}
            error={isError}
            type={contactFormText.nameInput.type}
            placeholder={contactFormText.nameInput.placeholder}
            field={contactFormText.nameInput.field}
            getValue={getValue}
            devastation={isDevastation}
          />
        </div>
        <div className="email-input">
          <Input
            lang={lang}
            error={isError}
            type={contactFormText.emailInput.type}
            placeholder={contactFormText.emailInput.placeholder}
            field={contactFormText.emailInput.field}
            getValue={getValue}
            devastation={isDevastation}
          />
        </div>
        <div className="subject-input">
          <Input
            lang={lang}
            error={isError}
            type={contactFormText.subjectInput.type}
            placeholder={contactFormText.subjectInput.placeholder}
            field={contactFormText.subjectInput.field}
            getValue={getValue}
            devastation={isDevastation}
          />
        </div>
        <div className="message-textarea">
          <Textarea
            lang={lang}
            error={isError}
            placeholder={contactFormText.textarea.placeholder}
            field={contactFormText.textarea.field}
            getValue={getValue}
            devastation={isDevastation}
          />
        </div>
        <div
          onClick={handleSubmit}
          className={`buttonSubmit ${isSent && "sent"}`}
        >
          <ButtonSubmit lang={lang} icon={contactFormText.button.icon}>
            {isLoading
              ? contactFormText.button.sending
              : contactFormText.button.text}
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
