// src/store/useLanguageStore.ts
import { create } from 'zustand';

export type Language = 'EN' | 'ZH';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'EN', // Idioma predeterminado
  setLanguage: (language) => set({ language }),
}));
