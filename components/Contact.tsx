
import React, { useState } from 'react';
import TranslatableText from './TranslatableText';
import { useTranslation } from '../App';

interface Props { register: (text: string) => void }

const Contact: React.FC<Props> = ({ register }) => {
  const { translate } = useTranslation();
  const [formData, setFormData] = useState({
    brandName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { brandName, email, phone, message } = formData;
    
    if (!brandName || !email || !message) {
      alert(translate("Please fill all required fields."));
      return;
    }

    const subject = encodeURIComponent(`Collaboration Request – ${brandName}`);
    const body = encodeURIComponent(
      `Brand Name: ${brandName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:tsports8180@gmail.com?subject=${subject}&body=${body}`;
    setIsSuccess(true);
    setFormData({ brandName: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section id="contact" className="relative group py-10">
      <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] opacity-20" />
      <div className="relative p-12 md:p-20 rounded-[3rem] bg-white/[0.02] border border-white/10 text-center space-y-12 glass-card">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-space text-5xl md:text-7xl font-bold tracking-tight">
            <TranslatableText register={register}>Let's Collaborate</TranslatableText>
          </h2>
          <p className="text-xl text-white/30 leading-relaxed font-light italic">
            <TranslatableText register={register}>
              Ready for real exposure, real usage, and real results? Get in touch and let's create something authentic together.
            </TranslatableText>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8 text-left">
          <div className="space-y-2">
            <label className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase ml-4"><TranslatableText register={register}>Brand Name</TranslatableText> *</label>
            <input 
              type="text" id="brandName" value={formData.brandName} onChange={handleChange} required
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:outline-none focus:border-white/30 transition-all text-white font-light"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase ml-4"><TranslatableText register={register}>Email Address</TranslatableText> *</label>
              <input 
                type="email" id="email" value={formData.email} onChange={handleChange} required
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:outline-none focus:border-white/30 transition-all text-white font-light"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase ml-4"><TranslatableText register={register}>Phone Number</TranslatableText></label>
              <input 
                type="tel" id="phone" value={formData.phone} onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:outline-none focus:border-white/30 transition-all text-white font-light"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase ml-4"><TranslatableText register={register}>Collaboration Idea</TranslatableText> *</label>
            <textarea 
              id="message" value={formData.message} onChange={handleChange} required rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 focus:outline-none focus:border-white/30 transition-all text-white resize-none font-light"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-6 rounded-2xl bg-white text-black font-black font-space text-base tracking-widest uppercase hover:bg-white/90 hover:scale-[1.01] active:scale-95 transition-all shadow-2xl shadow-white/5"
          >
            <TranslatableText register={register}>Send Collaboration Request</TranslatableText>
          </button>

          {isSuccess && (
            <div className="text-green-500 font-bold text-center animate-bounce text-sm">
              ✓ <TranslatableText register={register}>Message prepared successfully. Please send the email.</TranslatableText>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
