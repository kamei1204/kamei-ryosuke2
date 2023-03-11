import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    id?: number,
    mainImg?  : string,
    imgUrl?  : string,
    imgUrl2? : string,
    imgUrl3? : string,
    imgUrl4? : string,
    title   : string,
    description? : string,
    point? : string,
    point1? : string,
    point2? : string,
    point3? : string,
    point4? : string,
}

const ExperienceCard = (props:Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden text-center'>
            <motion.img
                initial={{
                    y: -100 ,
                    opacity: 0,
                }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={props.mainImg} alt=""  
                className='h-20 w-20 md:h-28 md:w-28 rounded-full  object-cover object-center'
            />

                <div className='px-0 md:px-10'>
                    <h4 className='text-4xl font-light underline decoration-[#F7AB0A]'>{props.title}</h4>
                    <p className='mt-2 font-bold text-xl'>{props.description}</p>
                        <div className='flex space-x-2 mt-2' key={props.id}>
                                <img src={props.imgUrl} alt="" className='h-6 w-6 md:h-10 md:w-10 rounded-full'/>
                                <img src={props.imgUrl2} alt="" className='h-6 w-6 md:h-10 md:w-10 rounded-full'/>
                                <img src={props.imgUrl3} alt="" className='h-6 w-6 md:h-10 md:w-10 rounded-full'/>
                                <img src={props.imgUrl4} alt="" className='h-6 w-6 md:h-10 md:w-10 rounded-full'/>
                        </div>
                    
                        <p className='uppercase py-5 text-gray-300 underline decoration-[#F7AB0A]'>使用理由</p>

                        <ul className='list-disc space-y-4 ml-5 text-xs md:text-md'>
                            <li>{ props.point } </li>
                            <li>{ props.point1 } </li>
                            <li>{ props.point2 } </li>
                            <li>{ props.point3 } </li>
                            <li>{ props.point4 } </li>
                        </ul>
                </div>
        </article>
    )
}

export default ExperienceCard