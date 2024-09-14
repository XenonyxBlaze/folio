"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-0" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
        className={cn("fixed top-10 inset-x-0 mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                
                <div className="float-start">
                    <HoveredLink href="/" onMouseEnter={()=>setActive(null)} >Home</HoveredLink>
                </div>
                    <HoveredLink href="Aarav_CV.pdf"onMouseEnter={()=>setActive(null)}>Download CV</HoveredLink>
                
                    <div className="float-end">

                    <MenuItem setActive={setActive} active={active} item="Contact Me">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Send a mail</HoveredLink>
                            <HoveredLink href="/individual">Connect</HoveredLink>
                            <HoveredLink href="/team">Repositories</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                    </div>

                <div className="float-end">

                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="  text-sm grid grid-cols-1 gap-10 p-4">
                        <ProductItem
                        title="Attack-ML"
                        href="https://github.com/oatkrs/forepics/"
                        src="https://assets.aceternity.com/demos/algochurn.webp"
                        description="Machine learning model for detecting network attacks in real-time."
                        />
                        <ProductItem
                        title="Portfolio"
                        href="https://github.com/xenonyxblaze/folio"
                        src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                        description="You are looking at it right now."
                        />
                        <ProductItem
                        title="Gulag 2"
                        href="https://github.com/xenonyxblaze/GULAG_2.0"
                        src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                        description="MySQL but ~GUI~"
                        />
                        
                    </div>
                </MenuItem>
                </div>
                
            </Menu>
        </div>
    );
}
