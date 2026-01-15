"use client";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faHeart } from "@fortawesome/free-solid-svg-icons";

import {
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandSass,
    IconBrandPhp,
    IconBrandJavascript,
    IconBrandTypescript,
    IconBrandNodejs,
    IconBrandReact,
    IconBrandNextjs,
    IconBrandBootstrap,
    IconBrandTailwind,
    IconBrandFramerMotion,
    IconBrandDjango,
    
    IconBrandMongodb,
    IconBrandMysql,


    IconBrandAmongUs,
    
    IconBrandPython,
    
    IconBrandCpp,
    IconBrandCSharp,
    IconCoffee,

    IconBrandGit,
    IconBrandGithub,
    IconBrandDocker,
    
    IconBrandAdobePhotoshop,
    IconBrandBlender,
    IconBrandFigma,
    
    IconBrandAndroid,
    IconBrandKotlin,
    IconBrandFirebase,
    IconBrandFlutter,
    IconBrandGolang,

    
    IconBrandD3,
    IconBrandGraphql,

    
    IconBrandDebian,
    IconBrandPowershell

  } from "@tabler/icons-react";

import { FloatingDock } from "@/components/ui/floating-dock";
// import { title } from "process";

const Card = (
    {
        posArg,
        cardType
    }: {
        posArg: string,
        cardType: string
    }) => {

    
    const cardStyle = "absolute z-[-2] w-[100%] h-[100%] bg-[size:100%_29px] bg-[linear-gradient(var(--red-300),var(--red-300)1px,var(--red-500)1px,var(--red-500)28px)] dark:bg-[linear-gradient(var(--red-800),var(--red-800)1px,var(--red-950)1px,var(--red-950)28px)] animate-cardAnim overflow-hidden rounded-lg opacity-[0.5]";

    return (
        <div className={cn("absolute w-[18%] aspect-[10/16] border-red-500 border rounded rounded-lg text-red-400 flex flex-col",posArg)}>
            <div className={cn("",cardStyle)}/>

            <div className="basis-1/2 flex justify-start items-start p-4 gap-x-4">
                {cardType}
                <FontAwesomeIcon icon={cardType=="J"?faDiamond:faHeart}></FontAwesomeIcon>
            </div>
            
            <div className="basis-1/2 flex justify-start items-start p-4 rotate-180 gap-x-4">
                {cardType}
                <FontAwesomeIcon icon={cardType=="J"?faDiamond:faHeart}></FontAwesomeIcon>
            </div>

        </div>
    );
}

