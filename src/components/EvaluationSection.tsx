import { Heart, Activity, CheckSquare, Sparkles } from "lucide-react";
import { selfEvaluations } from "../data";
import GlassCard from "./GlassCard";

export default function EvaluationSection() {
  return (
    <section id="evaluation" className="w-full py-12 mb-12">
      {/* Editorial Section Header */}
      <div className="flex flex-col mb-10 relative select-none">
        <div className="text-[11px] font-mono tracking-[0.25em] text-[#4B9DA9] font-bold uppercase mb-1.5 flex items-center gap-2">
          <span className="w-6 h-[1px] bg-[#91C6BC]" />
          SEC. 05 / COMPASS
        </div>
        <div className="flex items-baseline gap-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#1B4D53] tracking-wide">
            自我评价
          </h2>
          <span className="text-base font-serif italic text-[#91C6BC] font-extralight ml-2">
            &amp; Core Strengths
          </span>
        </div>
      </div>

      {/* Bento Grid styling for editorial self assessment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selfEvaluations.map((item, idx) => (
          <GlassCard
            key={item.key}
            delay={idx * 0.15}
            id={`eval-card-${item.key}`}
            className="flex flex-col justify-between h-full group bg-white/15 border-white/25"
          >
            <div>
              {/* Giant Decorative Editorial Numbering */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-5xl font-light text-neutral-800/15 italic tracking-wider transition-all duration-300">
                  {item.key}
                </span>
                
                {/* Visual marker tags */}
                {idx === 0 && <Activity className="w-4 h-4 text-stone-400 opacity-40 group-hover:opacity-100 transition-opacity" />}
                {idx === 1 && <CheckSquare className="w-4 h-4 text-stone-400 opacity-40 group-hover:opacity-100 transition-opacity" />}
                {idx === 2 && <Sparkles className="w-4 h-4 text-stone-400 opacity-40 group-hover:opacity-100 transition-opacity" />}
              </div>

              {/* Title of core value */}
              <h3 className="text-xl font-light text-neutral-900 tracking-tight mb-3 font-serif">
                {item.title}
              </h3>

              {/* Content description with subtle line height */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                {item.content}
              </p>
            </div>

            {/* Subtle decorative visual foot note */}
            <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-[10px] text-neutral-450 font-semibold font-sans">
              <span className="uppercase tracking-widest">YIN PORTFOLIO</span>
              <span>COMPETENCE ACCENT</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
