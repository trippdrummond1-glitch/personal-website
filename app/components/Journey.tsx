"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useSyncExternalStore } from "react";
import Section from "./Section";
import { journey, site } from "../content";

const START_MS = site.startDate.getTime();
const computeDaysIn = () =>
  Math.max(0, Math.floor((Date.now() - START_MS) / 86_400_000));
const subscribeMinute = (cb: () => void) => {
  const id = setInterval(cb, 60_000);
  return () => clearInterval(id);
};
const getDaysInSSR = () => 0;

function CountUp({ to, format = (n: number) => n.toLocaleString() }: { to: number; format?: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => format(Math.round(v)));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, to, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Journey() {
  const daysIn = useSyncExternalStore(subscribeMinute, computeDaysIn, getDaysInSSR);

  const stats: { label: string; value: number; suffix?: string; format?: (n: number) => string }[] = [
    { label: "Subscribers", value: journey.subscribers },
    { label: "Videos published", value: journey.videos },
    { label: "Hours in AI tools", value: journey.hoursInAI, suffix: "h" },
    { label: "Days since day one", value: daysIn },
  ];

  return (
    <Section id="journey" index="(04)" label="The journey, in numbers">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
        <div className="md:col-span-5">
          <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.02em]">
            Everything, on the record.
          </h3>
          <p className="mt-6 text-muted text-base md:text-lg max-w-md leading-relaxed">
            No vanity metrics. These update as the channel does — so if you
            check back in a month and a number hasn&apos;t moved, that&apos;s a
            story too.
          </p>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 gap-px bg-rule hairline border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6 md:p-10 min-h-[180px] md:min-h-[220px] flex flex-col justify-between">
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {s.label}
              </div>
              <div className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-[-0.02em]">
                <CountUp to={s.value} format={s.format} />
                {s.suffix && <span className="text-muted text-[0.5em] align-top ml-1">{s.suffix}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 border-t hairline pt-10 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div>
          <div className="mono text-xs uppercase tracking-[0.2em] text-muted mb-3">Goal / subscribers</div>
          <ProgressBar value={journey.subscribers} target={journey.subscriberGoal} format={(n) => n.toLocaleString()} />
        </div>
        <div>
          <div className="mono text-xs uppercase tracking-[0.2em] text-muted mb-3">Goal / monthly revenue</div>
          <ProgressBar value={0} target={journey.revenueGoal} format={(n) => `$${n.toLocaleString()}`} />
        </div>
      </motion.div>
    </Section>
  );
}

function ProgressBar({ value, target, format }: { value: number; target: number; format: (n: number) => string }) {
  const pct = Math.min(100, Math.round((value / target) * 100));
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-display text-3xl md:text-4xl">{format(value)}</span>
        <span className="mono text-xs text-muted">/ {format(target)}</span>
      </div>
      <div className="h-px bg-rule relative">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: pct / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ transformOrigin: "left" }}
          className="absolute inset-0 bg-accent"
        />
      </div>
      <div className="mono text-[10px] uppercase tracking-[0.2em] text-muted mt-2">{pct}% there</div>
    </div>
  );
}
