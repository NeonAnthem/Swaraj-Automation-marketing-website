import { INavbarItems } from "@/components/features/navigation/types/navbar.types";

const NAVMENUS: INavbarItems[] = [
  {
    id: "home",
    position: "a",
    label: "Home",
  },
  {
    id: "about",
    position: "a",
    label: "About us",
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
        children:
          // (await getServicesByCategories("website"))?.map((s) => ({
          //   label: s.name,
          //   href: s.slug,
          // })) ?? [],
          [
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
            {
              label: "Slide Units",
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
          {
            label: "Electrical Drivers",
            href: "/#",
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
            label: "VFD",
            href: "/cro-agency",
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
  {
    id: "regions",
    position: "c",
    label: "Regions",
    child: [
      {
        contentType: "list",
        position: "a",
        span: 3,
        heading: "Regions",
        children: [
          {
            label: "United States",
            href: "/US",
          },
          {
            label: "India",
            href: "/in",
          },
          {
            label: "Others",
            href: "/ot",
          },
        ],
      },
    ],
  },
  {
    id: "blogs",
    position: "d",
    label: "Resources",
    href: "/blogs",
    child: [
      {
        contentType: "banner",
        position: "a",
        span: 2,
        tag: "cms:blogs:0",
      },
      {
        contentType: "list",
        heading: "Resources",
        position: "b",
        span: 1,
        children: [
          {
            label: "Free Guide to GTM",
            href: "#",
            description: "Free guide to GTM Strategy",
          },
          {
            label: "Free Guide to Website Redesign",
            href: "#",
            description: "Free guide to GTM Strategy",
          },
          {
            label: "Free Guide to AI for Web",
            href: "#",
            description: "Free guide to GTM Strategy",
          },
        ],
      },
    ],
  },
];

export default NAVMENUS;
