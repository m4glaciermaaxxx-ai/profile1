import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Calendar, School, Award, Sparkles, Copy, Check } from "lucide-react";
import { personalInfoData } from "../data";
import GlassCard from "./GlassCard";

export default function HeroSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="basics" className="w-full pt-12 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column - Artistic Accent Exhibition Plaque */}
        <div id="hero-graphic" className="lg:col-span-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[280px] aspect-[3/4.2] rounded-[24px] relative overflow-hidden backdrop-blur-2xl bg-white/30 border border-white/60 p-5 flex flex-col justify-between shadow-md group"
          >
            {/* Corner Decorative Fine Crosshairs (Architectural Style) */}
            <div className="absolute top-3 left-3 text-[10px] text-[#4B9DA9]/40 font-mono select-none">+ 01</div>
            <div className="absolute top-3 right-3 text-[10px] text-[#4B9DA9]/40 font-mono select-none">RE // CD</div>
            
            {/* Fine Horizontal Rule */}
            <div className="absolute top-10 left-3 right-3 h-[0.5px] bg-[#91C6BC]/30" />
            
            {/* Center Masterpiece Typography */}
            <div className="my-auto flex flex-col items-center justify-center relative">
              {/* Pastel Ambient Color Halo on Hover */}
              <div className="absolute w-28 h-28 rounded-full bg-[#FAFBE8]/72 filter blur-xl opacity-80 group-hover:bg-[#91C6BC]/20 transition-all duration-500 -z-10" />
              
              <span className="font-serif text-5xl font-thin tracking-wide text-[#1B4D53] transition-transform duration-700 ease-out group-hover:scale-105 select-none pb-2">
                尹广源
              </span>
              <span className="font-sans text-[10px] tracking-widest text-[#4B9DA9] font-bold uppercase mt-1">
                YIN GUANGYUAN
              </span>
              
              {/* Edge Wave Deco */}
              <div className="flex space-x-1.5 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#91C6BC]" />
                <span className="w-1.5 h-2.5 rounded-full bg-[#E37434] animate-bounce" style={{ animationDelay: '0.1s' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#4B9DA9]" />
              </div>
            </div>

            {/* Fine Bottom Horizontal Rule */}
            <div className="absolute bottom-16 left-3 right-3 h-[0.5px] bg-[#91C6BC]/30" />

            {/* Bottom Exhibition Credentials */}
            <div className="pt-2 flex justify-between items-end">
              <div className="text-left">
                <p className="text-[8px] font-bold text-[#4B9DA9] tracking-widest uppercase">Creative Plaque</p>
                <p className="text-xs font-serif font-light text-[#1B4D53] mt-0.5">个人求职网站</p>
              </div>
              <div className="flex items-center gap-1 text-[9px] font-mono text-[#E37434] font-semibold border border-[#E37434]/25 px-1.5 py-0.5 rounded-sm">
                <span className="w-1 h-1 rounded-full bg-[#E37434] animate-ping" />
                ACTIVE
              </div>
            </div>
            
            {/* Subtle light reflection sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-sans text-[10px] tracking-widest text-[#4B9DA9] flex items-center justify-center gap-2 font-bold uppercase"
          >
            <span>RESEARCHER</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#91C6BC]" />
            <span>CREATIVE DIRECTOR</span>
          </motion.div>
        </div>

        {/* Right Column - Comprehensive Info Glass Board */}
        <div id="hero-details" className="lg:col-span-8">
          <GlassCard hoverAction={false} id="hero-main-card" className="relative overflow-hidden bg-white/35 border-white/45">
            {/* Background absolute sparkle accent */}
            <div className="absolute top-0 right-0 p-8 text-neutral-200 pointer-events-none select-none">
              <Sparkles className="w-16 h-16 opacity-15 text-[#91C6BC]" />
            </div>

            {/* Title Block */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="immersive-tag flex items-center gap-1">
                  <School className="w-3 h-3 text-[#1B4D53]" />
                  四川大学 985 硕士
                </span>
                <span className="immersive-tag flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#1B4D53]" />
                  四川美术学院设计教育本科
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-serif font-light tracking-wide text-[#1B4D53] mb-2">
                {personalInfoData.name} <span className="font-sans text-[20px] sm:text-2xl font-light tracking-wider text-[#4B9DA9] ml-2 italic">Yin Guangyuan</span>
              </h1>
              <div className="w-16 h-[1.5px] bg-[#91C6BC]" />
              <p className="text-neutral-600 text-sm leading-relaxed mt-4 italic font-serif">
                {personalInfoData.subTitle}
              </p>
            </div>

            {/* Grid of details & interactive nodes */}
            <div id="hero-contacts" className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-black/5">
              {/* Telephone */}
              <div id="cnt-phone" className="group flex items-center justify-between p-3.5 bg-white/30 hover:bg-white/60 rounded-xl border border-white/50 transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-stone-100 text-stone-650 rounded-lg">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">电话号码 / Contact</p>
                    <p className="text-sm font-semibold text-neutral-850 font-mono">{personalInfoData.phone}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfoData.phone, "phone")}
                  className="p-2 hover:bg-white/80 text-neutral-450 hover:text-neutral-800 rounded-lg transition-colors cursor-pointer"
                  title="复制电话"
                  id="btn-copy-phone"
                >
                  {copiedText === "phone" ? (
                    <span className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Email */}
              <div id="cnt-email" className="group flex items-center justify-between p-3.5 bg-white/30 hover:bg-white/60 rounded-xl border border-white/50 transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-stone-100 text-stone-650 rounded-lg">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">电子邮箱 / Email</p>
                    <p className="text-sm font-semibold text-neutral-850 font-mono">{personalInfoData.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfoData.email, "email")}
                  className="p-2 hover:bg-white/80 text-neutral-450 hover:text-neutral-850 rounded-lg transition-colors cursor-pointer"
                  title="复制邮箱"
                  id="btn-copy-email"
                >
                  {copiedText === "email" ? (
                    <span className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* MBTI Personality */}
              <div id="cnt-age" className="flex items-center gap-3 p-3.5 bg-white/10 rounded-xl border border-white/30">
                <div className="p-2 bg-stone-100 text-black rounded-lg">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">MBTI类型 / Personality</p>
                  <p className="text-sm font-semibold text-neutral-850">INTJ</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
}

function BookOpenIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}
