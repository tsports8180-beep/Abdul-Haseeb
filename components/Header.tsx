
import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../App';

const Header: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <nav className="flex flex-row justify-between items-center py-2 sticky top-0 z-50 bg-[#050505]/40 backdrop-blur-2xl px-4 md:px-0 border-b border-white/5">
      <div className="text-base font-black font-space tracking-tight group cursor-pointer shrink-0">
        <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent group-hover:to-white transition-all duration-300">
          JAPANWALKS
        </span>
      </div>
      
      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden sm:flex gap-4 md:gap-6 text-[9px] font-bold tracking-[0.2em] text-white/20 uppercase">
          <a href="#about" className="nav-link-hover hover:text-white transition-colors duration-200">{translate('About')}</a>
          <a href="#audience" className="nav-link-hover hover:text-white transition-colors duration-200">{translate('Audience')}</a>
          <a href="#contact" className="nav-link-hover hover:text-white transition-colors duration-200">{translate('Collaborate')}</a>
          <a href="#results" className="nav-link-hover hover:text-white transition-colors duration-200">{translate('Results')}</a>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="scale-90">
            <LanguageSwitcher />
          </div>
          <a 
            href="https://instagram.com/japanwalks.ig" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-[8px] font-black tracking-widest uppercase shrink-0"
          >
            <span>✨</span> <span className="hidden xs:inline">IG</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
