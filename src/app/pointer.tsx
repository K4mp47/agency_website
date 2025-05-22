"use client";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import React, { useMemo } from "react";

export const PointerHighlightDemo = React.memo(function PointerHighlightDemo() {
  // Memoize any heavy props or calculations if needed
  const rectangleClassName = useMemo(
    () => "bg-neutral-700 dark:bg-neutral-700 border-neutral-600 dark:border-neutral-600",
    []
  );
  const pointerClassName = useMemo(() => "text-blue-400", []);

  return (
    <div className="py-10 px-4 md:px-0 mx-auto mt-10 text-2xl sm:text-7xl flex flex-col justify-start items-start text-left font-bold text-white bg-black tracking-tight md:py-20 md:mx-[10rem] md:mt-[30rem] md:text-8xl">
      The most made up and asked
      <div className="w-full flex justify-start items-start">
        <PointerHighlight
          rectangleClassName={rectangleClassName}
          pointerClassName={pointerClassName}
        >
          <span className="relative z-10 doto">questions</span>
        </PointerHighlight>
        :
      </div>
    </div>
  );
});
