import {
  Droplets,
  Wind,
  Building2,
  Landmark,
  Home,
  SprayCan,
  Car,
  ArrowUpToLine,
  Factory,
} from "lucide-react";

export const services = [
  {
    icon: Droplets,
    title: "High Pressure Cleaning",
    description:
      "Powerful, professional cleaning for buildings, construction sites and developments.",
  },
  {
    icon: Wind,
    title: "Low Pressure Cleaning",
    description:
      "Gentle solutions designed for delicate surfaces where care matters most.",
  },
  {
    icon: SprayCan,
    title: "Steam Cleaning",
    description:
      "Chemical-free steam cleaning using environmentally friendly equipment.",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Offices, factories, warehouses and industrial properties cleaned to a corporate standard.",
  },
  {
    icon: Landmark,
    title: "Heritage Building Cleaning",
    description:
      "Specialised techniques to restore and protect heritage and historic buildings.",
  },
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Exterior pressure cleaning for homes and apartments across Sydney.",
  },
  {
    icon: SprayCan,
    title: "Graffiti Removal",
    description:
      "Fast, complete graffiti removal from public and commercial surfaces.",
  },
  {
    icon: Car,
    title: "Driveway & Car Park Cleaning",
    description:
      "Restore parking lots, driveways and concrete to their original finish.",
  },
  {
    icon: ArrowUpToLine,
    title: "EWP Services",
    description:
      "Elevated work platform access and cleaning for buildings up to 16 metres.",
  },
] as const;

export const industries = [
  "Construction",
  "Corporate",
  "Commercial",
  "Industrial",
  "Heritage",
  "Residential",
] as const;

export { Factory };
