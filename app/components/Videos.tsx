"use client";

import { motion } from "motion/react";
import Section from "./Section";
import { videos, site } from "../content";

export default function Videos() {
  return (
    <Section id="videos" index="(05)" label="Recent & upcoming">
      <div className="flex items-end justify-between mb-12 md:mb-16">
        <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.02em]">
          What I&apos;m working on.
        </h3>
        <a
          href={site.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="mono text-xs uppercase tracking-[0.2em] hidden md:inline-flex items-center gap-2 hover:text-accent transition-colors"
        >
          All videos <span>→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {videos.map((v, i) => (
          <motion.a
            key={v.title}
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group block"
            data-cursor="hover"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-foreground/5 hairline border">
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-8"
                initial={false}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <svg viewBox="0 0 400 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id={`g${i}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={i === 0 ? "#c2410c" : i === 1 ? "#0a0a0a" : "#6b6860"} />
                      <stop offset="100%" stopColor={i === 0 ? "#f5f4ef" : i === 1 ? "#c2410c" : "#0a0a0a"} />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="500" fill={`url(#g${i})`} />
                  <text
                    x="30"
                    y="470"
                    className="font-display"
                    fontSize="120"
                    fontStyle="italic"
                    fill="rgba(245,244,239,0.9)"
                    fontFamily="serif"
                  >
                    0{i + 1}
                  </text>
                </svg>
              </motion.div>
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className="mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 bg-background/90 backdrop-blur-sm">
                  {v.tag}
                </span>
                <span
                  className={`mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 ${
                    v.status === "live"
                      ? "bg-accent text-background"
                      : "bg-background/90 backdrop-blur-sm text-muted"
                  }`}
                >
                  {v.status === "live" ? "Live" : v.status === "draft" ? "In edit" : "Coming"}
                </span>
              </div>
              <motion.div
                initial={{ y: "100%" }}
                whileHover={{ y: "0%" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 bg-background border-t hairline p-5"
              >
                <span className="mono text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2">
                  Watch <span>→</span>
                </span>
              </motion.div>
            </div>
            <h4 className="mt-5 font-display text-2xl md:text-3xl leading-tight tracking-[-0.01em] group-hover:text-accent transition-colors">
              {v.title}
            </h4>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
