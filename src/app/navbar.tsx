"use client";
import React from "react";
import { HoveredLink, Menu } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo({isHidden}: {isHidden: boolean}) {
  return (
    <div className="relative flex items-center justify-center w-full">
      <Navbar className="top-4" isHidden={isHidden} />
    </div>
  );
}

function Navbar({ className, isHidden = null }: { className?: string; isHidden?: boolean | null }) {
  
  return (
    <div
      className={cn("fixed flex justify-center w-full top-10 inset-x-0 z-50", className)}
    >
      <Menu isHidden={isHidden}>
        <HoveredLink href="#pricing" >
          <div className="doto">Services</div>
        </HoveredLink>
        <HoveredLink href="#pricing">
          <div className="doto">Product</div>
        </HoveredLink>
        <HoveredLink href="#pricing">
          <div className="doto">Pricing</div>
        </HoveredLink>
      </Menu>
    </div>
  );
}
