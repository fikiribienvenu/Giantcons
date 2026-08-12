import Image from "next/image";
import { partners } from "@/data/partners";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

export default function PartnerLogos() {
  return (
    <section className="py-16 bg-gray-50" aria-label="Partners and clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Trusted By"
          title="Our Partners & Clients"
          subtitle="We are proud to work alongside leading organisations, institutions, and government bodies across Rwanda and the region."
        />

        <FadeIn delay={200}>
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 items-center">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center p-3"
                title={partner.name}
              >
                <div className="relative h-12 w-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain partner-logo"
                    sizes="120px"
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
