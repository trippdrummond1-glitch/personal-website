"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Section from "./Section";

const WORDS = [
  "I'm",
  "not",
  "here",
  "to",
  "sell",
  "you",
  "a",
  "course.",
  "I'm",
  "here",
  "to",
  "prove",
  "a",
  "creator",
  "can",
  "be",
  "built",
  "with",
  "AI,",
  "in",
  "public —",
  "and",
  "to",
  "drag",
  "everyone",
  "along",
  "with",
  "me.",
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  return (
    <Section id="manifesto" index="(02)" label="Mission">
      <div ref={ref} className="relative max-w-6xl">
        <p className="font-display text-[clamp(2rem,6.5vw,6rem)] leading-[1.05] tracking-[-0.02em] flex flex-wrap gap-x-[0.22em] gap-y-[0.05em]">
          {WORDS.map((word, i) => {
            const start = i / WORDS.length;
            const end = start + 1 / WORDS.length;
            return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
          })}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-4 md:col-start-8">
            <p className="mono text-xs uppercase tracking-[0.2em] text-muted mb-4">
              The rules
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3"><span className="text-accent mono text-xs pt-2">01</span> Post the numbers, even the embarrassing ones.</li>
              <li className="flex gap-3"><span className="text-accent mono text-xs pt-2">02</span> Ship before it&apos;s ready.</li>
              <li className="flex gap-3"><span className="text-accent mono text-xs pt-2">03</span> Teach what you learned that week.</li>
              <li className="flex gap-3"><span className="text-accent mono text-xs pt-2">04</span> Use AI like a co-founder, not a crutch.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: import("motion/react").MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
    </motion.span>
  );
}
