import { useRef } from "react";
import { motion, useInView } from "motion/react";


export default function NextApp() {

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
    <div className="flex flex-col gap-4 items-center text-center pt-40 px-4 sm:px-0 mb-8" id="services">
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
  );
}