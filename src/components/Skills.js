import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justiry-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
        xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 2 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold mt-64 w-full text-center md:mt-32 text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full
          lg:h-[80vh] sm:h-[60vh] xs:h-[40vh] "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 2 }}
        >
          Tech
        </motion.div>

        {/* Programming Languages */}
        <Skill name="C/C++" x="-25vw" y="-25vw" />
        <Skill name="CSS" x="-25vw" y="-20vw" />
        <Skill name="HTML" x="-25vw" y="-15vw" />
        <Skill name="Java" x="-25vw" y="-10vw" />
        <Skill name="JavaScript" x="-25vw" y="-5vw" />
        <Skill name="Matlab" x="-25vw" y="0vw" />
        <Skill name="Python" x="-25vw" y="5vw" />
        <Skill name="SQL" x="-25vw" y="10vw" />

        {/* Tools */}
        <Skill name="Apache" x="25vw" y="-25vw" />
        <Skill name="AWS" x="25vw" y="-20vw" />
        <Skill name="Docker" x="25vw" y="-15vw" />
        <Skill name="Express" x="25vw" y="-10vw" />
        <Skill name="Flask" x="25vw" y="-5vw" />
        <Skill name="Git" x="25vw" y="0vw" />
        <Skill name="MongoDB" x="25vw" y="5vw" />
        <Skill name="MySQL" x="25vw" y="10vw" />
        <Skill name="NextJS" x="25vw" y="15vw" />
        <Skill name="NodeJS" x="25vw" y="20vw" />
        <Skill name="PyTorch" x="25vw" y="25vw" />
        <Skill name="React" x="25vw" y="30vw" />
        <Skill name="Tailwind CSS" x="25vw" y="35vw" />
      </div>
    </>
  );
};

export default Skills;
