import { IMachine } from "./machines.types";

const DRILLING_REAMING_MACHINE: IMachine = {
  key: "drilling_reaming_machine",
  name: "Drilling Reaming Machine",
  description:
    "Vertical/Horizontal Drilling and Reaming machines to suit the component to be machined. Easily controllable with PLC systems. Efficient Machines designed to suit your purpose. The Job clamping assembly is designed according to the component, so that the operator finds it easy to load and unload. Autoloading will increase the production rate by reducing the lead time.",
  tagline:
    "Drilling Reaming Machine is used for precise drilling and reaming operations.",
  applications: ["Shafts", "Dies", "Plates", "Rods", "Blocks"],
  solutions: [],
  industries: [],
  tags: [],
  videoUrl: "",
  category: "Drilling Machines",
  ogImageUrl: "",
  features: [
    "High precision drilling",
    "Efficient reaming operations",
    "Robust construction",
  ],
};

// Micro Gun Drilling Machines

const MICRO_GUN_DRILLING_MACHINE: IMachine = {
  key: "micro_gun_drilling_machine",
  name: "Micro Gun Drilling Machine",
  description:
    "Micro Gun Drilling Machine is used for high precision micro drilling operations.",
  tagline: "High precision micro drilling.",
  applications: [
    "Core Pins",
    "Implants & Instruments",
    "Gauges",
    "Spindles",
    "Electronic Components",
  ],
  solutions: [],
  industries: [],
  tags: [
    "Small-Diameter Drilling",
    "CNC Controlled",
    "High-Precision Machining",
  ],
  videoUrl: "",
  category: "Gun Drilling Machines",
  ogImageUrl: "",
  features: [
    "Precision spindle system for small-diameter drilling.",
    "CNC-controlled drilling cycles for repeatability.",
    "High-pressure coolant delivery through the gun drill with 5 micron Filtration",
    "Configurable spindle speed and feed parameters.",
    "Customized workholding solutions",
    "Compact Sized Machine - Less Floor Area Occupied",
  ],
};

// export type IMachinesMap = {
//   [key: string]: IMachine;
// };

export const MACHINES_MAP = {
  drilling_reaming_machine: DRILLING_REAMING_MACHINE,
  micro_gun_drilling_machine: MICRO_GUN_DRILLING_MACHINE,
};
