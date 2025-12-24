
export type Language = 'EN' | 'JA';

export interface TranslationContext {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (text: string) => string;
  isTranslating: boolean;
}
