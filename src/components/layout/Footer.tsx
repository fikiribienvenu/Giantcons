import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/safety", label: "Safety (HSE)" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/brand/logo1.png"
                  alt="Giant Consult Ltd"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-base leading-tight">
                GIANT CONSULT<br />
                <span className="text-[#C99A3C]">LTD</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mt-3">
              Full-service engineering &amp; construction — architectural design,
              civil construction, and integrated MEP systems. Founded June 2016.
            </p>
            {/* WhatsApp */}
            <a
              href="https://wa.me/250787376885"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-[#C99A3C] hover:text-[#dbb05a] transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#C99A3C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Design &amp; Engineering</li>
              <li>Construction Services</li>
              <li>MEP Systems</li>
              <li>Project Management</li>
              <li>BIM &amp; 3D Modeling</li>
              <li>Interior Fit-Out</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+250787376885"
                  className="flex items-start gap-2 text-sm text-gray-400 hover:text-[#C99A3C] transition-colors"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0" />
                  +250 787 376 885
                </a>
              </li>
              <li>
                <a
                  href="mailto:giantconsult@gmail.com"
                  className="flex items-start gap-2 text-sm text-gray-400 hover:text-[#C99A3C] transition-colors"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  giantconsult@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.giantconsult.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-gray-400 hover:text-[#C99A3C] transition-colors"
                >
                  <Globe size={15} className="mt-0.5 flex-shrink-0" />
                  www.giantconsult.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                ST KG 712, Laika House
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gold divider line */}
      <div className="h-px bg-[#C99A3C]/30" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Giant Consult Ltd. All rights reserved.
          </p>
          <p>
            ST KG 712, Laika House &mdash; Kigali, Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}
