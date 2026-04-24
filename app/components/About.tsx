"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Section from "./Section";
import { site } from "../content";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const captionX = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  const year = new Date().getFullYear();

  return (
    <Section id="about" index="(03)" label="Behind the channel">
      <div
        ref={ref}
        className="relative grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start"
      >
        <div className="md:col-span-6 md:sticky md:top-32">
          <h3 className="font-display italic text-[clamp(2.5rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em]">
            Behind<br />the&nbsp;channel.
          </h3>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-8 text-base md:text-lg leading-relaxed max-w-lg"
          >
            Hi — I&apos;m {site.name.split(" ")[0]}. By day, I&apos;m a corporate
            professional. By night, weekend, and any spare hour I can steal,
            I&apos;m building a YouTube channel about the thing I can&apos;t
            stop thinking about: <em>how AI is rewiring what a single creator
            can actually make.</em>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-5 text-muted text-base md:text-lg leading-relaxed max-w-lg"
          >
            This site is the open notebook — the plan, the numbers, the wins,
            and the honest misses. No gurus, no shortcuts. Just a guy with a
            day job learning to ship in public.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 border-t hairline pt-6 grid grid-cols-2 gap-y-4 gap-x-8 max-w-md"
          >
            <Meta label="Name" value={site.name} />
            <Meta label="Role" value="Creator, day-job holder" />
            <Meta label="Based" value={site.location.replace(/^Building from /, "")} />
            <Meta label="Since" value={`${site.startDate.getFullYear()} →`} />
          </motion.div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-full">
              <motion.div
                style={{ y: imgY }}
                className="absolute inset-[-10%] will-change-transform"
              >
                <Image
                  src="/tripp-portrait.jpg"
                  alt={`${site.name}, portrait`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={false}
                  className="object-cover portrait-duotone"
                />
              </motion.div>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #2a1407 0%, #c2410c 55%, #f2c08a 100%)",
                  mixBlendMode: "color",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(120% 90% at 30% 20%, transparent 35%, rgba(10,10,10,0.28) 100%)",
                  mixBlendMode: "multiply",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-full ring-1 ring-foreground/15 pointer-events-none"
              />
            </div>

            <motion.figcaption
              style={{ x: captionX }}
              className="mt-6 flex items-baseline justify-between mono text-[10px] uppercase tracking-[0.22em] text-muted"
            >
              <span>Fig. 01 &nbsp;/&nbsp; Portrait, {year}</span>
              <span>— {site.name}</span>
            </motion.figcaption>
          </motion.figure>
        </div>
      </div>
    </Section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted mb-1">
        {label}
      </div>
      <div className="text-sm md:text-base">{value}</div>
    </div>
  );
}
