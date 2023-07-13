import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}> </span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Yihan Zhu | About</title>
        <meta name="description" content="Yihan About" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-8">
          <AnimatedText
            text={`"Great things come from hard work and perseverance. No excuses." - Kobe Byrant`}
            className="mb-16 text-5xl lg:!text-4xl md:!text-3xl sm:!text-2xl xs:!text-1xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-6 flex flex-col items-start justify-start xl:col-span-8 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="mb-4 font-medium">
                {`Hi, I'm Yihan, a highly skilled engineer with a focus on
                Electrical and Computer Engineering. Currently pursuing a
                Master's degree in Analytics and Computer Engineering at the
                University of Toronto, I am passionate about pushing the
                boundaries of technology and finding innovative solutions to
                complex problems.`}
              </p>
              <p className="mb-4 font-medium">
                {`With a strong academic background and industry experience, I
                have developed expertise in developing and optimizing graphics
                drivers, enhancing computational performance in automotive
                multimedia products. My proactive approach in identifying and
                resolving software issues, as well as designing comprehensive
                testing suites, has resulted in improved system stability and
                client satisfaction.`}
              </p>
              <p className="mb-4 font-medium">
                {`Currently, I am working on an exciting project, developing a
                Modular Learning Platform for the Computer Network Industry.
                Collaborating with academia, I am focused on creating secure
                networking frameworks and practical scenario-based modules to
                enhance students' understanding of complex network concepts.`}
              </p>
              <p className="font-medium">
                {`I am motivated, dedicated, and always seeking opportunities to
                expand my knowledge and contribute to the latest advancements in
                technology. I look forward to the chance to bring my skills,
                passion, and expertise to your next project.`}
              </p>
            </div>

            {/* <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:border-light/75 dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] rounded-br-3xl
               bg-dark dark:bg-light"
              />
              <Image
                src={profilePic}
                alt="YihanZhu"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max_width: 768px) 100vw, (max_width: 1200px) 50vw, 33vw"
              />
            </div> */}

            <div
              className="col-span-2 flex flex-col item-center justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} /> +
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  {" "}
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} /> +
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  {" "}
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
