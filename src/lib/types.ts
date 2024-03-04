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
}

export type LastProjectProps = {
  en: LastProjectContent;
  ru: LastProjectContent;
  sk?: LastProjectContent;
  de?: LastProjectContent;
};