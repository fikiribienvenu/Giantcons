export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  quote?: string;
  image: string | null;
}

export const team: TeamMember[] = [
  {
    id: "gakire-eric",
    name: "Eng. GAKIRE Eric",
    title: "MD & Co-Founder",
    bio: "Brings visionary leadership, strategic direction, and deep commitment to excellence in building design, construction, and MEP systems integration. Strong foundation in engineering, project development, and business management; instrumental in positioning Giant Consult as a trusted industry leader.",
    image: null,
  },
  {
    id: "isewabeza-josue",
    name: "Eng. ISEWABEZA Josue",
    title: "Operations Manager",
    bio: "Believes in mastering the art of giving without bankrupting oneself, and sharing the wealth along the way.",
    quote:
      "At Giant Consult, we don't just build structures — we build lasting value for our clients, partners, and communities.",
    image: "/team/eng-isewabeza-josue.jpg",
  },
  {
    id: "kunduwera-methode",
    name: "Eng. KUNDUWERA Methode",
    title: "Civil Structural Engineer",
    bio: "Civil and Structural Engineering forms the backbone of every project — motivated by transforming architectural concepts into strong, safe structures that stand the test of time.",
    image: "/team/eng-kunduwera-methode.jpg",
  },
  {
    id: "ndayizigiye-aime",
    name: "Eng. Aime Confiance NDAYIZIGIYE",
    title: "Site Engineer",
    bio: "Frontline leader turning planning into reality at the heart of every construction site — manages technical accuracy, coordinates trades, upholds safety and quality standards.",
    image: "/team/eng-aime-ndayizigiye.jpg",
  },
  {
    id: "nteziryayo-simeon",
    name: "NTEZIRYAYO Simeon",
    title: "Quantity Surveyor",
    bio: "Driven by precision, integrity, and responsibility for delivering cost-effective construction — believes success comes from accurate planning and resource management, not just design and execution.",
    image: "/team/nteziryayo-simeon.png",
  },
  {
    id: "theophile-rameaux",
    name: "Rameaux THEOPHILE",
    title: "Architect",
    bio: "Architecture is about shaping environments that enhance the lives of those who use them — blending functionality, sustainability, and aesthetic excellence into cohesive design.",
    image: null,
  },
  {
    id: "ibaze-adeline",
    name: "IBAZE Adeline",
    title: "Safety Coordinator",
    bio: "Key part of the HSE framework — works with site engineers, supervisors, and workers to implement safety protocols, monitor daily activities, and ensure alignment with local and international safety standards.",
    image: "/team/ibaze-adeline.jpg",
  },
];
