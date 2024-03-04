export interface InputProps extends Language {
  type: string;
  placeholder: string;
  field: string;
  getValue: (field: string, text: string) => void;
  error: boolean;
  devastation: boolean;
}

export interface ContactLinkProps {
  children: string | React.ReactNode;
  link: string;
}

export interface Language {
  lang: "en" | "ru" | "sk" | "de";
}

export interface LogoProps extends Language {
  changeLang: (newLang: "en" | "ru" | "sk") => void;
}

export interface ContactFormProps extends Language {}

export interface GetInTouchProps extends Language {}

export interface IntroductionProps extends Language {}

export interface LastProjectProps extends Language {}

export interface WhoWeAreProps extends Language {}

export interface WhatWeDoProps extends Language {}

export interface ServicesProps extends Language {}


export interface RoundedTextProps {
  children: string;
  color: string;
  icon: string;
}