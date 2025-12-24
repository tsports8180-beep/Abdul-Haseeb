
import React from 'react';
import TranslatableText from './TranslatableText';

interface Props { register: (text: string) => void }

const Deliverables: React.FC<Props> = ({ register }) => {
  const items = [
    { icon: '🎬', title: 'High-Performing Reel', desc: 'One professionally crafted Instagram Reel with your product' },
    { icon: '📖', title: 'Story Integration', desc: 'Brand mention woven into authentic daily vlog storytelling' },
    { icon: '📸', title: 'Gallery Posts', desc: '3-5 high-quality feed posts featuring your product' },
    { icon: '⭐', title: 'Story Highlights', desc: '3-5 story frames permanently featured in highlights' },
    { icon: '✍️', title: 'Product Review', desc: 'Honest review based on real usage and experience' },
    { icon: '🔄', title: 'Reusable Content', desc: 'Permission to repurpose content for your marketing' }
  ];

  return (
    <section className="space-y-16 py-10">
      <div className="max-w-3xl space-y-6 text-center mx-auto">
        <h2 className="font-space text-5xl font-bold tracking-tight">
          <TranslatableText register={register}>What You Get</TranslatableText>
        </h2>
        <p className="text-xl text-white/50 leading-relaxed font-light">
          <TranslatableText register={register}>
            Organic, story-based brand integrations designed to feel natural—not like ads.
          </TranslatableText>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 glass-card">
            <span className="text-3xl shrink-0 filter drop-shadow-lg">{item.icon}</span>
            <div className="space-y-2">
              <h4 className="font-bold text-white"><TranslatableText register={register}>{item.title}</TranslatableText></h4>
              <p className="text-sm text-white/40 leading-relaxed"><TranslatableText register={register}>{item.desc}</TranslatableText></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deliverables;
