"use client";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  desc: string;
  img: string;
  link: string;
};

import * as projects from "@/static/dyno.json";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href="/" className="py-[1px]">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <div className="grow">
          
        </div>
        <Link
          className=""
          href="/static/Aarav_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setActive(null)}
        >
          <button className="relative inline-flex overflow-hidden rounded-full py-[2px] px-[4px] ">
            <span className="absolute inset-[-1000%] animate-[spin_1s_linear_infinite]
            bg-[conic-gradient(from_90deg_at_50%_50%,#7F1D1D_0%,#4c1d95_50%,#7F1D1D_100%)] 
            dark:bg-[conic-gradient(from_90deg_at_50%_50%,#ef4444_0%,#6366f1_50%,#ef4444_100%)]"/>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-black px-3 py-1 text-sm font-medium text-black dark:text-white hover:text-red-500 backdrop-blur-3xl">
              Download CV
            </span>
          </button>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className=" text-sm grid grid-cols-1 gap-10 p-4">
            {projects.Projects.map((project: Project) => (
              <ProductItem
                key={project.title}
                title={project.title}
                description={project.desc}
                src={project.img}
                href={project.link}
              />
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Me">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="mailto:aarav.rajput2003@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> Drop a mail
            </HoveredLink>
            <HoveredLink href="https://linkedin.com/in/aaravrajput">
              <FontAwesomeIcon icon={faLinkedin} /> Connect on LinkedIn
            </HoveredLink>
            <HoveredLink href="https://github.com/XenonyxBlaze">
              <FontAwesomeIcon icon={faGithub} /> Check out my GitHub
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
