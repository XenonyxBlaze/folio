import React from "react";
// import { motion } from "framer-motion";
import { Aging } from "./ui/aging";
import { LinkPreview } from "./ui/link-preview";

// import { cn } from "@/lib/utils";

import data from "@/static/dyno.json";
const status = data.Status;

export const Spotlight = () => {
  return (
    <div className="text-center text-xl lg:text-3xl md:text-2xl sm:text-xl items-center h-[10rem] flex flex-col gap-y-3 justify-center relative border-y-[1px] border-red-900 animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]">
      <Aging />
      <h1>
        Currently:
        <span className="text-purple-700 font-bold ">
          {" { "}
          <LinkPreview
            className="text-red-500 font-bold underline"
            isStatic={!status.work}
            url={status.work ? status.link : "#hire-me"}
            imageSrc={!status.work ? status.img : ""}
          >
            {status.work
              ? status.role + " at " + status.company
              : "Available for work"}
          </LinkPreview>
          {" }"}
        </span>
      </h1>
    </div>
  );
};
