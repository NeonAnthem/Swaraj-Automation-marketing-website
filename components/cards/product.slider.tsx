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

const ProductSlider = ({ items }: IProductSlider) => {
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
