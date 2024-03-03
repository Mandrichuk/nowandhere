export interface InputProps extends Language {
  error: boolean;
  type: string;
  placeholder: string;
  field: string;
  devastation: boolean;
  getValue: (field: string, text: string) => void;
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