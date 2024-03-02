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
