import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <FadeIn className={centered ? "text-center" : ""}>
      {eyebrow && (
        <span
          className={`text-xs font-bold tracking-[0.2em] uppercase ${
            light ? "text-[#C99A3C]" : "text-[#C99A3C]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`section-heading mt-2 ${
          light ? "text-white" : "text-[#0B1F3A]"
        }`}
      >
        {title}
      </h2>
      <span className="gold-line" />
      {subtitle && (
        <p
          className={`section-subheading mt-3 ${
            light ? "text-gray-300" : "text-gray-600"
          } ${centered ? "" : "mx-0 max-w-none"}`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
