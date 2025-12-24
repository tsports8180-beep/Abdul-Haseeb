
import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { Language, TranslationContext as ITranslationContext } from './types';
import { translateBatch } from './services/geminiService';
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

const TranslationContext = createContext<ITranslationContext | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error("useTranslation must be used within a TranslationProvider");
  return context;
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('EN');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isTranslating, setIsTranslating] = useState(false);
  const [textToTranslate, setTextToTranslate] = useState<Set<string>>(new Set());

  const registerText = useCallback((text: string) => {
    setTextToTranslate(prev => new Set(prev).add(text));
  }, []);

  const translate = useCallback((text: string) => {
    if (language === 'EN') return text;
    return translations[text] || text;
  }, [language, translations]);

  useEffect(() => {
    const performTranslation = async () => {
      if (language === 'JA' && textToTranslate.size > 0) {
        setIsTranslating(true);
        const list = Array.from(textToTranslate).filter(t => !translations[t]);
        
        if (list.length > 0) {
          const translatedList = await translateBatch(list, 'Japanese');
          const newMap = { ...translations };
          list.forEach((orig, idx) => {
            newMap[orig] = translatedList[idx] || orig;
          });
          setTranslations(newMap);
        }
        setIsTranslating(false);
      }
    };
    performTranslation();
  }, [language, textToTranslate, translations]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate, isTranslating }}>
      <div className="relative min-h-screen bg-[#050505] selection:bg-white selection:text-black">
        <div className="grain-overlay" />
        <div className="fixed inset-0 bg-glow -z-10" />
        
        <div className="max-w-6xl mx-auto px-6">
          <Header />
          <main className="space-y-40 py-24">
            <div className="reveal-on-scroll reveal"><Hero register={registerText} /></div>
            <div className="reveal-on-scroll reveal"><Stats register={registerText} /></div>
            <div className="reveal-on-scroll reveal" id="about"><About register={registerText} /></div>
            <div className="reveal-on-scroll reveal" id="audience"><Audience register={registerText} /></div>
            <div className="reveal-on-scroll reveal"><Deliverables register={registerText} /></div>
            <div className="reveal-on-scroll reveal" id="results"><Results register={registerText} /></div>
            <div className="reveal-on-scroll reveal"><Partners register={registerText} /></div>
            <div className="reveal-on-scroll reveal" id="contact"><Contact register={registerText} /></div>
          </main>
          <Footer register={registerText} />
        </div>
      </div>
    </TranslationContext.Provider>
  );
};

export default App;
