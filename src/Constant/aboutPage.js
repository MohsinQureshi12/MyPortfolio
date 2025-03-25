import UIUX from "../assets/icon1.png";
import WebDev from "../assets/icon2.png";
import GameDev from "../assets/icon3.png";
import BlockChainDev from "../assets/icon4.png";
import { FaRecycle, FaHistory } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";

export const AboutPageList = [
  {
    id: 1,
    title: "UI/UX Design",
    desc: `We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.`,
    image: UIUX,
  },
  {
    id: 2,
    title: "Web Development",
    desc: `We deliver high-fidelity software solutions for web, mobile, and  desktops mapped onto your unique business processes. We build, modernize, optimize and scale your business apps using the latest SDLC tools and cross-platform technologies.`,
    image: WebDev,
  },
  {
    id: 3,
    title: "Game Development",
    desc: `We develop pixel-perfect games with future-proof architecture and high resolution, using the latest technologies.`,
    image: GameDev,
  },
  {
    id: 4,
    title: "Blockchain Development",
    desc: `We design solutions like smart contracts, DEXs, DeFi, NFTs, gamification, etc., based on blockchain technology.`,
    image: BlockChainDev,
  },
];

 