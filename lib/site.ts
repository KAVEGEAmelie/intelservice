import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Network,
  Cctv,
  Wifi,
  Cpu,
  Code2,
  Wrench,
  ShieldCheck,
  Server,
  PhoneCall,
} from "lucide-react";

export const site = {
  name: "In-Tel Services",
  shortName: "In-Tel",
  slogan: "Soyez des nôtres",
  baseline: "Votre partenaire technologique au cœur de Lomé",
  description:
    "In-Tel Services — informatique, réseaux et sécurité électronique à Lomé (Togo). Vente de matériel, vidéosurveillance, WiFi, maintenance et développement web.",
  url: "https://intelservice.vercel.app",
  address: "20 Av. du RPT, Face le Grand Collège du Plateau, 04BP452 Lomé-TOGO",
  city: "Lomé",
  country: "Togo",
  phones: ["(+228) 22 22 14 54", "90 11 66 86", "99 32 98 98"],
  whatsapp: "22890116686",
  email: "infos_its@yahoo.fr",
  mapsQuery: "Lomé, Togo",
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#pourquoi" },
  { label: "Processus", href: "#processus" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Monitor,
    title: "Vente de matériel informatique",
    description: "Ordinateurs, accessoires et périphériques de qualité.",
  },
  {
    icon: Network,
    title: "Vente de matériel réseau",
    description: "Routeurs, switches, bornes WiFi et câblage professionnel.",
  },
  {
    icon: Cctv,
    title: "Caméras de vidéosurveillance",
    description: "Systèmes de surveillance complets, vente et installation.",
  },
  {
    icon: Wifi,
    title: "Installation WiFi & réseaux",
    description: "Câblage, configuration et déploiement d'infrastructures.",
  },
  {
    icon: Cpu,
    title: "Installation PC & logiciels",
    description: "Montage, configuration et paramétrage sur mesure.",
  },
  {
    icon: Code2,
    title: "Développement web & applications",
    description: "Sites vitrines, e-commerce et applications métier.",
  },
  {
    icon: Wrench,
    title: "Maintenance & dépannage",
    description: "Support technique sur site et à distance, réactif.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & conseil système",
    description: "Sécurité, optimisation et recommandations expertes.",
  },
  {
    icon: Server,
    title: "Intégration réseau",
    description: "Architecture et déploiement d'infrastructures robustes.",
  },
  {
    icon: PhoneCall,
    title: "Télécommunications",
    description: "Solutions et maintenance télécom adaptées à vos besoins.",
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Années d'expérience" },
  { value: 500, suffix: "+", label: "Clients satisfaits" },
  { value: 800, suffix: "+", label: "Projets réalisés" },
  { value: 10, suffix: "", label: "Services experts" },
];

export type Value = { title: string; description: string };

export const values: Value[] = [
  {
    title: "Professionnalisme",
    description: "Un savoir-faire technique reconnu et des prestations soignées.",
  },
  {
    title: "Réactivité",
    description: "Une intervention rapide, sur site comme à distance.",
  },
  {
    title: "Fiabilité & Sécurité",
    description: "Des solutions durables qui protègent vos données et vos biens.",
  },
  {
    title: "Modernité & innovation",
    description: "Les dernières technologies au service de votre performance.",
  },
];

export type Reason = { title: string; description: string };

export const reasons: Reason[] = [
  {
    title: "Expertise locale",
    description: "Une équipe togolaise qui connaît le terrain et vos enjeux.",
  },
  {
    title: "Solutions sur mesure",
    description: "Chaque projet est étudié et adapté à votre budget.",
  },
  {
    title: "Intervention rapide",
    description: "Disponibilité et réactivité partout à Lomé et environs.",
  },
  {
    title: "Matériel de qualité",
    description: "Des équipements fiables, garantis et performants.",
  },
  {
    title: "Accompagnement complet",
    description: "Du conseil initial au suivi après installation.",
  },
  {
    title: "Tarifs transparents",
    description: "Des devis clairs, sans surprise ni frais cachés.",
  },
];

export type Step = { number: string; title: string; description: string };

export const steps: Step[] = [
  {
    number: "01",
    title: "Écoute",
    description: "Nous analysons vos besoins et vos contraintes en détail.",
  },
  {
    number: "02",
    title: "Devis",
    description: "Nous proposons une solution claire et un budget transparent.",
  },
  {
    number: "03",
    title: "Réalisation",
    description: "Nous déployons et configurons avec rigueur et soin.",
  },
  {
    number: "04",
    title: "Suivi",
    description: "Nous assurons maintenance et support dans la durée.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Koffi A.",
    role: "Gérant de commerce",
    quote:
      "Installation de vidéosurveillance impeccable et équipe très professionnelle. Je recommande vivement In-Tel Services.",
  },
  {
    name: "Awa D.",
    role: "Directrice d'école",
    quote:
      "Notre réseau WiFi couvre désormais tout l'établissement. Réactivité et écoute au rendez-vous.",
  },
  {
    name: "Mensah K.",
    role: "Responsable PME",
    quote:
      "Un partenaire de confiance pour notre parc informatique. Dépannage rapide et tarifs honnêtes.",
  },
];

export type Project = { title: string; category: string };

export const projects: Project[] = [
  { title: "Vidéosurveillance commerce", category: "Sécurité" },
  { title: "Câblage réseau entreprise", category: "Réseau" },
  { title: "Parc informatique école", category: "Matériel" },
  { title: "Déploiement WiFi hôtel", category: "Réseau" },
  { title: "Site vitrine PME", category: "Web" },
  { title: "Maintenance serveurs", category: "Support" },
];
