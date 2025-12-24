import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Audience from './components/Audience';
import Deliverables from './components/Deliverables';
import Results from './components/Results';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translateText } from './services/geminiService';
import { Language } from './types';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (text: string) => string;
  isTranslating: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error('useTranslation must be used within a TranslationProvider');
  return context;
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('EN');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isTranslating, setIsTranslating] = useState(false);
  const [registeredTexts, setRegisteredTexts] = useState<Set<string>>(new Set());

  const registerText = useCallback((text: string) => {
    setRegisteredTexts(prev => {
      if (prev.has(text)) return prev;
      const next = new Set(prev);
      next.add(text);
      return next;
    });
  }, []);

  const translate = useCallback((text: string) => {
    if (language === 'EN') return text;
    return translations[text] || text;
  }, [language, translations]);

  useEffect(() => {
    const textsToTranslate = Array.from(registeredTexts).filter(t => !translations[t]);
    
    if (language === 'JA' && textsToTranslate.length > 0) {
      setIsTranslating(true);
      translateText(textsToTranslate, 'Japanese')
        .then(newTranslations => {
          setTranslations(prev => ({ ...prev, ...newTranslations }));
        })
        .catch(err => console.error("Translation effect failure:", err))
        .finally(() => setIsTranslating(false));
    }
  }, [language, registeredTexts, translations]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate, isTranslating }}>
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
        <div className="grain-overlay" />
        <div className="fixed inset-0 bg-glow -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <main className="space-y-32 pb-32">
            <div className="reveal"><Hero register={registerText} /></div>
            <div className="space-y-32">
              <div className="reveal"><Stats register={registerText} /></div>
              <div className="reveal"><About register={registerText} /></div>
              <div className="reveal"><Audience register={registerText} /></div>
              <div className="reveal"><Deliverables register={registerText} /></div>
              <div className="reveal"><Results register={registerText} /></div>
              <div className="reveal"><Partners register={registerText} /></div>
            </div>
            <div className="reveal"><Contact register={registerText} /></div>
          </main>
          <Footer register={registerText} />
        </div>
      </div>
    </TranslationContext.Provider>
  );
};

export default App;