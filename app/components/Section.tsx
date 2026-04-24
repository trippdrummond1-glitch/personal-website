"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, index, label, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`relative px-6 md:px-10 py-24 md:py-36 border-t hairline ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mono text-xs uppercase tracking-[0.2em] text-muted mb-10 md:mb-16 flex items-baseline gap-4"
      >
        <span>{index}</span>
        <span className="h-px flex-1 bg-rule" />
        <span>{label}</span>
      </motion.div>
      {children}
    </section>
  );
}
