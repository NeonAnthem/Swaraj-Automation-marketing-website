import { INavbarItems } from "@/components/features/navigation/types/navbar.types";

const NAVMENUS: INavbarItems[] = [
  {
    id: "home",
    position: "a",
    label: "Home",
  },
  {
    id: "products",
    position: "a",
    label: "Products",
    child: [
      {
        contentType: "list",
        position: "a",
        span: 1,
        heading: "By Industries",
        children: [
          {
            label: "Deep hole Gun Drilling Machine",
            href: "#",
          },
          {
            label: "Pellet Die Gun Drilling Machine",
            href: "/premium-web-design",
          },
          {
            label: "Deep Drilling Machine",
            href: "#",
          },
          {
            label: "Countering Machine",
            href: "#",
          },
          {
            label: "Dimpling Machine",
            href: "#",
          },
        ],
      },
      {
        contentType: "list",
        heading: "Branding & Positioning Services",
        position: "b",
        span: 1,
        children: [
          {
            label: "Drilling Reaming Machine",
            href: "/#",
          },
          {
            label: "Special Purpose Drilling Machine",
            href: "/special-purpose-drilling-machine",
          },
          {
            label: "Gantry Machine",
            href: "/gtm-strategy",
          },
          {
            label: "Plano Machine",
            href: "/website-cro",
          },
        ],
      },
      {
        contentType: "list",
        heading: "Infrastructure",
        position: "c",
        span: 1,
        children: [
          {
            label: "Slide Units",
            href: "/services/slide-units",
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
    id: "services",
    position: "b",
    label: "Service",
    child: [
      {
        contentType: "list",
        position: "ab",
        span: 3,
        heading: "Product-Led Growth",
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
