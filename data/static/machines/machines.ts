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
  tags: ["Drilling", "Reaming"],
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
    "Swaraj manufactures precision Micro Gun Drilling Machines designed for drilling small-diameter, deep and accurate holes in a wide range of industrial components with drill diameter range starting from Ø1mm. Engineered for applications requiring high hole straightness, dimensional consistency and reliable machining performance, these machines are ideal for micro-drilling operations in demanding manufacturing environments.",
  tagline: "High precision micro drilling.",
  applications: [
    "Implants & Instruments",
    "Core Pins",
    "Gauges",
    "Spindles",
    "Micro gun drilling components",
    "Electronic components",
  ],
  solutions: [],
  industries: [],
  tags: [
    "Micro Gun Drilling Machine",
    "CNC Micro Drilling Machine",
    "Small Diameter Gun Drilling",
    "Precision Deep Hole Drilling Machine",
    "Micro Hole Drilling",
    "High-Pressure Coolant Drilling",
    "Micro Drilling Machine Manufacturer India",
    "Single Spindle Gun Drilling Machine",
    "Multi-Spindle Micro Drilling Machine",
    "Precision Engineering Machinery",
    "Swaraj Automation",
    "Small-Diameter Drilling",
    "CNC Controlled",
    "High-Precision Machining",
  ],
  videoUrl: "https://youtu.be/tm8GCjhXScE",
  category: "Gun Drilling Machines",
  ogImageUrl: "",
  operationsPerformed: ["Solid Carbide Gun Drills", "Brazed Tipped Gun Drills"],
  features: [
    "CNC-Controlled Feed: Precise control over drilling feed and positioning.",

    "High-Pressure Coolant System: Supports effective pressure for chip evacuation.",
    "Precision Spindle System: Designed for stable, high-speed drilling operations.",
    "Consistent Hole Quality: Supports accurate hole dimensions and straightness.",
    "Flexible Configurations: Available in single-spindle and multi-spindle options, subject to requirements.",
    "Programmable Operations: CNC-based control for repeatable machining cycles.",
    "Compact Sized Machine: Less Floor Area Occupied",
    "Customized Solutions: Configurable to suit specific materials, hole depths and production needs.",
  ],
  tables: [
    {
      columns: ["GDSA-M-01", "GDSA-M-02"],
      rows: [
        { label: "Drill Diameter Range", values: ["Ø1- Ø4 mm", "Ø2- Ø6 mm"] },
        { label: "Spindles", values: ["1 or 2", "1 or 2"] },
        {
          label: "Spindle Type",
          values: [
            "Motorised / High Speed Spindles HSK Tapered",
            "Motorised / High Speed Spindles HSK Tapered",
          ],
        },
        {
          label: "Part Details",
          values: [
            "OD Range Ø4 - Ø24mm, Max Length - 300mm",
            "OD Range Ø4 - Ø24mm, Max Length - 300mm",
          ],
        },
        {
          label: "Spindle Speed",
          values: ["Upto 18000 RPM", "Upto 10000 RPM"],
        },
        {
          label: "Component Rotation",
          values: ["Upto 1800 RPM", "Upto 1000 RPM"],
        },
        { label: "Max Pressure", values: ["160 bar", "140 bar"] },
        { label: "Control System", values: ["FANUC CNC", "FANUC CNC"] },
      ],
    },
  ],
};

