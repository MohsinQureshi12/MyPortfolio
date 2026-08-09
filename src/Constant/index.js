
import ServiceCart1 from "../../public/assets/image/SerchCart1.png";
import ServiceCart2 from "../../public/assets/image/icon4.png";
import ServiceCart3 from "../../public/assets/image/icon3.png";
import ServiceCart4 from "../../public/assets/image/team-member.jpg";
import ServiceCart5 from "../../public/assets/image/cloud-computing.png";
import ServiceCart6 from "../../public/assets/image/digital-marketing.png";
import ServiceCart7 from "../../public/assets/image/It-consulting.png";
import ServiceCart8 from "../../public/assets/image/trending-tech.png";
import img1 from "../../public/assets/image/ServicePageCart1.jpg";
import img2 from "../../public/assets/image/ServicePageCart2.png";
import img3 from "../../public/assets/image/ServicePageCart3.jpg"; 

import {
  Building2, ShieldCheck, Globe, Layers, Smartphone, Rocket,
  Cloud, Database, Network, Building,
  Cpu, Bot, Zap, LineChart,
  Server, Infinity, CloudLightning, Shield
} from "lucide-react";
import { path } from "framer-motion/client";

export const navLinks = [
  { path: "/", display: "Home" },
  { path: "/about-page", display: "About Us" },
  {
    display: "Services",
    isMegaMenu: true,
    path: "/service-page",
    megaMenu: {
      columns: [
        {
          title: "ENGINEERING",
          items: [
            { icon: Globe, label: "Website Development", desc: "Corporate & marketing sites engineered for performance.", path: "/service-page" },
            { icon: Layers, label: "Web Applications", desc: "Complex SPAs and internal tools at scale.", path: "/service-page" },
            { icon: Smartphone, label: "Mobile Apps", desc: "Native iOS and Android, cross-platform delivery.", path: "/service-page" },
            { icon: Rocket, label: "MVP Development", desc: "Idea to launch-ready product in weeks.", path: "/service-page" }
          ]
        },
        {
          title: "PLATFORMS",
          items: [
            { icon: Cloud, label: "SaaS Development", desc: "Multi-tenant subscription platforms.", path: "/service-page" },
            { icon: Database, label: "ERP Development", desc: "Finance, HR, inventory and operations unified.", path: "/service-page" },
            { icon: Network, label: "CRM Development", desc: "Customer 360 with AI-assisted engagement.", path: "/service-page" },
            { icon: Building, label: "Enterprise Software", desc: "Mission-critical platforms to global standards.", path: "/service-page" }
          ]
        },
        {
          title: "INTELLIGENCE",
          items: [
            { icon: Cpu, label: "AI Solutions", desc: "LLMs, vision, NLP for business outcomes.", path: "/service-page" },
            { icon: Bot, label: "AI Agents", desc: "Autonomous agents for operations and support.", path: "/service-page" },
            { icon: Zap, label: "Automation", desc: "RPA and workflow automation across stack.", path: "/service-page" },
            { icon: LineChart, label: "Business Intelligence", desc: "Real-time analytics and decision dashboards.", path: "/service-page" }
          ]
        },
        {
          title: "CLOUD & DEVOPS",
          items: [
            { icon: Server, label: "Cloud Infrastructure", desc: "Architected for cost, security and uptime.", path: "/service-page" },
            { icon: Infinity, label: "DevOps", desc: "CI/CD, IaC and zero-downtime releases.", path: "/service-page" },
            { icon: CloudLightning, label: "AWS", desc: "Certified architecture and cost optimization.", path: "/service-page" },
            { icon: Shield, label: "Azure", desc: "Enterprise Azure design and governance.", path: "/service-page" }
          ]
        }
      ],
      featured: {
        title: "Enterprise AI Transformation",
        desc: "End-to-end AI strategy, agents and automation tailored to your operations.",
        path: "/service-page"
      }
    }
  },
  { path: "/product-page", display: "Products" },
  // {
  //   display: "Hire Us",
  //   dropdown: [
  //     { path: "/service-page", label: "Per Hour" },
  //     { path: "/service-page", label: "Weekly Base" },
  //     { path: "/service-page", label: "Monthly Base" },
  //   ],
  // },
  // { path: "/technology-page", display: "Technology" },
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




export const portfolioItems = [
  { id: 1, title: 'Website Development', desc: 'Corporate & marketing sites engineered for performance.', image: img1 },
  { id: 2, title: 'Mobile Applications', desc: 'Native iOS and Android, cross-platform delivery.', image: img2 },
  { id: 3, title: 'MVP Development', desc: 'From concept to launch-ready product in weeks, not quarters.', image: img3 },
];


 export const productsData = [
  {
    id: 1,
    category: 'F&B',
    title: 'Restaurant ERP',
    desc: 'Orders, kitchen display, inventory and franchise management.',
    image: img1,
  },
  {
    id: 2,
    category: 'SECURITY',
    title: 'Security Workforce ERP',
    desc: 'Guard rostering, attendance, payroll and incident reporting.',
    image: img2,
  },
  {
    id: 3,
    category: 'LOGISTICS',
    title: 'Transportation ERP',
    desc: 'Fleet, dispatch, tracking and freight billing.',
    image: img3,
  },
];