
import React from 'react';
import TranslatableText from './TranslatableText';

interface Props { register: (text: string) => void }

const About: React.FC<Props> = ({ register }) => {
  const categories = [
    { icon: '💎', title: 'Fashion & Style', desc: 'Daily wear, styling, and accessories integrated naturally' },
    { icon: '🧴', title: 'Grooming', desc: 'Clean, modern lifestyle and grooming routines' },
    { icon: '🍜', title: 'Food & Cafés', desc: 'Japan-based lifestyle and culinary experiences' },
    { icon: '🚄', title: 'Travel', desc: 'Urban Japan aesthetics and walking vlogs' },
    { icon: '⚡', title: 'Fitness', desc: 'Active daily routines and wellness content' },
    { icon: '📷', title: 'Tech', desc: 'Gadgets shown in real use, never forced' }
  ];

  return (
    <section id="about" className="space-y-20 py-10">
      <div className="max-w-3xl space-y-6">
        <div className="text-[9px] font-black tracking-[0.5em] text-white/20 uppercase">
          <TranslatableText register={register}>Creative Direction</TranslatableText>
        </div>
        <h2 className="font-space text-4xl md:text-6xl font-bold tracking-tight">
          <TranslatableText register={register}>The Difference</TranslatableText>
        </h2>
        <p className="text-lg text-white/40 leading-relaxed font-light">
          <TranslatableText register={register}>
            Unlike scripted influencer content, JapanWalks tells real stories. Products aren't promoted—they're lived with. This authenticity is why followers don't just watch, they trust and act.
          </TranslatableText>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="glass-card p-8 rounded-[2rem] group cursor-default">
            <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-700 inline-block drop-shadow-xl filter saturate-[0.8] group-hover:saturate-100">
              {cat.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
              <TranslatableText register={register}>{cat.title}</TranslatableText>
            </h3>
            <p className="text-xs text-white/30 leading-relaxed font-light">
              <TranslatableText register={register}>{cat.desc}</TranslatableText>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
