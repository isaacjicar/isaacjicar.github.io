// src/module/Works/Components/data/caseStudy/index.js
import { walletCaseStudy } from "./walletCaseStudy";
import { muebleriaCaseStudy } from "./muebleriaCaseStudy";
import { pokemonCaseStudy } from "./pokemonCaseStudy";

export const caseStudyExtraByLang = {
  es: {
    ...(walletCaseStudy.es || {}),
    ...(muebleriaCaseStudy.es || {}),
    ...(pokemonCaseStudy.es || {}),
  },
  en: {
    ...(walletCaseStudy.en || {}),
    ...(muebleriaCaseStudy.en || {}),
    ...(pokemonCaseStudy.en || {}),
  },
};
