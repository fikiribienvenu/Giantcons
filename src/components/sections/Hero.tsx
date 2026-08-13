"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  { src: "/projects/gakire-render-2-1.jpg", alt: "Kim Tower render" },
  { src: "/projects/gakire-render-2-3.jpg", alt: "Giant Consult building design" },
  { src: "/projects/gac-ph-2.jpg",          alt: "Chez Gahigi project" },
  { src: "/projects/059A4191.jpg",           alt: "Completed building" },
];

const INTERVAL = 1000;

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  showScroll?: boolean;
  tall?: boolean;
  image?: string;
  imageAlt?: string;
}

export default function Hero({
  eyebrow = "Design & Build",
  title,
  subtitle,
  primaryCta   = { label: "Get a Quote",      href: "/contact"  },
  secondaryCta = { label: "View Our Projects", href: "/projects" },
  showScroll = true,
  tall       = true,
  image,
  imageAlt,
}: HeroProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides = image
    ? [{ src: image, alt: imageAlt ?? "" }]
    : SLIDES;

  const advance = (next: number) => {
    setCurrent((next + slides.length) % slides.length);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, INTERVAL);
  };

  useEffect(() => {
    if (image) return;
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  const handleNav = (next: number) => {
    advance(next);
    resetTimer();
  };

  return (
    <section
      className={`relative flex items-center overflow-hidden ${tall ? "min-h-screen" : "min-h-[55vh]"}`}
      aria-label="Hero"
    >
      {/* All slides stacked — only active one is visible */}
      {slides.map((slide, idx) => (
        <div
          key={slide.src}
          aria-hidden={idx !== current}
          style={{
            position: "absolute",
            inset: 0,
            opacity: idx === current ? 1 : 0,
            transition: "opacity 0.6s ease-in-out",
            zIndex: idx === current ? 1 : 0,
            backgroundImage: `url(${slide.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "opacity",
          }}
        />
      ))}

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "linear-gradient(to right, rgba(11,31,58,0.88) 0%, rgba(11,31,58,0.55) 55%, rgba(11,31,58,0.15) 100%)",
        }}
      />

      {/* Gold left bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: "#C99A3C",
          zIndex: 3,
        }}
      />

      {/* Text content */}
      <div
        style={{ position: "relative", zIndex: 4, width: "100%" }}
        className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-24"
      >
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-[#C99A3C] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            <Link href={primaryCta.href} className="btn-primary group">
              {primaryCta.label}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href={secondaryCta.href} className="btn-outline-white">
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Controls — only for slideshow */}
      {!image && slides.length > 1 && (
        <>
          {/* Prev arrow */}
          <button
            onClick={() => handleNav(current - 1)}
            aria-label="Previous slide"
            style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", zIndex: 5 }}
            className="w-10 h-10 rounded-full bg-black/30 hover:bg-[#C99A3C] text-white flex items-center justify-center transition-colors duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next arrow */}
          <button
            onClick={() => handleNav(current + 1)}
            aria-label="Next slide"
            style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", zIndex: 5 }}
            className="w-10 h-10 rounded-full bg-black/30 hover:bg-[#C99A3C] text-white flex items-center justify-center transition-colors duration-200"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot indicators */}
          <div
            style={{ position: "absolute", bottom: 56, left: "50%", transform: "translateX(-50%)", zIndex: 5 }}
            className="flex gap-2 items-center"
          >
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleNav(idx)}
                aria-label={`Slide ${idx + 1}`}
                style={{
                  borderRadius: 9999,
                  height: 10,
                  width: idx === current ? 32 : 10,
                  background: idx === current ? "#C99A3C" : "rgba(255,255,255,0.45)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <span
            style={{ position: "absolute", bottom: 60, right: 24, zIndex: 5 }}
            className="text-white/50 text-xs font-mono"
          >
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </>
      )}

      {/* Scroll indicator */}
      {showScroll && (
        <div
          style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", zIndex: 5 }}
          className="text-white/60 animate-bounce"
        >
          <ChevronDown size={28} />
        </div>
      )}

      {/* Diagonal white clip */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 64,
          background: "white",
          zIndex: 3,
          clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
        }}
      />
    </section>
  );
}
