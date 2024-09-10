// src/data/servicesData.ts
import { Service } from "../types/service";
import { FaHammer, FaPaintRoller, FaTools } from "react-icons/fa"; // Example icons

export const services: Service[] = [
  {
    icon: <FaHammer />,
    title: "General Handyman Services",
    description: "All-around handyman services for various home repairs.",
  },
  {
    icon: <FaPaintRoller />,
    title: "Painting",
    description:
      "Professional painting services for interior and exterior projects.",
  },
  {
    icon: <FaTools />,
    title: "Carpentry",
    description: "Custom carpentry solutions for your home improvement needs.",
  },
  // Add more services as needed
];
