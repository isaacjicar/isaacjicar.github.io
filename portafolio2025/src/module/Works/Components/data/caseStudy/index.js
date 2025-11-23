
import { walletCaseStudy } from "./walletCaseStudy";
import { muebleriaCaseStudy } from "./muebleriaCaseStudy";
import { pokemonCaseStudy } from "./pokemonCaseStudy";
import { billingCaseStudy } from "./sistemaFacturacionM";

export const caseStudyExtraByLang = {
  es: {
    ...(walletCaseStudy.es || {}),
    ...(muebleriaCaseStudy.es || {}),
    ...(pokemonCaseStudy.es || {}),
    ...(billingCaseStudy.es || {}),
  },
  en: {
    ...(walletCaseStudy.en || {}),
    ...(muebleriaCaseStudy.en || {}),
    ...(pokemonCaseStudy.en || {}),
    ...(billingCaseStudy.en || {}),
  },
};
