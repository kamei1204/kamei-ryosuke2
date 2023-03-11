import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircules";

type Props = {};

const Hero = () => {
    const [text, count] = useTypewriter({
    words: ["name is Ryosuke Kamei", "Loves-BullDog.tsx ", "<LovesToCodeMore/>"],
    loop: true,
    delaySpeed: 2000,
    });

    return (
        <div className="flex flex-col h-screen items-center justify-center space-y-8 text-center overflow-hidden">
            <BackGroundCircles />
            <img src="/sunny.png" alt=""  className="rounded-full relative mx-auto h-36 w-36  object-cover" />

            <div className="z-20">
                <h2 className="text-sm text-gray-400 pb-2 tracking-[15px]">
                    Cooks & Engineer Junior
                </h2>
                <h1 className="text-3xl lg:text-6xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#F7AB0A" />
                </h1>
            
                <div className="mt-5 z-30">
                    <Link href="#about">
                        <button className="px-4 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A] hover:text-[#F7AB0A] cursor-pointer">about</button>
                    </Link>
                    <Link href="#experience">
                        <button className="px-4 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A] hover:text-[#F7AB0A] cursor-pointer">experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="px-4 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A] hover:text-[#F7AB0A] cursor-pointer">skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="px-4 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A] hover:text-[#F7AB0A] cursor-pointer">projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default Hero;
