"use client";
import React from "react";
import { HoveredLink, Menu } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo({ isHidden }: { isHidden?: boolean }) {
  return (
    <Navbar className="top-4" isHidden={isHidden} />
  );
}

function Navbar({
  className,
  isHidden = null,
}: {
  className?: string;
  isHidden?: boolean | null;
}) {
  return (
    <div
      className={cn(
        "fixed flex justify-center w-full top-0 left-0 z-50 transition-transform duration-300",
        isHidden ? "-translate-y-full" : "translate-y-0",
        className
      )}
      style={{ pointerEvents: isHidden ? "none" : "auto" }}
    >
      <Menu isHidden={isHidden} setActive={() => {}}>
        <HoveredLink
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("#services");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <div className="doto">Services</div>
        </HoveredLink>
        <HoveredLink
          href="#product"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("#product");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <div className="doto">Product</div>
        </HoveredLink>
        <HoveredLink
          href="#pricing"
          onClick={(e) => {
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
