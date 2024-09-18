"use client";
import React, { useCallback, useEffect, useState } from "react";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { cn } from "@/lib/utils";

import { Cover } from "@/components/ui/cover";

export const Aging = () => {

    const [curAge, setAge] = useState('21');
    const [isAging, setIsAging] = useState<boolean>(false);

    const dob = new Date('2003-02-19T00:30:00+05:30').toString();
    
    const startAging = useCallback(() => {
        const age = ((new Date().getTime() - new Date(dob).getTime())/(1000*60*60*24*365.25)).toString().substring(0,12);
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
        <Cover> {curAge} </Cover>
    );
};