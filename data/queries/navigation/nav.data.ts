import { INavbarItems } from "@/components/features/navigation/types/navbar.types";

const NAVMENUS: INavbarItems[] = [
  {
    id: "home",
    position: "a",
    label: "Home",
  },
  {
    id: "services",
    position: "a",
    label: "Services",
    child: [
      {
        contentType: "list",
        position: "a",
        span: 1,
        heading: "Development Services",
        children:
          // (await getServicesByCategories("website"))?.map((s) => ({
          //   label: s.name,
          //   href: s.slug,
          // })) ?? [],
          [
            {
              label: "Website Redesign",
              href: "/website-redesign",
            },
            {
              label: "Premium Web Design",
              href: "/premium-web-design",
            },
          ],
      },
      {
        contentType: "list",
        heading: "Branding & Positioning Services",
        position: "b",
        span: 1,
        cta: {
          label: "Explore Optimization Solutions",
          href: "/services/go-to-market",
        },
        children: [
          {
            label: "Strategic Positioning",
            href: "/strategic-positioning",
          },
          {
            label: "Branding",
            href: "/branding",
          },
          {
            label: "GTM Strategy",
            href: "/gtm-strategy",
          },
          {
            label: "Website CRO",
            href: "/website-cro",
          },
          {
            label: "AI for Web",
            href: "/ai-for-web",
          },
        ],
      },
      {
        contentType: "list",
        heading: "Infrastructure",
        position: "c",
        span: 1,
        cta: {
          label: "Explore Optimization Solutions",
          href: "/services/go-to-market",
        },
        children: [
          {
            label: "CMS Infrastructure",
            href: "/cro-agency",
          },
          {
            label: "Custom Applications",
            href: "/custom-applications",
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
    id: "industries",
    position: "b",
    label: "Industries",
    child: [
      {
        contentType: "list",
        position: "ab",
        span: 1,
        heading: "Product-Led Growth",
        children: [
          {
            label: "Fin Tech",
            href: "/saas/fin-tech",
          },
          {
            label: "HR Tech",
            href: "/saas/hr-tech",
          },
          {
            label: "Healthcare Tech",
            href: "/saas/healthcare-tech",
          },
          {
            label: "Customer Tech",
            href: "/saas/customer-tech",
          },
          {
            label: "Innovation Tech",
            href: "/saas/innovation-tech",
          },
          {
            label: "Other SaaS",
            href: "/saas",
          },
        ],
      },
      {
        contentType: "list",
        position: "b",
        span: 1,
        heading: "Sales-Led Growth",
        children: [
          {
            label: "Commercial HVAC",
            href: "/sales-led/HVAC-services",
          },
          {
            label: "B2B Fleet Services",
            href: "/sales-led/fleet-services",
          },
          {
            label: "B2B Legal Services",
            href: "/sales-led/legal-services",
          },
          {
            label: "Marketing & Agency",
            href: "/sales-led/marketing-and-agency",
          },
        ],
      },
      {
        contentType: "list",
        position: "c",
        span: 1,
        heading: "Referral-Led Growth",
        children: [
          {
            label: "Manufacturing Startups",
            href: "/manufacturing-startups",
          },
          {
            label: "(RLG) B2B Startups",
            href: "/leasing-startups",
          },
          {
            label: "B2B Legal Startups",
            href: "/b2b-legal-startups",
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
