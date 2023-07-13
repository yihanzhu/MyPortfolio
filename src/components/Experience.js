import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {address}
        </span>
        <div className="font-medium w-full md:text-sm list-inside">{work}</div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold mt-64 mb-16 w-full text-center md:mt-32 text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px]
          md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="Automotive Multimedia Software Engineer"
            company="Qualcomm"
            companyLink="https://www.qualcomm.com/"
            time="May 2020 - Aug. 2021"
            address="Markham, ON"
            work="• Developed and optimized graphics drivers in C/C++ for high-level operating system frameworks,
              resulting in a notable computational performance enhancement in automotive multimedia products.
              • Led the design and implementation of a comprehensive testing suite, expanding test coverage
              benchmarks by 20% and improving product reliability while minimizing post-release issues.
              • Proactively recognized and resolved intricate software issues occurring post-release during automotive
              tests and benchmarks, enhancing system stability and consequently boosting client satisfaction.
              • Collaborated effectively with the R&D team to integrate applications such as Parasoft, achieving a
              milestone of 100% code coverage and ensuring the highest level of software quality and reliability."
          />
          <Details
            position="Research Assistant"
            company="University of Toronto"
            companyLink="https://www.utoronto.ca/"
            time="May 2019 - Aug. 2019"
            address="Toronto, ON"
            work="• Conducted in-depth research on Ontology, gaining insights into its practical implications for managing
              complex transportation data, contributing to a better understanding of its potential applications.
              • Streamlined the data reading process in OpenTripPlanner (OTP) by facilitating the integration of preprocessed
              data from the Ontology engine AllegroGraph, enhancing the system efficiency by 50%.
              • Seamlessly integrated the OTP with Apache Jena using Python, improving the dynamism and
              standardization of the data reading process, thereby optimizing data management and usability."
          />
          <Details
            position="Machine Learning Algorithm Engineer"
            company="ArcSoft"
            companyLink="https://www.arcsoft.com/"
            time="May 2018 - Aug. 2018"
            address="Hangzhou, China"
            work="• Generated 300k+ image samples from 100+ green screen footages using Python and Adobe After
              Effects, enriching the machine learning dataset and enhancing the training environment.
              • Organized and refined 500k+ historical image samples into over 200k valuable samples with Python,
              enhancing data accessibility and usability and boosting the efficiency of future projects.
              • Led cross-functional collaboration efforts, achieving a significant 20% improvement in the accuracy of
              gesture recognition performance, resulting in more accurate interactions and a better user experience."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
