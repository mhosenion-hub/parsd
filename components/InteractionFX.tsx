"use client";
import { useEffect } from "react";

export default function InteractionFX() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const move = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
        root.style.setProperty("--pointer-active", "1");
      });
    };

    const leave = () => root.style.setProperty("--pointer-active", "0");

    const scroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty("--scroll-progress", String(window.scrollY / max));
    };

    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);

    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="ambient-fx">
      <span className="logo-pattern logo-pattern-base" />
      <span className="logo-pattern logo-pattern-reveal" />
      <span className="ambient-orb orb-one" />
      <span className="ambient-orb orb-two" />
      <span className="ambient-grid" />
    </div>
  );
}
