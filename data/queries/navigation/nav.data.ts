import { INavbarItems } from "@/components/features/navigation/types/navbar.types";

const NAVMENUS: INavbarItems[] = [
  {
    id: "home",
    position: "a",
    label: "Home",
    href: "/",
  },
  {
    id: "machines",
    position: "a",
    label: "Machines",
    child: [
      {
        contentType: "list",
        position: "a",
        span: 1,
        heading: "Category A",
        children: [
          {
            label: "Deep hole Gun Drilling Machine",
            href: "/machines/deep-hole-gun-drilling-machine",
          },
          {
            label: "Pellet Die Gun Drilling Machine",
            href: "/machines/pellet-die-gun-drilling-machine",
          },
          {
            label: "Deep Drilling Machine",
            href: "/machines/deep-drilling-machine",
          },
          {
            label: "Countering Machine",
            href: "/machines/countering-machine",
          },
          {
            label: "Dimpling Machine",
            href: "/machines/dimpling-machine",
          },
        ],
      },
      {
        contentType: "list",
        heading: "Category B",
        position: "b",
        span: 1,
        children: [
          {
            label: "Drilling Reaming Machine",
            href: "/machines/drilling-reaming-machine",
          },
          {
            label: "Special Purpose Drilling Machine",
            href: "/machines/special-purpose-drilling-machine",
          },
          {
            label: "Gantry Machine",
            href: "/machines/gantry-machine",
          },
          {
            label: "Plano Machine",
            href: "/machines/plano-machine",
          },
        ],
      },
      {
        contentType: "list",
        heading: "Category C",
        position: "c",
        span: 1,
        children: [
          {
            label: "Slide Units",
            href: "/machines/slide-units",
          },
        ],
      },
      // Image Content For services
      // {
      //   contentType: "news",
      //   position: "d",
      //   span: 1,
      //   title: "Website Redesign",
      //   description:
      //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis fugit nisi atque veritatis modi totam corrupti est consectetur explicabo cum natus inventore deleniti, obcaecati quia odit laborum? Eos ipsa vero consequuntur qui?",
      //   logo: null,
      //   cta: {
      //     label: "Check it out",
      //     href: "/website-redesign",
      //   },
      // },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    position: "b",
    child: [],
  },
  {
    id: "services",
    position: "b",
    label: "Service",
    child: [
      {
        contentType: "list",
        position: "ab",
        span: 3,
        heading: "Core Services",
        children: [
          {
            label: "Retrofitting & Reconditioning",
            href: "/services/retrofitting-reconditioning",
          },
          {
            label: "CNC Upgradation",
            href: "/services/cnc-upgradation",
          },
          {
            label: "Gun Drilling Services",
            href: "/services/gun-drilling-services",
          },
        ],
      },
    ],
  },
];

export default NAVMENUS;
