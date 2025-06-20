import React, { useEffect, useRef } from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function CardSpotlightDemo({ onInView }: { onInView?: (inView: boolean) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!onInView) return;
    const node = ref.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        onInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [onInView]);

  return (
    <div ref={ref} className="flex flex-wrap gap-4 w-full justify-center bg-black pt-[24rem] mt-[8rem] px-4 rounded-t-4xl pb-8" id="pricing">
      <h2 className="w-full text-center text-4xl sm:text-7xl font-extrabold text-white mb-12">
        Our Plans
      </h2>
      <CardSpotlight className="h-120 w-full sm:w-80 md:w-120 bg-white" color="#ffffff">
        <p className="text-lg sm:text-xl font-bold relative z-20 mt-2 text-black">
          Standard 
        </p>
        <div className="text-neutral-700 mt-4 relative z-20">
          <p className="text-6xl font-bold text-black">$1000</p>
          <ul className="list-none mt-4 text-lg">
            <Step title="Enter your email address" />
            <Step title="Create a strong password" />
            <Step title="Set up two-factor authentication" />
            <NoStep title="Verify your identity" />
          </ul>
        </div>
        <p className="text-neutral-700 mt-28 relative z-20 text-sm">
          Ensuring your account is properly secured helps protect your personal
          information and data.
        </p>
      </CardSpotlight>
      <CardSpotlight className="h-120 w-full sm:w-80 md:w-120 bg-white" color="#ffffff">
        <p className="text-lg sm:text-xl font-black relative z-20 mt-2 text-black">
          Globe +
        </p>
        <div className="text-neutral-700 mt-4 relative z-20">
          <p className="text-6xl font-bold text-black">$9000</p>
          <ul className="list-none mt-4 text-lg">
            <Step title="Enter your email address" />
            <Step title="Create a strong password" />
            <Step title="Set up two-factor authentication" />
            <Step title="Verify your identity" />
          </ul>
        </div>
        <p className="text-neutral-700 mt-28 relative z-20 text-sm">
          Ensuring your account is properly secured helps protect your personal
          information and data.
        </p>
      </CardSpotlight>
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-neutral-700">{title}</p>
    </li>
  );
};

const NoStep = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <UncheckIcon />
      <p className="text-neutral-700">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

const UncheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-neutral-400 bg-neutral-400 rounded-sm mt-1 shrink-0"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </svg>
  );
};
