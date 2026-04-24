"use client";

import { motion } from "motion/react";
import Section from "./Section";
import { learnings } from "../content";

export default function Learnings() {
  return (
    <Section id="learnings" index="(06)" label="Writings & learnings">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-4 md:sticky md:top-32">
          <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.02em]">
            What I&apos;m learning, as I learn it.
          </h3>
          <p className="mt-6 text-muted text-base md:text-lg max-w-md leading-relaxed">
            Short, unpolished notes on AI tooling, YouTube strategy, and what
            it actually feels like to build this from scratch.
          </p>
        </div>

        <ul className="md:col-span-8 border-t hairline">
          {learnings.map((l, i) => (
            <motion.li
              key={l.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="#"
                data-cursor="hover"
                className="group block border-b hairline py-8 md:py-10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-foreground origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <div className="relative grid grid-cols-12 gap-4 md:gap-8 items-start md:items-center">
                  <span className="col-span-2 md:col-span-1 mono text-xs uppercase tracking-[0.2em] text-muted group-hover:text-background/60 transition-colors pt-2">
                    0{i + 1}
                  </span>
                  <div className="col-span-10 md:col-span-8">
                    <h4 className="font-display text-2xl md:text-4xl leading-tight tracking-[-0.01em] group-hover:text-background transition-colors">
                      {l.title}
                    </h4>
                    <p className="mt-3 text-muted text-sm md:text-base max-w-xl group-hover:text-background/70 transition-colors">
                      {l.excerpt}
                    </p>
                  </div>
                  <div className="hidden md:flex md:col-span-3 items-center justify-between mono text-xs uppercase tracking-[0.2em] text-muted group-hover:text-background/60 transition-colors">
                    <span>{l.reading}</span>
                    <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
