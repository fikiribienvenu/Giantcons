import type { Metadata } from "next";
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Giant Consult Ltd — request a quote, ask about our services, or visit us at ST KG 712, Laika House, Kigali, Rwanda.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+250 787 376 885",
    href: "tel:+250787376885",
  },
  {
    icon: Mail,
    label: "Email",
    value: "giantconsult@gmail.com",
    href: "mailto:giantconsult@gmail.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.giantconsult.com",
    href: "https://www.giantconsult.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "ST KG 712, Laika House, Kigali, Rwanda",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#0B1F3A] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-[#C99A3C] text-xs font-bold tracking-[0.2em] uppercase">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
              Contact Giant Consult
            </h1>
            <div className="w-16 h-1 bg-[#C99A3C] mx-auto mb-5" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Whether you have a project in mind, need a quote, or just want to learn more
              about our services — we&apos;d love to hear from you.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Contact section */}
      <section className="py-20 bg-gray-50" aria-label="Contact details and form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left — contact info */}
            <div className="lg:col-span-2">
              <FadeIn direction="left">
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
                  Reach Us Directly
                </h2>

                <ul className="space-y-5 mb-8">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#C99A3C]/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={18} className="text-[#C99A3C]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-[#0B1F3A] font-medium text-sm">{item.value}</p>
                        </div>
                      </div>
                    );

                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="group hover:opacity-80 transition-opacity"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/250787376885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-5 py-3 rounded hover:bg-[#1ebe5d] transition-colors"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>

                {/* Business hours */}
                <div className="mt-8 bg-white rounded-lg p-5 border border-gray-100">
                  <h3 className="font-bold text-[#0B1F3A] text-sm mb-3">Business Hours</h3>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span className="font-medium">8:00 AM – 5:30 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">9:00 AM – 1:00 PM</span>
                    </li>
                    <li className="flex justify-between text-gray-400">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <FadeIn direction="right" delay={150}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-[#0B1F3A] mb-2">Send Us a Message</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Fill in the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white" aria-label="Location map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <FadeIn>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.89963370726!2d30.0581!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6e8b4b7c5c3%3A0x8b8b8b8b8b8b8b8b!2sKG%20712%20St%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Giant Consult Ltd — ST KG 712, Laika House, Kigali"
              />
            </div>
            <p className="text-center text-gray-500 text-sm mt-3">
              <MapPin size={13} className="inline mr-1 text-[#C99A3C]" />
              ST KG 712, Laika House, Kigali, Rwanda
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
