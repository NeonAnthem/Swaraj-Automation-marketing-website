"use client";

import type { IMachineImage } from "@/data/static/machines/machines.types";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FULL_WIDTH_PX = 96;
const COLLAPSED_WIDTH_PX = 32;
const GAP_PX = 2;
const MARGIN_PX = 2;

interface IThumbnailsProps {
  images: IMachineImage[];
  index: number;
  setIndex: (index: number) => void;
}

function Thumbnails({ images, index, setIndex }: IThumbnailsProps) {
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className="overflow-x-auto mx-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="flex gap-0.5 h-16 pb-2" style={{ width: "fit-content" }}>
        {images.map((image, i) => (
          <motion.button
            key={`${image.url}-${i}`}
            type="button"
            aria-label={`Show image ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? "active" : "inactive"}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative shrink-0 h-full overflow-hidden rounded-md transition-opacity ${
              i === index ? "opacity-100" : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes={`${FULL_WIDTH_PX}px`}
              className="object-cover pointer-events-none select-none"
              draggable={false}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

interface IThumbnailsCarouselProps {
  images?: IMachineImage[];
}

export default function ThumbnailsCarousel({
  images = [],
}: IThumbnailsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  if (images.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3">
        {/* Main Carousel */}
        <div
          className="relative overflow-hidden rounded-2xl border border-border bg-muted"
          ref={containerRef}
        >
          <motion.div
            className="flex"
            drag="x"
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;

              // If fast swipe, use velocity
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              }
              // Otherwise use offset threshold (30% of container width)
              else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              // Clamp index
              newIndex = Math.max(0, Math.min(images.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {images.map((image, i) => (
              <div
                key={`${image.url}-${i}`}
                className="relative shrink-0 w-full aspect-4/3"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Previous Button */}
          <motion.button
            type="button"
            aria-label="Previous image"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-3 text-black top-1/2 -translate-y-1/2 size-9 rounded-full flex items-center justify-center shadow-md transition-transform z-10
              ${
                index === 0
                  ? "bg-white/50 opacity-40 cursor-not-allowed"
                  : "bg-white hover:scale-110 hover:opacity-100 opacity-80"
              }`}
          >
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            type="button"
            aria-label="Next image"
            disabled={index === images.length - 1}
            onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}
            className={`absolute text-black right-3 top-1/2 -translate-y-1/2 size-9 rounded-full flex items-center justify-center shadow-md transition-transform z-10
              ${
                index === images.length - 1
                  ? "bg-white/50 opacity-40 cursor-not-allowed"
                  : "bg-white hover:scale-110 hover:opacity-100 opacity-80"
              }`}
          >
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {/* Image Counter */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
            {index + 1} / {images.length}
          </div>
        </div>

        <Thumbnails images={images} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}
