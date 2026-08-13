"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/safety", label: "Safety" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1F3A] shadow-lg shadow-black/20"
            : "bg-[#0B1F3A]/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <Image
                  src="/brand/logo1.png"
                  alt="Giant Consult Ltd logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-white font-bold text-sm lg:text-base leading-tight hidden sm:block">
                GIANT CONSULT<span className="text-[#C99A3C]"> LTD</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-[#C99A3C]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex btn-primary text-sm py-2 px-5"
              >
                Get a Quote
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-white hover:text-[#C99A3C] transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0B1F3A] shadow-2xl flex flex-col transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-9 h-9">
                <Image
                  src="/brand/logo1.png"
                  alt="Giant Consult Ltd"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-sm">
                GIANT CONSULT <span className="text-[#C99A3C]">LTD</span>
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#C99A3C] transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-5" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                      pathname === link.href
                        ? "bg-[#C99A3C]/20 text-[#C99A3C]"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer CTA */}
          <div className="p-5 border-t border-white/10">
            <Link href="/contact" className="btn-primary w-full justify-center text-sm">
              Get a Quote
            </Link>
            <p className="text-gray-500 text-xs text-center mt-3">
              +250 787 376 885
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
