"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center"
          style={{ backgroundColor: "rgb(var(--bg))" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 animate-spin-slow rounded-full border border-dashed border-accent/40" />
              <div className="absolute -inset-3 animate-spin-slower rounded-full border border-dashed border-lime/40" />
              <Image
                src="/logo.png"
                alt="In-Tel Services"
                width={96}
                height={96}
                priority
                className="relative h-20 w-20 object-contain"
              />
            </motion.div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-[rgb(var(--border))]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-lime"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
