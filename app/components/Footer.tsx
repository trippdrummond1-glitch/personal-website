"use client";

import { motion } from "motion/react";
import { site } from "../content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t hairline px-6 md:px-10 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mono text-xs uppercase tracking-[0.2em] text-muted mb-10 flex items-baseline gap-4">
          <span>(07)</span>
          <span className="h-px flex-1 bg-rule" />
          <span>Come along</span>
        </div>

        <a
          href={site.youtube}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          className="block group"
        >
          <h3 className="font-display italic text-[clamp(3rem,12vw,12rem)] leading-[0.92] tracking-[-0.02em] group-hover:text-accent transition-colors duration-500">
            Subscribe →
          </h3>
        </a>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 border-t hairline pt-10">
          <div className="md:col-span-4">
            <div className="mono text-xs uppercase tracking-[0.2em] text-muted mb-3">Email</div>
            <a
              href={`mailto:${site.email}`}
              data-cursor="hover"
              className="text-lg hover:text-accent transition-colors"
            >
              {site.email}
            </a>
          </div>
          <div className="md:col-span-4">
            <div className="mono text-xs uppercase tracking-[0.2em] text-muted mb-3">Elsewhere</div>
            <ul className="space-y-2">
              <li>
                <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors inline-flex items-center gap-2" data-cursor="hover">
                  YouTube <span className="mono text-xs">↗</span>
                </a>
              </li>
              <li>
                <a href={site.twitter} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors inline-flex items-center gap-2" data-cursor="hover">
                  X / Twitter <span className="mono text-xs">↗</span>
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors inline-flex items-center gap-2" data-cursor="hover">
                  GitHub <span className="mono text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="mono text-xs uppercase tracking-[0.2em] text-muted mb-3">Colophon</div>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Designed and built by {site.name.split(" ")[0]}. Type set in
              Instrument Serif & Inter. Animations by Motion, scroll by Lenis.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mono text-xs uppercase tracking-[0.2em] text-muted">
          <span>© {year} {site.name}</span>
          <span>All work in progress.</span>
          <a href="#top" className="hover:text-accent transition-colors" data-cursor="hover">
            Back to top ↑
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
