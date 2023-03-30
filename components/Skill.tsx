import React from 'react'
import { motion } from 'framer-motion'

type directionProps = {
    directionLeft?: boolean;
    skill: {
        img : string,
        id  : number,
        level : string ,
    },
}

const Skill:React.FC<directionProps> = ({ directionLeft, skill }) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
            initial={{ 
                x: directionLeft ? -150 : 150 ,
                opacity: 0,
            }}
            transition={{
                duration: 0.6,
            }}
            whileInView={{
                x: 0 , opacity: 1 ,
            }}
            src={skill.img} alt="" 
            className='rounded-full border rounded-gray-500 object-cover w-16 h-16 md:w-20 md:h-20  filter group-hover:grayscale transition duration-300 ease-in-out'/>
            <div className='absolute opacity-0 group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out h-16 w-16 md:w-24 md:h-24 rounded-full'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl font-bold text-black opacity-100'>{skill.level}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill