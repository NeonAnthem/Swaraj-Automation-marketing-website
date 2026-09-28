"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useNavigationStore } from "../providers/navigation.store.provider";

/** Height of the fixed navbar (h-12) — the trigger line sits at its bottom edge. */
const NAV_HEIGHT = 48;

/**
 * Flips the navbar's dark state whenever a `main section.dark` overlaps the
 * navbar. Uses a single IntersectionObserver whose root is collapsed to a 1px
 * band at the navbar's bottom edge, so nothing runs per scroll frame.
 */
export default function NavigationDarkObserver() {
  const setIsDark = useNavigationStore((s) => s._system.setIsDark);
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let resizeTimer: ReturnType<typeof setTimeout>;
    const intersecting = new Set<Element>();

    const connect = () => {
      observer?.disconnect();
      intersecting.clear();

      const sections = document.querySelectorAll("main section.dark");
      if (sections.length === 0) {
        setIsDark(false);
        return;
      }

      // rootMargin shrinks the viewport root to [NAV_HEIGHT, NAV_HEIGHT + 1].
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) intersecting.add(entry.target);
            else intersecting.delete(entry.target);
          }
          setIsDark(intersecting.size > 0);
        },
        {
          rootMargin: `-${NAV_HEIGHT}px 0px ${
            NAV_HEIGHT + 1 - window.innerHeight
          }px 0px`,
        },
      );
      sections.forEach((section) => observer?.observe(section));
    };

    // rootMargin is resolved in px, so rebuild the observer after resizes.
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(connect, 150);
    };

    connect();
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
    };
  }, [pathname, setIsDark]);

  return null;
}
