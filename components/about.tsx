"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
   const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm <span className="font-medium">Ayo Eboweme</span>, an enthusiastic
        and creative Entry-Level Front-End Developer based in Lagos, Nigeria. My
        passion lies in crafting visually appealing and user-friendly digital
        experiences, and my core stack includes{" "}
        <span className="font-medium">React and Next.js.</span> I'm always eager
        to learn and stay at the forefront of emerging technologies, continually
        expanding my skill set to deliver cutting-edge solutions. With a strong
        foundation in web development and a commitment to effective
        communication, I'm ready to take on new challenges and bring innovative
        ideas to life.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        movies, delving into christian books and spending quality time with
        family. I also enjoy{" "}
        <span className="font-medium">learning new things</span>
      </p>
    </motion.section>
  );
}
