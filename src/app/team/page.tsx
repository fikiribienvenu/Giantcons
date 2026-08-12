import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TeamCard from "@/components/sections/TeamCard";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the expert engineers, architects, and specialists behind Giant Consult Ltd — the people who make every project a success.",
};

export default function TeamPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#0B1F3A] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-[#C99A3C] text-xs font-bold tracking-[0.2em] uppercase">
              The People Behind the Projects
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
              Meet Our Team
            </h1>
            <div className="w-16 h-1 bg-[#C99A3C] mx-auto mb-5" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A multidisciplinary team of engineers, architects, and specialists united by a
              shared commitment to delivering exceptional buildings and infrastructure.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Team grid */}
      <section className="py-20 bg-gray-50" aria-label="Team members">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <TeamCard key={member.id} member={member} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Values banner */}
      <section className="py-16 bg-[#0B1F3A]" aria-label="Team values">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "Technical Excellence",
                desc: "Every team member brings deep expertise in their discipline, backed by ongoing training and professional development.",
              },
              {
                title: "Collaborative Culture",
                desc: "Our integrated model means architects, engineers, and MEP specialists work side-by-side from day one.",
              },
              {
                title: "Client-First Mindset",
                desc: "We build lasting relationships through transparency, honest communication, and delivering on every commitment.",
              },
            ].map((val, i) => (
              <FadeIn key={val.title} delay={i * 120} direction="up">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <div className="w-10 h-1 bg-[#C99A3C] mx-auto mb-4 rounded" />
                  <h3 className="text-white font-bold text-base mb-2">{val.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white" aria-label="Join us">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
              Work With Our Team on Your Next Project
            </h2>
            <p className="text-gray-600 mb-8">
              Ready to bring your vision to life? Our team is standing by to consult,
              design, and deliver.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
