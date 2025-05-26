"use client"; 
import GlobeDemo from "./globe";
import Image from "next/image";
import { NavbarDemo } from "./navbar";
import React from "react";
import { HeroParallaxDemo } from "./Parallax";
import { BentoGridDemo } from "./grid";
import { CardSpotlightDemo } from "./cards";
import { PointerHighlightDemo } from "./pointer";
import { AccordionDemo } from "./accordiondemo";
import NextApp from "./nextapp";


export default function Home() {
  
  return (
    <div className="">
      <NavbarDemo />
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
        <GlobeDemo />
        <HeroParallaxDemo />
        <NextApp />
        <BentoGridDemo />
        <div style={{ height: 1 }} />
        <div
          className="w-full rounded-t-4xl overflow-hidden relative"
        >
          <CardSpotlightDemo />
        </div>
      <div className="w-full overflow-hidden relative bg-black">
        <PointerHighlightDemo />
        <div className="mx-4 md:mx-[10rem] flex justify-center items-center text-white mb-[6rem]">
          <AccordionDemo />
        </div>
      </div>
      <footer
        className="row-start-3 flex gap-2 sm:gap-[24px] flex-wrap justify-center bg-black text-white h-[24rem] pb-2 lg:pb-8  items-end"
      >
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
          Privacy Policy
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
          k4mp47
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
          Visit our website →
        </a>
      </footer>
    </div>
  );
}
