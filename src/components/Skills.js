import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name,x,y}) =>{
    
    return(

        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute  
        lg:px-4 lg:py-2 md:text-sm md:py-1.5 md-px-3 xs:bg-transparent
        xs:text-dark
        ' 
             whileHover={{scale:1.05}}
             initial={{x:0,y:0}}
             whileInView={{x:x,y:y}}
             transition={{duration:1.5}}
             viewport={{once: true}}
             >
                {name}
            </motion.div>

    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 '>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight 
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            sm:bg-circularLightSm
            md:bg-circularLightMd
            lg:bg-circularLightLg
        ' >
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
              lg:p-6 md:p-4 xs:text-xs xs:p-2
            ' 
             whileHover={{scale:1.05}}
             >
                Web
            </motion.div>
            <Skill name="HTML" x="-25vw" y="2vw" />
            <Skill name="CSS" x="-5vw" y="-10vw" />
            <Skill name="JavaScript" x="20vw" y="6vw" />
            <Skill name="Framer Motion" x="0vw" y="12vw" />
            <Skill name="DSA" x="-20vw" y="-15vw" />
            <Skill name="C++" x="15vw" y="-12vw" />
            <Skill name="ReactJS" x="32vw" y="-5vw" />
            <Skill name="NextJS" x="0vw" y="-20vw" />
            <Skill name="Tailwind CSS" x="-25vw" y="18vw" />
            <Skill name="Bootstrap" x="18vw" y="18vw" />

        </div>
        
    </>
  )
}

export default Skills