import { motion } from "motion/react";

export default function BackgroundGlows() {
  return (
    <div className="fixed inset-0 -z-25 overflow-hidden pointer-events-none select-none">
      {/* Background radial glows for aesthetic depth */}
      {/* Glow 1 - Soft Mint Sage */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] min-w-[400px] rounded-full bg-radial from-[#91C6BC]/12 to-transparent blur-3xl animate-float-slow"
        style={{ contentVisibility: "auto" }}
      />
      {/* Glow 2 - Deep Elegant Ocean Blue */}
      <motion.div
        className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] min-w-[350px] rounded-full bg-radial from-[#4B9DA9]/10 to-transparent blur-3xl animate-float-mid"
        style={{ contentVisibility: "auto" }}
      />
      {/* Glow 3 - Coral Accent */}
      <motion.div
        className="absolute bottom-[-10%] left-[15%] w-[40vw] h-[40vw] min-w-[350px] rounded-full bg-radial from-[#E37434]/6 to-transparent blur-3xl animate-float-slow"
        style={{ contentVisibility: "auto" }}
      />

      {/* Layered Flowing Water Currents - Seamlessly repeating 1440px waves */}
      
      {/* 1. Upper Water Current (Flowing Left) */}
      <div className="absolute top-[12%] left-0 w-full overflow-hidden h-[180px] opacity-[0.45]">
        <div className="w-[2880px] h-full flex animate-water-1">
          <svg className="w-[2880px] h-full" viewBox="0 0 2880 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="water-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#91C6BC" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#4B9DA9" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,80 Q360,10 720,80 T1440,80 Q1800,10 2160,80 T2880,80 L2880,180 L0,180 Z"
              fill="url(#water-grad-1)"
            />
            {/* Soft highlight crest line */}
            <path
              d="M0,80 Q360,10 720,80 T1440,80 Q1800,10 2160,80 T2880,80"
              stroke="white"
              strokeWidth="2"
              strokeOpacity="0.55"
            />
          </svg>
        </div>
      </div>

      {/* 2. Middle Wider Water Current (Flowing Right) */}
      <div className="absolute top-[45%] left-0 w-full overflow-hidden h-[240px] opacity-[0.38]">
        <div className="w-[2880px] h-full flex animate-water-2">
          <svg className="w-[2880px] h-full" viewBox="0 0 2880 240" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="water-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4B9DA9" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1B4D53" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,110 Q360,185 720,110 T1440,110 Q1800,185 2160,110 T2880,110 L2880,240 L0,240 Z"
              fill="url(#water-grad-2)"
            />
            <path
              d="M0,110 Q360,185 720,110 T1440,110 Q1800,185 2160,110 T2880,110"
              stroke="#91C6BC"
              strokeWidth="1.8"
              strokeOpacity="0.45"
            />
          </svg>
        </div>
      </div>

      {/* 3. Lower Deep Water Current (Flowing Left with Bobbing) */}
      <div className="absolute bottom-[8%] left-0 w-full overflow-hidden h-[220px] opacity-[0.42]">
        <div className="w-[2880px] h-full flex animate-water-3">
          <svg className="w-[2880px] h-full" viewBox="0 0 2880 220" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="water-grad-3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FAFBE8" stopOpacity="0.65" />
                <stop offset="50%" stopColor="#91C6BC" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#4B9DA9" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,90 Q360,20 720,90 T1440,90 Q1800,20 2160,90 T2880,90 L2880,220 L0,220 Z"
              fill="url(#water-grad-3)"
            />
            <path
              d="M0,90 Q360,20 720,90 T1440,90 Q1800,20 2160,90 T2880,90"
              stroke="white"
              strokeWidth="2.2"
              strokeOpacity="0.6"
            />
          </svg>
        </div>
      </div>

      {/* Floating subtle micro-shimmer spots */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40 mix-blend-overlay" />
    </div>
  );
}
