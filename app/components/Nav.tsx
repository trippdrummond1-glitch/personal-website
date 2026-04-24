"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site } from "../content";

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 py-6 flex items-center justify-between"
    >
      <a
        href="#top"
        className="group flex items-center gap-3"
        data-cursor="hover"
      >
        <span className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-foreground/15 bg-foreground/5">
          <Image
            src="/tripp-portrait.jpg"
            alt={site.name}
            fill
            sizes="32px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </span>
        <span className="mono text-xs uppercase tracking-[0.2em]">
          {site.handle}
        </span>
      </a>
      <nav className="hidden md:flex items-center gap-8 mono text-xs uppercase tracking-[0.2em]">
        <a href="#manifesto" className="hover:text-accent transition-colors">Mission</a>
        <a href="#about" className="hover:text-accent transition-colors">About</a>
        <a href="#journey" className="hover:text-accent transition-colors">Journey</a>
        <a href="#videos" className="hover:text-accent transition-colors">Videos</a>
        <a href="#learnings" className="hover:text-accent transition-colors">Writings</a>
        <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
      </nav>
      <a
        href={site.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="mono text-xs uppercase tracking-[0.2em] group inline-flex items-center gap-2"
      >
        <span className="relative w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-accent" />
          <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
        </span>
        Subscribe
      </a>
    </motion.header>
  );
}
