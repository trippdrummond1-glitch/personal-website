"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const subscribeNoop = () => () => {};
const getFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
const getFinePointerSSR = () => false;

export default function Cursor() {
  const enabled = useSyncExternalStore(subscribeNoop, getFinePointer, getFinePointerSSR);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{
          width: hovering ? 48 : 10,
          height: hovering ? 48 : 10,
          x: hovering ? -24 : -5,
          y: hovering ? -24 : -5,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />
    </motion.div>
  );
}