const SINGLE_AXIS_GUN_DRILLING_MACHINE: IMachine = {
  key: "single_axis_gun_drilling_machine",
  name: "Single Axis Gun Drilling Machine",
  description:
    "A compact CNC gun drilling machine with configurable spindles for normal-range drilling diameters.",
  tagline: "Compact, repeatable gun drilling.",
  applications: [],
  solutions: [],
  industries: [],
  tags: ["Gun Drilling", "CNC Controlled", "Single Axis"],
  videoUrl: "https://www.youtube.com/embed/nbsU0v_BU04",
  category: "Gun Drilling Machines",
  ogImageUrl: "",
  features: [
    "Precision spindle system for small-diameter drilling.",
    "CNC-controlled drilling cycles for repeatability.",
    "High-pressure coolant delivery through the gun drill.",
    "Configurable spindle speed and feed parameters.",
    "Customized workholding solutions.",
    "Compact Sized Machine - Less Floor Area Occupied.",
  ],
  tables: [
    {
      columns: ["GDSA-01", "GDSA-02", "GDSA-03", "GDSA-04"],
      rows: [
        {
          label: "Drill Diameter Range",
          values: ["Ø3- Ø8 mm", "Ø4- Ø15 mm", "Ø5- Ø25 mm", "Ø10- Ø32 mm"],
        },
        {
          label: "Spindles",
          values: ["1 / 2", "1 / 2 / 4", "1 / 2 / 4", "1 / 2"],
        },
        {
          label: "Spindle Type",
          values: [
            "BT30 Belt Driven Spindles",
            "BT30 Belt Driven Spindles",
            "BT40 Belt Driven Spindles",
            "BT40 Belt Driven Spindles",
          ],
        },
        {
          label: "Component OD Range",
          values: ["Ø10- Ø35 mm", "Ø15- Ø50 mm", "Ø15- Ø75 mm", "Ø15- Ø100 mm"],
        },
        {
          label: "Spindle Speed",
          values: [
            "Upto 7000 RPM",
            "Upto 5500 RPM",
            "Upto 5000 RPM",
            "Upto 3000 RPM",
          ],
        },
        {
          label: "Component Rotation",
          values: ["300 RPM", "200 RPM", "200 RPM", "100 RPM"],
        },
        {
          label: "Max Pressure",
          values: ["140 bar", "100 bar", "100 bar", "60 bar"],
        },
        {
          label: "Control System",
          values: [
            "DELTA / FANUC",
            "DELTA / FANUC",
            "DELTA / FANUC",
            "DELTA / FANUC",
          ],
        },
      ],
    },
  ],
};

