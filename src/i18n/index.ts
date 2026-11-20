import { en } from "./en";
import { type Dictionary, fr } from "./fr";

export type Language = "fr" | "en";
export type AppSlug = "sunory" | "aquashot";
export type PageKey = "home" | AppSlug;

export const dictionaries: Record<Language, Dictionary> = { fr, en };

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** The address of a page in a language: French at the root, English under /en/. */
export const pagePath = (language: Language, page: PageKey) => {
  const languagePrefix = language === "en" ? "/en" : "";
  const pageSegment = page === "home" ? "" : `/${page}`;
  return `${base}${languagePrefix}${pageSegment}/`;
};

export const otherLanguage = (language: Language): Language => (language === "fr" ? "en" : "fr");

export type { Dictionary };
