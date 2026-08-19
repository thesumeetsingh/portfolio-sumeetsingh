import { motion } from "motion/react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const highlights = [
  {
    icon: <FaJava />,
    title: "Java & Spring",
    description: "Backend APIs, security and enterprise applications",
  },
  {
    icon: <FaReact />,
    title: "Full Stack",
    description: "React, MERN and responsive web applications",
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    description: "MySQL, MongoDB and data-driven applications",
  },
  {
    icon: <FaPython />,
    title: "AI & Computer Vision",
    description: "Python, OpenCV, YOLO and AI workflows",
  },
];

function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/30">
              About Me
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A little about me
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60">
                  <SiSpringboot size={20} />
                </div>

                <span className="text-sm text-white/40">
                  Software Developer
                </span>
              </div>

              <p className="mt-7 text-lg leading-8 text-white/60">
                I am a Computer Science Engineer with hands-on experience
                building backend and full-stack applications. My work spans
                Java and Spring applications, REST APIs, databases, DevOps
                automation, computer vision, and AI-driven software systems.
              </p>

              <p className="mt-5 leading-7 text-white/40">
                I enjoy turning ideas into working software, exploring new
                technologies, and solving problems through clean and
                practical engineering.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20"
                >
                  <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60">
                    {item.icon}
                  </div>

                  <h3 className="text-sm font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/35">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;