const KNEE_TYPE_GUN_DRILLING_MACHINE: IMachine = {
  key: "knee_type_gun_drilling_machine",
  name: "Knee Type Gun Drilling Machine",
  tagline:
    "Precision deep-hole drilling in large and complex components, including moulds and die blocks.",
  category: "Gun Drilling Machines",
  description:
    "Swaraj manufactures Knee-Type CNC Gun Drilling Machines designed for precision deep-hole drilling in large and complex components, including moulds and die blocks. With a flexible knee-type machine structure, CNC-controlled axes and high-pressure coolant systems, these machines enable accurate horizontal and vertical drilling operations with excellent hole straightness and repeatability.",
  operationsPerformed: ["Brazed Tipped Gun Drills", "Insert Type Gun Drill"],
  solutions: ["Die Mould", "Automotive", "Tool & Die"],
  industries: [
    "Die Mould",
    "Automotive",
    "Tool & Die",
    "General Engineering",
    "Industrial Machinery",
  ],
  tags: [
    "Knee Type",
    "Gun Drilling Machine",
    "CNC",
    "Deep Hole Drilling",
    "Die Mould",
    "Mould Cooling Channels",
  ],
  videoUrl: "",
  ogImageUrl: "",
  images: [],
  features: [
    "Knee-Type Machine Construction: Rigid machine structure designed for machining large and heavy components.",
    "Flexible Drilling Orientation: Supports drilling at different positions and orientations on moulds and die blocks.",
    "Precision Feed System: Servo-driven feed axes for accurate positioning and controlled drilling.",
    "High-Pressure Coolant System: Efficient tool cooling and chip evacuation during deep-hole drilling.",
    "Wide Component Capacity: Suitable for machining large moulds, dies and complex engineering components.",
    "Flexible Workholding: T-slot table for convenient component mounting and positioning.",
    "Programmable Drilling Cycles: CNC-controlled operations for repeatability and reduced operator intervention.",
    "Precision Spindle Assembly: Designed for stable drilling performance and consistent hole quality.",
    "Customized Configurations: Adaptable to different drill diameters, drilling depths, component sizes and production requirements.",
  ],
  applications: [
    "Mould & Die Manufacturing: Deep-hole drilling of cooling channels in moulds and die blocks.",
    "Plastic Injection Moulds: Drilling horizontal and vertical cooling passages.",
    "Die Casting Moulds: Deep-hole drilling for temperature-control and cooling circuits.",
    "Automotive Tooling: Drilling deep holes in large tooling and fixture components.",
    "Large Engineering Components: Precision drilling in heavy and complex workpieces.",
    "Industrial Moulds: Drilling intersecting and angled cooling holes.",
    "General Engineering: Deep-hole drilling in large blocks and machine components.",
    "Tool & Die Industry: Precision drilling of cooling and lubrication passages in dies and tooling.",
  ],
  tables: [],
};
const MULTI_SPINDLE_GUN_DRILLING_MACHINE: IMachine = {
  key: "multi_spindle_gun_drilling_machine",
  name: "Multi Spindle Gun Drilling Machine",
  description:
    "A multi-spindle gun drilling machine designed for accurate, straight drilling of long components with reliable workpiece support and temperature-controlled coolant.",
  tagline: "Accurate, straight drilling with multiple spindles.",
  applications: ["Tubes", "Shafts", "Long Components"],
  solutions: [],
  industries: [],
  tags: ["Gun Drilling", "Multi-Spindle", "Deep Hole Drilling"],
  videoUrl: "https://www.youtube.com/embed/UwujHcN4kCw",
  category: "Gun Drilling Machines",
  ogImageUrl: "",
  features: [
    "Component counter rotation to ensure excellent straightness.",
    "Use of ball screw and servo drives for linear motion.",
    "Multiple tool steady rests to provide solid tube support.",
    "Rotating cone / self-centering chuck for proper part clamping.",
    "High pressure coolant filtration system.",
    "Oil chiller.",
  ],
  tables: [
    {
      columns: ["GDSA-01", "GDSA-02", "GDSA-03"],
      rows: [
        {
          label: "Drill Diameter Range",
          values: ["Ø3- Ø8 mm", "Ø4- Ø15 mm", "Ø5- Ø25 mm"],
        },
        { label: "Spindles", values: ["2 / 4", "2 / 4", "2 / 4"] },
        {
          label: "Spindle Type",
          values: [
            "BT30 Belt Driven Spindles",
            "BT30 Belt Driven Spindles",
            "BT40 Belt Driven Spindles",
          ],
        },
        {
          label: "Component OD Range",
          values: ["Ø10- Ø35 mm", "Ø15- Ø50 mm", "Ø15- Ø75 mm"],
        },
        {
          label: "Spindle Speed",
          values: ["Upto 7000 RPM", "Upto 5500 RPM", "Upto 5000 RPM"],
        },
        {
          label: "Component Rotation",
          values: ["300 RPM", "200 RPM", "200 RPM"],
        },
        { label: "Max Pressure", values: ["140 bar", "100 bar", "100 bar"] },
        {
          label: "Control System",
          values: ["DELTA / FANUC", "DELTA / FANUC", "DELTA / FANUC"],
        },
      ],
    },
  ],
};

// Gas Cylinder Neck Machining

const GAS_CYLINDER_APPLICATIONS = [
  "Gas cylinders Ø232 mm",
  "Gas cylinders Ø316 mm",
  "Gas cylinders Ø356 mm",
  "Gas cylinders Ø406 mm",
  "Cylinder lengths from 600 mm to 2000 mm",
];

