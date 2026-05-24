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

                  {/* Horizontal split for Skill List & Tech Illustration Image */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                    {/* Progression sliders */}
                    <div className="md:col-span-8 space-y-4">
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

                    {/* Technical Illustration Image */}
                    <div className="md:col-span-4 p-2.5 rounded-2xl border border-white/50 bg-white/20 flex items-center justify-center min-h-[100px]">
                      {cIdx === 0 && (
                        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" title="AI Graphic">
                          <circle cx="32" cy="32" r="28" fill="#FBF9E3" opacity="0.6" />
                          {/* Neural center node */}
                          <rect x="26" y="26" width="12" height="12" rx="3" fill="#E37434" />
                          {/* Radiating branches */}
                          <line x1="32" y1="26" x2="32" y2="12" stroke="#4B9DA9" strokeWidth="2" strokeDasharray="2 1" />
                          <line x1="32" y1="38" x2="32" y2="52" stroke="#4B9DA9" strokeWidth="2" strokeDasharray="2 1" />
                          <line x1="26" y1="32" x2="12" y2="32" stroke="#4B9DA9" strokeWidth="2" />
                          <line x1="38" y1="32" x2="52" y2="32" stroke="#4B9DA9" strokeWidth="2" />
                          {/* Parameter satellites */}
                          <circle cx="32" cy="12" r="4" fill="#91C6BC" />
                          <circle cx="32" cy="52" r="4" fill="#91C6BC" />
                          <circle cx="12" cy="32" r="4" fill="#E37434" />
                          <circle cx="52" cy="32" r="4" fill="#FAFBE8" stroke="#4B9DA9" strokeWidth="1" />
                          {/* Glow accents */}
                          <path d="M18 18 L24 24" stroke="#FAFBE8" strokeWidth="1.5" />
                          <path d="M46 46 L40 40" stroke="#FAFBE8" strokeWidth="1.5" />
                        </svg>
                      )}

                      {cIdx === 1 && (
                        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" title="Design Graphic">
                          <circle cx="32" cy="32" r="28" fill="#E8F4F1" opacity="0.6" />
                          {/* Anchor point handle vector lines */}
                          <path d="M12 40 Q32 10 52 40" stroke="#4B9DA9" strokeWidth="2" strokeLinecap="round" />
                          {/* Bezier control handles */}
                          <circle cx="32" cy="25" r="4" fill="#E37434" />
                          <line x1="32" y1="25" x2="32" y2="15" stroke="#E37434" strokeWidth="1.5" />
                          <rect x="30" y="13" width="4" height="4" fill="#E37434" />
                          {/* Color Palette Indicators */}
                          <circle cx="20" cy="46" r="5" fill="#91C6BC" />
                          <circle cx="32" cy="46" r="5" fill="#4B9DA9" />
                          <circle cx="44" cy="46" r="5" fill="#FAFBE8" stroke="#4B9DA9" strokeWidth="0.5" />
                        </svg>
                      )}

                      {cIdx === 2 && (
                        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" title="CGI Graphic">
                          <circle cx="32" cy="32" r="28" fill="#F9F6EA" opacity="0.6" />
                          {/* Isometric 3D box wireframe */}
                          <path d="M32 12 L50 21 L32 30 L14 21 Z" stroke="#4B9DA9" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.4" />
                          <path d="M14 21 V41 L32 50 V30 Z" stroke="#4B9DA9" strokeWidth="1.5" />
                          <path d="M50 21 V41 L32 50 V30 Z" stroke="#91C6BC" strokeWidth="1.5" />
                          {/* Dimension coordinate pointers */}
                          <line x1="32" y1="12" x2="32" y2="4" stroke="#E37434" strokeWidth="1.5" />
                          <circle cx="32" cy="4" r="2" fill="#E37434" />
                          {/* Corner points */}
                          <circle cx="32" cy="30" r="2.5" fill="#91C6BC" />
                        </svg>
                      )}

                      {cIdx === 3 && (
                        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" title="Data Tool Graphic">
                          <circle cx="32" cy="32" r="28" fill="#EAF3F4" opacity="0.6" />
                          {/* Strategy nodes and branching table tree */}
                          <rect x="14" y="16" width="36" height="32" rx="4" fill="#FFFFFF" stroke="#4B9DA9" strokeWidth="1.5" />
                          {/* Grid mockup rows */}
                          <line x1="18" y1="24" x2="46" y2="24" stroke="#EAF3F4" strokeWidth="2" />
                          <line x1="18" y1="32" x2="46" y2="32" stroke="#91C6BC" strokeWidth="2" />
                          <line x1="18" y1="40" x2="36" y2="40" stroke="#E5ECEC" strokeWidth="2" fill="#FAFBE8" />
                          {/* Analytics pie sector overlay ring */}
                          <circle cx="44" cy="40" r="8" stroke="#E37434" strokeWidth="2.5" strokeDasharray="32 12" />
                          <circle cx="44" cy="40" r="4" fill="#E37434" />
                        </svg>
                      )}
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
                  {cert.authority && (
                    <p className="text-[10px] text-neutral-450 font-semibold uppercase tracking-wide mt-1">
                      颁发机构: {cert.authority}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Extra artistic design quote banner */}
            <div className="mt-6 pt-5 border-t border-black/5 text-center">
              <HeartHandshake className="w-5 h-5 text-stone-500 mx-auto mb-2" />
              <p className="text-xs italic font-normal text-stone-600 leading-relaxed font-serif">
                “艺术史启发空间美学底层逻辑；数智时代 AI 工具放大创意交付产能。”
              </p>
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
}
