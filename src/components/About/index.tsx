"use client";

import Skills from "../Skills";
import { motion } from "framer-motion";
import TechStackVisualization from "./TechStackVisualization";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      className="container mx-auto px-0 sm:px-6 lg:px-8 py-4 sm:py-16 lg:py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4 sm:space-y-12"
      >
        {/* Title section */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 sm:gap-12 px-2 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            &lt;About Me/&gt;
          </h2>
          <span className="h-[2px] w-full bg-gradient-to-r from-[#2e2e2e] via-purple-500/20 to-[#2e2e2e]" />
        </motion.div>

        {/* Content section */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-8 lg:gap-12">
          {/* Text section */}
          <motion.div
            variants={itemVariants}
            className="flex-1 space-y-3 sm:space-y-6 px-2 sm:px-0"
          >
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              I&apos;m a final-year B.Tech student and aspiring Software
              Engineer with a strong focus on backend development. Over the past
              few years, I&apos;ve built projects using the MERN stack, Next.js,
              and modern backend frameworks while also exploring DevOps
              practices with Docker, Kubernetes, AWS, and Terraform.
            </p>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              My primary strength lies in designing and implementing scalable
              backend systems with Node.js and Express, but I also enjoy working
              across the full stack to deliver complete applications with
              professional UI/UX.
            </p>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              I have hands-on internship experience where I contributed to
              building new features, improving performance, and working with
              real-world cloud deployment workflows. These experiences shaped my
              ability to write clean, maintainable code and collaborate
              effectively in team environments.
            </p>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              Currently, I&apos;m deepening my knowledge of Machine Learning, AI
              agents, and advanced Data Structures & Algorithms, with a goal of
              blending backend engineering expertise with intelligent systems.
            </p>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              I&apos;m passionate about building impactful software solutions,
              whether it&apos;s a scalable backend, a full-stack application, or
              an AI-driven system. Always eager to learn, experiment, and
              collaborate on exciting projects that push me to grow as an
              engineer.
            </p>
          </motion.div>

          {/* Skills section */}
          <motion.div variants={itemVariants} className="flex-1">
            <Skills />
            <TechStackVisualization />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
