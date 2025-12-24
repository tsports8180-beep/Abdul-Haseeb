
import React from 'react';
import TranslatableText from './TranslatableText';

interface Props { register: (text: string) => void }

const Stats: React.FC<Props> = ({ register }) => {
  const stats = [
    { value: '40K+', label: 'Followers' },
    { value: '100K', label: 'Avg Views' },
    { value: '5K', label: 'Engagement' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-[#050505] p-20 text-center group hover:bg-white/[0.02] transition-colors duration-700">
          <div className="font-space text-7xl font-black text-white mb-6 tracking-tighter group-hover:scale-110 transition-transform duration-700 ease-out">
            {stat.value}
          </div>
          <div className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">
            <TranslatableText register={register}>{stat.label}</TranslatableText>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
