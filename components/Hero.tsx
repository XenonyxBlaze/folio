"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
// import '@/static/js/agescript.js';

export function HeroHighlightDemo({ unfont }: { unfont: string }) {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className={cn(unfont," font-bold text-red-800 dark:text-red-500 max-w-4xl leading-relaxed lg:leading-snug text-left mx-auto")}
      >
        <span className="text-4xl lg:text-8xl md:text-6xl sm:text-4xl ">
          X e n o n y x
        </span><br />
        <Highlight className="text-xl lg:text-4xl md:text-2xl sm:text-xl text-white dark:text-black">
          Developer
        </Highlight>
      </motion.h1>
      
    </HeroHighlight>
  );
}
