"use client";

import { useEffect, useRef } from "react";
import type { reviews } from "@/lib/reviews";

type Review = (typeof reviews)[number];

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

function ReviewCard({ r, delay }: { r: Review; delay: number }) {
  return (
    // The wrapper bobs up and down; the row itself scrolls left or right.
    <div
      className="w-64 shrink-0 select-none sm:w-72"
      style={{ animation: `floatY 5s ease-in-out ${delay}s infinite` }}
    >
      <figure className="flex h-full flex-col rounded-xl border border-line bg-page p-4 shadow-sm">
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-[family-name:var(--font-display)] text-sm font-bold text-neutral-950"
            aria-hidden
          >
            {initials(r.name)}
          </span>
          <figcaption className="leading-tight">
            <span className="block text-sm font-semibold">{r.name}</span>
            <span className="text-[11px] text-subtle">Google review</span>
          </figcaption>
        </div>
        <div className="mt-3 text-sm text-yellow-400" aria-label={`${r.stars} out of 5 stars`}>
          {"★".repeat(r.stars)}
        </div>
        <blockquote className="mt-1 flex-1 text-xs leading-relaxed text-muted">
          &ldquo;{r.text}&rdquo;
        </blockquote>
      </figure>
    </div>
  );
}

const SPEED = 40; // px per second of automatic movement

/**
 * A row of review cards that drifts on its own (left or right) and can also be
 * dragged with the mouse or swiped on touch screens. It loops seamlessly.
 */
export default function ReviewRow({
  items,
  direction,
  offset,
}: {
  items: Review[];
  direction: "left" | "right";
  offset: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drag = useRef<{ x: number; start: number } | null>(null);

  // Four copies: the first two copies are one seamless "half" that we wrap around.
  const loop = [...items, ...items, ...items, ...items];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const half = () => el.scrollWidth / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (direction === "right") el.scrollLeft = half();

    let pos = el.scrollLeft;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      // Cap dt so a throttled/hidden tab doesn't make the row jump.
      const dt = Math.min((now - last) / 1000, 0.5);
      last = now;
      // If the user moved the row (drag/swipe), continue from where they left it.
      if (Math.abs(el.scrollLeft - pos) > 2) pos = el.scrollLeft;
      if (!paused.current && !reduce) {
        pos += (direction === "left" ? 1 : -1) * SPEED * dt;
      }
      const h = half();
      if (pos >= h) pos -= h;
      if (pos <= 0 && direction === "right") pos += h;
      if (pos < 0) pos += h;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [direction]);

  const pause = () => {
    paused.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };
  const resume = (delay = 0) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      paused.current = false;
    }, delay);
  };

  return (
    <div
      ref={ref}
      className="cursor-grab overflow-x-auto py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      onMouseEnter={pause}
      onMouseLeave={() => {
        drag.current = null;
        resume(300);
      }}
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse") return;
        pause();
        drag.current = { x: e.clientX, start: ref.current?.scrollLeft ?? 0 };
        ref.current?.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!drag.current || !ref.current) return;
        ref.current.scrollLeft = drag.current.start - (e.clientX - drag.current.x);
      }}
      onPointerUp={() => {
        drag.current = null;
      }}
      onTouchStart={pause}
      onTouchEnd={() => resume(1500)}
    >
      <div className="flex w-max gap-4 px-4">
        {loop.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} r={r} delay={((i + offset) % 5) * 0.6} />
        ))}
      </div>
    </div>
  );
}
