export interface Project {
  id: string;
  title: string;
  category: "Commercial" | "Institutional" | "Residential";
  scope: string;
  scopeItems: string[];
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "chez-gahigi",
    title: "Chez Gahigi",
    category: "Commercial",
    scope: "Design & Build",
    scopeItems: [
      "Design & Build",
      "Electrical & low-current installation",
      "Nurse call & public address systems",
      "CCTV & access control",
      "Fire detection & alarm",
      "HVAC systems",
    ],
    images: [
      "/projects/gac-ph-2.jpg",
      "/projects/gac-ph-4.jpg",
      "/projects/gac-ph-5.jpg",
      "/projects/gac-ph-6.jpg",
      "/projects/gac-ph-7.jpg",
    ],
    featured: true,
  },
  {
    id: "kim-tower",
    title: "Kim Tower",
    category: "Commercial",
    scope: "Design & Build",
    scopeItems: [
      "Design & Build",
      "Electrical & low-current installation",
      "Nurse call & public address systems",
      "CCTV & access control",
      "Fire detection & alarm",
      "HVAC systems",
    ],
    images: [
      "/projects/gakire-render-2-1.jpg",
      "/projects/gakire-render-2-2.jpg",
      "/projects/gakire-render-2-3.jpg",
      "/projects/gakire-render-2-4.jpg",
      "/projects/gakire-render-2-5.jpg",
      "/projects/gakire-render-2-6.jpg",
    ],
    featured: true,
  },
  {
    id: "mixed-use-retail",
    title: "Commercial Building — Mixed-Use Retail",
    category: "Commercial",
    scope: "Design & Build",
    scopeItems: [
      "Design & Build",
      "Electrical systems",
      "Plumbing",
      "Firefighting systems",
    ],
    images: [
      "/projects/059A4115.jpg",
      "/projects/059A4119.jpg",
      "/projects/059A4127.jpg",
    ],
    featured: true,
  },
  {
    id: "beacon-of-hope",
    title: "Beacon of Hope Ministry — School of Beacon",
    category: "Institutional",
    scope: "Design & Build",
    scopeItems: [
      "Design & Build",
      "Electrical & low-current installation",
      "HVAC systems",
    ],
    images: [
      "/projects/img-9242.jpg",
      "/projects/059A4135.jpg",
      "/projects/059A4136.jpg",
    ],
    featured: true,
  },
  {
    id: "residential-commercial-pool",
    title: "Residential / Commercial Building with Pool",
    category: "Residential",
    scope: "Design & Build",
    scopeItems: [
      "Design & Build",
      "Electrical & low-current installation",
      "HVAC systems",
    ],
    images: [
      "/projects/before.jpg",
      "/projects/after.jpg",
      "/projects/after1.jpg",
      "/projects/final.jpg",
    ],
    featured: false,
  },
  {
    id: "full-mep-commercial",
    title: "Commercial Building — Full MEP",
    category: "Commercial",
    scope: "Design & Build",
    scopeItems: [
      "Design & Build",
      "Full MEP design (HVAC, firefighting, sewage, WWTP)",
      "Electrical systems & CCTV",
      "Data & internet infrastructure",
      "Low-current systems",
      "Plumbing",
    ],
    images: [
      "/projects/059A4160.jpg",
      "/projects/059A4161.jpg",
      "/projects/059A4164.jpg",
      "/projects/059A4174.jpg",
    ],
    featured: false,
  },
];
