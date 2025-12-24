
import React from 'react';
import TranslatableText from './TranslatableText';

interface Props { register: (text: string) => void }

const Hero: React.FC<Props> = ({ register }) => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-8 relative pt-8 pb-16">
      <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full border border-white/5 bg-white/[0.03] text-[8px] font-black tracking-[0.4em] text-white/40 uppercase animate-fade-in">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
        <TranslatableText register={register}>Available for Collaboration</TranslatableText>
      </div>

      <div className="space-y-3">
        <h1 className="font-space text-5xl md:text-[9.5rem] font-black tracking-tighter leading-none bg-gradient-to-b from-white to-white/5 bg-clip-text text-transparent select-none drop-shadow-2xl">
          JAPANWALKS
        </h1>
        <div className="h-px w-12 bg-white/10 mx-auto rounded-full" />
      </div>

      <p className="max-w-xl text-base md:text-lg font-light text-white/30 leading-relaxed mx-auto italic tracking-tight">
        <TranslatableText register={register}>
          Authentic lifestyle storytelling from Japan. Real routines, real products, real influence.
        </TranslatableText>
      </p>

      <div className="flex flex-wrap justify-center gap-8 pt-6 text-[8px] font-bold text-white/15 uppercase tracking-[0.5em]">
        <div className="group flex flex-col items-center gap-2 cursor-default">
          <span className="text-lg mb-0.5 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">🏙️</span>
          <TranslatableText register={register}>Chiba, Japan</TranslatableText>
        </div>
        <div className="group flex flex-col items-center gap-2 cursor-default">
          <span className="text-lg mb-0.5 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">🎞️</span>
          <TranslatableText register={register}>Instagram Creator</TranslatableText>
        </div>
        <div className="group flex flex-col items-center gap-2 cursor-default">
          <span className="text-lg mb-0.5 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">🌐</span>
          <TranslatableText register={register}>Global Audience</TranslatableText>
        </div>
      </div>
    </section>
  );
};

export default Hero;
