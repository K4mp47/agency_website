"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { SiCashapp } from "react-icons/si";
import { FaCodeBranch } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";


export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Product",
      link: "#product",
      icon: <FaCodeBranch className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: <GrServices className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Pricing",
      link: "#pricing",
      icon: (
        <SiCashapp className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

