
import React from 'react';
import TranslatableText from './TranslatableText';

interface Props { register: (text: string) => void }

const Partners: React.FC<Props> = ({ register }) => {
  const partners = [
    { icon: '👔', title: 'Fashion Brands', desc: 'Streetwear, accessories, daily wear' },
    { icon: '📱', title: 'Tech Companies', desc: 'Gadgets, wearables, smart devices' },
    { icon: '✨', title: 'Lifestyle Products', desc: 'Grooming, wellness, daily essentials' },
    { icon: '💪', title: 'Fitness Gear', desc: 'Workout equipment, athletic wear' }
  ];

  return (
    <section className="space-y-16 py-10">
      <div className="max-w-3xl space-y-6">
        <h2 className="font-space text-5xl font-bold tracking-tight">
          <TranslatableText register={register}>Ideal Brand Partners</TranslatableText>
        </h2>
        <p className="text-xl text-white/50 leading-relaxed font-light">
          <TranslatableText register={register}>
            We collaborate with brands that align with our lifestyle and values.
          </TranslatableText>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((p, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4 glass-card">
            <div className="text-4xl filter saturate-0 group-hover:saturate-100 transition-all duration-700">{p.icon}</div>
            <h4 className="font-bold text-white tracking-tight"><TranslatableText register={register}>{p.title}</TranslatableText></h4>
            <p className="text-sm text-white/40 leading-relaxed"><TranslatableText register={register}>{p.desc}</TranslatableText></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
