import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Giant Consult Ltd — our history from June 2016 to today, our vision, mission, and the values that drive every project we deliver.",
};

const timeline = [
  {
    year: "June 2016",
    title: "Foundation and Vision",
    body: "Founded by a team of experienced engineers and architects to deliver cohesive building and infrastructure solutions, giving clients a single point of responsibility for design and execution. Early projects focused on residential and commercial buildings, with an in-house MEP division controlling cost, quality, and timelines.",
  },
  {
    year: "2019",
    title: "Expansion into Complex MEP Systems",
    body: "Took on technically complex work — high-efficiency HVAC, intelligent electrical networks, fire protection, and sustainable plumbing for high-rises and industrial facilities. Adopted BIM, energy modeling software, and green building standards including LEED and Estidama.",
  },
  {
    year: "2022",
    title: "Regional Growth and Strategic Partnerships",
    body: "Expanded regionally, forming strategic alliances with developers, consultants, and public-sector clients across Rwanda and beyond.",
  },
  {
    year: "Today",
    title: "Trusted Design & Build Firm",
    body: "Recognised as a trusted Design & Build firm combining architectural vision, robust construction, and high-performance MEP systems — delivering end-to-end solutions from concept to handover.",
  },
];

const missionPoints = [
  "Design and construct high-quality, efficient, and future-ready buildings.",
  "Provide integrated MEP solutions that ensure operational reliability and long-term performance.",
  "Exceed client expectations through professionalism, transparency, and technical excellence.",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        image="/projects/059A4185.jpg"
        eyebrow="About Giant Consult"
        title="Engineering with Purpose, Building with Pride"
        subtitle="From a founding vision in 2016 to a regionally recognised Design & Build firm — our journey is defined by technical excellence and client trust."
        showScroll={false}
        tall={false}
      />

      {/* Vision & Mission */}
      <section className="py-20 bg-white" aria-label="Vision and mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <FadeIn direction="left">
              <div className="relative h-80 lg:h-[480px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/projects/059A4191.jpg"
                  alt="Giant Consult construction project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gold accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C99A3C]" />
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn direction="right" delay={150}>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C99A3C]">
                Who We Are
              </span>
              <h2 className="section-heading mt-2 mb-5">
                A Company Built on Engineering Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Giant Consult Ltd is a full-service engineering and construction firm
                specialising in architectural design, civil construction, and integrated MEP
                (Mechanical, Electrical, Plumbing) systems. Founded in June 2016, we have grown
                from a regional practice into a trusted Design &amp; Build partner for clients
                across Rwanda and the wider region.
              </p>

              {/* Vision */}
              <div className="bg-[#0B1F3A] rounded-lg p-5 mb-5">
                <h3 className="text-[#C99A3C] font-bold text-sm uppercase tracking-wider mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To be a leading force in modern construction and MEP systems, setting new
                  standards in quality, innovation, and sustainability across every project
                  delivered.
                </p>
              </div>

              {/* Mission */}
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-[#0B1F3A] font-bold text-sm uppercase tracking-wider mb-3">
                  Our Mission
                </h3>
                <ul className="space-y-2">
                  {missionPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={15} className="text-[#C99A3C] mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50" aria-label="Company history timeline">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="From 2016 to Today"
            subtitle="A decade of growth, innovation, and delivering projects that stand the test of time."
          />

          <div className="mt-14 relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#C99A3C]/30 lg:-translate-x-0.5" />

            <div className="space-y-10">
              {timeline.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <FadeIn key={item.year} delay={i * 120} direction={isEven ? "left" : "right"}>
                    <div className={`relative flex gap-6 lg:gap-0 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                      {/* Content box */}
                      <div className={`lg:w-[calc(50%-2rem)] ${isEven ? "lg:pr-8 lg:text-right" : "lg:pl-8 lg:text-left"} pl-14 lg:pl-0`}>
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover">
                          <span className="inline-block bg-[#C99A3C] text-white text-xs font-bold px-3 py-1 rounded mb-3">
                            {item.year}
                          </span>
                          <h3 className="text-[#0B1F3A] font-bold text-base mb-2">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </div>

                      {/* Dot */}
                      <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[#C99A3C] border-4 border-white shadow-md z-10" />

                      {/* Spacer for opposite side */}
                      <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Brand image strip */}
      <section className="py-16 bg-[#0B1F3A]" aria-label="Company highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              "/projects/gac-ph-4.jpg",
              "/projects/059A4160.jpg",
              "/projects/gakire-render-2-3.jpg",
            ].map((src, i) => (
              <FadeIn key={src} delay={i * 150}>
                <div className="relative h-52 rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`Giant Consult project ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
