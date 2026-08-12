import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import Hero from "@/components/sections/Hero";
import SafetyAccordion from "@/components/sections/SafetyAccordion";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Safety (HSE)",
  description:
    "Health, Safety & Environment is a core value at Giant Consult Ltd — not just a priority. Learn about our HSE framework, risk management approach, and commitment to sustainable construction.",
};

const standards = [
  { label: "ISO 45001", desc: "Occupational Health & Safety" },
  { label: "ISO 14001", desc: "Environmental Management" },
  { label: "LEED", desc: "Green Building Standards" },
  { label: "Estidama", desc: "Sustainable Design" },
];

export default function SafetyPage() {
  return (
    <>
      <Hero
        image="/projects/059A4210.jpg"
        eyebrow="Health, Safety & Environment"
        title="Safety Is a Core Value, Not Just a Priority"
        subtitle="Every Giant Consult project is governed by a rigorous HSE framework designed to protect our people, our clients, and the environment."
        showScroll={false}
        tall={false}
      />

      {/* Intro */}
      <section className="py-20 bg-white" aria-label="HSE introduction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative h-80 lg:h-[440px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/projects/059A4211.jpg"
                  alt="Safety on a Giant Consult construction site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <div className="flex items-center gap-2 bg-[#C99A3C] px-4 py-2 rounded">
                    <ShieldCheck size={18} className="text-white" />
                    <span className="text-white font-bold text-sm">Zero Harm Goal</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={150}>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C99A3C]">
                Our HSE Commitment
              </span>
              <h2 className="section-heading mt-2 mb-5">
                Protecting People, Projects, and the Planet
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Giant Consult Ltd, Health, Safety &amp; Environment (HSE) is embedded into
                every stage of our work — from initial design through construction to handover.
                We believe that no project objective, schedule, or budget justifies compromising
                the safety of our people or the environment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our HSE framework aligns with national Rwandan occupational health and safety
                legislation and internationally recognised standards. Every site is managed with
                a dedicated safety coordinator and documented HSE plan.
              </p>

              {/* Standards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {standards.map((std) => (
                  <div
                    key={std.label}
                    className="text-center bg-gray-50 rounded-lg p-3 border border-gray-100"
                  >
                    <div className="text-[#C99A3C] font-extrabold text-sm">{std.label}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{std.desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* HSE Accordion */}
      <section className="py-20 bg-gray-50" aria-label="HSE framework details">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="HSE Framework"
            title="Our Five Pillars of Safety"
            subtitle="A structured, proactive approach to safety and environmental responsibility across all project phases."
          />
          <div className="mt-12">
            <SafetyAccordion />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0B1F3A]" aria-label="HSE commitments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "100%", label: "Sites with Dedicated Safety Officer" },
              { num: "ISO", label: "45001 & 14001 Aligned" },
              { num: "Daily", label: "Tool-Box Talks on Every Site" },
              { num: "Zero", label: "Harm — Our Standing Goal" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 100}>
                <div>
                  <div className="text-3xl font-extrabold text-[#C99A3C] mb-2">{stat.num}</div>
                  <div className="text-gray-300 text-sm leading-snug">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Safety coordinator highlight */}
      <section className="py-16 bg-white" aria-label="Safety team">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <ShieldCheck size={40} className="text-[#C99A3C] mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
              Dedicated On-Site Safety Coordination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every Giant Consult project benefits from the expertise of{" "}
              <strong>IBAZE Adeline</strong>, our Safety Coordinator, who works directly
              with site engineers, supervisors, and workers to implement safety protocols,
              monitor daily activities, and ensure full alignment with local and international
              safety standards.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
