"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { making, site } from "../content";

const REVEAL = {
  initial: { y: "100%" },
  animate: { y: "0%" },
  transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Hero() {
  const [i, setI] = useState(0);
  const { scrollY } = useScroll();
  const cueOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, -120]);

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % making.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.section
      id="top"
      style={{ y: heroY }}
      className="relative min-h-[100svh] flex flex-col justify-between px-6 md:px-10 pt-36 pb-10"
    >
      <div className="flex items-baseline gap-4 md:gap-6 overflow-hidden">
        <div className="mono text-xs md:text-sm uppercase tracking-[0.2em] text-muted pb-2 md:pb-4 shrink-0">
          (01) Making
        </div>
        <div className="relative h-[1em] min-w-[4ch] overflow-hidden font-display text-[clamp(3rem,9vw,9rem)] leading-none">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={making[i]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block italic"
            >
              {making[i]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-auto">
        <div className="overflow-hidden">
          <motion.h1
            {...REVEAL}
            className="font-display italic text-[clamp(3rem,10vw,10rem)] leading-[0.92] tracking-[-0.02em]"
          >
            I&apos;m {site.name.split(" ")[0]}.
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-display text-[clamp(3rem,10vw,10rem)] leading-[0.92] tracking-[-0.02em]"
          >
            Building in public.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end"
        >
          <div className="md:col-span-5">
            <p className="text-muted text-base md:text-lg max-w-lg leading-relaxed">
              Corporate pro by day, creator by night. Using AI to build a
              YouTube channel from zero to a hundred thousand — and posting the
              workflows, the honest numbers, and the teardowns I wish someone
              had handed me on day one.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex md:justify-end">
            <div className="mono text-xs uppercase tracking-[0.2em] text-muted">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Live
              </div>
              {site.location}
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="mt-14 md:mt-16 flex items-center justify-between border-t hairline pt-5"
        >
          <div className="mono text-xs uppercase tracking-[0.2em] text-muted">
            Scroll to enter
          </div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="mono text-xs uppercase tracking-[0.2em]"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
