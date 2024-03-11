export type InputAlertContent = {
  alert: string;
};

export type InputAlert = {
  en: InputAlertContent;
  ru: InputAlertContent;
  sk?: InputAlertContent;
  de?: InputAlertContent;
};

export type ColorizeSubstringProps = {
  text: string;
  color: string;
};

export type LogoProps = {
  article: string;
  name: string;
  label: string;
};

type IntroductionContent = {
  ourServices: {
    name: string;
    title: string;
    runningText: string;
    bgImages: {
      triangleImg: React.ReactNode;
      squareImg: React.ReactNode;
      circleImg: React.ReactNode;
    };
    icon: React.ReactNode;
  };
  ourLastProject: {
    title: string;
    runningText: string;
    icon: React.ReactNode;
  };
  aboutUs: {
    title: string;
    runningText: string;
    icon: React.ReactNode;
  };
  contactUs: {
    title: string;
    runningText: string;
    icon: React.ReactNode;
  };
};

export type IntroductionProps = {
  en: IntroductionContent;
  ru: IntroductionContent;
  sk?: IntroductionContent;
  de?: IntroductionContent;
};

type Circle = {
  icon: React.ReactNode;
  text: string;
};

type WhatWeDoContent = {
  name: string;
  title: string;
  circle: Circle;
};

export type WhatWeDoProps = {
  en: WhatWeDoContent;
  ru: WhatWeDoContent;
  sk?: WhatWeDoContent;
  de?: WhatWeDoContent;
};

type Service = {
  title: string;
  article: string;
  icon: React.ReactNode;
  clarification: string;
  statement: string;
};

type OurServicesContent = {
  services: Service[];
};

export type OurServicesProps = {
  en: OurServicesContent;
  ru: OurServicesContent;
  sk?: OurServicesContent;
  de?: OurServicesContent;
};

export type DescriptionProps = {
  icon: React.ReactNode;
  title: string;
  article: string;
  clarification: string;
  statement: string;
  key: string;
};

export type StatementProps = {
  icon: React.ReactNode;
  title: string;
  article: string;
  clarification: string;
  statement: string;
  key: string;
};

type LastProjectContent = {
  name: string;
  title: string;
  number: string;
  logo: React.ReactNode;
  description: string;
  launch: string;
  redirectImg: React.ReactNode;
  projLink: string;
};

export type LastProjectProps = {
  en: LastProjectContent;
  ru: LastProjectContent;
  sk?: LastProjectContent;
  de?: LastProjectContent;
};

type LanguageData = {
  title: string;
  article: string;
  images: string[];
};

export type WhoWeAreText = {
  en: LanguageData;
  ru: LanguageData;
};

type Contact = {
  children: string;
  link: string;
  type: string;
};

type Social = {
  children: React.ReactNode;
  link: string;
  type: string;
};

type GetInTouchContent = {
  name: string;
  title: string;
  label: string;
  contacts: Contact[];
  socials: Social[];
  circle: Circle;
};

export type GetInTouchProps = {
  en: GetInTouchContent;
  ru: GetInTouchContent;
};

export type CircularTextProps = {
  children: string;
  icon: React.ReactNode;
  color: string;
  link: string;
};

export type WhoWeAreTextItem = {
  title: string;
  article: string;
  details: string;
  imagesFirstLine: (React.ReactNode | null)[];
  imagesSecondLine: (React.ReactNode | null)[];
};

export type WhoWeAreProps = {
  en: WhoWeAreTextItem;
  ru: WhoWeAreTextItem;
  sk?: WhoWeAreTextItem;
  de?: WhoWeAreTextItem;
};

type InputField = {
  type: string;
  placeholder: string;
  field: string;
};

type Button = {
  type: string;
  text: string;
  icon: React.ReactNode;
  thanks: string;
  sending: string;
};

type ContactFormTextItem = {
  nameInput: InputField;
  emailInput: InputField;
  subjectInput: InputField;
  textarea: InputField;
  button: Button;
};

export type ContactFormProps = {
  en: ContactFormTextItem;
  ru: ContactFormTextItem;
  sk?: ContactFormTextItem;
  de?: ContactFormTextItem;
};

export type TypingAnimationProps = {
  children: string;
};

export type SEOProps = {
  title: string;
  description: string;
  logo: string;
};
