"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import { Logo } from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "dark:bg-[#1f1f1f] fixed top-0 z-50 flex w-full px-6 py-4 items-center bg-background transition-all",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};
