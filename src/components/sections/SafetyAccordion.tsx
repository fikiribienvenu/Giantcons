"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck, AlertTriangle, GraduationCap, Leaf, ClipboardList } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const hseItems = [
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Compliance with National & International Standards",
    body: "Adherence to occupational health and safety laws, environmental regulations, and internationally recognised standards including ISO 45001 and ISO 14001.",
  },
  {
    id: "risk",
    icon: AlertTriangle,
    title: "Risk Management & Prevention",
    body: "Comprehensive risk assessments and systematic hazard identification carried out at the start of every project to prevent incidents before they occur.",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training & Awareness",
    body: "Regular HSE training sessions, tool-box talks, safety drills, and refresher courses ensure every team member is prepared and safety-conscious.",
  },
  {
    id: "environment",
    icon: Leaf,
    title: "Environmentally Responsible Practices",
    body: "Sustainable construction methods, rigorous waste management, emissions reduction measures, and conservation of energy and water resources on every site.",
  },
  {
    id: "reporting",
    icon: ClipboardList,
    title: "Incident Reporting & Continuous Improvement",
    body: "Transparent incident reporting culture with thorough root-cause analysis, ensuring that every event drives measurable safety improvements.",
  },
];

export default function SafetyAccordion() {
  const [openId, setOpenId] = useState<string>("compliance");

  return (
    <div className="space-y-3">
      {hseItems.map((item, i) => {
        const isOpen = openId === item.id;
        const Icon = item.icon;
        return (
          <FadeIn key={item.id} delay={i * 80} direction="up">
            <div
              className={`rounded-lg border transition-all duration-200 ${
                isOpen
                  ? "border-[#C99A3C] bg-white shadow-md"
                  : "border-gray-200 bg-white hover:border-[#C99A3C]/40"
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? "" : item.id)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                aria-controls={`hse-panel-${item.id}`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? "bg-[#C99A3C]" : "bg-[#C99A3C]/10"
                  }`}
                >
                  <Icon
                    size={20}
                    className={isOpen ? "text-white" : "text-[#C99A3C]"}
                  />
                </div>
                <span className="font-semibold text-[#0B1F3A] text-sm sm:text-base flex-1 pr-2">
                  {item.title}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[#C99A3C] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`hse-panel-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed pl-[4.25rem]">
                  {item.body}
                </p>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
