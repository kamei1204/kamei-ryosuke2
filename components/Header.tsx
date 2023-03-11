import React from "react";
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link";

const Header = () => {
    return (
    <header className="flex sticky top-0 items-start justify-between max-w-7xl mx-auto z-10 xl:items-center p-10">
        
        <motion.div
        initial={{
            x      :-500,
            opacity: 0,
            scale  : 0.5,
        }}
        animate={{
            x      :0,
            opacity: 1,
            scale  : 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className="flex flex-row items-center">
            {/* socialIcons */}
            <SocialIcon 
            url="https://twitter.com/kame_sunny" 
            fgColor="gray"
            bgColor="transparent"/>
            {/* socialIcons */}
            <SocialIcon 
            url="https://twitter.com/kame_sunny" 
            fgColor="gray"
            bgColor="transparent"/>
            {/* socialIcons */}
            <SocialIcon 
            url="https://twitter.com/kame_sunny" 
            fgColor="gray"
            bgColor="transparent"/>
        </motion.div>
        <Link href="#contact" >
        <motion.div
        initial={{
            x      :500,
            opacity: 0,
            scale  : 0.5,
        }}
        animate={{
            x      :0,
            opacity:1,
            scale  :1,
        }}
        transition={{
            duration: 1.5,
        }}>
            <SocialIcon 
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"/>
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400 cursor-pointer">お問合せはこちらから</p>
        </motion.div>
        </Link>
    </header>
    )
};

export default Header;
