"use client";
import Image from "next/image";
import GlobeDemo from "./globe";
import { NavbarDemo } from "./navbar";
import { CardSpotlightDemo } from "./cards";
import { BentoGridDemo } from "./grid";
import React, { useEffect, useRef, useState } from "react";
import { PointerHighlightDemo } from "./pointer";

export default function Home() {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const cardSpotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavHidden(entry.isIntersecting); // Hide nav when CardSpotlightDemo is visible
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const currentRef = cardSpotlightRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="">
      <main className="flex flex-col sm:gap-[32px] row-start-2 justify-between w-full">
        <div className="z-40 top-10 sm:top-8 left-5 sm:left-8 hidden md:block fixed">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-black"
          >
            <path d="M12 0L24 24L0 24Z" fill="currentColor" />
          </svg>
        </div>
        {/* Pass isNavHidden to NavbarDemo */}
        <NavbarDemo isHidden={isNavHidden} />
        <GlobeDemo />
        <div className="flex flex-col gap-4 items-center text-center px-4 sm:px-0">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-[-.01em]">
            Create Next App
          </h1>
          <p className="text-sm sm:text-base mt-4 sm:mt-8 px-4 sm:px-[30rem]">
            Rune offers design engineering as a service. This means we can solve
            your SaaS needs from design 👉 database. Bring the idea 💡 and watch as
            it comes to light.
          </p>
        </div>
        <BentoGridDemo />
        {/* Add ref to CardSpotlightDemo */}
        <div
          className="w-full rounded-t-4xl overflow-hidden relative"
        >
          <CardSpotlightDemo />
        </div>
      </main>
      <div
          ref={cardSpotlightRef}
          className="w-full overflow-hidden relative bg-black"
        >
          <PointerHighlightDemo />
        </div>
      <footer
         
        className="row-start-3 flex gap-4 sm:gap-[24px] flex-wrap justify-center bg-black text-white h-[40rem] items-end">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
