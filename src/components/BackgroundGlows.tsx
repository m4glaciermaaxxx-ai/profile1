import { motion } from "motion/react";

export default function BackgroundGlows() {
  return (
    <div className="fixed inset-0 -z-25 overflow-hidden pointer-events-none">
      {/* Glow 1 - Soft Mint Sage (Primary) */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] min-w-[400px] rounded-full bg-radial from-[#91C6BC]/15 to-transparent blur-3xl animate-float-slow"
        style={{ contentVisibility: "auto" }}
      />
      {/* Glow 2 - Deep Elegant Ocean Blue */}
      <motion.div
        className="absolute top-[25%] right-[-10%] w-[45vw] h-[45vw] min-w-[350px] rounded-full bg-radial from-[#4B9DA9]/10 to-transparent blur-3xl animate-float-mid"
        style={{ contentVisibility: "auto" }}
      />
      {/* Glow 3 - Pure Light Terracotta Coral Accent */}
      <motion.div
        className="absolute bottom-[-10%] left-[15%] w-[40vw] h-[40vw] min-w-[350px] rounded-full bg-radial from-[#E37434]/8 to-transparent blur-3xl animate-float-slow"
        style={{ contentVisibility: "auto" }}
      />
    </div>
  );
}
