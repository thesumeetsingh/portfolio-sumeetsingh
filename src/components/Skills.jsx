import { motion } from "motion/react";
import {
  FaJava,
  FaPython,
  FaJs,
  FaPhp,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGooglecloud,
} from "react-icons/si";

const skills = [
  {
    name: "Java",
    level: "Advanced",
    value: 90,
    icon: <FaJava />,
  },
  {
    name: "Python",
    level: "Advanced",
    value: 90,
    icon: <FaPython />,
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    value: 70,
    icon: <FaJs />,
  },
  {
    name: "Spring Boot",
    level: "Advanced",
    value: 85,
    icon: <SiSpringboot />,
  },
  {
    name: "React",
    level: "Intermediate",
    value: 75,
    icon: <FaReact />,
  },
  {
    name: "PHP",
    level: "Intermediate",
    value: 70,
    icon: <FaPhp />,
  },
  {
    name: "MySQL",
    level: "Advanced",
    value: 85,
    icon: <SiMysql />,
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    value: 70,
    icon: <SiMongodb />,
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    value: 70,
    icon: <SiTailwindcss />,
  },
  {
    name: "Docker",
    level: "Intermediate",
    value: 60,
    icon: <FaDocker />,
  },
  {
    name: "Git / GitHub",
    level: "Advanced",
    value: 85,
    icon: <FaGitAlt />,
  },
  {
    name: "Google Cloud",
    level: "Intermediate",
    value: 65,
    icon: <SiGooglecloud />,
  },
  {
    name: "Linux",
    level: "Intermediate",
    value: 65,
    icon: <FaLinux />,
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/30">
              Skills
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Technologies I work with
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-white/70">
                    {skill.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-medium">
                        {skill.name}
                      </h3>

                      <span className="text-[10px] text-white/30">
                        {skill.level}
                      </span>
                    </div>

                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.1,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "JDBC",
              "Servlets",
              "Maven",
              "JUnit",
              "Spring MVC",
              "Spring Security",
              "Spring AI",
              "JPA / Hibernate",
              "REST APIs",
              "OpenCV",
              "YOLOv8",
              "CI/CD",
              "NGINX",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/35"
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;