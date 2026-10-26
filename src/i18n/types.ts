export type Lang = "fr" | "en";

/** A string that exists in both supported languages. */
export interface LS {
  fr: string;
  en: string;
}

/** A list of localized strings (e.g. a paragraph of bio lines). */
export type LSList = {
  fr: string[];
  en: string[];
};
