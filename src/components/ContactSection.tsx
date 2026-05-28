import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Copy, Check, Send, ArrowRight } from "lucide-react";
import { personalInfoData } from "../data";
import GlassCard from "./GlassCard";

export default function ContactSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contact-end" className="w-full py-16 mb-8">
      {/* Editorial Section Header */}
      <div className="flex flex-col mb-10 relative select-none">
        <div className="text-[11px] font-mono tracking-[0.25em] text-[#4B9DA9] font-bold uppercase mb-1.5 flex items-center gap-2">
          <span className="w-6 h-[1px] bg-[#91C6BC]" />
          SEC. 06 / REACH OUT
        </div>
        <div className="flex items-baseline gap-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#1B4D53] tracking-wide">
            联系方式
          </h2>
          <span className="text-base font-serif italic text-[#91C6BC] font-extralight ml-2">
            &amp; Contact Pathway
          </span>
        </div>
      </div>

      <GlassCard hoverAction={false} id="contact-end-card" className="bg-white/20 border-white/40 p-8 md:p-12 relative overflow-hidden">
        {/* Soft watery reflection visual backdrop */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-linear-to-tr from-[#91C6BC]/8 via-[#4B9DA9]/5 to-transparent blur-3xl pointer-events-none select-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative z-10">
          {/* Left Block - Elegant Call to Action text */}
          <div className="md:col-span-5 md:translate-x-6 space-y-3">
            <span className="px-3 py-1 bg-[#1B4D53]/5 border border-[#1B4D53]/10 text-[#1B4D53] text-[9px] font-bold tracking-widest uppercase rounded-full">
              Sincere Partnership
            </span>
            <h3 className="text-xl font-light text-neutral-900 tracking-tight font-serif leading-tight">
              非常期待日后可以与您一起共事
            </h3>
          </div>

          {/* Right Block - Interactive glass slots for phone & email */}
          <div className="md:col-span-7 space-y-4">
            {/* Phone connection pill */}
            <div className="group flex items-center justify-between p-4 bg-white/45 hover:bg-white/75 border border-white/60 rounded-2xl shadow-xs transition-all duration-300">
              <a href={`tel:${personalInfoData.phone}`} className="flex items-center gap-4 flex-grow">
                <div className="p-3 bg-[#1B4D53]/5 rounded-xl text-[#1B4D53] group-hover:bg-[#1B4D53] group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">联络电话 / Telephone</p>
                  <p className="text-sm font-semibold text-neutral-800 font-mono tracking-wide mt-0.5">{personalInfoData.phone}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-1.5 pl-2">
                <button
                  onClick={() => handleCopy(personalInfoData.phone, "phone")}
                  className="p-2.5 bg-white/50 hover:bg-white text-neutral-550 hover:text-[#1B4D53] border border-white/80 hover:border-neutral-200 rounded-xl transition-all shadow-xs cursor-pointer"
                  title="复制电话"
                >
                  {copiedText === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-600 animate-scale" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Email connection pill */}
            <div className="group flex items-center justify-between p-4 bg-white/45 hover:bg-white/75 border border-white/60 rounded-2xl shadow-xs transition-all duration-300">
              <a href={`mailto:${personalInfoData.email}`} className="flex items-center gap-4 flex-grow">
                <div className="p-3 bg-[#1B4D53]/5 rounded-xl text-[#1B4D53] group-hover:bg-[#E37434] group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">电子邮箱 / Email Address</p>
                  <p className="text-sm font-semibold text-neutral-800 font-mono tracking-wide mt-0.5">{personalInfoData.email}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-1.5 pl-2">
                <button
                  onClick={() => handleCopy(personalInfoData.email, "email")}
                  className="p-2.5 bg-white/50 hover:bg-white text-neutral-550 hover:text-[#1B4D53] border border-white/80 hover:border-neutral-200 rounded-xl transition-all shadow-xs cursor-pointer"
                  title="复制邮箱"
                >
                  {copiedText === "email" ? (
                    <Check className="w-4 h-4 text-emerald-600 animate-scale" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Design statement */}
            <div className="pt-2 text-right text-[10px] text-[#4B9DA9] font-mono tracking-widest flex items-center justify-end gap-1.5 select-none">
              <span>DESIGNED FOR CONTINUITY</span>
              <ArrowRight className="w-3 h-3 text-[#E37434]" />
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
