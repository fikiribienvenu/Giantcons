import type { Metadata } from "next";
import Link from "next/link";
import {
  Ruler,
  HardHat,
  Zap,
  Wind,
  Lightbulb,
  Droplets,
  Building2,
  TreePine,
  Layers,
  Settings,
  ArrowRight,
} from "lucide-react";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Giant Consult Ltd offers three integrated service pillars — Design & Engineering, Construction Services, and MEP Systems — covering every phase of your building project.",
};

const pillars = [
  {
    id: "design",
    icon: Ruler,
    label: "01",
    title: "Design & Engineering",
    intro:
      "We combine architectural creativity with structural rigour to produce designs that are both visually compelling and technically sound. Every project begins with a thorough understanding of your brief, site, and budget.",
    services: [
      { icon: Building2, name: "Architectural & Structural Design", desc: "From concept sketches to construction-ready drawings, our architects and structural engineers work in close collaboration to deliver buildings that look exceptional and perform flawlessly." },
      { icon: Layers, name: "Civil & Structural Engineering", desc: "Robust foundations, frames, and civil works designed to national and international codes, with detailed structural analysis and documentation." },
      { icon: Settings, name: "BIM (Building Information Modeling)", desc: "Fully coordinated 3D models that eliminate clashes, reduce waste, and give all stakeholders a single source of truth throughout the project lifecycle." },
      { icon: TreePine, name: "Sustainable & Green Building Design", desc: "Energy modeling, passive design strategies, and compliance with LEED, Estidama, and local green building standards to future-proof every project." },
    ],
    image: "/projects/gakire-render-2-2.jpg",
    imageAlt: "Design and engineering work",
  },
  {
    id: "construction",
    icon: HardHat,
    label: "02",
    title: "Construction Services",
    intro:
      "Our construction teams deliver turnkey buildings with precision, safety, and accountability — from ground-breaking to handover, you have a single point of contact responsible for the entire process.",
    services: [
      { icon: Building2, name: "Turnkey Construction", desc: "Full delivery of residential, commercial, and industrial buildings under one contract — architecture, structure, finishes, and MEP all coordinated in-house." },
      { icon: Settings, name: "Project & Construction Management", desc: "Detailed programme management, cost control, quality assurance, and stakeholder reporting from mobilisation to practical completion." },
      { icon: Layers, name: "Interior Fit-Out & Remodeling", desc: "High-specification fit-out services for offices, hotels, healthcare facilities, and retail spaces, delivered with minimal disruption to occupied buildings." },
      { icon: TreePine, name: "Site Development & Civil Works", desc: "Earthworks, drainage, roads, landscaping, and external civil infrastructure to prepare and complete the full site." },
    ],
    image: "/projects/059A4199.jpg",
    imageAlt: "Construction site work",
  },
  {
    id: "mep",
    icon: Zap,
    label: "03",
    title: "MEP Systems",
    intro:
      "Our in-house MEP division designs, supplies, and installs the full range of mechanical, electrical, and plumbing systems — integrated from day one with the architectural and structural design.",
    services: [
      { icon: Wind, name: "Mechanical — HVAC & Ventilation", desc: "HVAC system design and installation including ducted split systems, VRF, chilled water plants, AHUs, ventilation, and smoke extraction." },
      { icon: Lightbulb, name: "Electrical Systems", desc: "LV power distribution, lighting design, fire alarm systems, nurse call, public address, CCTV, access control, data & communications infrastructure." },
      { icon: Droplets, name: "Plumbing & Firefighting", desc: "Potable water supply, sanitary drainage, sewage systems, wastewater treatment plants (WWTP), and firefighting systems." },
      { icon: Settings, name: "BMS System Integration", desc: "Building Management Systems that unify HVAC, lighting, access, and energy metering into a single intelligent platform." },
    ],
    image: "/projects/gac-ph-5.jpg",
    imageAlt: "MEP systems installation",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        image="/projects/gac-ph-6.jpg"
        eyebrow="Our Services"
        title="Integrated Engineering Solutions Under One Roof"
        subtitle="Three core disciplines — Design, Construction, and MEP Systems — working in seamless coordination so your project is always in expert hands."
        showScroll={false}
        tall={false}
      />

      {/* Overview cards */}
      <section className="py-16 bg-white" aria-label="Service overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.id} delay={i * 120} direction="up">
                  <a
                    href={`#${pillar.id}`}
                    className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-[#C99A3C]/40 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#C99A3C]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C99A3C] transition-colors">
                      <Icon size={22} className="text-[#C99A3C] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="text-xs text-[#C99A3C] font-bold">{pillar.label}</span>
                      <h3 className="font-bold text-[#0B1F3A] text-sm mt-0.5">{pillar.title}</h3>
                      <span className="text-xs text-gray-400 flex items-center gap-1 mt-1 group-hover:text-[#C99A3C] transition-colors">
                        Learn more <ArrowRight size={11} />
                      </span>
                    </div>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed pillars */}
      {pillars.map((pillar, idx) => {
        const Icon = pillar.icon;
        const isEven = idx % 2 === 0;
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`py-20 ${isEven ? "bg-gray-50" : "bg-white"}`}
            aria-label={pillar.title}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                {/* Text side */}
                <FadeIn direction={isEven ? "left" : "right"}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#C99A3C] flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                      <span className="text-xs font-bold text-[#C99A3C] tracking-[0.2em] uppercase">
                        {pillar.label}
                      </span>
                    </div>
                    <h2 className="section-heading mb-4">{pillar.title}</h2>
                    <div className="w-12 h-1 bg-[#C99A3C] rounded mb-5" />
                    <p className="text-gray-600 leading-relaxed mb-8">{pillar.intro}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pillar.services.map((svc) => {
                        const SvcIcon = svc.icon;
                        return (
                          <div key={svc.name} className="flex gap-3">
                            <div className="w-8 h-8 rounded bg-[#C99A3C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <SvcIcon size={16} className="text-[#C99A3C]" />
                            </div>
                            <div>
                              <h4 className="text-[#0B1F3A] font-semibold text-sm mb-1">{svc.name}</h4>
                              <p className="text-gray-500 text-xs leading-relaxed">{svc.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </FadeIn>

                {/* Image side */}
                <FadeIn direction={isEven ? "right" : "left"} delay={150}>
                  <div className={`relative h-80 lg:h-[440px] rounded-lg overflow-hidden shadow-lg ${!isEven ? "lg:order-first" : ""}`}>
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C99A3C]" />
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-[#0B1F3A]" aria-label="Service enquiry">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Need a Full Scope? Talk to Our Team.
            </h2>
            <p className="text-gray-300 mb-8">
              Our integrated approach means one conversation can scope an entire project.
              Get in touch for a no-obligation consultation.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Consultation <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
