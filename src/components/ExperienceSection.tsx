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
                    {currentExp.tags.map((tag) => (
                      <span key={tag} className="immersive-tag text-[9px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Split Grid for Content and Custom Creative Exhibit Images */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                  
                  {/* Left Column: Data & Logs */}
                  <div className="lg:col-span-7 space-y-6">
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
                      <h4 className="text-[10px] font-bold text-neutral-450 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-stone-550" />
                        实战落地成果 (Quantifiable Achievements)
                      </h4>
                      <div className="space-y-2.5">
                        {currentExp.achievements.map((ach, ai) => (
                          <div
                            key={ai}
                            className="flex items-start gap-2.5 hover:translate-x-1 transition-transform duration-200 cursor-default"
                          >
                            <CheckCircle2 className="w-4 h-4 text-stone-600 mt-1 shrink-0" />
                            <span className="text-xs sm:text-sm text-neutral-800 font-semibold leading-relaxed">
                              {ach}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Custom Visual Image Illustration representing the project */}
                  <div className="lg:col-span-5 flex flex-col justify-start">
                    <div className="text-[10px] font-bold text-neutral-450 uppercase tracking-widest mb-4 flex items-center gap-1.5 pl-1">
                      <Sparkles className="w-3.5 h-3.5 text-stone-500" />
                      创意设计实存/项目影像 (Visual Exhibit Gallery)
                    </div>

                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/50 bg-linear-to-b from-white/40 to-white/10 p-4 shadow-sm flex flex-col items-center">
                      {/* Artistic SVG Renderers for each company brand */}
                      {currentExp.id === "bamboo" && (
                        <div className="w-full flex flex-col items-center">
                          <svg className="w-full h-40" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Background mesh */}
                            <rect width="200" height="120" rx="12" fill="#E8F4F1" />
                            <circle cx="100" cy="60" r="45" fill="#FAFBE8" opacity="0.6" />
                            {/* Bamboo stalk geometry */}
                            <path d="M40 10 L40 110 M44 10 L44 110" stroke="#91C6BC" strokeWidth="2" strokeDasharray="6,4" />
                            <path d="M40 30 Q55 25 60 15 M44 60 Q65 55 70 45" stroke="#4B9DA9" strokeWidth="1.5" />
                            {/* P&G / Olympic bottle packaging outlines */}
                            <rect x="90" y="35" width="28" height="55" rx="8" fill="#FFFFFF" stroke="#4B9DA9" strokeWidth="2" />
                            <rect x="96" y="27" width="16" height="8" rx="2" fill="#E37434" />
                            <circle cx="104" cy="58" r="8" stroke="#E37434" strokeWidth="1.5" />
                            <path d="M100 58 L108 58" stroke="#E37434" strokeWidth="2" />
                            {/* Star indicators */}
                            <path d="M150 25 L153 32 L160 32 L155 37 L157 44 L150 40 L143 44 L145 37 L140 32 L147 32 Z" fill="#E37434" />
                            <path d="M165 55 L167 58 L172 58 L168 61 L170 66 L165 63 L160 66 L162 61 L158 58 L163 58 Z" fill="#91C6BC" />
                            {/* Text badge */}
                            <text x="100" y="105" fill="#1F4D53" fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="1">ANMUXI x PARIS OLYMPICS</text>
                          </svg>
                          <div className="mt-3 text-center">
                            <p className="text-xs font-bold text-stone-750">《安慕希 x 巴黎奥运会》全案视觉图</p>
                            <p className="text-[10px] text-stone-500 mt-0.5">跨媒介大牌包装，3D空间瓶体叙事落地体系</p>
                          </div>
                        </div>
                      )}

                      {currentExp.id === "dailyneaty" && (
                        <div className="w-full flex flex-col items-center">
                          <svg className="w-full h-40" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="200" height="120" rx="12" fill="#FBF9E3" />
                            <circle cx="160" cy="40" r="30" fill="#E8F4F1" opacity="0.8" />
                            {/* Device isometric contour */}
                            <rect x="40" y="30" width="60" height="60" rx="12" fill="#FFFFFF" stroke="#4B9DA9" strokeWidth="2.5" />
                            <circle cx="70" cy="60" r="18" stroke="#91C6BC" strokeWidth="2" strokeDasharray="3 3 animate-spin" />
                            {/* Core status lighting */}
                            <circle cx="70" cy="60" r="6" fill="#E37434" />
                            {/* UI Graph Overlay */}
                            <path d="M115 80 L130 65 L145 70 L165 42 L180 35" stroke="#E37434" strokeWidth="2.5" strokeLinecap="round" />
                            <circle cx="180" cy="35" r="4" fill="#E37434" />
                            <rect x="125" y="85" width="45" height="18" rx="4" fill="#FFFFFF" stroke="#4B9DA9" strokeWidth="1" />
                            <text x="147.5" y="97" fill="#4B9DA9" fontSize="7" fontWeight="bold" textAnchor="middle">CR +18% (618)</text>
                            {/* Mini sparkles */}
                            <path d="M25 45 L28 48 L25 51 L22 48 Z" fill="#E37434" />
                          </svg>
                          <div className="mt-3 text-center">
                            <p className="text-xs font-bold text-stone-750">《daily neaty - 618 大促》数据驱动全案</p>
                            <p className="text-[10px] text-stone-500 mt-0.5">独立主导核心页面，全线转化率跨越式提升 18%</p>
                          </div>
                        </div>
                      )}

                      {currentExp.id === "bluefocus" && (
                        <div className="w-full flex flex-col items-center">
                          <svg className="w-full h-40" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="200" height="120" rx="12" fill="#EAF3F4" />
                            <circle cx="100" cy="60" r="50" stroke="#91C6BC" strokeWidth="0.75" />
                            {/* Brand nodes system */}
                            <circle cx="65" cy="40" r="14" fill="#FFFFFF" stroke="#4B9DA9" strokeWidth="1.5" />
                            <text x="65" y="43" fill="#1F4D53" fontSize="8" fontWeight="bold" textAnchor="middle">雀巢</text>
                            
                            <circle cx="135" cy="40" r="14" fill="#FFFFFF" stroke="#4B9DA9" strokeWidth="1.5" />
                            <text x="135" y="43" fill="#1F4D53" fontSize="8" fontWeight="bold" textAnchor="middle">伊利</text>
                            
                            <circle cx="100" cy="88" r="16" fill="#FAFBE8" stroke="#E37434" strokeWidth="2" />
                            <text x="100" y="91" fill="#E37434" fontSize="7" fontWeight="black" textAnchor="middle">只此青绿</text>
                            
                            {/* Connection links */}
                            <path d="M79 40 L121 40" stroke="#91C6BC" strokeWidth="2" strokeDasharray="4,2" />
                            <path d="M69 53 L90 77" stroke="#4B9DA9" strokeWidth="1.5" />
                            <path d="M131 53 L108 77" stroke="#4B9DA9" strokeWidth="1.5" />
                            {/* Pulse rings */}
                            <circle cx="100" cy="88" r="22" stroke="#E37434" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.6" />
                            {/* Campaign flag */}
                            <path d="M10 20 H30 L25 28 L30 36 H10 Z" fill="#E37434" />
                            <text x="15" y="30" fill="#FFFFFF" fontSize="7" fontWeight="bold">4A</text>
                          </svg>
                          <div className="mt-3 text-center">
                            <p className="text-xs font-bold text-stone-750">《4A巨头蓝色光标 - 口碑与爆款联动》</p>
                            <p className="text-[10px] text-stone-500 mt-0.5">跨界国风顶流 IP 视觉，深度捕获年轻代核心心智</p>
                          </div>
                        </div>
                      )}

                      {currentExp.id === "jichuan" && (
                        <div className="w-full flex flex-col items-center">
                          <svg className="w-full h-40" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="200" height="120" rx="12" fill="#FAF7EB" />
                            <circle cx="100" cy="60" r="45" fill="#E5EFEF" />
                            {/* Camera lens construct */}
                            <circle cx="100" cy="60" r="30" stroke="#4B9DA9" strokeWidth="3" />
                            <circle cx="100" cy="60" r="24" stroke="#91C6BC" strokeWidth="1.5" />
                            <circle cx="100" cy="60" r="16" fill="#1F4D53" />
                            {/* Aperture blades */}
                            <line x1="100" y1="36" x2="114" y2="48" stroke="#FAF7EB" strokeWidth="1.5" />
                            <line x1="124" y1="60" x2="112" y2="74" stroke="#FAF7EB" strokeWidth="1.5" />
                            <line x1="100" y1="84" x2="86" y2="72" stroke="#FAF7EB" strokeWidth="1.5" />
                            <line x1="76" y1="60" x2="88" y2="46" stroke="#FAF7EB" strokeWidth="1.5" />
                            {/* Light golden bulb bokeh / lens flare */}
                            <circle cx="130" cy="35" r="12" fill="#FAFBE8" opacity="0.7" />
                            <circle cx="140" cy="35" r="6" fill="#E37434" opacity="0.4" />
                            {/* Viewfinder corner guides */}
                            <path d="M20 25 V15 H30" stroke="#4B9DA9" strokeWidth="1.5" />
                            <path d="M180 25 V15 H170" stroke="#4B9DA9" strokeWidth="1.5" />
                            <path d="M20 95 V105 H30" stroke="#4B9DA9" strokeWidth="1.5" />
                            <path d="M180 95 V105 H170" stroke="#4B9DA9" strokeWidth="1.5" />
                            {/* Studio fund text */}
                            <text x="100" y="112" fill="#1F4D53" fontSize="7" fontWeight="bold" textAnchor="middle">川美联合青年创业基金扶持</text>
                          </svg>
                          <div className="mt-3 text-center">
                            <p className="text-xs font-bold text-stone-750">《橘川摄影工作室 - 品牌自创业全案》</p>
                            <p className="text-[10px] text-stone-500 mt-0.5">从 0 到 1 确立轻奢美学叙事，川美官方基金评定扶优</p>
                          </div>
                        </div>
                      )}
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