const GAS_CYLINDER_HMC_MACHINE: IMachine = {
  key: "gas_cylinder_hmc_machine",
  name: "HMC Type Complete Machining Solution",
  description:
    "A Horizontal Machining Center based complete solution for gas cylinder neck machining. The cylinder is held in a fixture and clamped from the back side, and remains stationary while different tools stored in the tool magazine (Automatic Tool Changer) are called as per requirement.",
  tagline:
    "Complete gas cylinder neck machining on a Horizontal Machining Center.",
  applications: GAS_CYLINDER_APPLICATIONS,
  solutions: [],
  industries: [],
  tags: ["Turning", "Facing", "Drilling", "Reaming", "Threading"],
  videoUrl: "https://www.youtube.com/embed/ApWrepox1uY",
  category: "Gas cylinder solutions",
  ogImageUrl: "",
  features: [
    "Cylinder held in a fixture and clamped from the back side; the cylinder is stationary.",
    "Tools stored in a tool magazine (Automatic Tool Changer) and called as per requirement.",
    "Auto offset measurement with a probe to measure the bore center point exactly before carrying out operations.",
    "Latest FANUC CNC control with ATC, probe and fixture for auto loading.",
    "Auto loading & unloading of cylinders.",
    "Horizontal Machining Center with X, Y and Z axis strokes of 500 mm each and BT 50 spindle.",
    "Conveyor for chip collection and coolant tank at the back side of the machine.",
  ],
};

const GAS_CYLINDER_TURNING_SPM: IMachine = {
  key: "gas_cylinder_turning_spm",
  name: "Turning Type Special Purpose Machine",
  description:
    "A special purpose machine for gas cylinder neck machining where the cylinder is held in a special bearing journal and clamped from the back side. The job rotates while the tools remain stationary.",
  tagline: "Turning, facing and drilling of gas cylinder necks.",
  applications: GAS_CYLINDER_APPLICATIONS,
  solutions: [],
  industries: [],
  tags: ["Turning", "Facing", "Drilling"],
  videoUrl: "https://www.youtube.com/embed/RGFsdCiJveU",
  category: "Gas cylinder",
  ogImageUrl: "",
  features: [
    "Cylinder held in a special bearing journal and clamped from the back side.",
    "Job rotates and tools are stationary.",
    "Linear tooling used for different operations.",
    "Auto offset measurement for neck face sensing.",
    "FANUC CNC system with servo controlled feed axis and spindle servo motor.",
    "Auto loading & unloading of cylinders.",
  ],
};

const GAS_CYLINDER_DRILLING_SPM: IMachine = {
  key: "gas_cylinder_drilling_spm",
  name: "Drilling Special Purpose Machine",
  description:
    "A special purpose drilling machine for gas cylinder necks. The job is held in a fixture and does not rotate, while the tool held in a spindle taper moves forward for drilling.",
  tagline: "Hydraulic drilling of gas cylinder necks.",
  applications: GAS_CYLINDER_APPLICATIONS,
  solutions: [],
  industries: [],
  tags: ["Drilling"],
  videoUrl: "",
  category: "Gas cylinder",
  ogImageUrl: "",
  features: [
    "Job held in a fixture and not rotating.",
    "Tool held in a spindle taper and moves forward for drilling.",
    "Hydraulic drilling slide.",
    "PLC control with hydraulic feed for drilling.",
    "Auto loading & unloading of cylinders.",
  ],
};

// export type IMachinesMap = {
//   [key: string]: IMachine;
// };

export const MACHINES_MAP = {
  drilling_reaming_machine: DRILLING_REAMING_MACHINE,
  micro_gun_drilling_machine: MICRO_GUN_DRILLING_MACHINE,
  knee_type_gun_drilling_machine: KNEE_TYPE_GUN_DRILLING_MACHINE,
  single_axis_gun_drilling_machine: SINGLE_AXIS_GUN_DRILLING_MACHINE,
  multi_spindle_gun_drilling_machine: MULTI_SPINDLE_GUN_DRILLING_MACHINE,
  gas_cylinder_hmc_machine: GAS_CYLINDER_HMC_MACHINE,
  gas_cylinder_turning_spm: GAS_CYLINDER_TURNING_SPM,
  gas_cylinder_drilling_spm: GAS_CYLINDER_DRILLING_SPM,
};
