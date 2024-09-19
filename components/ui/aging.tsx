"use client";
import React, { useCallback, useEffect, useState } from "react";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { cn } from "@/lib/utils";

import { Cover } from "@/components/ui/cover";

export const Aging = () => {

    
    const [hovered, setHovered] = useState(false);
    
    const [curAge, setAge] = useState('21');
    const [isAging, setIsAging] = useState<boolean>(false);
    
    const dob = new Date('2003-02-19T00:30:00+05:30').getTime();
    const age = Math.floor((new Date().getTime() - dob)/(1000*365.25*24*60*60));
    
    const startAging = useCallback(() => {
        const age = ((new Date().getTime() - dob)/(1000*60*60*24*365.25)).toString().substring(0,12);
        setAge(age);
        setIsAging(true);
    }, [dob]);

    useEffect(() => {
        if (!isAging)
          setInterval(() => {
            startAging();
        }, 100);
    }, [isAging, startAging]);

    return (
        <h1>
            A {" "}
            <span onMouseEnter={()=>{setHovered(true)}}
        onMouseLeave={()=>{setHovered(false)}}>
                <Cover>
                    {hovered? curAge: age}
                </Cover>
            </span>
            {" "} year old ML enthusiast.
        </h1>
    );
};