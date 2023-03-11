import React from "react";
import { motion } from "framer-motion";
import { sampleProject } from "../utils/sampleProjects";
import Link from "next/link";

const Projects = () => {

    return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1  }}
    transition={{ duration: 1.5 }}
    className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">projects</h3>

        <div className="flex relative top-12 w-full overflow-x-scroll snap-x snap-mandatory z-20">
            {sampleProject.map((project,i) => (
                <>
                <div key={project.id} className="relative w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center  p-10 md:p-44 h-[100vh]">
                    <Link href={project.href}>
                        <motion.img
                        initial={{ y:-300, opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y:0 }}
                        viewport={{ once:true }}
                        src={project.img} alt="" className="h-44 w-72 md:h-56 md:w-auto object-cover rounded-[20px] cursor-pointer"/>
                    </Link>

                

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="mr-2 underline decoration-[#F7AB0A]/50">
                                {project.id}. 
                            </span>{""}
                            {project.title}<br/>
                            <span className="font-semibold text-center text-sm text-gray-400">
                                {project.description}
                            </span>
                        </h4>
                        {/* <h5 className="font-semibold text-center">{project.description}</h5> */}
                        <p className="text-sm md:text-left">
                        {project.experience}
                        </p>
                    </div>
                </div>
                </>
            ))}
        </div>

        <div className="w-full h-[500px] absolute top-[30%] bg-[#F7AB0A]/10 left-0 -skew-y-12"/>
    </motion.div>

    )
};

export default Projects;
