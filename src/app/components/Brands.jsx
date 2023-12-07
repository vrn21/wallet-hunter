'use client'
import React, { useState, useEffect } from 'react';
import { Image } from "@nextui-org/react";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Brands() {
    const logolinks = [
        "https://wallethunter.xyz/wp-content/uploads/2023/10/Subway-Logo.png",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/honda.png",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/Swiggy.png",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/Royal-Enfield-Logo-scaled.jpg",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/united-india.png",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/Fabindia.png",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/Mojo-logo.jpg",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/nexa-logo.png",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/recipe-cup.png",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/Maruti-Suzuki-Logo-2000.png",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/Affable_Logo.jpg",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/bristlecone-companyupdate-1644038633100.webp",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/mahindra-logo.png",
        "https://wallethunter.xyz/wp-content/uploads/2023/10/cofi-club.png"
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % logolinks.length);
        }, 1000); 

        return () => clearInterval(interval);
    }, [logolinks.length]);

    return (
        <div className='mt-[100px]'>
            <h1 className='text-lg text-center'>Brands that trust us!</h1>
            <AutoPlaySwipeableViews
                index={activeIndex}
                onChangeIndex={(index) => setActiveIndex(index)}
                className='w-full h-[140px] bg-slate-900 pt-5 pb-5'
            >
                {logolinks.map((link, index) => (
                    <Image key={index} className='h-[100px] inline whitespace-nowrap justify-center' src={link} height={100} width={300} />
                ))}
            </AutoPlaySwipeableViews>
        </div>
    );
}
