import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function WaterRippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      // Exclude pointer events on elements we might want standard focus/no interference, 
      // but usually clicks anywhere look great as water ripples.
      const id = Date.now() + Math.random();
      const newRipple: Ripple = {
        id,
        x: e.pageX,
        y: e.pageY,
      };
      
      setRipples((prev) => [...prev, newRipple]);

      // Automatically clean up ripple object after animation finishes to prevent DOM footprint
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 2200);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute pointer-events-none select-none"
            style={{ left: ripple.x, top: ripple.y }}
          >
            {/* Concentric Circle 1 - Tiny Refraction Ripple */}
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 3.2, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 border border-white/50 bg-white/5 backdrop-blur-[2px] shadow-[inset_0_0_10px_rgba(255,255,255,0.4)]"
              style={{ width: "36px", height: "36px" }}
            />

            {/* Concentric Circle 2 - Floating Shimmer Ring */}
            <motion.div
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 6.8, opacity: 0 }}
              transition={{ duration: 1.7, ease: "easeOut", delay: 0.12 }}
              className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 border border-white/30 bg-transparent shadow-[0_0_15px_rgba(145,198,188,0.15)]"
              style={{ width: "36px", height: "36px" }}
            />

            {/* Concentric Circle 3 - Slow Wide Ambient Shockwave */}
            <motion.div
              initial={{ scale: 0, opacity: 0.25 }}
              animate={{ scale: 10.5, opacity: 0 }}
              transition={{ duration: 2.2, ease: "easeOut", delay: 0.25 }}
              className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 border border-[#91C6BC]/20 bg-transparent"
              style={{ width: "36px", height: "36px" }}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
