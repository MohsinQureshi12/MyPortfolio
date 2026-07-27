
import ServiceCart1 from "../../public/assets/image/SerchCart1.png";
import ServiceCart2 from "../../public/assets/image/icon4.png";
import ServiceCart3 from "../../public/assets/image/icon3.png";
import ServiceCart4 from "../../public/assets/image/team-member.jpg";
import ServiceCart5 from "../../public/assets/image/cloud-computing.png";
import ServiceCart6 from "../../public/assets/image/digital-marketing.png";
import ServiceCart7 from "../../public/assets/image/It-consulting.png";
import ServiceCart8 from "../../public/assets/image/trending-tech.png";
import { Building2, Cpu, ShieldCheck, Globe } from "lucide-react";

export const navLinks = [
  { path: "/", display: "Home" },
  { path: "/about-page", display: "About Us" },
  { path: "/services", display: "Services" },
  { path: "/portfolio-page", display: "Portfolio" },
  {
    display: "Hire Us",
    dropdown: [
      { path: "/hire-web-dev", label: "Per Hour" },
      { path: "/hire-mobile-dev", label: "Weekly Base" },
      { path: "/hire-ui-ux", label: "Monthly Base" },
    ],
  },
  { path: "/technology-page", display: "Technology" },
];


export const SERVERICE = [
  {
    img: ServiceCart1,
    title: "Custom Development",
    desc: "We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.",
  },
  {
    img: ServiceCart2,
    title: "Blockchain Development",
    desc: "We design solutions like smart contracts, DEXs, DeFi, NFTs, gamification, etc., based on blockchain technology.",
  },
  {
    img: ServiceCart3,
    title: "Game Development",
    desc: "We develop pixel-perfect games with future-proof architecture and high resolution, using the latest technologies.",
  },
  {
    img: ServiceCart4,
    title: "Dedicated Teams",
    desc: "We provide dedicated resources and staff augmentation to enterprises worldwide for IT support and success.",
  },
  {
    img: ServiceCart5,
    title: "Cloud Services",
    desc: "We solve modern business challenges with a cloud-native approach towards enterprise-grade apps and services.",
  },
  {
    img: ServiceCart6,
    title: "Digital Marketing",
    desc: "We craft, manage and publish interactive and engaging content to grow brands using data-driven strategies.",
  },
  {
    img: ServiceCart7,
    title: "IT Consultancy",
    desc: "We provide strategic insights and technology solutions to optimize business processes and enhance efficiency.",
  },
  {
    img: ServiceCart8,
    title: "Trending Technologies",
    desc: "We implement cutting-edge tech solutions, helping businesses stay ahead in the fast-changing digital landscape.",
  },
];
export const productList = [
  {
    id: 1,
    category: "EDUCATION",
    title: "SchoolFMS",
    desc: "Multi-tenant School Finance Management System for institutions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // placeholder for dashboard
  },
  {
    id: 2,
    category: "HEALTHCARE",
    title: "Pharmacy ERP",
    desc: "Inventory, prescriptions, billing and compliance for pharmacies.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "RETAIL",
    title: "Retail ERP",
    desc: "POS, stock and omnichannel commerce for modern retail.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "FOOD & BEVERAGE",
    title: "RestoPOS",
    desc: "Restaurant management, table booking and order tracking system.",
    image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "LOGISTICS",
    title: "FleetManager",
    desc: "Real-time tracking, route optimization and fleet maintenance.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "ANALYTICS",
    title: "DataSight",
    desc: "Advanced business intelligence and data visualization platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];


export const chooseUsData = [
  {
    id: 1,
    icon: Building2,
    title: "Enterprise-Grade",
    desc: "Architectures designed for uptime, compliance and scale.",
  },
  {
    id: 2,
    icon: Cpu,
    title: "AI-Native",
    desc: "Intelligence embedded across products and workflows.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure by Design",
    desc: "Role-based access, audit logging and cloud backups.",
  },
  {
    id: 4,
    icon: Globe,
    title: "Globally Capable",
    desc: "Multi-region delivery from Lahore and Ras Al Khaimah.",
  },
];

