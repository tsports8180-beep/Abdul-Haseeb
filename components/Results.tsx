
import React from 'react';
import TranslatableText from './TranslatableText';

interface Props { register: (text: string) => void }

const Results: React.FC<Props> = ({ register }) => {
  return (
    <section id="results" className="space-y-12 py-10">
      <div className="max-w-3xl space-y-6">
        <h2 className="font-space text-5xl font-bold tracking-tight">
          <TranslatableText register={register}>Proven Results</TranslatableText>
        </h2>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000" />
        <div className="relative bg-[#050505] rounded-[2.8rem] border border-white/10 p-12 md:p-16 overflow-hidden glass-card">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <div className="space-y-2">
              <div className="text-[10px] font-black tracking-[0.3em] text-yellow-400 uppercase">
                <TranslatableText register={register}>Tech Collaboration</TranslatableText>
              </div>
              <div className="text-4xl md:text-5xl font-space font-black tracking-tight text-white">AKASO Tech</div>
            </div>
            <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-bold uppercase tracking-widest">
              <TranslatableText register={register}>Completed 2024</TranslatableText>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: '70K', label: 'Total Views' },
              { value: '✓', label: 'Direct Sales' },
              { value: '5K+', label: 'Engagement' },
              { value: '🔥', label: 'High Interest' }
            ].map((res, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-5xl font-space font-black text-green-500 tracking-tighter group-hover:scale-110 transition-transform duration-700">
                   <TranslatableText register={register}>{res.value}</TranslatableText>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 whitespace-nowrap">
                  <TranslatableText register={register}>{res.label}</TranslatableText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
