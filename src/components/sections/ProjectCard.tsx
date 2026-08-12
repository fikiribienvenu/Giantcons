"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import FadeIn from "@/components/ui/FadeIn";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const mainImage = project.images[0] ?? "/brand/logo.png";

  return (
    <FadeIn delay={delay} direction="up">
      <div className="group h-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover">
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-gray-100">
          <Image
            src={mainImage}
            alt={project.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Category badge */}
          <span className="absolute top-3 left-3 bg-[#C99A3C] text-white text-xs font-bold px-2.5 py-1 rounded">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-bold text-[#0B1F3A] text-lg mb-2 leading-snug">
            {project.title}
          </h3>
          <ul className="space-y-1 mb-4">
            {project.scopeItems.slice(0, 3).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs text-gray-500"
              >
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C99A3C] flex-shrink-0" />
                {item}
              </li>
            ))}
            {project.scopeItems.length > 3 && (
              <li className="text-xs text-[#C99A3C] font-medium pl-3">
                +{project.scopeItems.length - 3} more
              </li>
            )}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}

// Gallery variant with hover-overlay
export function ProjectGalleryCard({
  project,
  delay = 0,
}: ProjectCardProps) {
  const mainImage = project.images[0] ?? "/brand/logo.png";

  return (
    <FadeIn delay={delay} direction="up">
      <div className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] shadow-sm">
        <Image
          src={mainImage}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-108"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Always-visible category badge */}
        <span className="absolute top-3 left-3 bg-[#C99A3C] text-white text-xs font-bold px-2.5 py-1 rounded z-10">
          {project.category}
        </span>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-white font-bold text-base leading-tight mb-1">
            {project.title}
          </h3>
          <p className="text-[#C99A3C] text-xs font-medium">{project.scopeItems[0]}</p>
          <div className="flex gap-1 mt-2">
            {project.images.slice(0, 4).map((img, idx) => (
              <div key={idx} className="relative w-8 h-8 rounded overflow-hidden border border-white/30">
                <Image src={img} alt="" fill className="object-cover" sizes="32px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
