"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only on devices with a fine pointer (mouse)
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduce) return;
    setEnabled(true);

    function move(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setHovering(
        Boolean(
          target.closest("a, button, [data-cursor='hover'], input, textarea")
        )
      );
    }

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <AnimatePresence>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden rounded-full border border-accent mix-blend-difference md:block"
        animate={{
          x: pos.x - (hovering ? 22 : 10),
          y: pos.y - (hovering ? 22 : 10),
          width: hovering ? 44 : 20,
          height: hovering ? 44 : 20,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
      />
    </AnimatePresence>
  );
}
