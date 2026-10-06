"use client";

import { NavBar, NavGroup } from "@/components/ui/nav-items";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { useNavigationStore } from "../providers/navigation.store.provider";
import NavigationDarkObserver from "./dark.observer.navigation";
import NavigationCTA from "./items.navigation/cta.navigation";
import NavigationItems from "./items.navigation/items.navigation";
import NavigationLogo from "./logo.navigation";

export default function NavigationBar() {
  const isDark = useNavigationStore((s) => s._system.isDark);
  const activeChildId = useNavigationStore((s) => s._system.activeChildId);
  const isMobileOpen = useNavigationStore((s) => s._system.isMobileOpen);

  return (
    <>
      <Suspense fallback={null}>
        <NavigationDarkObserver />
      </Suspense>
      {/* Placeholder Navigation bar */}
      {/* <div className={"h-12 bg-transparent"}></div> */}
      {/* end Placeholder Navigation bar */}
      <NavBar
        className={cn("bg-transparent", {
          dark: isDark || activeChildId || isMobileOpen,
          "bg-background": activeChildId,
        })}
      >
        <NavigationLogo />
        {/* Nav Links Group */}
        <NavGroup className="max-sm:gap-1">
          {/* Navigation Items Desktop & Mobile */}
          <NavigationItems />
          {/* end Navigation Items Desktop & Mobile */}

          {/* CTA Group */}
          <NavGroup className="gap-4">
            <NavigationCTA />
          </NavGroup>
          {/* End CTA Group */}
        </NavGroup>
        {/* end Nav Links Group */}
      </NavBar>
    </>
  );
}
