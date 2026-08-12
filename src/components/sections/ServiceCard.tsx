import { LucideIcon } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  delay?: number;
  variant?: "light" | "dark";
}

export default function ServiceCard({
  icon: Icon,
  title,
  items,
  delay = 0,
  variant = "light",
}: ServiceCardProps) {
  const isDark = variant === "dark";
  return (
    <FadeIn delay={delay} direction="up">
      <div
        className={`h-full rounded-lg p-8 card-hover border ${
          isDark
            ? "bg-[#0B1F3A] border-[#C99A3C]/20 text-white"
            : "bg-white border-gray-100 text-[#0B1F3A]"
        }`}
      >
        <div className="w-14 h-14 rounded-lg bg-[#C99A3C]/10 flex items-center justify-center mb-5">
          <Icon size={28} className="text-[#C99A3C]" />
        </div>
        <h3
          className={`text-xl font-bold mb-4 ${
            isDark ? "text-white" : "text-[#0B1F3A]"
          }`}
        >
          {title}
        </h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className={`flex items-start gap-2 text-sm leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C99A3C] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}
