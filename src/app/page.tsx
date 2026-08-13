import type { Metadata } from "next";
import Link from "next/link";
import { Ruler, HardHat, Zap, Users, Clock, Coins, Cpu, Leaf, ArrowRight, CheckCircle } from "lucide-react";
import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/sections/ServiceCard";
import ProjectCard, { ProjectGalleryCard } from "@/components/sections/ProjectCard";
import PartnerLogos from "@/components/sections/PartnerLogos";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Giant Consult Ltd — Design & Build Engineering",
  description:
    "Giant Consult Ltd is a full-service Design & Build engineering firm in Kigali, Rwanda — architectural design, civil construction, and integrated MEP systems.",
};

const services = [
  {
    icon: Ruler,
    title: "Design & Engineering",
    items: [
      "Architectural and structural design",
      "Civil and structural engineering",
      "BIM (Building Information Modeling)",
      "Sustainable and green building design",
    ],
  },
  {
    icon: HardHat,
    title: "Construction Services",
    items: [
      "Turnkey residential, commercial & industrial builds",
      "Project and construction management",
      "Interior fit-out and remodeling",
      "Site development and civil works",
    ],
  },
  {
    icon: Zap,
    title: "MEP Systems",
    items: [
      "HVAC, ventilation & chilled water systems",
      "Power distribution, lighting & fire alarm",
      "Water supply, drainage & firefighting",
      "BMS system integration",
    ],
  },
];

const whyUs = [
  { icon: Users, label: "Experienced Professionals", desc: "Deep industry knowledge across architecture, civil, and MEP disciplines." },
  { icon: HardHat, label: "Integrated Services", desc: "One roof for better coordination, control, and accountability." },
  { icon: Clock, label: "On-Time Delivery", desc: "Proactive project planning and management keeps every project on schedule." },
  { icon: Coins, label: "Cost-Effective Solutions", desc: "Competitive pricing without compromising on quality or safety." },
  { icon: Cpu, label: "Advanced Technology", desc: "3D modeling, BIM, and automation tools for precision delivery." },
  { icon: Leaf, label: "Sustainability Focus", desc: "Energy-efficient and environmentally responsible construction practices." },
];

const featuredProjects = projects;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        image="/projects/gakire-render-2-1.jpg"
        eyebrow="Design & Build"
        title="Engineering Excellence from Concept to Handover"
        subtitle="Giant Consult Ltd delivers full-service architectural design, civil construction, and integrated MEP systems — one team, one responsibility, one standard of excellence."
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
        secondaryCta={{ label: "View Our Projects", href: "/projects" }}
      />

      {/* Stats banner */}
      <section className="bg-[#C99A3C] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "2016", label: "Year Founded" },
              { num: "3", label: "Core Service Pillars" },
              { num: "100+", label: "Major Projects" },
              { num: "7", label: "Expert Team Members" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-[#0B1F3A]">{stat.num}</div>
                <div className="text-sm font-medium text-[#0B1F3A]/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white" aria-label="Our services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Our Core Services"
            subtitle="Three integrated pillars that cover every phase of your building project — from concept design through to commissioned systems."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                items={s.items}
                delay={i * 120}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 pb-36 bg-[#0B1F3A]" aria-label="Why choose us">
        {/* Diagonal bottom shape — sits below content, never clips it */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Giant Consult"
            title="Built on Trust, Delivered with Excellence"
            subtitle="We bring together the disciplines, technology, and people needed to deliver high-performance buildings every time."
            light
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.label} delay={i * 100} direction="up">
                  <div className="flex gap-4 p-5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#C99A3C]/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#C99A3C]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50" aria-label="Featured projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Work"
            title="Featured Projects"
            subtitle="A selection of projects demonstrating our Design & Build expertise across commercial, institutional, and residential sectors."
          />

          {/* Top row — 3 equal cards with full info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 100} />
            ))}
          </div>

          {/* Bottom row — 3 hover-overlay gallery cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.slice(3, 6).map((project, i) => (
              <ProjectGalleryCard key={project.id} project={project} delay={i * 100} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/projects" className="btn-primary">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <PartnerLogos />

      {/* CTA Banner */}
      <section className="py-20 bg-[#0B1F3A] relative overflow-hidden" aria-label="Call to action">
        {/* Background accent */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C99A3C]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-[#C99A3C] text-xs font-bold tracking-[0.2em] uppercase">
              Ready to Build?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-5">
              Let&apos;s Bring Your Project to Life
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              From first consultation to final handover — Giant Consult delivers on time,
              on budget, and to the highest standard.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-outline-white">
                Learn About Us
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2">
              {["No obligation quote", "Fast response", "Expert consultation"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle size={14} className="text-[#C99A3C]" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
