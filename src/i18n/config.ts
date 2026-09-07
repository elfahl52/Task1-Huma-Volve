import en from './en.json';

export const translations = {
  en,
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof en;

export function t(key: TranslationKey, locale: Locale = 'en'): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}