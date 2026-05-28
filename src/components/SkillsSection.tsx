import { motion } from "motion/react";
import { Sliders, Award, Star, ShieldCheck, HeartHandshake, Sparkles, Database } from "lucide-react";
import { categoriesData, certificatesData } from "../data";
import GlassCard from "./GlassCard";

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12">
      {/* Section Title */}
      <div className="flex flex-col mb-10 relative select-none">
        <div className="text-[11px] font-mono tracking-[0.25em] text-[#4B9DA9] font-bold uppercase mb-1.5 flex items-center gap-2">
          <span className="w-6 h-[1px] bg-[#91C6BC]" />
          SEC. 01 / ARSENAL
        </div>
        <div className="flex items-baseline gap-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#1B4D53] tracking-wide">
            技能资质
          </h2>
          <span className="text-base font-serif italic text-[#91C6BC] font-extralight ml-2">
            &amp; Professional Certifications
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side (Lg: col-span-8) - classified software stack levels */}
        <div id="software-skills" className="lg:col-span-8 space-y-6">
          <div className="text-[10px] font-bold text-neutral-450 uppercase tracking-widest pl-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-stone-600" />
            软件与开发技能矩阵 (Software Core Stack)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categoriesData.map((cat, cIdx) => (
              <GlassCard
                key={cat.category}
                delay={cIdx * 0.1}
                id={`skill-cat-${cIdx}`}
                className="bg-white/15 border-white/25 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 pb-3.5 border-b border-black/5 mb-4">
                    <span className="immersive-tag text-[9px]">
                      {cIdx === 0 && "GEN-AI"}
                      {cIdx === 1 && "ARTIST"}
                      {cIdx === 2 && "CGI MODEL"}
                      {cIdx === 3 && "ANALYTICS"}
                    </span>
                    
                    <h3 className="text-base font-medium text-neutral-800 tracking-tight font-serif">
                      {cat.category}
                    </h3>
                  </div>
                  
                  {/* Horizontal split for Skill List - Full width spacious design */}
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                    {/* Progression sliders */}
                    <div className="space-y-4">
                      {cat.skills.map((skill) => {
                        // Calculate width pct
                        const pct = skill.level * 20; // e.g. 5 * 20 = 100%
                        return (
                          <div key={skill.name} className="group">
                            <div className="flex justify-between items-center text-xs font-semibold mb-1">
                              <span className="text-neutral-700 font-semibold group-hover:text-neutral-900 transition-colors">
                                {skill.name}
                              </span>
                              <span className="text-[10px] font-bold font-mono text-neutral-455 flex items-center gap-1">
                                {skill.level === 5 && "Expert"}
                                {skill.level === 4 && "Advanced"}
                                {skill.level === 3 && "Proficient"}
                                {skill.level === 2 && "Vanguard"}
                                <span className="text-neutral-700 font-extrabold">{pct}%</span>
                              </span>
                            </div>
                            
                            {/* Elegant visual indicator bar */}
                            <div className="h-1.5 w-full bg-neutral-200/60 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${pct}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full rounded-full bg-[#91C6BC]"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Right Side (Lg: col-span-4) - certifications & certificates */}
        <div id="general-skills" className="lg:col-span-4 space-y-6">
          <div className="text-[10px] font-bold text-neutral-450 uppercase tracking-widest pl-3 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-stone-600" />
            个人资质证书 (Education & Certifications)
          </div>

          <GlassCard hoverAction={false} id="certifications-board" className="bg-white/15 border-white/25 p-6">
            <h3 className="text-lg font-medium text-neutral-900 tracking-tight leading-tight mb-4 flex items-center gap-2 font-serif bg-clip-text">
              <ShieldCheck className="w-5 h-5 text-stone-700" />
              经认证资质 (Accredited Certs)
            </h3>
            
            <div className="space-y-4 pt-1">
              {certificatesData.map((cert) => (
                <div
                  key={cert.name}
                  className="p-3 bg-white/40 border border-white/50 rounded-xl hover:bg-white/80 transition-all duration-200"
                >
                  <p className="text-xs font-bold text-neutral-800 leading-snug">
                    {cert.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Extra artistic design quote banner */}
            <div className="mt-6 pt-5 border-t border-black/5 text-center">
              <HeartHandshake className="w-5 h-5 text-stone-500 mx-auto mb-2" />
              <p className="text-xs italic font-normal text-stone-600 leading-relaxed font-serif">
                “跨介视角启发产品思维；数智AI工具放大思维交付产能。”
              </p>
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
}
