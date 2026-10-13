"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const SLIDES = [
  {
    src: "/slides/hero-pizza-pepperoni.jpg",
    alt: "Freshly baked pepperoni pizza on a wooden board",
    title: "Fresh baked halal pizza",
    subtitle: "Hot, cheesy and made to order in the heart of Fawkner",
  },
  {
    src: "/slides/hero-pasta-tagliatelle.jpg",
    alt: "Creamy mushroom tagliatelle on a black plate",
    title: "Hearty home-style pasta",
    subtitle: "Big bowls, rich sauces and 100% halal comfort food",
  },
];

const INTERVAL_MS = 4000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, active]);

  const slide = SLIDES[active];
  const words = slide.title.split(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-[560px] items-center justify-center overflow-hidden text-white sm:min-h-[680px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          priority={i === 0}
          unoptimized
          className={`object-cover ease-in-out ${
            i === active ? "scale-110 opacity-100" : "scale-100 opacity-0"
          }`}
          style={{
            transitionProperty: "opacity, transform",
            transitionDuration: i === active ? "1000ms, 5000ms" : "1000ms, 0ms",
          }}
        />
      ))}
      {/* Push the photo back so the headline and buttons stay prominent:
          an even dark wash plus an extra-dark centre behind the text. */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0)_70%)]" />

      {/* key re-mounts the block so the text animation replays on every slide */}
      <div key={active} className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
        <p
          className="mb-4 inline-block rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-neutral-950"
          style={{ animation: "fadeUp 0.7s ease-out both" }}
        >
          100% Halal · Fawkner
        </p>

        <h1
          className="text-5xl font-bold leading-[1.02] sm:text-7xl md:text-8xl"
          style={{ textShadow: "0 2px 18px rgba(0,0,0,0.5)" }}
        >
          {words.map((w, i) => (
            <span
              key={`${w}-${i}`}
              className={`mr-[0.25em] inline-block ${i === words.length - 1 ? "text-yellow-400" : ""}`}
              style={{ animation: `wordIn 0.8s cubic-bezier(0.2,0.8,0.2,1) ${0.15 + i * 0.14}s both` }}
            >
              {w}
            </span>
          ))}
        </h1>

        <p
          className="mx-auto mt-5 max-w-xl text-lg text-neutral-100"
          style={{ animation: `fadeUp 0.8s ease-out ${0.2 + words.length * 0.14}s both` }}
        >
          {slide.subtitle}
        </p>

        <div
          className="mt-8 flex flex-wrap justify-center gap-3"
          style={{ animation: `fadeUp 0.8s ease-out ${0.4 + words.length * 0.14}s both` }}
        >
          <a
            href={`tel:${site.phoneLink}`}
            className="rounded-full bg-yellow-400 px-8 py-3 font-bold text-neutral-950 hover:bg-yellow-300"
          >
            Order now: {site.phoneDisplay}
          </a>
          <a
            href="/menu"
            className="rounded-full border border-white/70 px-8 py-3 font-semibold text-white hover:border-yellow-400 hover:text-yellow-400"
          >
            View menu
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === active ? "w-8 bg-yellow-400" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