export function FloatingDockDemo() {
    const links = [
      {
        title: "HTML5",
        icon: <IconBrandHtml5 size={24} />,
        href: "/",
      },
      {
        title: "CSS3",
        icon: <IconBrandCss3 size={24} />,
        href: "/",
      },
      {
        title: "Sass",
        icon: <IconBrandSass size={24} />,
        href: "/",
      },
      {
        title: "PHP",
        icon: <IconBrandPhp size={24} />,
        href: "/",
      },
      {
        title: "JavaScript",
        icon: <IconBrandJavascript size={24} />,
        href: "/",
      },
      {
        title: "TypeScript",
        icon: <IconBrandTypescript size={24} />,
        href: "/",
      },
      {
        title: "Node.js",
        icon: <IconBrandNodejs size={24} />,
        href: "/",
      },
      {
        title: "React",
        icon: <IconBrandReact size={24} />,
        href: "/",
      },
        {title: "Django",icon: <IconBrandDjango size={24} />,href: "/",},
      {title: "Next.js",icon: <IconBrandNextjs size={24} />,href: "/",},
        {title: "Bootstrap",icon: <IconBrandBootstrap size={24} />,href: "/",},
        {title: "Tailwind CSS",icon: <IconBrandTailwind size={24} />,href: "/",},
        {title: "Framer Motion",icon: <IconBrandFramerMotion size={24} />,href: "/",},
        {title: "MongoDB",icon: <IconBrandMongodb size={24} />,href: "/",},
        {title: "MySQL",icon: <IconBrandMysql size={24} />,href: "/",},
        {title: "SUSSY",icon: <IconBrandAmongUs size={24} />,href: "/",},
        {title: "Python",icon: <IconBrandPython size={24} />,href: "/",},
        {title: "C++",icon: <IconBrandCpp size={24} />,href: "/",},
        {title: "C#",icon: <IconBrandCSharp size={24} />,href: "/",},
        {title: "Java",icon: <IconCoffee size={24} />,href: "/",},
        {title: "Git",icon: <IconBrandGit size={24} />,href: "/",},
        {title: "GitHub",icon: <IconBrandGithub size={24} />,href: "/",},
        {title: "Docker",icon: <IconBrandDocker size={24} />,href: "/",},
        // {title: "NPM",icon: <IconBrandNpm size={24} />,href: "/",},
        {title: "Android",icon: <IconBrandAndroid size={24} />,href: "/",},
        {title: "Kotlin",icon: <IconBrandKotlin size={24} />,href: "/",},
        {title: "Firebase",icon: <IconBrandFirebase size={24} />,href: "/",},
        {title: "Flutter",icon: <IconBrandFlutter size={24} />,href: "/",},
        {title: "Golang",icon: <IconBrandGolang size={24} />,href: "/",},
        {title: "D3",icon: <IconBrandD3 size={24} />,href: "/",},
        {title: "GraphQL",icon: <IconBrandGraphql size={24} />,href: "/",},
        {title: "Debian",icon: <IconBrandDebian size={24} />,href: "/",},
        {title: "Powershell",icon: <IconBrandPowershell size={24} />,href: "/",},
        {title: "Adobe Photoshop",icon: <IconBrandAdobePhotoshop size={24} />,href: "/",},
        {title: "Blender",icon: <IconBrandBlender size={24} />,href: "/",},
        {title: "Figma",icon: <IconBrandFigma size={24} />,href: "/",},

    ];
    return (
      <div className="flex items-center justify-center h-full w-full">
        <FloatingDock
          // only for demo, remove for production
        //   desktopClassName="bg-gray-50 dark:bg-neutral-900 rounded-2xl"
          items={links}
        />
      </div>
    );
  }

export const Toolbox = ({ unfont }: { unfont: string }) => {
    const jace = "text-2xl lg:text-6xl md:text-3xl sm:text-2xl font-bold text-red-800 dark:text-red-500";
    const jacef = cn(jace, unfont);

    return (
        <div className=" h-screen text-center text-xl lg:text-3xl md:text-2xl sm:text-xl items-center flex flex-col justify-center relative p-5">
            
            <div className="bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 absolute inset-0 z-[-50]" />
            
            
            <div className="flex grow-0 w-full h-[15rem] flex-col sm:flex-col md:flex-col lg:flex-row">

                <div className="flex justify-center items-center lg:justify-end justify-center items-end lg:items-start h-full w-full basis-1/2">
                    <h1 className="">A <span className={jacef}>JACK</span> of all <span className="dark:text-purple-700">[a lot]</span></h1>
                </div>

                <div className="flex justify-center items-center lg:justify-start justify-center items-start lg:items-center h-full w-full basis-1/2">
                    <h1 className="">Aspiring to <span className={jacef}>MASTER</span> some </h1>
                </div>
            </div>
            
            <div className="flex grow-1 h-full w-full lg:flex-row md:flex-row sm:flex-col flex-col">
                
                <div className={cn("basis-2/5 h-full justify-center items-center lg:flex md:flex sm:hidden hidden",unfont)}>
                    <Card posArg="-translate-x-10 sm:-translate-x-10 md:-translate-x-24 lg:-translate-x-24 lg:translate-y-10 rotate-[-9deg]" cardType="J" />
                    <Card posArg="translate-x-10 sm:translate-x-10 md:translate-x-16 lg:translate-x-16 lg:-translate-y-6 rotate-[195deg]" cardType="A" />
                </div>
                
                
                <div className="flex flex-col basis-3/5 grow h-full justify-center text-xl pt-5">
                    <h1>Highly versatile skillset with experience in a wide variety of technologies </h1>

                    {FloatingDockDemo()}
                    
                </div>
            </div>
        </div>
    );
}