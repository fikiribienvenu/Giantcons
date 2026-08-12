"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, X } from "lucide-react";
import { projects, Project } from "@/data/projects";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = ["All", "Commercial", "Institutional", "Residential"] as const;
type Category = (typeof categories)[number];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<{ project: Project; imgIdx: number } | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  // Lightbox navigation
  const openLightbox = (project: Project, imgIdx: number) => {
    setLightbox({ project, imgIdx });
  };
  const closeLightbox = () => setLightbox(null);
  const prevImg = () => {
    if (!lightbox) return;
    const len = lightbox.project.images.length;
    setLightbox({ ...lightbox, imgIdx: (lightbox.imgIdx - 1 + len) % len });
  };
  const nextImg = () => {
    if (!lightbox) return;
    const len = lightbox.project.images.length;
    setLightbox({ ...lightbox, imgIdx: (lightbox.imgIdx + 1) % len });
  };

  return (
    <>
      {/* Page header */}
      <div className="bg-[#0B1F3A] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-[#C99A3C] text-xs font-bold tracking-[0.2em] uppercase">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
              Our Projects
            </h1>
            <div className="w-16 h-1 bg-[#C99A3C] mx-auto mb-5" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A showcase of completed projects demonstrating our Design &amp; Build expertise
              across commercial, institutional, and residential sectors.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? "bg-[#C99A3C] text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-70">
                  ({cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="py-16 bg-gray-50" aria-label="Project gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-20">No projects in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project, i) => (
                <FadeIn key={project.id} delay={i * 80} direction="up">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover h-full flex flex-col">
                    {/* Main image — clickable for lightbox */}
                    <button
                      className="relative block h-56 w-full overflow-hidden group"
                      onClick={() => openLightbox(project, 0)}
                      aria-label={`View ${project.title} photos`}
                    >
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 bg-[#C99A3C] text-white text-xs font-bold px-2.5 py-1 rounded">
                        {project.category}
                      </span>
                      {project.images.length > 1 && (
                        <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                          +{project.images.length - 1} photos
                        </span>
                      )}
                    </button>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="font-bold text-[#0B1F3A] text-lg mb-3 leading-snug">
                        {project.title}
                      </h2>
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Scope of Work
                        </p>
                        <ul className="space-y-1.5">
                          {project.scopeItems.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="mt-2 w-1 h-1 rounded-full bg-[#C99A3C] flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Thumbnail strip */}
                      {project.images.length > 1 && (
                        <div className="flex gap-2 mt-auto pt-4 border-t border-gray-100 overflow-x-auto">
                          {project.images.slice(0, 5).map((img, idx) => (
                            <button
                              key={img}
                              onClick={() => openLightbox(project, idx)}
                              className="relative w-12 h-12 rounded flex-shrink-0 overflow-hidden border-2 border-transparent hover:border-[#C99A3C] transition-colors"
                              aria-label={`View photo ${idx + 1} of ${project.title}`}
                            >
                              <Image
                                src={img}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="48px"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* External gallery CTA */}
          <FadeIn delay={200}>
            <div className="mt-14 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#0B1F3A] rounded-lg px-8 py-6">
                <div className="text-left">
                  <p className="text-white font-bold">Want to see more?</p>
                  <p className="text-gray-400 text-sm mt-0.5">
                    Browse our full photography gallery for every project.
                  </p>
                </div>
                <a
                  href="https://adygrafix.pic-time.com/nyhjlwps0YyVW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-shrink-0"
                >
                  View More Projects
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo gallery — ${lightbox.project.title}`}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#C99A3C] transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Prev / Next */}
          {lightbox.project.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImg(); }}
                className="absolute left-4 text-white hover:text-[#C99A3C] transition-colors text-4xl font-light z-10 px-4 py-8"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImg(); }}
                className="absolute right-4 text-white hover:text-[#C99A3C] transition-colors text-4xl font-light z-10 px-4 py-8"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative max-w-4xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.project.images[lightbox.imgIdx]}
              alt={`${lightbox.project.title} — photo ${lightbox.imgIdx + 1}`}
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-center text-gray-400 text-sm mt-3">
              {lightbox.project.title} — {lightbox.imgIdx + 1} / {lightbox.project.images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
