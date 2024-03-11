import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import italicText from "./utils/italicText";

import ContactForm from "./components/ContactForm";
import GetInTouch from "./components/GetInTouch";
import Introduction from "./components/Introduction";
import LastProject from "./components/LastProject";
import Logo from "./components/Logo";
import Services from "./components/Services";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";

import { SEOText } from "./constants/Index";

function Page() {
  const [lang, setLang] = useState<"en" | "ru" | "sk" | "de">("en");

  const changeLang = (newLang: "en" | "ru" | "sk" | "de"): void => {
    setLang(newLang);
  };

  function getValue(field: string, text: string) {
    console.log(field, text);
  }

  return (
    <>
      <title>{SEOText.title}</title>
      <meta name="description" content={SEOText.description} />
      <meta property="og:image" content={SEOText.logo} />


      <Logo lang={lang} changeLang={changeLang} />
      <Introduction lang={lang} />
      <WhatWeDo lang={lang} />
      <Services lang={lang} />
      <LastProject lang={lang} />
      <WhoWeAre lang={lang} />
      <GetInTouch lang={lang} />
      <ContactForm lang={lang} />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
