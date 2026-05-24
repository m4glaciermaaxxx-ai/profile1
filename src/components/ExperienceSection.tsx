import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Target, Award, ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { workExperienceData } from "../data";
import GlassCard from "./GlassCard";

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentExp = workExperienceData[activeIndex];

  return (
    <section id="experience" className="w-full py-12">
      {/* Section Header */}
      <div className="flex flex-col mb-10 relative select-none">
        <div className="text-[11px] font-mono tracking-[0.25em] text-[#4B9DA9] font-bold uppercase mb-1.5 flex items-center gap-2">
          <span className="w-6 h-[1px] bg-[#91C6BC]" />
          SEC. 03 / TIMELINE
        </div>
        <div className="flex items-baseline gap-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#1B4D53] tracking-wide">
            工作及项目经历
          </h2>
          <span className="text-base font-serif italic text-[#91C6BC] font-extralight ml-2">
            &amp; Professional Milestones
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Sidebar Company Selector Tabs */}
        <div className="lg:col-span-4 flex flex-col space-y-2 group">
          <div className="text-[10px] font-bold text-stone-450 uppercase tracking-widest pl-3 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-stone-500" />
            时间线轨迹 (TRAJECTORIES)
          </div>
          
          {/* Scrollable container on mobile, stacked list on desktop */}
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-2 shrink-0 scrollbar-none snap-x">
            {workExperienceData.map((exp, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`snap-center flex flex-col items-start p-4 rounded-2xl border transition-all duration-300 text-left min-w-[180px] sm:min-w-[220px] lg:min-w-0 cursor-pointer ${
                    isActive
                      ? "bg-white/80 border-neutral-300/80 shadow-xs translate-x-1"
                      : "bg-white/10 border-white/20 hover:bg-white/40 hover:border-white/50"
                  }`}
                  id={`tab-exp-${exp.id}`}
                >
                  <span className="text-[9px] font-bold text-neutral-450 tracking-widest uppercase mb-1.5 flex items-center gap-1">
                    <span className="stat-dot" style={{ opacity: isActive ? 1 : 0.4 }} />
                    {exp.period}
                  </span>
                  <span className={`text-base font-light font-serif leading-tight ${isActive ? 'text-neutral-900' : 'text-neutral-600'}`}>
                    {exp.company}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-400 mt-1">
                    {exp.position}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Detailed Animated Content Deck */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExp.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard hoverAction={false} id={`exp-content-${currentExp.id}`} className="bg-white/15 border-white/25">
                {/* Header Information inside Card */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-black/5">
                  <div>
                    <span className="text-[10px] font-bold text-stone-500 tracking-widest block uppercase mb-1">
                      {currentExp.period}
                    </span>
                    <h3 className="text-3xl font-light text-neutral-950 tracking-tight leading-tight font-serif">
                      {currentExp.company}
                    </h3>
                    <p className="text-xs font-semibold text-stone-650 mt-1.5 flex items-center gap-1.5 uppercase tracking-wide">
                      <ChevronRight className="w-4 h-4 text-stone-400" />
                      {currentExp.position}
                    </p>
                  </div>
                  
                  {/* Decorative visual tag collection */}
                  <div className="flex flex-wrap gap-1.5 max-w-[220px] sm:justify-end">
                    {currentExp.tags.map((tag) => {
                      const isOrangeTag = ["创意整合", "全域媒介", "大牌包装", "外企资历"].includes(tag);
                      return (
                        <span 
                          key={tag} 
                          className={`${isOrangeTag ? "immersive-tag-orange" : "immersive-tag"} text-[9px]`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Full Width Content Block */}
                <div className="space-y-6 mt-6">
                  {/* Sub-item: Responsibilities / Descriptions */}
                  <div>
                    <h4 className="text-[10px] font-bold text-neutral-450 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-neutral-500" />
                      核心工作描述 (Core Responsibilities)
                    </h4>
                    <div className="space-y-2.5">
                      {currentExp.description.map((desc, di) => (
                        <div key={di} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/30 border border-white/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0" />
                          <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
                            {desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sub-item: Quantifiable Accomplishments & Deliverables */}
                  <div>
                    <h4 className="text-[10px] font-bold text-[#4B9DA9] uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#1B4D53]" />
                      实战落地成果 (Quantifiable Achievements)
                    </h4>
                    <div className="space-y-2.5">
                      {currentExp.achievements.map((ach, ai) => (
                        <div
                          key={ai}
                          className="flex items-start gap-2.5 hover:translate-x-1 transition-transform duration-200 cursor-default"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#E37434] mt-1 shrink-0" />
                          <span className="text-xs sm:text-sm text-neutral-800 font-semibold leading-relaxed">
                            {ach}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
