"use client";
import React from "react";
import { HoveredLink, Menu } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo({isHidden}: {isHidden: boolean}) {
  return (
    <div className="relative flex items-center justify-center w-full text-black">
      <Navbar className="top-4" isHidden={isHidden} />
    </div>
  );
}

function Navbar({ className, isHidden = null }: { className?: string; isHidden?: boolean | null }) {
  
  return (
    <div
      className={cn("fixed flex justify-center w-full top-10 inset-x-0 z-50", className)}
    >
      <Menu isHidden={isHidden} setActive={() => {}}>
        <HoveredLink
          href="#pricing"
          onClick={e => {
            e.preventDefault();
            const el = document.querySelector("#pricing");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <div className="doto">Services</div>
        </HoveredLink>
        <HoveredLink
          href="#product"
          onClick={e => {
            e.preventDefault();
            const el = document.querySelector("#pricing");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <div className="doto">Product</div>
        </HoveredLink>
        <HoveredLink
          href="#pricing"
          onClick={e => {
            e.preventDefault();
            const el = document.querySelector("#pricing");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <div className="doto">Pricing</div>
        </HoveredLink>
      </Menu>
    </div>
  );
}
