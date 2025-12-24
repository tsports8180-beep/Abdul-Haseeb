
import React from 'react';
import TranslatableText from './TranslatableText';

interface Props { register: (text: string) => void }

const Audience: React.FC<Props> = ({ register }) => {
  return (
    <section id="audience" className="space-y-16 py-10">
      <div className="max-w-3xl space-y-6">
        <h2 className="font-space text-5xl font-bold tracking-tight">
          <TranslatableText register={register}>Audience Profile</TranslatableText>
        </h2>
        <p className="text-xl text-white/50 leading-relaxed font-light">
          <TranslatableText register={register}>
            A highly engaged community that actively follows lifestyle recommendations, tech products, and fashion trends.
          </TranslatableText>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-8 glass-card">
          <h3 className="text-2xl font-bold tracking-tight">
            <TranslatableText register={register}>Demographics</TranslatableText>
          </h3>
          <div className="space-y-4">
            {[
              { label: 'Gender Split', value: '60% M / 40% F' },
              { label: 'Primary Age Group', value: '18-34 years' },
              { label: 'Purchasing Power', value: 'High' },
              { label: 'Content Interest', value: 'Lifestyle & Tech' }
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                <span className="text-white/40"><TranslatableText register={register}>{item.label}</TranslatableText></span>
                <span className="font-bold"><TranslatableText register={register}>{item.value}</TranslatableText></span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-8 glass-card">
          <h3 className="text-2xl font-bold tracking-tight">
            <TranslatableText register={register}>Geographic Reach</TranslatableText>
          </h3>
          <div className="space-y-4">
            {[
              { label: '🇯🇵 Japan', value: '70%' },
              { label: '🇺🇸 United States', value: '20%' },
              { label: '🇮🇳 India', value: '10%' },
              { label: 'Platform', value: 'Instagram' }
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                <span className="text-white/40"><TranslatableText register={register}>{item.label}</TranslatableText></span>
                <span className="font-bold"><TranslatableText register={register}>{item.value}</TranslatableText></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
