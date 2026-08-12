import Image from "next/image";
import { Quote } from "lucide-react";
import { TeamMember } from "@/data/team";
import FadeIn from "@/components/ui/FadeIn";

interface TeamCardProps {
  member: TeamMember;
  delay?: number;
}

export default function TeamCard({ member, delay = 0 }: TeamCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="h-full bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover text-center flex flex-col items-center">
        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#C99A3C]/30 mb-4 flex-shrink-0 bg-[#0B1F3A]">
          {member.image ? (
            <Image
              src={member.image}
              alt={`${member.name} — ${member.title}`}
              fill
              className="object-cover object-top"
              sizes="96px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-2xl font-bold text-[#C99A3C]">
                {member.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <h3 className="font-bold text-[#0B1F3A] text-base leading-tight mb-1">
          {member.name}
        </h3>
        <p className="text-[#C99A3C] text-xs font-semibold uppercase tracking-wider mb-3">
          {member.title}
        </p>

        {/* Divider */}
        <div className="w-8 h-0.5 bg-[#C99A3C]/40 mb-3" />

        {/* Bio */}
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{member.bio}</p>

        {/* Quote */}
        {member.quote && (
          <blockquote className="mt-4 text-xs italic text-gray-500 bg-gray-50 rounded p-3 border-l-2 border-[#C99A3C] text-left w-full">
            <Quote size={12} className="text-[#C99A3C] mb-1" />
            {member.quote}
          </blockquote>
        )}
      </div>
    </FadeIn>
  );
}
