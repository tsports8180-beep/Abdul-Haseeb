
import React from 'react';
import { useTranslation } from '../App';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, isTranslating } = useTranslation();

  return (
    <div className="flex items-center gap-0.5 bg-white/5 border border-white/10 p-0.5 rounded-full backdrop-blur-md">
      <button
        onClick={() => setLanguage('EN')}
        className={`px-3 py-1 rounded-full text-[9px] font-bold transition-all ${
          language === 'EN' 
          ? 'bg-white text-black shadow-md' 
          : 'text-white/40 hover:text-white hover:bg-white/5'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('JA')}
        className={`px-3 py-1 rounded-full text-[9px] font-bold transition-all relative ${
          language === 'JA' 
          ? 'bg-white text-black shadow-md' 
          : 'text-white/40 hover:text-white hover:bg-white/5'
        }`}
      >
        JA
        {isTranslating && language === 'JA' && (
           <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
