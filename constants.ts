import { Service, Value, NavLink } from './types';

export const COMPANY_NAME = "Minex Technology Solutions";
export const TAGLINE = "Innovation • Technology • Excellence";
export const ADDRESS = "Kubwa House 47, Phase 2/1, Flat 1, FCT, Abuja 900108, Nigeria";
export const WEBSITE = "www.minextech.com";
export const EMAIL = "contact@minextech.com"; // Inferring from text, placeholder
export const PHONE = "+234 800 123 4567"; // Placeholder based on text

export const NAV_LINKS: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "End-to-end web development services with modern technologies to keep your business competitive.",
    iconName: "Code"
  },
  {
    id: "cloud",
    title: "Cloud Services",
    description: "Scalable and affordable cloud solutions without the need for internal infrastructure.",
    iconName: "Cloud"
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Native Android and iOS apps with intelligent algorithms and modern UI design.",
    iconName: "Smartphone"
  },
  {
    id: "identity",
    title: "Identity Management",
    description: "Innovative biometric identity management solutions for enhanced security and convenience.",
    iconName: "Fingerprint"
  },
  {
    id: "project-mgmt",
    title: "Project Management",
    description: "Streamlined IT project management from planning to review for efficient execution.",
    iconName: "ClipboardList"
  },
  {
    id: "data-recovery",
    title: "Data Recovery Services",
    description: "Comprehensive backup solutions with local and cloud options for business continuity.",
    iconName: "Database"
  },
  {
    id: "blockchain",
    title: "Blockchain Solutions",
    description: "Cutting-edge blockchain development and implementation services.",
    iconName: "Blocks"
  },
  {
    id: "compliance",
    title: "IT Compliance Auditing",
    description: "Ensure your systems meet industry standards and regulatory requirements.",
    iconName: "ShieldCheck"
  },
  {
    id: "support",
    title: "Customer Support",
    description: "Dedicated technical support services to keep your operations running smoothly.",
    iconName: "Headphones"
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Advanced AI and ML solutions for intelligent business automation.",
    iconName: "Bot"
  },
  {
    id: "devops",
    title: "DevOps Services",
    description: "Streamlined development and operations for faster, reliable deployments.",
    iconName: "Infinity"
  },
  {
    id: "analytics",
    title: "Data Analytics",
    description: "Turn your data into actionable insights with advanced analytics solutions.",
    iconName: "BarChart3"
  }
];

export const CORE_VALUES: Value[] = [
  { title: "Integrity", description: "We uphold the highest standards of integrity in all of our actions." },
  { title: "Trust", description: "We build relationships that make a positive difference in our customers' lives." },
  { title: "Team Work", description: "We work together, across boundaries, to meet the needs of our customers." },
  { title: "Empathy", description: "We understand and share the feelings of our clients and team members." },
  { title: "Employee Development", description: "We value our people, encourage their development and reward their performance." }
];

export const SPECIALTIES = [
  "AI", "Blockchain", "Cloud Computing", "Software Development", "DevOps", "IoT"
];