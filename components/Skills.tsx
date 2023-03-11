import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const sampleSkills = [
    {
        id  : 1 ,
        img : "/html.png",
        level : "70%" ,
    },
    {
        id  : 2 ,
        img : "/css.png",
        level : "60%" ,
    },
    {
        id  : 3 ,
        img : "/react.png",
        level : "60%" ,
    },
    {
        id  : 4 ,
        img : "/docker.png",
        level : "20%" ,
    },
    {
        id  : 5 ,
        img : "/firebase.png",
        level : "20%" ,
    },
    {
        id  : 6 ,
        img : "/git2.png",
        level : "60%" ,
    },
    {
        id  : 7 ,
        img : "/php2.png",
        level : "20%" ,
    },
    {
        id  : 8 ,
        img : "/node2.png",
        level : "20%" ,
    },
    {
        id  : 9 ,
        img : "/ts.png",
        level : "50%" ,
    },
    {
        id  : 10 ,
        img : "/next.png",
        level : "70%" ,
    },
    {
        id  : 11 ,
        img : "/javascript.png",
        level : "60%" ,
    },
    {
        id  : 12 ,
        img : "/vs.png",
        level : "100%" ,
    },
]

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="h-[90vh] flex flex-col relative text-center md:text-left xl:flex-row xl:px-10 min-h-screen justify-center xl:space-y-0 mx-20 items-center">
        <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-600 text-2xl">
            skills
        </h3>

        <h3 className="absolute top-48 uppercase text-sm tracking-[3px] text-gray-300">
            hover over a skill for current 
        </h3>

        <div className="absolute top-80 grid grid-cols-3 gap-5">
            {sampleSkills.slice(0 ,sampleSkills.length / 2).map((skill) => (
                <Skill key={skill.id} skill={skill}/>
            ))}

            {sampleSkills.slice(sampleSkills.length / 2, sampleSkills.length).map((skill) => (
                <Skill key={skill.id} skill={skill} directionLeft/>
            ))}
        </div>
        </motion.div>
)};

export default Skills;
