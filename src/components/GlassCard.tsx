import { ReactNode } from "react";
import { motion } from "motion/react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  hoverAction?: boolean;
  key?: string | number;
}

export default function GlassCard({
  children,
  className = "",
  delay = 0,
  id,
  hoverAction = true,
}: GlassCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom elegant ease-out
      }}
      whileHover={
        hoverAction
          ? {
              y: -4,
              boxShadow: "0 20px 40px -15px rgba(22, 22, 22, 0.05)",
              borderColor: "rgba(255, 255, 255, 0.4)",
              backgroundColor: "rgba(255, 255, 255, 0.55)",
            }
          : undefined
      }
      className={`relative immersive-glass rounded-3xl p-6 sm:p-8 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
