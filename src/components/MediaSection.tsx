import { motion } from "motion/react";
import { Youtube, Users, Eye, TrendingUp, Compass, MessageCircle, Play, Sparkles } from "lucide-react";
import { mediaExperienceData } from "../data";
import GlassCard from "./GlassCard";

export default function MediaSection() {
  return (
    <section id="self-media" className="w-full py-12">
      {/* Editorial Section Header */}
      <div className="flex flex-col mb-10 relative select-none">
        <div className="text-[11px] font-mono tracking-[0.25em] text-[#4B9DA9] font-bold uppercase mb-1.5 flex items-center gap-2">
          <span className="w-6 h-[1px] bg-[#91C6BC]" />
          SEC. 04 / CHANNELS
        </div>
        <div className="flex items-baseline gap-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#1B4D53] tracking-wide">
            自媒体经历
          </h2>
          <span className="text-base font-serif italic text-[#91C6BC] font-extralight ml-2">
            &amp; Digital Presence
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Glassmorphic Phone View Mockup representing the Douyin Account */}
        <div id="media-mockup" className="md:col-span-5 lg:col-span-4 flex justify-center">
          <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-[40px] border-4 border-white/80 bg-white/35 backdrop-blur-3xl shadow-2xl p-4 flex flex-col justify-between overflow-hidden group">
            {/* Glossy Reflection Highlight */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-white/20 pointer-events-none rounded-[36px]" />
            
            {/* Top Ear Speaker & Camera notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4.5 bg-neutral-900 rounded-full flex items-center justify-between px-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
              <span className="w-8 h-1 rounded-full bg-neutral-750" />
            </div>

            {/* Profile Block header inside the mockup */}
            <div className="pt-6">
              <div className="flex items-center gap-2.5 mt-3">
                <div className="w-12 h-12 rounded-full ring-2 ring-stone-300 bg-stone-900 flex items-center justify-center font-serif text-lg font-bold text-white shadow-md">
                  川
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-800 tracking-tight flex items-center gap-1">
                    {mediaExperienceData.channelName}
                    <span className="w-3 h-3 bg-stone-500 rounded-full flex items-center justify-center animate-pulse" title="认证">
                      <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </h4>
                  <p className="text-[9px] font-mono text-stone-505">抖音垂直美学创作者</p>
                </div>
              </div>

              {/* Follower Badge */}
              <div className="mt-3.5 flex justify-between gap-1">
                <div className="bg-white/80 backdrop-blur-xs rounded-lg p-1.5 flex-1 text-center border border-white/40">
                  <p className="text-[8px] font-bold text-neutral-400 uppercase">粉丝量</p>
                  <p className="text-sm font-black text-stone-800">25,000+</p>
                </div>
                <div className="bg-white/80 backdrop-blur-xs rounded-lg p-1.5 flex-1 text-center border border-white/40">
                  <p className="text-[8px] font-bold text-neutral-400 uppercase">爆款播放</p>
                  <p className="text-sm font-black text-stone-600">2.5M+</p>
                </div>
              </div>
            </div>

            {/* Simulated Live Viral Video Card */}
            <div className="my-auto py-2">
              <div className="relative aspect-[4/3] rounded-2xl bg-stone-900 overflow-hidden shadow-inner group-hover:scale-101 transition-transform duration-300">
                {/* Gradient and image mesh */}
                <div className="absolute inset-0 bg-linear-to-br from-stone-800/40 via-stone-900/60 to-stone-855/40" />
                <div className="absolute inset-0 flex flex-col justify-between p-3 z-10 text-white">
                  <span className="self-start px-2 py-0.5 bg-black/45 rounded-md text-[8px] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <span className="stat-dot" />
                    MBTI 美学空间
                  </span>
                  
                  {/* Decorative Play Button */}
                  <div className="self-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/30 cursor-pointer">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>

                  <p className="text-[10px] font-bold tracking-tight drop-shadow-md truncate font-serif">
                    INFP心理行为背后的动机
                  </p>
                </div>
                
                {/* Statistics display inside video */}
                <div className="absolute inset-x-0 bottom-0 py-1 px-3 bg-black/40 backdrop-blur-xs flex items-center justify-between text-white text-[8px]">
                  <span className="flex items-center gap-1">
                    <Eye className="w-2.5 h-2.5" /> 2.5 Million
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-2.5 h-2.5" /> 84K Likes
                  </span>
                </div>
              </div>
            </div>

            {/* Phone bottom bar */}
            <div className="w-16 h-1 bg-stone-400 rounded-full self-center" />
          </div>
        </div>

        {/* Right Column: Key Operational Achievements & Methods */}
        <div id="media-analytics" className="md:col-span-7 lg:col-span-8 flex flex-col justify-between">
          <GlassCard hoverAction={false} className="flex flex-col h-full bg-white/15 border-white/25 p-6">
            
            {/* Brief Bio & Identity */}
            <div className="mb-6">
              <span className="immersive-tag text-[9px]">
                {mediaExperienceData.platform}
              </span>
              <h3 className="text-2xl font-light text-neutral-900 tracking-tight mt-2.5 font-serif">
                mbti自媒体账号的创立与运营
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                在2022年识别出mbti将成为日后热门话题，在风口早期进行账号创立，通过分析热点与用户心理，打造mbti心理与迷因账号，实现自媒体产品实践
              </p>
            </div>

            {/* Display Stats Counter Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {mediaExperienceData.stats.map((stat, sIdx) => {
                let textIcon = <Users className="w-4 h-4 text-stone-700" />;
                if (sIdx === 1) {
                  textIcon = <Eye className="w-4 h-4 text-stone-700" />;
                } else if (sIdx === 2) {
                  textIcon = <TrendingUp className="w-4 h-4 text-stone-700" />;
                }
                return (
                  <div
                    key={stat.label}
                    className="p-4 bg-white/45 border border-white/50 rounded-2xl hover:scale-102 transition-transform duration-200"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-stone-100">
                        {textIcon}
                      </div>
                      <span className="text-[9px] font-bold text-neutral-450 uppercase tracking-widest">{stat.label}</span>
                    </div>
                    <p className="text-3xl font-extrabold text-[#1B4D53] font-display">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-neutral-500 leading-tight mt-1">{stat.subtext}</p>
                  </div>
                );
              })}
            </div>

            {/* Strategy list */}
            <div className="space-y-4 pt-4 border-t border-black/5 flex-grow">
              <div>
                <h4 className="text-[10px] font-bold text-neutral-450 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-neutral-500" />
                  内容闭环与运营方法论 (Content Loop)
                </h4>
                <ul className="space-y-2">
                  {mediaExperienceData.description.map((desc, dI) => (
                    <li key={dI} className="text-xs text-neutral-600 flex items-start gap-2 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-stone-400 shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <h4 className="text-[10px] font-bold text-neutral-450 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-stone-600" />
                  流量沉淀与成果展现 (Traffic Capture)
                </h4>
                <ul className="space-y-2">
                  {mediaExperienceData.achievements.map((ach, aI) => (
                    <li key={aI} className="text-xs text-neutral-800 font-semibold flex items-start gap-2 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-stone-500 shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </GlassCard>
        </div>

      </div>
    </section>
  );
}
