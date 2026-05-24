import { GraduationCap, BookOpen, Star, Calendar, Bookmark } from "lucide-react";
import { educationData } from "../data";
import GlassCard from "./GlassCard";

export default function EducationSection() {
  return (
    <section id="education" className="w-full py-12">
      {/* Editorial Section Header */}
      <div className="flex flex-col mb-10 relative select-none">
        <div className="text-[11px] font-mono tracking-[0.25em] text-[#4B9DA9] font-bold uppercase mb-1.5 flex items-center gap-2">
          <span className="w-6 h-[1px] bg-[#91C6BC]" />
          SEC. 02 / ACADEMICS
        </div>
        <div className="flex items-baseline gap-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#1B4D53] tracking-wide">
            教育背景
          </h2>
          <span className="text-base font-serif italic text-[#91C6BC] font-extralight ml-2">
            &amp; Academic Path
          </span>
        </div>
      </div>

      {/* Grid of Two Major Educational Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {educationData.map((edu, idx) => (
          <GlassCard
            key={edu.school}
            delay={idx * 0.15}
            id={`edu-card-${idx}`}
            className="flex flex-col h-full bg-white/20 border-white/40"
          >
            {/* Top Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/30 backdrop-blur-md text-neutral-700 text-[10px] font-semibold tracking-widest rounded-full border border-white/60 shadow-xs">
                <Calendar className="w-3 h-3" />
                {edu.period}
              </span>
              <span className="immersive-tag">
                {edu.tag}
              </span>
            </div>

            {/* School & Degree */}
            <div className="mb-5">
              <h3 className="text-2xl font-light text-neutral-900 tracking-tight font-serif">
                {edu.school}
              </h3>
              <p className="text-xs font-semibold text-stone-600 mt-1 flex items-center gap-1.5 uppercase tracking-wide">
                <span className="stat-dot" />
                {edu.degree} · <span className="text-neutral-800">{edu.major}</span>
              </p>
            </div>

            {/* In-school Curriculum / Coursework badges */}
            <div className="mb-6 flex-grow">
              <h4 className="text-[10px] font-bold text-neutral-450 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                在校核心课程 (Core Courses)
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {edu.courses.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 bg-white/50 hover:bg-white text-xs text-neutral-600 rounded-lg border border-white/60 transition-all duration-200 cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Honors block, if present */}
            {edu.honors && edu.honors.length > 0 && (
              <div className="mt-4 pt-4 border-t border-dashed border-stone-200">
                <h4 className="text-[10px] font-bold text-neutral-450 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-stone-500" />
                  荣誉表现 (Honors & Recognition)
                </h4>
                <ul className="space-y-2">
                  {edu.honors.map((honor, hidx) => (
                    <li
                      key={hidx}
                      className="text-xs text-neutral-600 flex items-start gap-2 leading-relaxed"
                    >
                      <span className="mt-1 w-1 h-1 rounded-full bg-stone-400 shrink-0" />
                      <span>{honor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
