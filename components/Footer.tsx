
import React from 'react';
import TranslatableText from './TranslatableText';

interface Props { register: (text: string) => void }

const Footer: React.FC<Props> = ({ register }) => {
  return (
    <footer className="py-24 border-t border-white/5 text-center space-y-16">
      <div className="text-3xl font-black font-space tracking-tight bg-gradient-to-br from-white to-white/10 bg-clip-text text-transparent italic">
        JAPANWALKS
      </div>
      <p className="text-white/20 font-medium italic tracking-wide"><TranslatableText register={register}>Real life. Real stories. Real influence.</TranslatableText></p>
      
      <div className="flex flex-col items-center gap-8">
        <a 
          href="https://instagram.com/japanwalks.ig" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative border border-white/10 text-white px-12 py-5 rounded-full font-bold shadow-xl flex items-center gap-3 transition-all group-hover:bg-white group-hover:text-black">
            <span>📷</span> <TranslatableText register={register}>Follow @japanwalks.ig</TranslatableText>
          </div>
        </a>
        <div className="text-[9px] font-black tracking-[0.5em] text-white/10 uppercase">
          <TranslatableText register={register}>This is not influencer marketing — this is lifestyle placement.</TranslatableText>
        </div>
        <div className="text-[8px] font-medium text-white/5 tracking-widest uppercase">
          © 2024 JAPANWALKS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
