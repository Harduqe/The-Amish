import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import type { Lang } from '@/content';

const LANGUAGE_STORAGE_KEY = 'lancaster-amish-language';

function getInitialLanguage(): Lang {
  try {
    if (typeof window !== 'undefined') {
      const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLanguage === 'en' || savedLanguage === 'es') return savedLanguage;
    }
  } catch {
    // Storage can be unavailable in private or restricted browsing contexts.
  }

  return 'en';
}

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const Ctx = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const initialLanguage = getInitialLanguage();
    if (typeof document !== 'undefined') document.documentElement.lang = initialLanguage;
    return initialLanguage;
  });
  const toggle = useCallback(() => setLang((p) => (p === 'en' ? 'es' : 'en')), []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // Keep the in-memory language choice when storage is unavailable.
    }
  }, [lang]);

  return <Ctx.Provider value={{ lang, setLang, toggle }}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error('useLang must be used within LanguageProvider');
  return c;
}
