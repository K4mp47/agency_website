"use client"; 
import GlobeDemo from "./globe";
import Image from "next/image";
import { NavbarDemo } from "./navbar";
import React, { useRef } from "react";
import { HeroParallaxDemo } from "./Parallax";
import { motion, useInView } from "motion/react";
import { BentoGridDemo } from "./grid";
import { CardSpotlightDemo } from "./cards";
import { PointerHighlightDemo } from "./pointer";
import { AccordionDemo } from "./accordiondemo";


export default function Home() {
  const title = useRef(null);
  const isInView = useInView(title, { once: true, margin: '-10%' });
  const titleWords = "Create Next App".split(" ");

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: i * 0.075,
      },
    }),
  };
  
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
        <div className="flex flex-col gap-4 items-center text-center pt-40 px-4 sm:px-0 mb-8" id="product">
          <h1 ref={title} className="text-4xl sm:text-7xl font-bold tracking-[-.01em]">
            {titleWords.map((word, i) => (
            <span key={i} className="relative overflow-hidden mr-4 inline-block">
              <motion.span
                className="inline-block"
                custom={i}
                variants={animation}
                initial="initial"
                animate={isInView ? "enter" : ""}
              >
                {word}
              </motion.span>
            </span>
          ))}
          </h1>
          <p className="text-sm sm:text-base mt-4 sm:mt-8 px-4 sm:px-[10rem] xl:px-[32rem]">
            Rune offers design engineering as a service. This means we can solve
            your SaaS needs from design 👉 database. Bring the idea 💡 and watch as
            it comes to light.
          </p>
        </div>
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
