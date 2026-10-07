"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { Button } from "../ui/button";

export interface IProductSliderItem {
  id: string;
  type?: "cta";
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface IProductSlider {
  title?: string;
  description?: string;
  items: IProductSliderItem[];
}

const data = [
  {
    id: "shadcn-ui",
    title: "shadcn/ui: Building a Modern Component Library",
    description:
      "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
    href: "https://ui.shadcn.com",
    image:
      "https://cdn.21st.dev/assets/mirror/4e/4eb8a143da7e1e0cc7b6005fb7d61fc853322b90f24e29726de26fb7c41357ee.jpg",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS: The Utility-First Revolution",
    description:
      "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
    href: "https://tailwindcss.com",
    image:
      "https://cdn.21st.dev/assets/mirror/57/57bb4cd63c5b1957b3799f5f782fba3f1671d0a3a02349eee69a2b62b59bb258.jpg",
  },
  {
    id: "astro",
    title: "Astro: The All-in-One Web Framework",
    description:
      "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
    href: "https://astro.build",
    image:
      "https://cdn.21st.dev/assets/mirror/c6/c62ec1d11df3109a5c2ed7862993577747f114b94f8674f1e4133634e5ea72aa.jpg",
  },
  {
    id: "react",
    title: "React: Pioneering Component-Based UI",
    description:
      "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
    href: "https://react.dev",
    image:
      "https://cdn.21st.dev/assets/mirror/4d/4d713056e68142cabf897098f3204cf4e3205b9030691a5cdcfe4c66e971cee1.jpg",
  },
  {
    id: "nextjs",
    title: "Next.js: The React Framework for Production",
    description:
      "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
    href: "https://nextjs.org",
    image:
      "https://cdn.21st.dev/assets/mirror/ce/ce3f6a67c5581a8723f56c8956303da2c096b12647c81eaef42cdd002cb4561e.jpg",
  },
];

const ProductSlider = ({ items = data }: IProductSlider) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <>
      <div className="container mx-auto">
        <div className="mb-2 flex items-end justify-between"></div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-100 pl-1 lg:max-w-100"
              >
                <Link
                  href={item.href}
                  className="group flex flex-col lg:flex-row gap-2 bg-white p-1.5 rounded-xl"
                >
                  {/* Image Container */}
                  <div className="group relative h-full min-h-110 max-w-full overflow-hidden rounded-lg md:aspect-5/4 lg:aspect-video shadow p-2">
                    {item.type === "cta" ? (
                      <div className="absolute inset-0 flex flex-col items-start justify-end bg-[url(/assets/backgrounds/horizontal-bg.webp)] bg-cover p-4">
                        <div className="mb-8 space-y-2">
                          <h3 className="text-2xl text-white font-medium">
                            {item.title}
                          </h3>
                          <p className="text-white/80 leading-[1.2] tracking-tighter">
                            {item.description}
                          </p>
                        </div>
                        <Button className="" variant="secondary">
                          Explore Products <IconArrowUpRight />
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <div className="relative rounded-sm overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={640}
                            height={360}
                            className="w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-[inherit]"
                          />
                          <div className="absolute inset-0 h-full bg-linear from-black/30 to-transparent rounded-[inherit]" />
                        </div>
                        {/* Block */}
                        <div className="p-2 py-4 space-y-4">
                          <h3 className="text-2xl font-medium text-foreground tracking-tighter">
                            {item.title}
                          </h3>
                          <p className="text-base tracking-tight leading-[1.2] text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        {/* end Block */}
                        {/* CTA */}
                        <div>
                          <Button>Learn More</Button>
                        </div>
                        {/* end CTA */}
                      </div>
                    )}
                  </div>
                  {/* end Image Container */}
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Controls */}
        <div className={"flex items-center gap-2 mx-auto w-max mt-4"}>
          <div className=" flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-foreground" : "bg-foreground/20"
                }`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="hidden shrink-0 gap-1 md:flex p-1 *:bg-background *:rounded-sm *:border *:border-zinc-200">
            <Button
              size="icon-sm"
              variant="secondary"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <IconArrowLeft className="size-4" />
            </Button>
            <Button
              size="icon-sm"
              variant="secondary"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <IconArrowRight className="size-4" />
            </Button>
          </div>
        </div>
        {/* end Controls */}
      </div>
    </>
  );
};

export { ProductSlider };
